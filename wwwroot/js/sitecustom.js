$(document).ready(function () {

    $("#learnBtn").click(function () {

        alert("Welcome to MyStartup!");

    });

    $("#contactForm").submit(function (e) {

        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name == "" || email == "" || message == "") {
            $("#msg").html("Please fill all fields");
            return;
        }

        $("#msg").html("Message sent successfully!");

        $("#contactForm")[0].reset();

    });

});