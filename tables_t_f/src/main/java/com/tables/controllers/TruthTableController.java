package com.tables.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TruthTableController {

    @Data
    public static class LogicRequest {
        @JsonProperty("pProposicion")
        private Boolean pProposicion;
        @JsonProperty("sProposicion")
        private Boolean sProposicion;
        @JsonProperty("vLogico")
        private String vLogico;
    }

    @Data
    public static class TruthTableRequest {
        @JsonProperty("data")
        private Map<String, List<Boolean>> data;
        @JsonProperty("expressions")
        private List<String> expressions;
    }

    @PostMapping("/generateTruthTableComplete")
    public ResponseEntity<Map<String, List<Boolean>>> generateTruthTableComplete(@RequestBody TruthTableRequest request) {
        Map<String, List<Boolean>> data = request.getData();
        List<String> expressions = request.getExpressions();
        Map<String, List<Boolean>> resultTable = new LinkedHashMap<>(data);
        RestTemplate restTemplate = new RestTemplate();

        for (String expression : expressions) {

            if (expression.matches("^[A-Z]$")){
                List<Boolean> pValues = data.get(expression);
                resultTable.put(expression, pValues);
                continue;
            }

            String[] parts = expression.split("(?=[∧∨→↔⊕])|(?<=[∧∨→↔⊕])");
            if (parts.length != 3) continue;
            
            String p = parts[0];
            String operator = parts[1];
            String q = parts[2];
            
            List<Boolean> pValues = data.get(p);
            List<Boolean> qValues = data.get(q);
            List<Boolean> expressionResults = new ArrayList<>();

            for (int i = 0; i < pValues.size(); i++) {
                LogicRequest logicRequest = new LogicRequest();
                logicRequest.setPProposicion(pValues.get(i));
                logicRequest.setSProposicion(qValues.get(i));
                logicRequest.setVLogico(operator);

                ResponseEntity<Boolean> response = restTemplate.postForEntity("https://patient-compassion-production.up.railway.app/api/operadoresLogicos", logicRequest, Boolean.class);
                expressionResults.add(response.getBody());
            }
            resultTable.put(expression, expressionResults);
        }

        return ResponseEntity.ok(resultTable);
    }
}


