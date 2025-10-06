## TTD (test driven development)
test before code 
1- tests
2- code
3- refactor 

## jest watch mode --> run tests for changed files only since last commit 
## filtering test --> from terminal / from code test.skpi(), test.only()

## grouping tests together --> describe(name, fn) method
name --> group name 
fn -> expectations 
can use -> describe.only(name, fn) | describe.skip(name, fn)

## filename convension 
.test.js 
.test.tsx 
.spec.js
.spec.tsx
__tests__ (folders) ===========> .js or .tsx 

=> alternative test methods: 
test(), it()
test only = fit
test exclude = xit
=========================================================
# code coverage 
metric help you understand how much of your software code is tested 
1.statement coverage --> number of executed statements 
2.branches coverage --> number of executed branches of control structures(ex: if statement)
3-function coverage --> number of called functions 
4.line coverage --> number of tested lines of source code

## collectCoverageFrom: 
Tells Jest which files to include when computing code coverage (glob patterns).

## coveragePathIgnorePatterns: 
Regex patterns for paths Jest should ignore when calculating coverage.

## coverage threshold 
to enforce minimum coverage percentages.