package com.sbuhack.mediatorapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbuhack.mediatorapp.entity.Mediator;
import com.sbuhack.mediatorapp.exception.MediatorNotFoundException;
import com.sbuhack.mediatorapp.respository.MediatorRepository;

@Service
public class MediatorService implements MediatorServiceInterface{
	@Autowired
	MediatorRepository mediatorRepo;
	@Override
	public Mediator addMediator(Mediator mediator) {
		return mediatorRepo.save(mediator);
	}

	@Override
	public List<Mediator> getAllMediators() {
		return mediatorRepo.findAll();
	}

	@Override
	public Mediator updateMediator(Mediator mediator, String username) throws MediatorNotFoundException {
		Mediator temp_mediator = mediatorRepo.getOne(username);
		if(temp_mediator != null) {
			mediator.setCertification(temp_mediator.getCertification());
			mediator.setEmail(temp_mediator.getEmail());
			mediator.setFirstName(temp_mediator.getFirstName());
			mediator.setGender(temp_mediator.getGender());
			mediator.setLastName(temp_mediator.getLastName());
			mediator.setMiddleName(temp_mediator.getMiddleName());
			mediator.setPassword(mediator.getPassword());
			mediator.setTitle(temp_mediator.getTitle());
			mediator.setUsername(temp_mediator.getUsername());
			return mediatorRepo.save(mediator);
		}
		else {
			throw new MediatorNotFoundException(username);
		}
	}

	@Override
	public Mediator getMediator(String username) throws MediatorNotFoundException {
		Mediator temp_mediator = mediatorRepo.getOne(username);
		if(temp_mediator != null) {
			return temp_mediator;
		}
		else {
			throw new MediatorNotFoundException(username);
		}
	}

	@Override
	public void deleteMediator(String username) throws MediatorNotFoundException {
		Mediator temp_mediator = mediatorRepo.getOne(username);
		if(temp_mediator != null) {
			mediatorRepo.deleteById(username);
		}
		else {
			throw new MediatorNotFoundException(username);
		}
	}

}
