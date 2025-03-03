package com.tables.controllers;

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
    public Boolean operadoresLogicos(@RequestBody LogicRequest request){
        return request.getPProposicion() && request.getSProposicion();
    }
}

