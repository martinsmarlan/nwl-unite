//array
let participantes = [
  {
 nome: "Marlan Martins",
    email: "martins@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "Amanda Speranza",
    email: "amanda@gmail.com",
    dataInscricao: new Date(2024, 3, 3, 11, 20),
    dataCheckin: null
  },
  {
    nome: "Carlinhos Piovemonster",
    email: "detonaboss@gmail.com",
    dataInscricao: new Date(2024, 0, 10, 10, 30),
    dataCheckin: new Date(2024, 0, 15, 18, 0)
  },
  {
    nome: "Maria Santos",
    email: "maria@gmail.com",
    dataInscricao: new Date(2023, 11, 5, 15, 45),
    dataCheckin: null
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2023, 10, 20, 8, 0),
    dataCheckin: new Date(2023, 10, 25, 16, 0)
  },
  {
    nome: "Juliana Pereira",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2023, 9, 15, 14, 10),
    dataCheckin: null
  },
  {
    nome: "Fernando Costa",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2023, 8, 28, 11, 20),
    dataCheckin: null
  },
  {
    nome: "Patrícia Oliveira",
    email: "patricia@gmail.com",
    dataInscricao: new Date(2023, 7, 10, 19, 40),
    dataCheckin: new Date(2023, 7, 15, 14, 0)
  },
  {
    nome: "Rafael Souza",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2023, 6, 5, 13, 0),
    dataCheckin: new Date(2023, 6, 10, 10, 15)
  },
  {
    nome: "Camila Lima",
    email: "camila@gmail.com",
    dataInscricao: new Date(2023, 5, 20, 18, 30),
    dataCheckin: null
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
  let dataCheckin = dayjs(Date.now())
  .to(participante.dataCheckin)

  //condicional
  if(participante.dataCheckin == null) {
    dataCheckin = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `

  }

  return `
  <tr>
      <td>
        <strong>
          ${(participante.nome)}
        </strong>
        <br>
        <small>
          ${(participante.email)}
        </small>
      </td>
      <td>${(dataInscricao)}</td>
      <td>${(dataCheckin)}</td>
    </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repeticao - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    // faca alguma coisa
  }
  //substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null
  }

  //verificar se o participante ja existe
  const participanteExiste = participantes.find((p) => p.email == participante.email 
    
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
} 

const fazerCheckIn = (event) => {
  //confirmar se realmente quer fazer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o Check-in?'

  if(confirm(mensagemConfirmacao) == false){
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )
  // atualizar o check-in do participante
  participante.dataCheckin = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}