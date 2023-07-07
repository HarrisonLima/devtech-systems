const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  cadastrarUsuario,
  buscarUsuarios,
} = require("./services/usuarioService");
const { cadastrarPeca, buscarPecas } = require("./services/pecaService");
const {
  cadastrarProduto,
  buscarProdutos,
  atualizarProduto,
} = require("./services/produtoService");
const {
  cadastrarServico,
  buscarServicos,
} = require("./services/servicoService");
const {
  cadastrarClientepf,
  buscarClientespf,
} = require("./services/clientepfService");
const {
  cadastrarClientepj,
  buscarClientespj,
} = require("./services/clientepjService");
const {
  cadastrarVeiculopf,
  buscarVeiculospf,
} = require("./services/veiculopfService");
const {
  cadastrarVeiculopj,
  buscarVeiculospj,
} = require("./services/veiculopjService");
const {
  cadastrarManutencao,
  buscarManutencoes,
  atualizarManutencao
} = require("./services/manutencaoService");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});

//POST

app.post("/api/cadastro/usuario", (req, res) => {
  console.log(req.body);
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  const perfil = req.body.perfil;

  return cadastrarUsuario(usuario, senha, perfil)
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/peca", (req, res) => {
  console.log(req.body);
  const peca = req.body.peca;
  const marca = req.body.marca;
  const descricao = req.body.descricao;

  return cadastrarPeca(peca, marca, descricao)
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/produto", (req, res) => {
  console.log(req.body);
  const produto = req.body.produto;
  const un = req.body.un;
  const valor = req.body.valor;
  const marca = req.body.marca;
  const descricao = req.body.descricao;

  return cadastrarProduto(produto, un, valor, marca, descricao)
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/servico", (req, res) => {
  console.log(req.body);
  const servico = req.body.servico;
  const valor = req.body.valor;
  const descricao = req.body.descricao;

  return cadastrarServico(servico, valor, descricao)
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/clientepf", (req, res) => {
  console.log(req.body);
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const cep = req.body.cep;
  const numero = req.body.numero;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const logradouro = req.body.logradouro;
  const email = req.body.email;
  const telefone = req.body.telefone;

  return cadastrarClientepf(
    nome,
    cpf,
    cep,
    numero,
    cidade,
    uf,
    logradouro,
    email,
    telefone
  )
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/clientepj", (req, res) => {
  console.log(req.body);
  const razaosocial = req.body.razaosocial;
  const nomefantasia = req.body.nomefantasia;
  const cnpj = req.body.cnpj;
  const cep = req.body.cep;
  const numero = req.body.numero;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const logradouro = req.body.logradouro;
  const email = req.body.email;
  const telefone = req.body.telefone;

  return cadastrarClientepj(
    razaosocial,
    nomefantasia,
    cnpj,
    cep,
    numero,
    cidade,
    uf,
    logradouro,
    email,
    telefone
  )
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/veiculopf", (req, res) => {
  console.log(req.body);
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const anofabricacao = req.body.anofabricacao;
  const cor = req.body.cor;
  const numeropassageiro = req.body.numeropassageiro;
  const modelo = req.body.modelo;
  const placa = req.body.placa;
  const nomeproprietario = req.body.nomeproprietario;
  const cpf = req.body.cpf;

  return cadastrarVeiculopf(
    tipo,
    marca,
    anofabricacao,
    cor,
    numeropassageiro,
    modelo,
    placa,
    nomeproprietario,
    cpf
  )
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/veiculopj", (req, res) => {
  console.log(req.body);
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const anofabricacao = req.body.anofabricacao;
  const cor = req.body.cor;
  const numeropassageiro = req.body.numeropassageiro;
  const modelo = req.body.modelo;
  const placa = req.body.placa;
  const nomeproprietario = req.body.nomeproprietario;
  const cnpj = req.body.cnpj;

  return cadastrarVeiculopj(
    tipo,
    marca,
    anofabricacao,
    cor,
    numeropassageiro,
    modelo,
    placa,
    nomeproprietario,
    cnpj
  )
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.post("/api/cadastro/manutencao", (req, res) => {
  console.log(req.body);
  const cliente = req.body.cliente;
  const veiculo = req.body.veiculo;
  const valor = req.body.valor;
  const descricao = req.body.descricao;
  const situacao = req.body.situacao;
  const datainicio = req.body.datainicio;

  return cadastrarManutencao(
    cliente,
    veiculo,
    valor,
    descricao,
    situacao,
    datainicio
  )
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
})

//PUT

app.put("/api/produto/:id", async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { estoque } = req.body;

  return atualizarProduto(estoque, id)
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.put("/api/manutencao/:id", async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { situacao, dataprevisao, dataencerramento } = req.body;

  return atualizarManutencao(situacao, dataprevisao, dataencerramento, id)
    .then((data) => {
      res.status(200);
      return res.send(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

//GET

app.get("/api/usuarios", (req, res) => {
  return buscarUsuarios()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/pecas", (req, res) => {
  return buscarPecas()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/produtos", (req, res) => {
  return buscarProdutos()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/servicos", (req, res) => {
  return buscarServicos()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/clientespf", (req, res) => {
  return buscarClientespf()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/clientespj", (req, res) => {
  return buscarClientespj()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/veiculospf", (req, res) => {
  return buscarVeiculospf()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/veiculospj", (req, res) => {
  return buscarVeiculospj()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.get("/api/manutencoes", (req, res) => {
  return buscarManutencoes()
    .then((data) => {
      res.status(200);
      return res.json(data);
    })
    .catch(() => {
      return res.status(500);
    });
});

app.listen(3000, () => console.log(`Started server at http://localhost:3000!`));
