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
		
		userService.login(user);
		alert("successfully login");
		//window.location.replace("./profile.template.client.html/");   
	}
})();
