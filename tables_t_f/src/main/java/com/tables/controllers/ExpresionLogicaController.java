package com.tables.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;


import java.util.Arrays;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ExpresionLogicaController{
    

    @Data
    public static class ExpresionLogicaRequest {
        private String expresiones;
    }


    @PostMapping("/recepcionExpresiones")
    public ResponseEntity<List<String>> recepcionExpresiones(@RequestBody ExpresionLogicaRequest request){

            if (request.getExpresiones() == null || request.getExpresiones().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(List.of("Error: La expresión lógica no puede estar vacía."));
            }
            
            List<String> expreciones = Arrays.asList(request.getExpresiones().trim().split("\\s*,\\s*"));

            if (expreciones.size() > 3) {
                return ResponseEntity.badRequest().body(List.of("Error: El máximo de expresiones lógicas son 3."));
            }
            
            for (String exp: expreciones) {
                if (exp.length() != 3) {
                    return ResponseEntity.badRequest().body(List.of("Error: Las expresiones lógicas solo pueden contener 2 proposiciones y un operador logico. (PvQ, P→R, Q∧R, etc.)"));
                }
            }


            return ResponseEntity.ok(expreciones);
    }
    
}
