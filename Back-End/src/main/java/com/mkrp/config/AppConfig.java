package com.mkrp.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;
import java.util.Collections;

@Configuration
public class AppConfig {

        @Bean
        public SecurityFilterChain securityfilterchain(HttpSecurity http) throws Exception {

        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/**").authenticated()
                        .anyRequest().permitAll())
                        .addFilterBefore(new JwtValidator(), BasicAuthenticationFilter.class)
                        .csrf(csrf -> csrf.disable())
                        .cors(cors -> cors.configurationSource(request -> new CorsConfiguration(){
                            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                                    CorsConfiguration cfg = new CorsConfiguration();
                                    cfg.setAllowedOrigins(Arrays.asList(
                                            "http://localhost:3000",   //For React
                                            "http://localhost:4200"     //For Angular
                                    ));
                                    cfg.setAllowedMethods(Collections.singletonList("*"));
                                    cfg.setAllowedHeaders(Collections.singletonList("*"));
                                    cfg.setAllowCredentials(true);
                                    cfg.setExposedHeaders(Arrays.asList("Authorization"));
                                    cfg.setMaxAge(3600L); // 1 hour in seconds, you can adjust this time as per your requirement.
                                    return cfg;
                                }
                        }))
                        .build();


                return http.build();
        }

        @Bean
        public PasswordEncoder passwordEncoder(String password) {
                return new BCryptPasswordEncoder();
        }

}
