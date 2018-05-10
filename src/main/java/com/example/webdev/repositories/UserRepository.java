package com.example.webdev.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdev.model.User;

public interface UserRepository
extends CrudRepository<User, Integer>{

}