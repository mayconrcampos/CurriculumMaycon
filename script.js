export default Vue.createApp({
    data() {
      return {
        nome: '',
		    idade: "",
        user: "mayconrcampos",
        foto_avatar: "",
        location: "",
        bio: "",
        repositorios: "",
		    universidade: "Centro Universitário Cesumar - Unicesumar",
        tecnologias: ["Python", "Linguagem C", "Linguagem C++", "Java", "PHP", "Javascript", "HTML", "CSS", "Servidor Apache", "Bootstrap",  "MySQL", "SQLite", "MongoDB", "VueJS", "Big Data", "Paradigma Estruturado", "Programação Orientada a Objetos", "Estruturas de Dados", "API's Rest", "Flask", "Versionamento Git", "Git e Github", "Linux", "Diagramas UML", "Metodologia Scrum", "continua..."],
        atribuicoesEstagio: ["Auxílio no atendimento de tickets junto ao sistema de chamados", "Auxílio na orçamentação para composição de Termos de Referência", "Auxílio nas atividades administrativas relativas à processos de compra, garantia e recebimento de mercadorias", "Auxílio na manutenção em computadores (backup, formatação, instalação de softwares, limpeza externa/interna, troca de teclado, mouse, cabo de rede, cabo de energia, montagem e configuração de um segundo monitor, instalação de projetor e outros periféricos)", "Auxílio no atendimento quanto ao uso das impressoras (atolamento de papel, troca de toner, orientação para impressão em formatos diferentes)",  "Auxílio na conferência de estoque"],
        atribuicoesConecta: ["Desenvolvimento FullStack", "JavaScript", "VueJS", "Python", "Flask", "Git", "Gcloud (Google Cloud Platform)", "Firebase", "DataStore - Banco não Relacional", "Plataforma Atlassian", "Jira", "Confluence", "BitBucket", "Metodologia Scrum", "etc..."],
        fecha: false,
        telaWidth: window.innerWidth,
        following: "",
        followers: "",
        public_repos: "",
        company: "",

      }
    },
    methods: {
      calculaIdade(){
        var dataNascimento = new Date("1982-08-26")
        var hoje = new Date()
        var diferenca = Math.abs(hoje.getTime() - dataNascimento.getTime())

        this.idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365))
      },
      async getdadosAPIgithub(){
        await fetch(`https://api.github.com/users/${this.user}`)
        .then(resposta => resposta.json())
        .then(conteudo => {
          this.foto_avatar = conteudo.avatar_url
          this.location = conteudo.location
          this.nome = conteudo.name
          this.bio = conteudo.bio
          this.public_repos = conteudo.public_repos
          this.following = conteudo.following
          this.followers = conteudo.followers
          this.company = conteudo.company
        })
      },
      async listaRepos(){
        await fetch("https://api.github.com/users/mayconrcampos/repos")
        .then(resposta => resposta.json())
        .then(repos => {
          this.repositorios = repos
        })
      },

      formataData(data){
        var dataFormatada = new Date(data)
        var dia = dataFormatada.getDate()
        var mes = dataFormatada.getMonth()
      
        var ano = dataFormatada.getFullYear()
        var hora = dataFormatada.getHours()
        var minutos = dataFormatada.getMinutes()
        var segundos = dataFormatada.getSeconds()

        dia = dia < 10 ? "0"+dia : dia
        hora = hora < 10 ? "0"+hora : hora 
        minutos = minutos < 10 ? "0"+minutos : minutos 
        segundos = segundos < 10 ? "0"+segundos : segundos

        const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

        return `${dia}/${month[mes]}/${ano} - ${hora}:${minutos}:${segundos}  `
      },

      getTotalWidth(){
        this.telaWidth = window.innerWidth
        
        //console.log(this.telaWidth)
      }
      
      
    },
    created(){
      this.calculaIdade()
      this.getdadosAPIgithub()
      this.listaRepos()
      window.addEventListener("resize", this.getTotalWidth);
    },
      
 
	
  }).mount('#CV')