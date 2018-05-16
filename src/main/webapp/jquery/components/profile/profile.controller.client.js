//IIFE
(function () {

    $(init);

    var $staticUsername;
    var $phone;
    var $email;
    var $dateOfBirth;
    var $role;
    var $updateBtn;
    var userService = new UserServiceClient();

    function init() {
        $staticUsername = $("#profile-username");
        $phone = $("#profile-phone");
        $email = $("#profile-email");
        $dateOfBirth = $("#dob");
        $role = $("#inputRole");
        $updateBtn = $("#updateBtn")
            .click(updateUser);

        template = $('#template');
       
        /*retrieve user from session TODO*/
        findUserById(112)
        		.then(renderUser);
    }

    function updateUser() {
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        };

        userService
            .updateUser(112, user)
            .then(success);
    }
 
    function success() {
    		return alert('user updated');
    }
    
    function findUserById(userId) {
        userService
            .findUserById(userId)
            .then(renderUser);
    }
    
    function renderUser(user) {
        console.log(user);
        var clone = template.clone();
        clone.attr('id', user.id);
        clone.find('.profile-username')
        		.html(user.username);
        clone.find('.profile-phone')
        		.html(user.phone);
        clone.find('.profile-email')
			.html(user.email);
        clone.find('.inputRole')
			.val(user.role);
        clone.find('.dob')
        		.html(user.dateOfBirth);
        
        $staticUsername.val(user.username);
        $phone.val(user.phone);
        $email.val(user.email);
        $dateOfBirth.val(user.dataOfBirth);
        $role.val(user.role);
    }
    
})();
