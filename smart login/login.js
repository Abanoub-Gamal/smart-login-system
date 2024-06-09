let Name = document.querySelector("#Name");
let Email = document.querySelector("#Email");
let passWord = document.querySelector("#passWord");
let btn = document.querySelector("#btn");
let data = JSON.parse(localStorage.getItem("arr"));
let d = document.querySelector(".dd");
btn.addEventListener("click", function () {
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === Email.value && data[i].password === passWord.value) {
            location.href = "home.html"
        }
    }
})

