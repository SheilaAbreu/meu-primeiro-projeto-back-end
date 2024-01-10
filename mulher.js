const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
  response.json({
    nome: 'Sheila Abreu',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQER3rZtCGjidA/profile-displayphoto-shrink_200_200/0/1592605263050?e=2147483647&v=beta&t=fpXTburSAcc_xk51i_tVXSTYAzxXv7LOdEMPqdH5CJA' ,
    minibio: 'Veterinária e desenvolvedora'
  })
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)