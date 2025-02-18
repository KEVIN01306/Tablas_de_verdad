package com.tables.tables_t_f;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.tables.controllers") 
public class TablesTFApplication {

	public static void main(String[] args) {
		SpringApplication.run(TablesTFApplication.class, args);
	}

}
