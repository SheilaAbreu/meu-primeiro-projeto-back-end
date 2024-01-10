const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
  {
    nome: 'Sheila Abreu',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQER3rZtCGjidA/profile-displayphoto-shrink_200_200/0/1592605263050?e=2147483647&v=beta&t=fpXTburSAcc_xk51i_tVXSTYAzxXv7LOdEMPqdH5CJA',
    minibio: 'veterinária e desenvolvedora',
  },
  {
    nome: 'Simara Conceição',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQER3rZtCGjidA/profile-displayphoto-shrink_200_200/0/1592605263050?e=2147483647&v=beta&t=fpXTburSAcc_xk51i_tVXSTYAzxXv7LOdEMPqdH5CJA',
    Minibio: 'Desenvolvedora e instrutora'
  },
  {
    nome: 'Iana Chang',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQER3rZtCGjidA/profile-displayphoto-shrink_200_200/0/1592605263050?e=2147483647&v=beta&t=fpXTburSAcc_xk51i_tVXSTYAzxXv7LOdEMPqdH5CJA',
    minibio: 'Criadora Programaria'
  }
]

function mostraMulheres(request, response) {
  response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)