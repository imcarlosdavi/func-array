let nomes = []
let senhas = []

function opcaoUser(){
    let opcao = prompt("1. Cadastrar / 2. login / 3. Excluir / 4. encerrar") // função para o user escolher as opções.
    return opcao;

}

function pergunteUser(){
    nomes.push(prompt("Coloque o seu nome.")) // função para o user inserir nome e senha para armazenar nos arrays.
    senhas.push(prompt("Coloque sua senha."))
}


function fazerLogin(nome,senha){ 
    let indice = nomes.indexOf(nome)  // função para verificar os dados de login do user.
    if(indice !== -1 && senhas[indice] == senha){
        return true
    }else{
        return false
    }
}


function excluir(nome){
    let indice = nomes.indexOf(nome)    //função para o user fazer exclusão.
    if(indice !== -1){
        nomes.splice(indice,1)
        senhas.splice(indice,1)
        alert("Cadastro excluído com sucesso!")
    }else{
        alert("Usuário não encontrado.")
    }
   
}

//fluxo de todo esse algoritmo.

let continuar = true

while(continuar){
    let option = opcaoUser();    

    switch(option){
        case "1":
            pergunteUser();
            break;
        case "2":
            let nome = prompt("Coloque seu nome.")
            let senha = prompt("Coloque sua senha")
            let login = fazerLogin(nome,senha)
            if(login){
                document.body.innerHTML+= `Login com sucesso!`
            }else{
                document.body.innerHTML+= `Login inválido`
            }
            break;
        case "3":
            let nomee = prompt("Coloque seu nome.")
            excluir(nomee)
            break;
        case "4":
            continuar = false
            break;
        default:
            alert("Opção inválida! Tente novamente.")
        break;
    }
}