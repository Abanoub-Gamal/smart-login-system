let Name = document.querySelector(".name");
let data = JSON.parse(localStorage.getItem("arr"));
let btn = document.querySelector("#btn");

Name.innerHTML = `Welcome ${data[0].name}`;
btn.addEventListener("click", function () {
    location.href = "login.html";
})