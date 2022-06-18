const botao = document.getElementById("contagemBotao");
let contagemLetras = {};
let contagemPalavras = {};
botao.addEventListener("click", function () {
    contadorDePalavras()
    contadorDeLetras()
});

function contadorDePalavras() {
    let textoDigitado = document.getElementById("texto_digitado").value;
    textoDigitado = textoDigitado.toLowerCase();
    textoDigitado = textoDigitado.replace(/[^a-z'\s]+/g, "");

    for (let i = 0; i < textoDigitado.length; i++) {
        let letraDoTexto = textoDigitado[i];

        if(contagemLetras[letraDoTexto] === undefined){
            contagemLetras[letraDoTexto] = 1;
        } else{
            contagemLetras[letraDoTexto]++;
        };
    };
    for (let letra in contagemLetras) {
        const guardar = document.createElement("span");
        const texto = `"${letra}": ${contagemLetras[letra]}, `;
        guardar.innerText = texto;
        const letras = document.getElementById("letrasDiv");
        letras.appendChild(guardar);
    };
};

function contadorDeLetras() {
    let textoDigitado = document.getElementById("texto_digitado").value;
    let palavras = textoDigitado.split(/\s/);
    for (let j = 0; j < palavras.length; j++) {
        let palavraDoTexto = palavras[j];

        if(contagemPalavras[palavraDoTexto] === undefined){
            contagemPalavras[palavraDoTexto] = 1;
        } else{
            contagemPalavras[palavraDoTexto]++;
        };
    };
    for (let words in contagemPalavras) {
        const outroGuardar = document.createElement("span");
        const palavra = `"${words}": ${contagemPalavras[words]}, `;
        outroGuardar.innerText = palavra;
        const numeroPalavras = document.getElementById("palavrasDiv");
        numeroPalavras.appendChild(outroGuardar);
    };
};

const resetar = document.getElementById("reset");
resetar.addEventListener("click", () => {
    letrasDiv.innerHTML = "";
    palavrasDiv.innerHTML = "";
});