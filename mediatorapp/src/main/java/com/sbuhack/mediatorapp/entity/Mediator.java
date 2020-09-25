package com.sbuhack.mediatorapp.entity;

public class Mediator {
	private String certification;
	private String title;

	public String getCertification() {
		return certification;
	}
	public void setCertification(String certification) {
		this.certification = certification;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Mediator() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Mediator(String certification,  String title) {
		super();
		this.certification = certification;
		this.title = title;
	}
	
}
