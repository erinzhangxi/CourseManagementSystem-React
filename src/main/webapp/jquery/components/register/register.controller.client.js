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
		
//		userService
//			.findById(user)
//			.then(function(response) {
//				console.log(response);
//                window.location.href = "/jquery/components/profile/profile.template.client.html?userId=" + response.id
//			})
		
		userService.findUserByUsername(user.username)
			.then(function (response) { 
				console.log(response);
				if(response.status === 409) {
						userService.createUser(user)
						.then(function (response) {
							console.log(response.id);
							window.location.href = "/jquery/components/profile/profile.template.client.html?userId=" + response.id
						})
				} else	{
					alert("Username already exists.");
				}})

		}
	
})();
