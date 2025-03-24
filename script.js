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
            topo.innerText = "Ok, então vou te ajudar!!!"
            imagem.src= 'https://media.tenor.com/d2nnuVMvPbcAAAAi/milk-and-mocha-milk-and-mocha-bear.gif'
            setTimeout(function () {
                topo.innerText = "Sabe que sempre pode contar comigo né?"
                modificarBotao()
            }, 3000);
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
            let coisas = Array.from({ length: 60 }, (_, i) => `Coisa ${i + 1}`);
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
            p.textContent = "Vai aparecer aqui!";
            p.style.color = ' #CBEEF3'
            p.style.textAlign = 'center'
            p.style.marginTop = '2%'
            p.style.fontSize = '3em'

            // Adicionar o parágrafo ao container
            mensagem.appendChild(p);

            const textos = {
                coisa1: "Eu amo a sua risada e como você fica quando nossos amigos falam ou fazem bobeiras",
                coisa2: "Eu amo como você se cuida e não deixa nada passar",
                coisa3: "Eu amo a confiança que tem por si mesma e como consegue transmitir isso aos outros",
                coisa4: "Eu amo saber que você é incrivelmente forte <br> Você não deve falar, mas sinto que carrega muitos problemas ",
                coisa5: "Eu amo a sua admiração por praia. Sonho um dia a gente curtir uma juntos!!",
                coisa6: "Eu amo como o seu irmão te pertubaKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
                coisa7: "Eu amo o fato que você escuta aquelas músicas relaxantes para estudar ou dormir",
                coisa8: "Eu amo a nossa primeira e, por enquanto única, foto!! <br>Aquela do meu aniversário!!! ",
                coisa9: "Eu amo o nosso flerte 💋<br> As vezes é brincadeira, ou não rsrsrs <br> Não dá pra saber",
                coisa10: "Eu sou apaixonado no seu cabelo, ele é tão lindo <br> Você cuida muito bem dele! ",
                coisa11: "Eu amo o fato de imaginar você sendo uma pessoa bem sucedida e com os sonhos realizados <br>Vou te ajudar nisso ok??",
                coisa12: "Eu amo o nosso foguinho do Tik Tok <br>  EU NÃO ACEITO TER SIDO BANIDO, PERDEMOS UM DE QUASE 100 DIAS",
                coisa13: "Eu amo aquele audio que você me humilhouKKKKKKKKKKKKKKKKKK <br> Acho muito engraçado e até hoje escuto (bem que voce podia renovar ele!)",
                coisa14: "Eu amo o seu cheirinho <br>  COMO PODE EXISTIR ALGUEM TAO CHEIROSO AAAAAAAAAAAAAAA",
                coisa15: "Eu amo a sua inteligência, não só a inteligência acadêmica <br> Mas também a cultural e emocional",
                coisa16: "Eu amo como você sempre me ajuda e me escuta com todo amor quando estou triste 😥",
                coisa17: "Eu amo o delineado que você faz sempre que sai.",
                coisa18: "Eu amo jogar com você, é muito bom, tranquilizante e engraçado KKKKKKKKK",
                coisa19: "Eu amo o fato que, mesmo a gente se conhecendo a dois anos, nos vemos apenas quando nossos amigos saem <br> KKKKKKKKKKKKKKK",
                coisa20: "Eu amo que no Stardew Valley você adora construir várias fazendas em vez de focar em uma",
                coisa21: "Eu amo te abraçar, queria fazer isso durante MUITO tempo",
                coisa22: "Eu amo fazer qualquer coisa quando estamos juntos <br> Apenas estar com você faz o meu mês",
                coisa23: "Eu amo quando você se cansa das brincadeiras do Will e retribui na mesma moeda<br>KKKKKKKKKKKKK",
                coisa24: "Eu amo que você me ensinou a lavar o cabelo corretamennte <br> Significou muito pra mim, você fez eu amar meu cabelo <br> Lavo da mesma maneira até hoje!  ",
                coisa25: "Eu amo a sua paixão pelas plantas e como sua casa é rodeada por elas",
                coisa26: "Eu amo que o seus gêneros musicais, assim como os meus, não são limitados a poucos estilos <br> Você escuta MUITA coias diferente!!!",
                coisa27: "Eu amo quando você responde alguma pergunta SUPER IDIOTA que eu faço",
                coisa28: "Eu amo como você se mantém (ou tenta) ser otimista na medida do possível",
                coisa29: "Eu amo quando você demonstra qualquer afeto por mim<br> Eu AMO MUITO, faz muita diferença e mexe comigo",
                coisa30: "Eu AMO quando você fala dos seus livros com os audios enormes <br> Eu escuto e converso com o maior prazer, sabia?",
                coisa31: "Eu amo a maneira como se veste, pra mim qualquer coisa que você coloca fica EXTREMAMENTE INCRÍVEL",
                coisa32: "Eu amo quando você fala de um caso criminal bem específico KKKKKKKKK",
                coisa33: "Eu amo como você dá tudo de si para a faculdade, nos projetos e tudo mais <br> <br>",
                coisa34: "Eu amo o primeiro beijo na bocecha que você me deu, não esqueço nunca <br> (eu surtei por dentro) ",
                coisa35: "Eu amo quando me recomenda alguma música ou quando debatemos sobre algum album/artista ",
                coisa36: "Eu amo quando veio no meu aniversário e a gente passou a noite jogando juntos com a Fabi e Maria<br>Espero que tenha gostado!! Talvez tenha mais desses dias",
                coisa37: "Eu amo o fato que no primeiro período da faculdade você conseguiu INIMIGOS KKKKKKKKKKKKKK",
                coisa38: "Eu amo que quando nos conhecemos eu perguntei sobre as minhas terapias <br> Você me incentivou a ficar e foi transformador pra mim, não sei o que seria de mim sem elas",
                coisa39: "Eu amo quando você me manda vídeos, memes ou notícias pra mim e fala sobre isso",
                coisa40: "Eu AMO o seu sorriso cara!<br>Ele é encantador!!!",
                coisa41: "Eu amo conversar com você sobre espiritualidade, por exemplo: <br> Vida após a morte, numerologia ou qualquer teoria da conspiração",
                coisa42: "Eu amo o seu humor, você é MUITO cronicamente onlineKKKKKKKKKK",
                coisa43: "Eu amo a foto que a Tia Rita tirou da gente com o seu irmão quando eu estava na sua casa",
                coisa44: "Eu amo as suas filhas (Mel e Flor) e como você tem o maior carinho do mundo por elas",
                coisa45: "Eu amo como o fato de ter você na a minha vida já me inspira a muita coisa <br> (inclusive a ter construído isso)",
                coisa46: "Eu AMO aquela palha italiana que fez no fim do terceirão <br> (faz mais pofavo😭)",
                coisa47: "Eu amo ver você se esforçando pra tirar habilitação <br>Quando tiver motorizada me leva pra sair hein!!!KKKKKKKKK",
                coisa48: "Eu amo dar boa noite quase que diariamente pra você mesmo não sabendo se você gosta ou se faz diferença",
                coisa49: "Eu amo o seu rosto, ele é tão perfeito<br> Não costumo olhar porque não sou muito fã de contato visual, mas vou mudar isso!!",
                coisa50: "Eu amo que você sempre manda algo engraçado <br>quando eu sumo e falo pra não sentir saudades de mim<br> (Você sente mesmo saudade??)",
                coisa51: "Eu amo quando tenho algum papo ou nerdice pra falar e você presta total atenção",
                coisa52: "Eu amo como a gente divide o mesmo neurônio e pensamos a mesma coisaKKKKKKKKKKKKK",
                coisa53: "Eu amo a sua voz, ela é tão bonita e causa uma sensação de paz maravilhosa",
                coisa54: "Eu amo quando você faz uma piada ou qualquer bobeira KKKKKKKKKKKKKKKKKKKK <br> Você tira de mim uma risada sincera",
                coisa55: "Eu amo que você perdia em TUDO pra mim no It Takes Two <br> (Você claramente roubava no cabo de guerra)",
                coisa56: "Eu amo quando você faz algo legal e vem compartilhar comigo <br> (Eu fico muito orgulhoso de você, sabia?)",
                coisa57: "Eu AMO o seu corpo. De verdade!!!!<br>Eu sou encantado nele e aprecio cada canto, pois ele faz parte de você e conta sua história",
                coisa58: "Eu amo lembrar de você<br>Seja ouvindo o barulho do trem, escutando uma música, vendo um vídeo...",
                coisa59: "Eu amo quando mando um vídeo meu tocando guitarra e você me elogia<br> Eu acho que sou bem medíocre, mas se a rainha não acha...",
                coisa60: "Eu amo quando vejo você por algum story ou alguma foto"
            };
            function mudarTexto() {
                var opcaoSelecionada = select.value;

                // Acessa o texto correspondente à opção escolhida
                p.innerHTML = textos[opcaoSelecionada] || "Ops! um bug hihihi";
            }
        }

    }


})
