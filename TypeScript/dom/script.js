const cont1 = document.getElementById('container1');
const cont2 = document.getElementById('container2');


//alert(cont1.innerText);

//cont2.innerText = "Olá, <b>bem-vindos</b> ao site!";
cont2.innerHTML = "Olá, <b>bem-vindos</b> ao site!";


// Criando um elemento e adiciando ao HTML
const botao1 = document.createElement('button');
botao1.innerText = "Mostrar mensagem";
botao1.style = "color: red; background-color: yellow";

botao1.onclick = () => {
  alert("Oi!!!");
}

botao1.onmouseout = () => {
  const msg = document.createElement('div');
  msg.innerText = "Saiu do botão!!";
  msg.classList = "destaque classex";
  cont2.appendChild(msg);
}

document.body.appendChild(botao1);
//cont1.appendChild(botao1);

const botao2 = document.createElement('button');
botao2.innerText = "Limpar Mensagens";
botao2.style = "color: red; background-color: #ffcca2";

botao2.onclick = () => {
  while(cont2.hasChildNodes)
    cont2.removeChild(cont2.childNodes[0]);
}

document.body.appendChild(botao2);