# fastest-slide-coding-exercise

This is a coding exercise performed as a part of the interview process for Neo4j. The goal of the exercise is to solve the fastest slide problem described in the pdf in this repo.

## Prerequisites
* Node (version 16)

## Test
To run the solution to the exercises with the tests from the pdf simple run the following command
```
node tests.js
```

## Note
This solution will be slow for bigger input files since I'm iterating from the bottom of the pyramid. To solve this it's possible to read the input with streams and iterate from the top while reading. I think the implementation using iteration from the top is harder to understand and makes the code harder to read. Therefore I implemented the bottom-up solution.