package com.example.seasidehotel;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SeaSideHotelApplication {

    public static void main(String[] args) {
        // Load the .env file and set environment variables
        Dotenv dotenv = Dotenv.load();
        System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
        System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
        System.setProperty("DB_URL", dotenv.get("DB_URL"));

        // Start the Spring Boot application
        SpringApplication.run(SeaSideHotelApplication.class, args);
    }
}
