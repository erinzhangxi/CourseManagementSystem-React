package com.example.webdev.repositories;
import org.springframework.data.repository.CrudRepository;
import com.example.webdev.model.Hello;

public interface CourseRepository
	extends CrudRepository<Hello, Integer> {
}