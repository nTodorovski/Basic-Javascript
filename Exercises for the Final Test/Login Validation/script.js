let userData = [
    {
      email: 'knorr@live.com',
      password: 'ksGuQbzYPpW'
    },
    {
      email: 'rddesign@msn.com',
      password: '9Q6urHqy'
    },
    {
      email: 'chaffar@yahoo.ca',
      password: '4xaz2pyk'
    },
    {
      email: 'fatelk@mac.com',
      password: 'TAePJSb2ACX'
    },
    {
      email: 'luebke@me.com',
      password: 'EyFY8uhX'
    },
    {
      email: 'amichalo@mac.com',
      password: 'c7muQ6bxcA9QJKS'
    },
    {
      email: 'mallanmba@yahoo.ca',
      password: 'NqCGLmGtcFU'
    },
    {
      email: 'isaacson@att.net',
      password: 'PMjRGUug7Ff73Kt'
    },
    {
      email: 'aracne@aol.com',
      password: 'sBJU7JJR7Qx6f55'
    },
    {
      email: 'boser@comcast.net',
      password: 'DMXQRNj7BHZ'
    },
    {
      email: 'gtaylor@verizon.net',
      password: 'AbefrKfkbxHbP3u'
    },
    {
      email: 'firstpr@comcast.net',
      password: 'PGWPUtcwP'
    },
    {
      email: 'sumdumass@sbcglobal.net',
      password: '2DrCpjkk9mm8bjW'
    },
    {
      email: 'campbell@yahoo.com',
      password: 'ZmYZgaDq6'
    },
    {
      email: 'wetter@me.com',
      password: 'ppTG3pGAe'
    },
    {
      email: 'british@verizon.net',
      password: '67SbpGYvPJ2'
    }
  ]

  $("#loginBtn").click(findUser);

  function toObject() {
    let userArr = [];
    let users = {};
    for (i = 0; i < userData.length; ++i){
        users = userData[i];
        userArr[i] = users;
    }
    return userArr;
  }

  let users = toObject();
  $("<br>").appendTo("#loginForm");
  $(`<div id="error">`).appendTo("#loginForm");
  let flag = 0;
  let counter = 0;

  function findUser(){
    let email = $("#email").val();
    let password = $("#pass").val();

    for(i=0;i<users.length;i++){
        if(users[i].email === email){
            flag = 1;
            if(users[i].password === password){
                if(counter>=3){
                    $("#error").text(`We have sent you an email. Check your email for changing the password.`);
                } else{
                $("#loginForm").hide();
                $("#error").remove();
                $(`<div id="greet">`).text(`Hello user!!: Email: ${users[i].email} Password: ${users[i].password}`).appendTo("#root");
                $("<br>").appendTo("#greet");
                $(`<button id="logOut">`).text("Log Out").appendTo("#greet");
                function backToNormal(){
                    $("#email").val("");
                    $("#pass").val("");
                    $("#greet").remove();
                    $("#loginForm").show();
                    counter = 0;
                    flag = 0;
                };
                $("#logOut").click(backToNormal);
                }
            } else{
                counter ++;
                if(counter>=3){
                    $("#error").text(`Your entered wrong password 3 times. Your account is blocked.`);
                }else{
                    $("#error").css({"color": "red","font-size": "24px"}).text("Wrong Password");
                }
            }
        }
    }
    if($("#greet").text().length > 0){
        $("#greet").css({"border": "3px solid red","border-radius": "3px","font-size": "24px","padding":"20px"});
    } else{
        if(flag === 0){
            $("#error").css({"color": "red","font-size": "24px"}).text("Wrong Email");
        }
    }
}