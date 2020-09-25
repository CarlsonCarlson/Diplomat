package com.sbuhack.mediatorapp.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbuhack.mediatorapp.entity.Mediator;

public interface MediatorRepository extends JpaRepository<Mediator,String>{

}
