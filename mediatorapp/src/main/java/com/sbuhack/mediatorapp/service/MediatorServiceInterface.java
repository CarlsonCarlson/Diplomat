package com.sbuhack.mediatorapp.service;

import java.util.List;

import com.sbuhack.mediatorapp.entity.Mediator;
import com.sbuhack.mediatorapp.exception.MediatorNotFoundException;

public interface MediatorServiceInterface {
	Mediator addMediator(Mediator mediator);
	List<Mediator> getAllMediators();
	Mediator updateMediator(Mediator mediator,  String username) throws MediatorNotFoundException;
	Mediator getMediator(String username) throws MediatorNotFoundException;
	void deleteMediator(String username)  throws MediatorNotFoundException;
}
