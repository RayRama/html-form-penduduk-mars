//document.getElementById("Firstname").innerHTML = localStorage.getItem("LastName");//

if (localStorage.getItem("gender") == "Male1") {
  document.getElementById("Gender").innerHTML = "Pak";
  document.getElementById("Firstname").innerHTML =
    localStorage.getItem("FirstName");
  document.getElementById("fullName").innerHTML =
    localStorage.getItem("FullName");
  document.getElementById("hobby").innerHTML = localStorage.getItem("Hobby");
  document.getElementById("kelamin").innerHTML = "Laki-Laki";
  document.getElementById("city").innerHTML = localStorage.getItem("Kotanya");
  document.getElementById("message").innerHTML =
    localStorage.getItem("Message");
} else {
  document.getElementById("Gender").innerHTML = "Bu";
  document.getElementById("Firstname").innerHTML =
    localStorage.getItem("FirstName");
  document.getElementById("fullName").innerHTML =
    localStorage.getItem("FullName");
  document.getElementById("hobby").innerHTML = localStorage.getItem("Hobby");
  document.getElementById("kelamin").innerHTML = "Perempuan";
  document.getElementById("city").innerHTML = localStorage.getItem("Kotanya");
  document.getElementById("message").innerHTML =
    localStorage.getItem("Message");
}

function checkName() {
  if (localStorage.getItem("FirstName") == null) {
    location.href = "index.html";
  } else {
    //
  }
}
checkName();
