

var main = document.getElementById("main");
var section = document.getElementById("section");
var secao = document.getElementById("secao"); 
let japa = document.querySelectorAll(".japa2");
let titulo = document.querySelectorAll(".h1Dark");
var contatos = document.getElementById("contatos");
var after = document.getElementById("txtmeu");
var after2 = document.getElementById("txtConhecimentos");
var after3 = document.getElementById("txtNunca");
var caixa = document.getElementById("caixa"); // Certifique-se de que o ID "caixa" exista

function dark() {
    main.classList.toggle("fundo");    
    section.classList.toggle("dark");
    secao.classList.toggle("dark");
    contatos.classList.toggle("darkContatos");

    japa.forEach((japa) => {
        japa.classList.toggle('darkh1');
    });
    titulo.forEach((titulo) => {
        titulo.classList.toggle("darkh1");
    });

    after.classList.toggle("dark1");
    after2.classList.toggle("dark1");
    after3.classList.toggle("dark1");
}

function descerSobre() {
    section.scrollIntoView({ behavior: 'smooth' });
}

function descerTrabalhos() {
    secao.scrollIntoView({ behavior: "smooth" });
}

function descerGit() {
    contatos.scrollIntoView({ behavior: "smooth" });   
}



var typed = new Typed('#meuNome', {
    strings: ['Estudante',"Programador"],
    fadeOut: true,
    typerSpeed:500,
    BackSpeed:900,
    loop: true
  });



// Obtém os elementos do DOM
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];
const contactForm = document.getElementById("contactForm");

// Função para abrir o modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Função para fechar o modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Enviar o formulário
contactForm.onsubmit = function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aqui você pode adicionar lógica para enviar os dados do formulário, por exemplo, via AJAX

    alert(`Email: ${email}\nMensagem: ${message}`);
    modal.style.display = "none"; // Fecha o modal após enviar
}

window.addEventListener('scroll', function() {
    const div = document.getElementById('section');
    const rect = div.getBoundingClientRect();
    const distanceFromBottom = window.innerHeight - rect.top;

    // Verifica se a div está a 30px do fundo da janela
    if (distanceFromBottom >= 0 && distanceFromBottom >= 0) {
        // Adiciona a classe que aciona a animação
        div.classList.add('animatrocar');
    } else {
        // Remove a classe se a div não estiver mais na posição
        div.classList.remove('animatrocar');
    }
});
window.addEventListener('scroll', function() {
    const div = document.getElementById('secao');
    const rect = div.getBoundingClientRect();
    const distanceFromBottom = window.innerHeight - rect.top;

    // Verifica se a div está a 30px do fundo da janela
    if (distanceFromBottom >= 0 && distanceFromBottom >= 0) {
        // Adiciona a classe que aciona a animação
        div.classList.add('trocarr');
    } else {
        // Remove a classe se a div não estiver mais na posição
        div.classList.remove('trocarr');
    }
});