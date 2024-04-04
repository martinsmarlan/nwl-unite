# HTML

*Hypertext*

*Markup*
 - Tag
 - Atributos ou Propriedades

*Language*


h1 - Título
a href = referencia de link
table = criar uma tabela, dentro tem uma thead que seria o cabecalho, tr cada linha e 


#CSS
/* Cascading StyleSheet */


#JavaScript
```js
// variaveis
const mensagem = "Oi, tudo bem?"
//tipos de dados
  //number
  //string
// funcao
alert(mensagem)

// objeto javascript
const participante = {
  nome: "Marlan Martins",
  email: "martins@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckin: new Date(2024, 2, 25, 22, 00) 
}

//array
let participantes = [
  {
  nome: "Marlan Martins",
  email: "martins@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckin: new Date(2024, 2, 25, 22, 00) 
  },
]


//estrutura de repeticao - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    // faca alguma coisa
    // enquanto tiver participantes nesta lista
  }