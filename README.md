# Incubyte Chandrayan 3 #

## Test-Driven Development ##

Test-driven development (TDD) is a software development approach where the approach starts by writing test cases for the desired functionality before writing the actual code. This practice promotes a structured and iterative development process, ensuring that the code meets specified requirements and remains reliable as it evolves.

## Steps for setting up TDD Environment ##

I have used jest framework of javascript for testing and programming.

* Create npm project
   ```
    $ npm init
   ```
* Install Jest.
   ```
   $ npm  install jest
   ```   
* Update the test script of package.json
* Use .test.js extention in test files.
* In order to run the testcases of project
```
$ npm run test
```
* To run a particular test file
```
$ npm run test --testing/filename.test.js
```

## Problem Description ##
As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3,  the task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).
* Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.
* Turn the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
* Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

## Benifits of TDD ##
* TDD ensures that the code is continuously tested, reducing the likelihood of introducing bugs or regressions.
* The tests serve as living documentation, showing how the code is intended to be used and what it should do.
* TDD provides immediate feedback during the development process, helping developers catch errors early.
