//================================== Delete Button ======================================
function deleteElement(event){
button.remove();
}

let button = document.querySelector('.add-def-button')
button.addEventListener("click", deleteElement)


//================================== Alert ==============================================
function alerta(){
    alert('Ninja was liked!');
}

let likeButton = document.querySelectorAll('.likes');

for( let i = 0; i < likeButton.length; i++){
likeButton[i].addEventListener("click", alerta)
}



//================================== Logout =============================================
function changetext(){
    if(login.innerHTML === "Login"){
        login.innerHTML = "Logout";
    }
    else{
        login.innerHTML = "Login";
    }
}

let login = document.querySelector('.login');
login.addEventListener("click", changetext)
