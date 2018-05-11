//IIFE
(function () {

    jQuery(main);

    var tbody;
    var template;

    function main() {
        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);

        var promise = fetch('http://localhost:8080/api/user');
        promise.then(function (response) {
            return response.json();
        }).then(renderUsers)
    }

    function createUser() {
        console.log('createUser');

        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        };

        fetch('http://localhost:8080/api/user', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });

        // update all users after create
    }

// this is now appending all users; will have redundant users
    function renderUsers(users) {
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = template.clone();
            clone.attr('id', user.id);
            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(editUser);
            clone.find('.username')
                .html(user.username);
            tbody.append(clone);
        }
    }

    function deleteUser(event) {
      var deleteBtn = $(event.currentTarget);
      var userId = deleteBtn
        .parent()
        .parent()
        .attr('id');

      userService
        .deleteUser(userId)
        .then(findAllUsers);
    }

    function editUser(event) {
      console.log('edit user');
      console.log(event);
    }
})();
