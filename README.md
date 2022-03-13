# fastest-slide-coding-exercise

This is a coding exercise performed as a part of the interview process for Neo4j. The goal of the exercise is to solve the fastest slide problem described in the pdf in this repo.

I've made two solutions, my first implementation is pyramid.js which is solving the problem from the bottom to the top. I first thought the only reasonable solution would be to do solve it this way and otherwise, the time complexity would get too high. However, when I was done with this implementation I realised that it's possible to solve it from top to bottom as well so I added solve.js. This file reads the input file line by line, because of this it will use less memory. For larger files, this would most likely be very important.

I still prefer the solution I implemented first in pyramid.js since I think that code is easier to understand and it's easier to explain the logic behind it. Since the solve.js file was an afterthought I did not implement tests for it.

## Prerequisites
* Node (version 16)

## Test (pyramid.js)
To run the solution to the exercises with the tests from the pdf simple run the following command
```
node tests.js
```

## Run solver
```
node solver.js path-to-pyramid-file
```
