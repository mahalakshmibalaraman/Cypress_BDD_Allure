# cypress-cucumber-allure-demo
This project is created to show how we can leverage Cucumber BDD framework in Cypress. Steps involved in configuring your project are following:

## Pre-Requisites
* Node JS and NPM - [Node](https://nodejs.org/en/download/) 
* IDE - [VS Code](https://code.visualstudio.com/download) 

## Set Up
* Clone the project and run ```npm i``` to  install all dependencies.  

## Cypress Help
```
npx cypress run --help
```  

## Dependencies
* cypress - v13.10
* multiple-cucumber-html-reporter - v3.6.2
* cypress-xpath - v2.0.1
* moment - v2.30.1.4
* moment-timezone - v0.5.45
* @badeball/cypress-cucumber-preprocessor - v20.0.5
* @bahmutov/cypress-esbuild-preprocessor -  v2.2.0
* @shelex/cypress-allure-plugin - v2.40.2

## Configure VS Code

### Use `ctrl + shift + p` and search for  `Preferences: Open Settings (JSON)` and open VS Codes settings. Add the following in `settings.json`

```
 "[feature]":{
        "editor.formatOnSave": true,
    },
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.steps": [
        "cypress/integration/**/*.js",
        "cypress/e2e/**/*.js",
    ]
```

## Features
- BDD Framework
- Page Object Model
- Cucumber HTML Report
- Allure Report

## How to Run and Generate Report

### GUI Mode
```
npx cypress open
```  

### CLI Mode

#### Run All Features and Generate Allure Report
```
npm run allure:clear
npm run cy:run
npm run allure:report
```

#### Run Specific Feature
```
npx cypress run --browser "chrome" --spec "cypress/integration/LoginTest/Login.feature"
or
npx cypress-tags run -g 'cypress/integration/LoginTest/Login.feature' --browser "chrome"
or
npx cypress-tags run --browser "chrome" -e tags=@stage --spec "cypress/integration/LoginTest/Login.feature" --env configFile=qa
npm run allure:report
```  