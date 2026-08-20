/*
  ============================================================
  ARQUIVO DE DADOS DO SITE — é AQUI que você edita tudo!
  ============================================================

  Se um link do Google Maps estiver errado ou apontando pro
  lugar errado, é só trocar o valor de "maps" abaixo pela URL
  correta (abra o Google Maps, ache a rua certa, clique em
  "Compartilhar" e cole o link aqui).

  Estrutura de cada território:
    "01": {
      "nome": "Território 01",
      "imagem": "images/T01.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            { "nome": "Rua Morubixaba", "maps": "LINK_AQUI" }
          ]
        },
        ...
      ]
    }

  Cada território agora usa UMA ÚNICA imagem (o mapa daquele
  território com a legenda de ruas ao lado, igual ao PDF
  original). Os nomes das ruas foram lidos automaticamente
  das imagens (OCR) — confira e corrija o que precisar.

  As posições dos números no mapa completo (página inicial)
  ficam em "hotspots" — x e y são a posição em porcentagem
  (0 a 1) da largura/altura da imagem do mapa. Se algum número
  clicável estiver deslocado, ajuste x/y ali.
  ============================================================
*/
const DADOS = {
  "hotspots": {
    "01": {
      "x": 0.8894,
      "y": 0.4658
    },
    "02": {
      "x": 0.8324,
      "y": 0.3626
    },
    "03": {
      "x": 0.8495,
      "y": 0.2095
    },
    "04": {
      "x": 0.821,
      "y": 0.2256
    },
    "05": {
      "x": 0.7925,
      "y": 0.2417
    },
    "06": {
      "x": 0.764,
      "y": 0.2498
    },
    "07": {
      "x": 0.6813,
      "y": 0.2417
    },
    "08": {
      "x": 0.6214,
      "y": 0.278
    },
    "09": {
      "x": 0.5285,
      "y": 0.282
    },
    "10": {
      "x": 0.5986,
      "y": 0.3586
    },
    "11": {
      "x": 0.6585,
      "y": 0.411
    },
    "12": {
      "x": 0.6243,
      "y": 0.4553
    },
    "13": {
      "x": 0.5188,
      "y": 0.4029
    },
    "14": {
      "x": 0.4704,
      "y": 0.415
    },
    "15": {
      "x": 0.4048,
      "y": 0.411
    },
    "16": {
      "x": 0.2725,
      "y": 0.278
    },
    "17": {
      "x": 0.2189,
      "y": 0.282
    },
    "18": {
      "x": 0.2109,
      "y": 0.3707
    },
    "19": {
      "x": 0.1055,
      "y": 0.3731
    },
    "20": {
      "x": 0.1494,
      "y": 0.332
    },
    "21": {
      "x": 0.1596,
      "y": 0.2135
    },
    "22": {
      "x": 0.114,
      "y": 0.2522
    }
  },
  "territorios": {
    "01": {
      "nome": "Território 01",
      "imagem": "images/T01.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Morubixaba",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Morubixaba%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Morubixaba",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Morubixaba%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Morubixaba",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Morubixaba%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "02": {
      "nome": "Território 02",
      "imagem": "images/T02.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Marini Silvani",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Marini%20Silvani%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Adolfo Lima Barros",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Adolfo%20Lima%20Barros%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Ângelo Arloti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20%C3%82ngelo%20Arloti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Ângelo Arloti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20%C3%82ngelo%20Arloti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Adolfo Lima Barros",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Adolfo%20Lima%20Barros%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "E",
          "ruas": [
            {
              "nome": "Rua Adolfo Lima Barros",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Adolfo%20Lima%20Barros%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "03": {
      "nome": "Território 03",
      "imagem": "images/T03.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua João Bezerra de Sousa",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Bezerra%20de%20Sousa%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Manuel Cardoso",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Manuel%20Cardoso%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Manuel Cardoso",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Manuel%20Cardoso%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua João Bezerra de Sousa",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Bezerra%20de%20Sousa%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "04": {
      "nome": "Território 04",
      "imagem": "images/T04.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua João Bezerra de Sousa",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Bezerra%20de%20Sousa%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Isaar Carlos de Camargo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Isaar%20Carlos%20de%20Camargo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua João Bezerra de Sousa",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Bezerra%20de%20Sousa%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Isaar Carlos de Camargo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Isaar%20Carlos%20de%20Camargo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "05": {
      "nome": "Território 05",
      "imagem": "images/T05.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Isaar Carlos de Camargo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Isaar%20Carlos%20de%20Camargo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Ézio Maranezi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20%C3%89zio%20Maranezi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Isaar Carlos de Camargo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Isaar%20Carlos%20de%20Camargo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Ézio Maranezi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20%C3%89zio%20Maranezi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "06": {
      "nome": "Território 06",
      "imagem": "images/T06.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Ézio Maranezi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20%C3%89zio%20Maranezi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Ézio Maranezi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20%C3%89zio%20Maranezi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Pedro Labatuti",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pedro%20Labatuti%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "07": {
      "nome": "Território 07",
      "imagem": "images/T07.jpg",
      "blocos": [
        {
          "letra": "",
          "ruas": [
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "08": {
      "nome": "Território 08",
      "imagem": "images/T08.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Jutariana",
              "maps": "https://www.google.com/maps/search/?api=1&query=Jutariana%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Jutariana",
              "maps": "https://www.google.com/maps/search/?api=1&query=Jutariana%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Serra das Divisões",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Serra%20das%20Divis%C3%B5es%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Cambaceguá",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Cambacegu%C3%A1%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Serra das Divisões",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Serra%20das%20Divis%C3%B5es%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Cambaceguá",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Cambacegu%C3%A1%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "E",
          "ruas": [
            {
              "nome": "Rua Antônio Lopes",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ant%C3%B4nio%20Lopes%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "09": {
      "nome": "Território 09",
      "imagem": "images/T09.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Antônio Lopes",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ant%C3%B4nio%20Lopes%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Serra das Divisões",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Serra%20das%20Divis%C3%B5es%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Serra das Divisões",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Serra%20das%20Divis%C3%B5es%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Campos Serrado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Campos%20Serrado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "10": {
      "nome": "Território 10",
      "imagem": "images/T10.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Campos Serrado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Campos%20Serrado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Mucurepe",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Mucurepe%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "11": {
      "nome": "Território 11",
      "imagem": "images/T11.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Mucurepe",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Mucurepe%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Mucurepe",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Mucurepe%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Cauguçu",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Caugu%C3%A7u%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Cauguçu",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Caugu%C3%A7u%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "E",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "12": {
      "nome": "Território 12",
      "imagem": "images/T12.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Campos Serrado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Campos%20Serrado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Campos Serrado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Campos%20Serrado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Luís Percoré",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Lu%C3%ADs%20Percor%C3%A9%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Cauguçu",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Caugu%C3%A7u%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "E",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "13": {
      "nome": "Território 13",
      "imagem": "images/T13.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Campos Serrado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Campos%20Serrado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Filipe de Carvalho",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Filipe%20de%20Carvalho%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Filipe de Carvalho",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Filipe%20de%20Carvalho%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Pero Vaz de Caminha",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pero%20Vaz%20de%20Caminha%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "14": {
      "nome": "Território 14",
      "imagem": "images/T14.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Pero Vaz de Caminha",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Pero%20Vaz%20de%20Caminha%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Miguel de Cabedo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Miguel%20de%20Cabedo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Miguel de Cabedo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Miguel%20de%20Cabedo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Saara",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Saara%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "15": {
      "nome": "Território 15",
      "imagem": "images/T15.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Av. Líder",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20L%C3%ADder%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Monteiro de Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Monteiro%20de%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Ponche Verde",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Ponche%20Verde%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Miguel de Cabedo",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Miguel%20de%20Cabedo%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Av. Itaquera",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20Itaquera%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Osvaldo Valle Cordeiro",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20Osvaldo%20Valle%20Cordeiro%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "16": {
      "nome": "Território 16",
      "imagem": "images/T16.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Av. Osvaldo Valle Cordeiro",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20Osvaldo%20Valle%20Cordeiro%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Brasilina Ilka Barbosa Ferraz",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Brasilina%20Ilka%20Barbosa%20Ferraz%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Firmino Morgado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Firmino%20Morgado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Firmino Morgado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Firmino%20Morgado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Firmino Morgado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Firmino%20Morgado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Itaquera",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20Itaquera%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "17": {
      "nome": "Território 17",
      "imagem": "images/T17.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Firmino Morgado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Firmino%20Morgado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Firmino Morgado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Firmino%20Morgado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Brasilina Ilka Barbosa Ferraz",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Brasilina%20Ilka%20Barbosa%20Ferraz%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "18": {
      "nome": "Território 18",
      "imagem": "images/T18.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Brasilina Ilka Barbosa Ferraz",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Brasilina%20Ilka%20Barbosa%20Ferraz%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Bilimbi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Bilimbi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua João Luís Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Lu%C3%ADs%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua João Luís Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Lu%C3%ADs%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Bilimbi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Bilimbi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Manuel Pinheiro de Albuquerque",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Manuel%20Pinheiro%20de%20Albuquerque%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "19": {
      "nome": "Território 19",
      "imagem": "images/T19.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Gorizia",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Gorizia%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Bilimbi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Bilimbi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Manuel Pinheiro de Albuquerque",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Manuel%20Pinheiro%20de%20Albuquerque%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Helena dos Santos",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Helena%20dos%20Santos%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Girassolina",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Girassolina%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Maniaa",
              "maps": "https://www.google.com/maps/search/?api=1&query=Maniaa%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Girassolina",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Girassolina%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Achiri",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Achiri%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Maniga",
              "maps": "https://www.google.com/maps/search/?api=1&query=Maniga%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Bilimbi",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Bilimbi%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Manuel Pinheiro de Albuquerque",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Manuel%20Pinheiro%20de%20Albuquerque%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "20": {
      "nome": "Território 20",
      "imagem": "images/T20.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Manuel Pinheiro de Albuquerque",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Manuel%20Pinheiro%20de%20Albuquerque%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua João Luís Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Lu%C3%ADs%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua João Luís Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Lu%C3%ADs%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Saboreira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Saboreira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "E",
          "ruas": [
            {
              "nome": "Rua Saboreira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Saboreira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "F",
          "ruas": [
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "21": {
      "nome": "Território 21",
      "imagem": "images/T21.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Henrique Rodrigues Peres",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Henrique%20Rodrigues%20Peres%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Elisa Monteiro",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Elisa%20Monteiro%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Elisa Monteiro",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Elisa%20Monteiro%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "D",
          "ruas": [
            {
              "nome": "Rua Guiomar de Ataliba Penteado",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Guiomar%20de%20Ataliba%20Penteado%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Av. Itaquera",
              "maps": "https://www.google.com/maps/search/?api=1&query=Av.%20Itaquera%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "E",
          "ruas": [
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Elisa Monteiro",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Elisa%20Monteiro%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "F",
          "ruas": [
            {
              "nome": "Rua Lúcia Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20L%C3%BAcia%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Saboreira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Saboreira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    },
    "22": {
      "nome": "Território 22",
      "imagem": "images/T22.jpg",
      "blocos": [
        {
          "letra": "A",
          "ruas": [
            {
              "nome": "Rua Helena dos Santos",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Helena%20dos%20Santos%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Lúcia Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20L%C3%BAcia%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "B",
          "ruas": [
            {
              "nome": "Rua Girassolina",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Girassolina%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        },
        {
          "letra": "C",
          "ruas": [
            {
              "nome": "Rua Saboreira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Saboreira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua Olga Silveira",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Olga%20Silveira%2C%20S%C3%A3o%20Paulo%2C%20SP"
            },
            {
              "nome": "Rua João Luís Faria",
              "maps": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Lu%C3%ADs%20Faria%2C%20S%C3%A3o%20Paulo%2C%20SP"
            }
          ]
        }
      ]
    }
  }
};
