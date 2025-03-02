package com.tables.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.Data;
import java.util.*;
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

            if (!sonElementosUnicos(proposiciones)){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Arrays.asList("No puedes seleccionar la misma Proposicion"));
            }

            
            return ResponseEntity.ok(proposiciones);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Arrays.asList("Hubo un problema al procesar las proposiciones: " + e.getMessage()));
        }
    }

    
    public static boolean sonElementosUnicos(List<String> lista) {
        Set<String> conjunto = new HashSet<>(lista);
        return conjunto.size() == lista.size();
    }


    @Data
    public static class GenerateTruthTableRequest {
        private List<String> proposiciones;
    }

    @PostMapping("/generateTruthTable")
    public ResponseEntity<Object> generateTruthTable(@RequestBody GenerateTruthTableRequest request) {
        try {
            List<String> proposiciones = request.getProposiciones();

            // Validaciones
            if (proposiciones == null || proposiciones.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Las proposiciones no pueden estar vacías.");
            }

            if (proposiciones.size() > 3) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("El máximo de proposiciones permitidas es 3.");
            }

            for (String prop : proposiciones) {
                if (prop.length() != 1 || !Character.isLetter(prop.charAt(0))) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body("Las proposiciones deben ser letras individuales.");
                }
            }

            if (!sonElementosUnicos(proposiciones)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Las proposiciones no pueden repetirse.");
            }

            int filas = (int) Math.pow(2, proposiciones.size());
            Map<String, List<Boolean>> truthTable = new LinkedHashMap<>();

            for (int i = 0; i < proposiciones.size(); i++) {
                truthTable.put(proposiciones.get(i), generarColumnaVerdad(filas, i));
            }

            return ResponseEntity.ok(truthTable);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Hubo un error al generar la tabla de verdad: " + e.getMessage());
        }
    }

    private List<Boolean> generarColumnaVerdad(int filas, int index) {
        List<Boolean> columna = new ArrayList<>();
        int periodo = filas / (int) Math.pow(2, index + 1);

        for (int i = 0; i < filas; i++) {
            columna.add((i / periodo) % 2 == 1);
        }

        return columna;
    }
}
