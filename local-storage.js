localStorage.setItem("username", "huy");
localStorage.setItem("answer", "ok");

if (window.localStorage) {
    var txtUsername = document.getElementById("username");
    var txtAnswer = document.getElementById("answer");

    txtUsername.value = localStorage.getItem("username");
    txtAnswer.value = localStorage.getItem("answer");

    console.log(txtUsername.value);
    txtUsername.addEventListener(
        "input",
        function () {
            localStorage.setItem("username", txtUsername.value);
            console.log("change username");
        },
        false
    );

    txtAnswer.addEventListener(
        "input",
        function () {
            localStorage.setItem("answer", txtAnswer.value);
            console.log("change answer");
        },
        false
    );
} else {
    console.log("localStorage error!");
}
