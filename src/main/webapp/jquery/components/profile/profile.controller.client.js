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

        findUserById(12);
    }

    function updateUser() {
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        };

        userService
            .updateUser(12, user)
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
        $staticUsername.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lasteName);
    }
    
})();
