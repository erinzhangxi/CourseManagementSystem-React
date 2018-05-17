package com.example.webdev.model;
import java.io.IOException;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class UserSerializer extends JsonSerializer<User> {
	@Override
	public void serialize(
			User user, JsonGenerator jsonGenerator, SerializerProvider serializerProvider)
			throws IOException, JsonProcessingException {

		jsonGenerator.writeStringField("username", user.getUsername());
		jsonGenerator.writeStringField("password", user.getPassword());
		jsonGenerator.writeStringField("firstName", user.getFirstName());
		jsonGenerator.writeStringField("lastName", user.getLastName());
		jsonGenerator.writeObjectField("dateOfBirth", user.getDateOfBirth());
		jsonGenerator.writeStringField("role", user.getRole());
		jsonGenerator.writeStringField("email", user.getEmail());
		jsonGenerator.writeStringField("phone", user.getPhone());
		
		 System.out.println("USER SERIALIZER");
		 System.out.println(user);
	
	}
}