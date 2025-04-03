const mensagem = document.getElementById('mensagem');

const botao = document.getElementById('bot');

const evento = document.getElementById('evento');

botao.addEventListener('click', imprimir);

botao.addEventListener('mouseover', 
    function (){
       evento.innerHTML = alert("Cartão clonado!!!!!!");
    }
);

botao.addEventListener('mouseout', 
    function (){
        mensagem.textContent = "CallBeck";
    }
)

function imprimir(){
    mensagem.textContent = "Você clicou parabeins";
}