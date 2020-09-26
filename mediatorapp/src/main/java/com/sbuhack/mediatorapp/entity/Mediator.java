package com.sbuhack.mediatorapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Mediator")
public class Mediator {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
	@Column
	private String certification;
	@Column
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
