function enviar(event){
    event.preventDefault();

    const email= event.target[0].value;
    const nome= event.target[1].value;
    if(email || nome ){
        alert("Insira os dados");
        return;
    }
}

enviar()