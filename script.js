const botao = document.getElementById("continuar");
const inicio = document.getElementById("inicio");
const loading = document.getElementById("loading");
const wifi = document.getElementById("wifi");

const barra = document.querySelector(".progresso");
const contador = document.getElementById("contador");

loading.style.display = "none";
wifi.style.display = "none";

botao.addEventListener("click", () => {

    inicio.style.display = "none";
    loading.style.display = "block";

    let largura = 0;
    let tempo = 5;

    contador.innerHTML = `${tempo} segundos...`;

    const intervalo = setInterval(() => {

        largura += 2;

        barra.style.width = largura + "%";

        if (largura % 20 === 0 && tempo > 0) {
            tempo--;
            contador.innerHTML = tempo > 0
                ? `${tempo} segundos...`
                : "Concluído!";
        }

        if (largura >= 100) {

            clearInterval(intervalo);

            loading.style.display = "none";
            wifi.style.display = "block";

        }

    }, 100);

});