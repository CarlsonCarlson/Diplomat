package com.sbuhack.mediatorapp.exception;

public class MediatorNotFoundException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public MediatorNotFoundException(String username) {
		super("Username not found for: " + username);
	}

}
