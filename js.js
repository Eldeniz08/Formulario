const nome = document.getElementById("name");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const datanascimento = document.getElementById("datanascimento");
const p = [...document.getElementsByClassName("erro")];
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+([a-z]+)?/i;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/
const btn = document.getElementById("avancar")


function erro(index){
    p[index].style.display = "block"
}

function validado(index){
    p[index].style.display = "none"
}

btn.addEventListener("click", (e) => {
    e.preventDefault()

    function namevalidacao(){
        if(nome.value.lenght < 5 || nome.value == ""){
           erro(0)
        } else  {
          validado(0)
        }
    } 
    
    
    function cpfvalidacao(){
        if(cpfRegex.test(cpf.value)){
            validado(1)
        } else  {
            erro(1)
        }
    } 
    
    function emailvalidacao(){
        if(emailRegex.test(email.value)){
            validado(2)
        } else  {
            erro(2)
        }

        
    } 

    function datavalidacao(){
        if(dataRegex.test(datanascimento.value)){
            validado(3)
        } else  {
            erro(3)
        }
  } 
    
    namevalidacao()
    cpfvalidacao()
    emailvalidacao()
    datavalidacao()


})


