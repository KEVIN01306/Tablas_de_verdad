package com.tables.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")

public class ExpresionesLogicasController {
    @Data
    public static class logicRequest{
        private Boolean pProposicion;
        private Boolean sProposicion;
        private String vLogico;
    }

    @PostMapping("/conjuncion")
    public Boolean conjuncion(@RequestBody logicRequest request){
        return request.getPProposicion() && request.getSProposicion();
    }
}

