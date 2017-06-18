package com.sboot.ms.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FirstMicroservices {
	public static void main(String[] str) {
		SpringApplication.run(FirstMicroservices.class, str);
	} 
	@RequestMapping(value ="/ms")
	public String helloMs(){
		return "hello first spring boot Ms";
	}

}
