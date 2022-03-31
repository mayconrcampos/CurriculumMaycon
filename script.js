export default Vue.createApp({
    data() {
      return {
        nome: 'Maycon R. Campos',
		    idade: "",
		    universidade: "Centro Universitário Cesumar - Unicesumar",
        tecnologias: ["Python", "Linguagem C", "Linguagem C++", "Java", "PHP", "Javascript", "HTML", "CSS", "Servidor Apache", "Bootstrap",  "MySQL", "SQLite", "VueJS", "Paradigma Estruturado", "Programação Orientada a Objetos", "Estruturas de Dados", "API's Rest", "Versionamento Git", "Git e Github", "Linux", "continua..."],
        atribuicoesEstagio: ["Auxílio no atendimento de tickets junto ao sistema de chamados", "Auxílio na orçamentação para composição de Termos de Referência", "Auxílio nas atividades administrativas relativas à processos de compra, garantia e recebimento de mercadorias", "Auxílio na manutenção em computadores (backup, formatação, instalação de softwares, limpeza externa/interna, troca de teclado, mouse, cabo de rede, cabo de energia, montagem e configuração de um segundo monitor, instalação de projetor e outros periféricos)", "Auxílio no atendimento quanto ao uso das impressoras (atolamento de papel, troca de toner, orientação para impressão em formatos diferentes)",  "Auxílio na conferência de estoque"],

      }
    },
    methods: {
      calculaIdade(){
        var dataNascimento = new Date("1982-08-26")
        var hoje = new Date()
        var diferenca = Math.abs(hoje.getTime() - dataNascimento.getTime())

        this.idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365))
      },
      
      
    },
    created(){
      this.calculaIdade()
    }
	
  }).mount('#CV')