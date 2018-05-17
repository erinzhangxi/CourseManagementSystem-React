package com.example.webdev.model;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

public class UserDeserializer extends JsonDeserializer<User> {
	  @Override
	  public User deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
	    throws IOException, JsonProcessingException {
	    ObjectCodec objectCodec = jsonParser.getCodec();
	    JsonNode jsonNode = objectCodec.readTree(jsonParser);
	 
	    User user = new User("", "");
	  
	    user.setUsername(jsonNode.get("username").asText());
	    user.setPassword(jsonNode.get("password").asText());
	    user.setFirstName(jsonNode.get("firstName").asText());
	    user.setLastName(jsonNode.get("lastName").asText());
	    user.setDateOfBirth(jsonNode.get("dateOfBirth").asText());
	    user.setRole(jsonNode.get("role").asText());
	    user.setEmail(jsonNode.get("email").asText());
	    user.setPhone(jsonNode.get("phone").asText());
	 System.out.println("USER DESERIALIZER");
	 System.out.println(user.getUsername());
	 System.out.println(user.getPassword());
	 System.out.println(user.getFirstName());
	    return user;
	  }
}
