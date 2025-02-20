package com.tables.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.Data;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PropositionsController {


    @Data
    public static class PropositionRequest {
        private String proposiciones;
    }

    @PostMapping("/receptionPropositions")
    public ResponseEntity<List<String>> receptionPropositions(@RequestBody PropositionRequest request) {
        try {
            if (request.getProposiciones() == null || request.getProposiciones().trim().isEmpty()){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Arrays.asList("Las proposiciones no pueden estar vacías."));
            }

            List<String> proposiciones =  Arrays.asList(request.getProposiciones().trim().split("\\s*,\\s*")).stream()
            .map(s -> s.replaceAll("\\s+", "").toUpperCase())
            .collect(Collectors.toList());

            if (proposiciones.size() > 3){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Arrays.asList("El maximo de proposiciones son 3."));
            }

            for (String prop: proposiciones) {
                if (prop.length() != 1){
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Arrays.asList("Las proposiciones solo pueden contenter una letra. (P,Q,R,S,T)"));
                }
            }
            return ResponseEntity.ok(proposiciones);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Arrays.asList("Hubo un problema al procesar las proposiciones: " + e.getMessage()));
        }
    }
}
