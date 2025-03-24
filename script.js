document.addEventListener("DOMContentLoaded", function () {
    contador = 0;
    const topo = document.getElementById('topo');
    const imagem = document.getElementById('imagem')
    const sbotao = document.getElementById('sbotao')
    const nbotao = document.getElementById('nbotao')
    const divfim = document.getElementById('select')
    const mensagem = document.getElementById('mensagens')
    const estilosOriginais = {
        backgroundColor: sbotao.style.backgroundColor,
        color: sbotao.style.color,
        fontSize: sbotao.style.fontSize,
        display: sbotao.style.display,
        width: sbotao.style.width,
        height: sbotao.style.height

    };
    function modificarBotao() {
        sbotao.style.display = 'inline-block'
        sbotao.style.borderRadius = '5px'
        sbotao.innerText = 'Sei'
        imagem.src = 'https://media.tenor.com/1dgu7F5zsFMAAAAi/milk-and-mocha.gif'
    }
    function reverterBotao() {
        sbotao.style.backgroundColor = estilosOriginais.backgroundColor;
        sbotao.style.color = estilosOriginais.color;
        sbotao.style.fontSize = estilosOriginais.fontSize;
        sbotao.style.display = estilosOriginais.display;
        sbotao.style.width = estilosOriginais.width;
        sbotao.style.height = estilosOriginais.height;
    }

    function sumirBotao() {
        sbotao.style.display = 'none'
        nbotao.style.display = 'none'
    }

    function fechar() {
        imagem.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXA3c3BxbzhidWhweG5jcHVvMm1vem9xemRrZGxpNWk5dTI2N2dvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/esVaNp1XK3h5vVwa1x/giphy.gif"
        imagem.style.width = "480px"
        imagem.style.height = "420px"
        imagem.style.margin = "50px 700px 0px 700px"
        topo.textContent = "Então volte quando estiver";
        setTimeout(function () {
            window.close();
        }, 5000);

    }
    document.getElementById("nbotao").addEventListener("click", fechar)
    document.getElementById("sbotao").addEventListener("click", sim)
    function sim() {
        contador++
        if (contador === 1) {
            sumirBotao()
            topo.innerText = "Ok, então vou te ajudar!"
            setTimeout(function () {
                topo.innerText = "Sabe que sempre pode contar comigo né?"
                modificarBotao()
            }, 0000);
        } else if (contador === 2) {
            topo.innerText = 'Eu te amo TANTO TANTO que fiz essa lista de coisas que eu ADORO em você'
            imagem.src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3g3ZzAwanMzOTZoMnIxb21hd2pkdzZqcnUwN29sZGhmazNpcndjdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vFKqnCdLPNOKc/giphy.gif'
            reverterBotao()
            sbotao.style.width = '130px'
            sbotao.style.height = '100px'
            sbotao.style.fontSize = '2em'
            sbotao.innerText = 'Quero ver!!'
        } else if (contador === 3) {

            topo.innerText = 'Coisas que eu AMO na Duda'
            sumirBotao()
            imagem.src = 'https://media.tenor.com/BDK32nUGtVkAAAAi/milk-and-mocha.gif '
            // Verifica se o select já foi criado para evitar duplicação
            if (document.getElementById("meuSelect")) return;

            // Criar o elemento select
            let select = document.createElement("select");
            select.id = "meuSelect";
            let placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = "Escolha uma coisa!!!";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
            select.addEventListener("change", mudarTexto)


            select.style.width = '150px'
            select.style.height = '30px'
            select.style.textAlign = 'center'
            select.style.marginLeft = '46%'
            select.style.marginTop = '2%'
            select.style.backgroundColor = '#FFB6C1'
            select.style.color = '#F0F0F0'


            // Criar opções
            let coisas = Array.from({ length: 50 }, (_, i) => `Coisa ${i + 1}`);
            coisas.forEach(opcao => {
                let option = document.createElement("option");
                option.value = opcao.toLowerCase().split(' ').join('')
                option.textContent = opcao;
                select.appendChild(option);
            });

            // Adicionar o select ao container
            divfim.appendChild(select);


            // Verifica se o parágrafo já foi criado para evitar duplicação
            if (document.getElementById("meuParagrafo")) return;

            // Criar o elemento <p>
            let p = document.createElement("p");
            p.id = "meuParagrafo";
            p.textContent = "Lorem ipsum dolor sit amet. Qui ipsum nobis ut nesciunt facere sit quod reiciendis. Hic possimus blanditiis At ducimus cumque et iusto quas ut inventore delectus est nulla ratione rem quibusdam exercitationem! Et aliquam recusandae et dolorem quia aut obcaecati dolorem quo doloribus dolor?";
            p.style.color = ' #CBEEF3'
            p.style.textAlign = 'center'
            p.style.marginTop = '2%'
            p.style.fontSize = '3em'

            // Adicionar o parágrafo ao container
            mensagem.appendChild(p);

            const textos = {
                coisa1: "Você escolheu a Coisa 1! <br>😃",
                coisa2: "Você escolheu a Coisa 2!",
                coisa3: "Você escolheu a Coisa 3!",
                coisa4: "Você escolheu a Coisa 4!",
                coisa5: "Você escolheu a Coisa 5!",
                coisa6: "Você escolheu a Coisa 6!",
                coisa7: "Você escolheu a Coisa 7!",
                coisa8: "Você escolheu a Coisa 8!",
                coisa9: "Você escolheu a Coisa 9!",
                coisa10: "Você escolheu a Coisa 10!",
                coisa11: "Você escolheu a Coisa 11!",
                coisa12: "Você escolheu a Coisa 12!",
                coisa13: "Você escolheu a Coisa 13!",
                coisa14: "Você escolheu a Coisa 14!",
                coisa15: "Você escolheu a Coisa 15!",
                coisa16: "Você escolheu a Coisa 16!",
                coisa17: "Você escolheu a Coisa 17!",
                coisa18: "Você escolheu a Coisa 18!",
                coisa19: "Você escolheu a Coisa 19!",
                coisa20: "Você escolheu a Coisa 20!",
                coisa21: "Você escolheu a Coisa 21!",
                coisa22: "Você escolheu a Coisa 22!",
                coisa23: "Você escolheu a Coisa 23!",
                coisa24: "Você escolheu a Coisa 24!",
                coisa25: "Você escolheu a Coisa 25!",
                coisa26: "Você escolheu a Coisa 26!",
                coisa27: "Você escolheu a Coisa 27!",
                coisa28: "Você escolheu a Coisa 28!",
                coisa29: "Você escolheu a Coisa 29!",
                coisa30: "Você escolheu a Coisa 30!",
                coisa31: "Você escolheu a Coisa 31!",
                coisa32: "Você escolheu a Coisa 32!",
                coisa33: "Você escolheu a Coisa 33!",
                coisa34: "Você escolheu a Coisa 34!",
                coisa35: "Você escolheu a Coisa 35!",
                coisa36: "Você escolheu a Coisa 36!",
                coisa37: "Você escolheu a Coisa 37!",
                coisa38: "Você escolheu a Coisa 38!",
                coisa39: "Você escolheu a Coisa 39!",
                coisa40: "Você escolheu a Coisa 40!",
                coisa41: "Você escolheu a Coisa 41!",
                coisa42: "Você escolheu a Coisa 42!",
                coisa43: "Você escolheu a Coisa 43!",
                coisa44: "Você escolheu a Coisa 44!",
                coisa45: "Você escolheu a Coisa 45!",
                coisa46: "Você escolheu a Coisa 46!",
                coisa47: "Você escolheu a Coisa 47!",
                coisa48: "Você escolheu a Coisa 48!",
                coisa49: "Você escolheu a Coisa 49!",
                coisa50: "Você escolheu a Coisa 50! <br> <img src='https://media1.tenor.com/m/W1uD-aY2H3MAAAAC/milk-fat.gif' style='height:50px;'>"
            };
            function mudarTexto() {
                var opcaoSelecionada = select.value;

                // Acessa o texto correspondente à opção escolhida
                p.innerHTML = textos[opcaoSelecionada] || "Ops! um bug hihihi";
            }
        }

    }


})
