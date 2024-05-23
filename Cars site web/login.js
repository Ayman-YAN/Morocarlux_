const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var users = [];

var users = [];

function add() {
  var userNameIn1 = document.getElementById("in1").value;
  var passwordIn2 = document.getElementById("in2").value;

  if (passwordIn2.length < 8) {
    document.getElementById('s1').innerHTML = "Password must contain at least 8 characters";
  } else {
    var user = {};
    user.username = userNameIn1;
    user.password = passwordIn2;
    users.push(user);
    console.log(users);
    document.getElementById('s1').innerHTML = "User added successfully";
  }
}

function showPass() {
  var passValue = document.getElementById('in4');
  if (passValue.type === 'text') {
    passValue.type = 'password';
  } else if (passValue.type === 'password') {
    passValue.type = 'text';
  }
}

function login() {
  var userNameIn3 = document.getElementById('in3').value;
  var passwordIn4 = document.getElementById('in4').value;

  if (userNameIn3 === '') {
    document.getElementById('s2').innerHTML = "Username must be filled out";
    return false;
  } else if (passwordIn4 === '') {
    document.getElementById('s2').innerHTML = "Password must be filled out";
    return false;
  }

  for (var i = 0; i < users.length; i++) {
    if (userNameIn3 === users[i].username && passwordIn4 === users[i].password) {
      document.getElementById('s2').innerHTML = "Login successful";
      return true;
    }
  }

  document.getElementById('s2').innerHTML = "Username and password do not match";
  return false;
}
