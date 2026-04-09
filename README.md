# Knights Travails

Projeto de algoritmos desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails), com o objetivo de criar um algoritmo capaz de encontrar o menor caminho para o cavalo entre duas posições no tabuleiro de xadrez.

## Objetivo do Projeto

O objetivo principal foi praticar:
- Modelagem de movimentos válidos de cavalo em um tabuleiro 8x8
- Busca em largura (BFS) para encontrar o menor caminho
- Controle de posições visitadas para evitar repetições
- Reconstrução do caminho completo da origem ao destino

## O que é?

Uma implementação em JavaScript de uma função `knightMoves(orig, dest)` que retorna o caminho mais curto entre duas casas de um tabuleiro 8x8, considerando os movimentos do cavalo.

A função auxiliar `calculateNext(curPos)` gera os próximos movimentos válidos dentro dos limites do tabuleiro.

## Como usar

1. Entre na pasta do projeto:
   `Javascript/top-knights-travails`
2. Execute o arquivo de demonstração:
   `node index.js`

## Funcionalidades

- **`calculateNext(curPos)`**: calcula todas as próximas posições válidas do cavalo
- **`knightMoves(orig, dest)`**: retorna o menor caminho entre origem e destino
- **Busca em largura (BFS)**: garante o menor número de movimentos
- **Rastreamento de caminho**: retorna o percurso completo em formato de lista de coordenadas

## Estrutura de Arquivos

- `index.js`: implementação das funções e exemplo de execução

## Tecnologias Utilizadas

- JavaScript

---

Projeto desenvolvido seguindo as especificações de: [The Odin Project - Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
