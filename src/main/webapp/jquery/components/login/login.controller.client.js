(function () {
	var $forgetPassword;
	var $usernameFld, $passwordFld;
	var $loginBtn;
	var $fbLoginBtn; 
	var userService = new UserServiceClient();
	$(main);

	function main() { 

		$forgetPassword = $('#forgetPassword');
		$usernameFld = $('#login-username');
		$passwordFld = $('#login-password');
		$loginBtn = $('#btn-login')
					.click(login);
		$fbLoginBtn = $('#btn-fblogin');
		
	}
	
	
	function login() {
		var user = {
				username: $usernameFld.val(),
				password: $passwordFld.val()
		};
		console.log(user);
		
		userService
			.login(user.username, user.password)
			.then(getUserSession);
		
	}
	
	function getUserSession(user) {
		console.log('getUserSession');
		console.log(user);
		
		
//		window.location.replace("./profile.template.client.html/");   
	}
	
})();

