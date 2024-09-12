function checkUsername() {
    let usernameLength = $("#username").var().lenngth;
    if (usernameLength < 5 || usernameLength > 15) {
        $("#errorUsername").html("Should be between 5-20 characters");
        $("#errorUsename").show();
        errorUsername = true;
   } else {
      $("#errorUsername").hide();
   }
}

function password() {
    let passwordLength = $("#password").val().length;
    if (passwordLength < 7)  {
        $("#errorPassword").html("At least 7 characters")
        $("#errorPassword").show();
        errorPassword = true;
    } else {
        $("#errorPassword").hide();
    }
}