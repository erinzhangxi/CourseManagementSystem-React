package com.example.webdev.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.example.webdev.model.User;
import com.example.webdev.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository repository;

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		repository.deleteById(id);
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> data = repository.findById(userId);
		if(data.isPresent()) {
			User user = data.get();
			user.setFirstName(newUser.getFirstName());
			repository.save(user);
			return user;
		}
		return null;
	}


	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) repository.findAll();
	}

	@GetMapping("/api/user/id/{userId}")
	public User findUserById(@PathVariable("userId") int userId) {
		Optional<User> data = repository.findById(userId);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}

	@GetMapping("api/user/{username}")
	public User findUserByUsername(@PathVariable("username") String username) {
		Optional<User> data = repository.findUserByUsername(username);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}

	@PostMapping("/api/login")
	public void login(@RequestBody User user, HttpSession session) {
		
		 this.repository.findUserByCredentials(user.getUsername(), user.getPassword())
		 	.orElseThrow(
		 			() -> new UserNotFoundException(user.getId()));
		 
	}


	@PostMapping("/api/register")
	public User register(@RequestBody User user, HttpSession session) { 
		User usr = findUserByUsername(user.getUsername());
		
		if (usr == null) {
			session.setAttribute("currentUser", usr);
			return this.createUser(user);
		} else {
			System.out.println("User with the username already exists.");
			return null;
		}
	}
	
	@GetMapping("/api/session/invalidate")
	public String invalidateSession(HttpSession session) {
		session.invalidate();
		return "session invalidated";
	}
	
	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");
		return currentUser;
	}
	
	// TODO 
//	@PutMapping("/api/profile")
//	public String updateProfile(@RequestBody User user, HttpSession session) {
//		return null;
//	}

	@PostMapping("/api/logout")
	public void logout(@RequestBody User user, HttpSession session) {
		session.invalidate();
	}

}

@ResponseStatus(HttpStatus.NOT_FOUND)
class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(int userId) {
		super("could not find user '" + userId + "'.");
	}
}