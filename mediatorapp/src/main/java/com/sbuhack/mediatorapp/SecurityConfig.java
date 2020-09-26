package com.sbuhack.mediatorapp;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class SecurityConfig extends WebSecurityConfigurerAdapter{
	protected void configure(HttpSecurity security) throws Exception{
		security.csrf().disable()
        .authorizeRequests().antMatchers(HttpMethod.OPTIONS,"*/").permitAll()
        .antMatchers(HttpMethod.GET,"/login").permitAll();
	}
}
