// Criando coleções no MongoDB
db.createCollection("Funcionario", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nome", "email", "cargo"],
        properties: {
          nome: {
            bsonType: "string",
            description: " Campo nome é obrigatório e deve ser do tipo string."
          },
          email: {
            bsonType: "string",
            description: "Campo email é obrigatório e deve ser do tipo string."
          },
          cargo: {
            bsonType: "string",
            description: "Campo cargo é obrigatório e deve ser do tipo string."
          }
        }
      }
    }
  })
  db.createCollection("Cliente", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nome", "telefone", "endereco"],
        properties: {
          nome: {
            bsonType: "string",
            description: "Campo nome é obrigatório e deve ser do tipo string."
          },
          telefone: {
            bsonType: "string",
            description: "Campo telefone é obrigatório e deve ser do tipo string."
          },
          endereco: {
            bsonType: "array",
            description: "Campo endereco é obrigatório e deve ser um Array.",
            items: {
              bsonType: "object",
              required: ["rua", "numero", "bairro", "estado", "cidade"],
              properties: {
                rua: { bsonType: "string" },
                numero: { bsonType: "string" },
                complemento: { bsonType: "string" },
                bairro: { bsonType: "string" },
                estado: { bsonType: "string" },
                cidade: { bsonType: "string" },
                cep: { bsonType: "string" }
              }
            }
          }
        }
      }
    }
  })
  db.createCollection("Atendimento", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["servico", "data_atendimento", "relatorio"],
        properties: {
          servico: {
            bsonType: "array",
            description: "Campo servico é obrigatório e deve ser um Array.",
            items: {
              bsonType: "string"
            }
          },
          data_atendimento: {
            bsonType: "string",
            description: "Campo data_atendimento é obrigatório e deve ser do tipo string."
          },
          relatorio: {
            bsonType: "string",
            description: "Campo realrório é obrigatório e deve ser uma string (URL)."
          }
        }
      }
    }
  })
  