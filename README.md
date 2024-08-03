# Render User Data from JSON

Este projeto é uma aplicação web simples que busca dados de um arquivo JSON (`dados.json`) e renderiza informações do usuário, incluindo endereço e telefone, em cards estilizados na página HTML.

- Veja a aplicação funcionando em: https://antonyharo.github.io/json-data-render/

## Funcionalidades

- Buscar dados do usuário de um arquivo JSON.
- Renderizar informações do usuário (nome, idade, email, país).
- Renderizar múltiplos endereços do usuário.
- Renderizar múltiplos telefones do usuário.
- Exibir os dados em cards estilizados.

## Estrutura do Projeto

O projeto consiste nos seguintes arquivos principais:

- `index.html`: O arquivo HTML que contém a estrutura básica da página.
- `style.css`: O arquivo CSS que contém os estilos para os elementos da página.
- `script.js`: O arquivo JavaScript que contém a lógica para buscar e renderizar os dados do usuário.
- `dados.json`: O arquivo JSON que contém os dados do usuário.

## Exemplo de dados.json

```json
{
  "nome": "João Silva",
  "idade": 30,
  "email": "joao.silva@example.com",
  "pais": "Brasil",
  "enderecos": [
    {
      "cep": "12345-678",
      "cidade": "São Paulo",
      "rua": "Rua A",
      "numero": 100
    },
    {
      "cep": "98765-432",
      "cidade": "Rio de Janeiro",
      "rua": "Rua B",
      "numero": 200
    }
  ],
  "telefones": [
    {
      "tipo": "Celular",
      "numero": "(11) 91234-5678"
    },
    {
      "tipo": "Residencial",
      "numero": "(11) 1234-5678"
    }
  ]
}
```

## Estrutura do Código JavaScript (`script.js`)

### Funções Principais

- `fetch("dados.json")`: Busca os dados do arquivo JSON.
- `renderUserInfo(nome, idade, email, pais)`: Renderiza as informações básicas do usuário.
- `renderUserEndereco(enderecos)`: Renderiza múltiplos endereços do usuário.
- `renderUserTel(telefones)`: Renderiza múltiplos telefones do usuário.

### Função Auxiliar

- `criarElemento(tag, className, text)`: Cria um elemento HTML com a tag, classe e texto especificados.

---

🗃️💻
