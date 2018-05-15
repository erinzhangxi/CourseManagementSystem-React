(function () {
	var $emailFld, $usernameFld, $passwordFld, $verifyPasswordFld;
	var $userType;
	var $registerBtn;
	var userService = new UserServiceClient();

	$(main);

	function main() {
		$emailFld = $('#email');
		$usernameFld = $('#userid');
		$passwordFld = $('#password');
		$verifyPasswordFld = $('#reenterpassword');

		if ($("#usertype-1").is(":checked")) {
			$userType = "faculty";
		}
		else if ($("#usertype-0").is(":checked")) {
			$userType = "student";
		}

		$registerBtn = $('#confirmsignup')
		.click(register); 	
	}

	function register() {
		console.log('register');
		var user = {
				username: $usernameFld.val(),
				password: $passwordFld.val(),
				email: $emailFld.val(), 
				role: $userType
		};
		console.log(user);
		
		userService
			.register(user)
			.then(openProfile);
	}
	
	function openProfile() {
		alert("Account successfully created.");
		// read user from db to find user id
		
		// redirect to user with the given id
		window.location.replace("./profile.template.client.html");  
		
	}
	
})();
