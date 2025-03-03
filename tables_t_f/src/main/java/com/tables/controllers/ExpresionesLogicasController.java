package com.tables.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ExpresionesLogicasController {
    @Data
    public static class LogicRequest{
        @JsonProperty("pProposicion")
        private Boolean pProposicion;
        @JsonProperty("sProposicion")
        private Boolean sProposicion;
        @JsonProperty("vLogico")
        private String vLogico;
    }

    @PostMapping("/operadoresLogicos")
    public ResponseEntity <Boolean> operadoresLogicos(@RequestBody LogicRequest request){
        
        String operador = request.getVLogico();
        Boolean p = request.getPProposicion();
        Boolean q = request.getSProposicion();


        Boolean resultado;
        switch (operador) {
            case "∧": // AND
                resultado = p && q;                
                break;
            case "∨": // OR
                resultado = p || q;
                break;
            case "→": // CONDICIONAL
                resultado = !p || q;
                break;        
            case "↔": // BICONDICONAL
                resultado = p == q;
                break;
            

            default:
                return ResponseEntity.badRequest().body(false);
        }

        return ResponseEntity.ok(resultado);
    }
}

