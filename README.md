# Knights Travails

Algorithm project developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), with the goal of creating an algorithm capable of finding the shortest path for a knight between two positions on a chessboard.

## Project Objective

The main objective was to practice:
- Modeling valid knight moves on an 8x8 board
- Breadth-first search (BFS) to find the shortest path
- Tracking visited positions to avoid repetition
- Reconstructing the full path from origin to destination

## What is it?

An implementation in JavaScript of a `knightMoves(orig, dest)` function that returns the shortest path between two squares on an 8x8 chessboard, considering knight movement rules.

The helper function `calculateNext(curPos)` generates the next valid moves within the board limits.

## How to use

1. Enter the project folder:
   `Javascript/top-knights-travails`
2. Run the demo file:
   `node index.js`

## Features

- **`calculateNext(curPos)`**: calculates all valid next knight positions
- **`knightMoves(orig, dest)`**: returns the shortest path between origin and destination
- **Breadth-first search (BFS)**: guarantees the smallest number of moves
- **Path tracing**: returns the full route as a list of coordinates

## File Structure

- `index.js`: implementation of the functions and execution example

## Technologies Used

- JavaScript

---

Project developed following the specifications of: [The Odin Project - Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
