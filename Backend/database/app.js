const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const { cadastrarUsuario, buscarUsuarios } = require("./services/usuarioService")
const { cadastrarPeca, buscarPecas } = require("./services/pecaService")
const { cadastrarProduto, buscarProdutos } = require("./services/produtoService")
const { cadastrarServico, buscarServicos } = require("./services/servicoService")
const { cadastrarClientepf, buscarClientespf }= require("./services/clientepfService")
const { cadastrarClientepj, buscarClientespj } = require("./services/clientepjService")
const { cadastrarFornecedor, buscarFornecedores } = require("./services/fornecedorService")
const { cadastrarVeiculopf, buscarVeiculospf } = require("./services/veiculopfService")
const { cadastrarVeiculopj, buscarVeiculospj } = require("./services/veiculopjService")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello world")
})

//POST

app.post("/api/cadastro/usuario", (req, res) => {
  console.log(req.body);  
  const usuario = req.body.usuario
  const senha = req.body.senha
  const perfil = req.body.perfil

  return cadastrarUsuario(usuario, senha, perfil)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.post("/api/cadastro/peca", (req, res) => {
  console.log(req.body);
  const peca = req.body.peca
  const marca = req.body.marca
  const descricao = req.body.descricao

  return cadastrarPeca(peca, marca, descricao)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
     return res.status(500) 
    })
})

app.post("/api/cadastro/produto", (req, res) => {
  console.log(req.body);
  const produto = req.body.produto
  const un = req.body.un
  const marca = req.body.marca
  const descricao = req.body.descricao

  return cadastrarProduto(produto, un, marca, descricao)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
     return res.status(500)
    })
})

app.post("/api/cadastro/servico", (req, res) => {
  console.log(req.body);
  const servico = req.body.servico
  const valor = req.body.valor
  const descricao = req.body.descricao

  return cadastrarServico(servico, valor, descricao)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.post("/api/cadastro/clientepf", (req, res) => {
  console.log(req.body);
  const nome = req.body.nome
  const cpf = req.body.cpf
  const genero = req.body.genero
  const nascimento = req.body.nascimento
  const estadocivil = req.body.estadocivil
  const cep = req.body.cep
  const numero = req.body.numero
  const complemento = req.body.complemento
  const cidade = req.body.cidade
  const uf = req.body.uf
  const logradouro = req.body.logradouro
  const email = req.body.email
  const ddd = req.body.ddd
  const telefone = req.body.telefone

  return cadastrarClientepf(nome, cpf, genero, nascimento, estadocivil, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500) 
    })
})

app.post("/api/cadastro/clientepj", (req, res) => {
  console.log(req.body);
  const razaoSocial = req.body.razaoSocial
  const nomeFantasia = req.body.nomeFantasia
  const cnpj = req.body.cnpj
  const inscricaoEstadual = req.body.inscricaoEstadual
  const inscricaoMunicipal = req.body.inscricaoMunicipal
  const cep = req.body.cep
  const numero = req.body.numero
  const complemento = req.body.complemento
  const cidade = req.body.cidade
  const uf = req.body.uf
  const logradouro = req.body.logradouro
  const email = req.body.email
  const ddd = req.body.ddd
  const telefone = req.body.telefone

  return cadastrarClientepj(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.post("/api/cadastro/fornecedor", (req, res) => {
  console.log(req.body);
  const razaoSocial = req.body.razaoSocial
  const nomeFantasia = req.body.nomeFantasia
  const cnpj = req.body.cnpj
  const inscricaoEstadual = req.body.inscricaoEstadual
  const inscricaoMunicipal = req.body.inscricaoMunicipal
  const cep = req.body.cep
  const numero = req.body.numero
  const complemento = req.body.complemento
  const cidade = req.body.cidade
  const uf = req.body.uf
  const logradouro = req.body.logradouro
  const email = req.body.email
  const ddd = req.body.ddd
  const telefone = req.body.telefone

  return cadastrarFornecedor(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, cep, numero, complemento, cidade, uf, logradouro, email, ddd, telefone)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.post("/api/cadastro/veiculopf", (req, res) => {
  console.log(req.body);
  const tipo = req.body.tipo
  const marca = req.body.marca
  const anoFabricacao = req.body.anoFabricacao
  const cor = req.body.cor
  const numeroPassageiro = req.body.numeroPassageiro
  const modelo = req.body.modelo
  const renavam = req.body.renavam
  const fabricante = req.body.fabricante
  const placa = req.body.placa
  const nomeProprietario = req.body.nomeProprietario
  const cpf = req.body.cpf
  const cnh = req.body.cnh

  return cadastrarVeiculopf(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cpf, cnh)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.post("/api/cadastro/veiculopj", (req, res) => {
  console.log(req.body);
  const tipo = req.body.tipo
  const marca = req.body.marca
  const anoFabricacao = req.body.anoFabricacao
  const cor = req.body.cor
  const numeroPassageiro = req.body.numeroPassageiro
  const modelo = req.body.modelo
  const renavam = req.body.renavam
  const fabricante = req.body.fabricante
  const placa = req.body.placa
  const nomeProprietario = req.body.nomeProprietario
  const cnpj = req.body.cpf

  return cadastrarVeiculopj(tipo, marca, anoFabricacao, cor, numeroPassageiro, modelo, renavam, fabricante, placa, nomeProprietario, cnpj)
    .then((data) => {
      res.status(200)
      return res.send(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

//GET

app.get("/api/usuarios", (req, res) => {
  return buscarUsuarios()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/pecas", (req, res) => {
  return buscarPecas()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/produtos", (req, res) => {
  return buscarProdutos()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/servicos", (req, res) => {
  return buscarServicos()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/clientespf", (req, res) => {
  return buscarClientespf()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/clientespj", (req, res) => {
  return buscarClientespj()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/fornecedores", (req, res) => {
  return buscarFornecedores()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/veiculospf", (req, res) => {
  return buscarVeiculospf()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.get("/api/veiculospj", (req, res) => {
  return buscarVeiculospj()
    .then((data) => {
      res.status(200)
      return res.json(data)
    })
    .catch(() => {
      return res.status(500)
    })
})

app.listen(3000, () => console.log(`Started server at http://localhost:3000!`))