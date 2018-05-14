(function () {
    var $emailFld, $usernameFld, $passwordFld, $verifyPasswordFld;
    var userType;
   // var $registerBtn;
    var userService = new UserService();
    $(main);

    function main() {
    	
    	 	$('#confirmsignup').click(register);
    	 	
    }
    
    function register() {
    	 	console.log('register');
    	 	 emailFld = $('#Email').val();
    	 	 usernameFld = $('#userid').val();
    	     passwordFld = $('#password').val();
    	     verifyPasswordFld = $('#reenterpassword').val();
    	     
    	     if ($("#usertype-1").is(":checked")) {
    	    	 	userType = "faculty";
    	     }
    	     else if ($("#usertype-0").is(":checked")) {
    	        userType = "student";
    	     }
    	     
    	     
    	       
    }
})();
