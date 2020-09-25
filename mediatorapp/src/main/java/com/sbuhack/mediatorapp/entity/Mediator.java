package com.sbuhack.mediatorapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mediator")
public class Mediator {
	@Id
	private String username;
	@Column(name="firstName")
	private String firstName;
	@Column(name="middleName")
	private String middleName;
	@Column(name="lastName")
	private String lastName;
	@Column(name="gender")
	private char gender;
	@Column(name="email")
	private String email;
	@Column(name="certification")
	private String certification;

	@Column(name="password")
	private String password;
	@Column(name="title")
	private String title;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCertification() {
		return certification;
	}
	public void setCertification(String certification) {
		this.certification = certification;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	public Mediator(String firstName, String middleName, String lastName, char gender, String email,
			String certification, String username, String password, String title) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.certification = certification;
		this.username = username;
		this.password = password;
		this.title = title;
	}
	
}
