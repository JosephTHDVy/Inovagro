const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se depara com algumas dificuldades na sua fazenda, e então...",
        alternativas: [
            {
                texto: "Decide usar da tecnologia para auxiliar no desenvolvimento de sua fazenda.",
                afirmacao: "Você percebeu que a tecnologia pode ser uma forte aliada para o agronegócio. "
            },
            {
                texto: "Você prefere usar de técnicas diferentes de plantio e gerenciamento, sem a necessidade de novas tecnologias.",
                afirmacao: "Você fica receoso com as inovações da área e não se dá bem com as novas tecnologias."
            }
        ]
    },

    {
        enunciado: "Ao notar um aumento na demanda de seus produtos, que são vendidos através de um programa de apoio às escolas públicas, você...",
        alternativas: [
            {
                texto: "Usa um novo software para o monitoramento de estoque e plantio.",
                afirmacao: "Sabendo também que toda tecnologia, deve ser usada de maneira consciente, pois é apenas uma ferramenta que pode ajudar a humanidade assim como muitas outras."
            },
            {
                texto: "Faz planilhas manualmente para organizar seu estoque, e também faz o monitoramento do plantio de maneira manual.",
                afirmacao: "Acredita também que nenhuma tecnologia pode substituir o trabalho e esforço humano."
            }
        ]
    },

    {
        enunciado: "Então, ao se deparar com o aumento do uso de tecnologias na sua região, você...",
        alternativas: [
            {
                texto: "Aprecia a inovação, e acredita que estas mudanças podem trazer consigo um bem muito valioso para o agronegócio e a humanidade.",
                afirmacao: "Então confia que a humanidade fará bom uso das inovações da área e que o futuro do agronegócio está cada vez mais promissor."
            },
            {
                texto: "Entende aqueles que usam da tecnologia, porém, não pretende aderir ao uso por não se adaptar.",
                afirmacao: "Não optando pelo uso de softwares e outras inovações, e assim mantendo a prática de técnicas antigas e que são usadas há gerações."
            }
        ]
    },

    {
        enunciado: "Você decide se envolver em uma nova iniciativa comunitária para a preservação ambiental, e então...",
        alternativas: [
            {
                texto: "Contribui com tecnologias sustentáveis e participa ativamente das reuniões para implementar novas soluções.",
                afirmacao: "Você acredita que a inovação e o compromisso com a tecnologia são essenciais para a preservação ambiental e para o futuro da comunidade."
            },
            {
                texto: "Prefere apoiar iniciativas tradicionais e locais, sem a necessidade de mudanças tecnológicas.",
                afirmacao: "Você valoriza as práticas tradicionais e acredita que o esforço comunitário deve se basear em métodos comprovados ao longo do tempo."
            }
        ]
    },

    {
        enunciado: "Com a chegada de novas regulamentações ambientais, você...",
        alternativas: [
            {
                texto: "Adapta sua fazenda rapidamente às novas regras, investindo em tecnologias que garantam conformidade.",
                afirmacao: "Você vê as regulamentações como uma oportunidade para aprimorar suas práticas e integrar novas tecnologias para melhorar sua operação."
            },
            {
                texto: "Prefere esperar e ver como outros produtores se adaptam antes de fazer quaisquer mudanças.",
                afirmacao: "Você opta por observar o impacto das novas regulamentações em outras fazendas antes de decidir sobre a adoção de novas tecnologias."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você decide começar na agricultura familiar e";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
