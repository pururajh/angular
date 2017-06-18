package com.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/restTest")
public class RestApplication {
	
	@GET
	@Produces("text/html")
	public String getWelcomeMessage(){
		return "welcome to rest";
	}

}
