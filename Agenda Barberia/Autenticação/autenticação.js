function logar(){
    var login = document.getElementById('user').value;
    var senha = document.getElementById('pass').value;

    if(login == "admin" && senha == "admin"){
        location.href = "logado_index.html";
    }else{
        alert('Usuario Invalido');
    }

}

