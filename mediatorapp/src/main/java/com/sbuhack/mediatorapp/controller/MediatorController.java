package com.sbuhack.mediatorapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbuhack.mediatorapp.entity.Mediator;
import com.sbuhack.mediatorapp.exception.MediatorNotFoundException;
import com.sbuhack.mediatorapp.service.MediatorService;

@RestController
@CrossOrigin(
		allowCredentials = "true",
		origins = "*",
		allowedHeaders = "*",
		methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE, RequestMethod.PUT}
		
		)
public class MediatorController {
	@Autowired
	private MediatorService mediatorService;
	
	@GetMapping("/mediators")
	List<Mediator> all(){
		return mediatorService.getAllMediators();
	}
	
	@PostMapping("/mediators")
	Mediator newMediator(@RequestBody Mediator mediator) {
		return mediatorService.addMediator(mediator);
	}
	
	@GetMapping("/mediators/{username}")
	Mediator getMediator(@PathVariable String username) throws MediatorNotFoundException{
		return mediatorService.getMediator(username);
	}
	
	@PutMapping("/mediators/{username}")
	Mediator updateMediator(@RequestBody Mediator mediator, @PathVariable String username) throws MediatorNotFoundException{
		return mediatorService.updateMediator(mediator, username);
	}
}
