function login() {
    let userName = document.getElementById("userName").value;
    let userPass = document.getElementById("userPass").value;


    if(userName=="admin123"&&userPass=="admin123"){
        window.location = "./dashboard.html";
    }
    else{
        alert("Username atau Password Salah")
    }
}
