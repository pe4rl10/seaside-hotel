package com.example.seasidehotel.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173") // Add the origins you want to allow
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Add the HTTP methods you want to allow
                .allowedHeaders("*"); // Add the headers you want to allow
    }
}
