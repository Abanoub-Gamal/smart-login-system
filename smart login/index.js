let Name = document.querySelector("#Name");
let Email = document.querySelector("#Email");
let passWord = document.querySelector("#passWord");
let btn = document.querySelector("#btn");
let form = document.querySelector("form");
let state = document.querySelector("#state");
let arr = [];
let patternName = /^\D[^!@#$%&*\^]\D{3,}$/;
let patternEmail = /^\w{3,}@(gmail)\.com$/;
let patternPass = /^\w{3,}[0-9]{3}(@|#|\$|%|&)$/;
let resultName, resultEmail, resultPass;

function addData() {
    let dataUser = {
        name: Name.value,
        email: Email.value,
        password: passWord.value
    }
    arr.push(dataUser);
    localStorage.setItem("arr", JSON.stringify(arr))

}
function clear() {
    Name.value = null;
    Email.value = null;
    passWord.value = null;
}

function regexName() {
    resultName = patternName.test(Name.value);

}

function regexEmail() {
    resultEmail = patternEmail.test(Email.value);

}

function regexPass() {
    resultPass = patternPass.test(passWord.value);

}
btn.addEventListener("click", function () {
    dataString = JSON.parse(localStorage.getItem("arr"));
    addData();
    regexName();
    regexPass();
    regexEmail();
    if (dataString[0].email !== Email.value) {
        if (resultEmail & resultPass & resultName === true)
            state.innerHTML = "success";
        state.style.color = "green"
        function toLogin() {
            location.href = "login.html";
        }
        clear();
        setTimeout(toLogin, 1000);

    } else {
        state.innerHTML = " not success";
        state.style.color = "red"
    }

})


