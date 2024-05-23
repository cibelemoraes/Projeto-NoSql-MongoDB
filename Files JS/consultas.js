 // Consultas

  // 1. Duas Consultas com Pelo Menos Filtros Diversos (IN, GT, etc), Sem Projeção:

  // a) Filtro usando `$in` na Coleção `Atendimento` para encontrar atendimentos por tipo de serviço:
  db.Atendimento.find({
    "servico": { "$in": ["Manutenção", "Suporte Técnico"] }
  })
  
  // b) Filtro usando `$gt` na Coleção `Atendimento` para encontrar atendimentos após uma data específica:
  db.Atendimento.find({
    "data_atendimento": { "$gt": "01-03-2023" }
  })
  
  
  // 2. Duas Consultas com Pelo Menos Filtros Diversos e Com Projeção:
  
  // a) Filtro usando `$in` e projeção na Coleção `Atendimento` para mostrar apenas os serviços e datas:
  db.Atendimento.find(
    { "servico": { "$in": ["Manutenção", "Suporte Técnico"] } },
    { "servico": 1, "data_atendimento": 1, "_id": 0 }
  )
  
  // b) Filtro usando `$gt` e projeção na Coleção `Atendimento` para mostrar apenas funcionários e datas:
  db.Atendimento.find(
    { "data_atendimento": { "$gt": "01-03-2023" } },
    { "funcionario.nome": 1, "data_atendimento": 1, "_id": 0 }
  )
  
  
  // 3. Uma Consulta Apenas com Projeção (Sem Filtro):
  
  // a) Projeção na Coleção `Funcionario` para mostrar apenas nomes e cargos:
  db.Funcionario.find({}, { "nome": 1, "cargo": 1, "_id": 0 })
  
  
  // 4. Uma Consulta com Pelo Menos Acesso a Elemento de Array:
  
  // a) Consulta na Coleção `Cliente` para encontrar clientes com CEPs específicos:
  db.Cliente.find({ "endereco.cep": "12345-678" })
  
  
  // 5. Uma Consulta com Pelo Menos Acesso a Estrutura/Objeto Embutido:
  
  // a) Consulta na Coleção `Cliente` para encontrar clientes com endereço em São Paulo:
  db.Cliente.find({ "endereco.estado": "SP" })
  
  
  // 6. Uma Consulta com Pelo Menos Sort, Limit, Filtros e Projeções:
  
  // a) Consulta na Coleção `Atendimento` para mostrar os serviços e datas, ordenados por data e limitados a 3 resultados:
  db.Atendimento.find({}, { "servico": 1, "data_atendimento": 1, "_id": 0 })
    .sort({ "data_atendimento": 1 })
    .limit(3)
  
  
  // 7. Uma Consulta com Pelo Menos Aggregate e Lookup:
  
  // a) Consulta usando `aggregate` e `lookup` para obter informações detalhadas sobre os atendimentos, incluindo dados de funcionário e cliente:
  db.Atendimento.aggregate([
    {
      $lookup: {
        from: "Funcionario",
        localField: "funcionario._id",
        foreignField: "_id",
        as: "funcionario_info"
      }
    },
    {
      $lookup: {
        from: "Cliente",
        localField: "cliente._id",
        foreignField: "_id",
        as: "cliente_info"
      }
    }
  ])
  
  
  // 8. Outra Consulta a Seu Critério, Dentro do Contexto da Aplicação:
  
  // a) Consulta na Coleção `Funcionario` para encontrar funcionários que são desenvolvedores:
  db.Funcionario.find({ "cargo": "Desenvolvedor" })
  