function enviar(event){
    event.preventDefault();

    var email = event.target[0].value
    var nome = event.target[1].value
    var nota = event.target[2].value

    console.log({email, nome, nota});

    if(!email || !nome || !nota){
        alert("Insira os valores obrigatórios!");
        return;
    }
    var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            td_email.innerHTML = email;
            var td_nome = document.createElement("td");
            td_nome.innerHTML = nome;
            var td_nota = document.createElement("td");
            td_nota.innerHTML = nota;
            var td_actions = document.createElement("td");
            td_actions.innerHTML = `
                <button>Remover</button>
            `
            if(nota < 5){
                td_nota.style.backgroundColor = "red";
            }
            tr.appendChild(td_email);
            tr.appendChild(td_nome);
            tr.appendChild(td_nota);
            tr.appendChild(td_actions);

            document.querySelector("body > section:nth-child(4) > table > tbody").appendChild(tr);

            var aluno = {email, nome, nota}

            localStorage.setItem("aluno", JSON.stringify(aluno))
}