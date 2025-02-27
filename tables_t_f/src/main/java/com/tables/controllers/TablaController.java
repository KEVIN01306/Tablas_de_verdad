package com.tables.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")

public class TablaController {
    
    @Data
    public static class TablasRequest{
        private String tableestructure;

    }


    @GetMapping("/createTable")
    public String createTable(){
        return "hola";
    }
}

