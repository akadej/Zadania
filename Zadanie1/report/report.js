$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/createNewAddress.feature");
formatter.feature({
  "name": "Create new address",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create new address after log in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open browser with sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.openBrowserWithRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mail word has been written into the input field",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.mailWordHasBeenWrittenIntoTheInputFieldAndSubmitted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password has been written into the input field and submit",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.passwordHasBeenWrittenIntoTheInputFieldAndSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Addresses",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.clickOnAddresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Create New Address",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.clickOnCreateNewAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\u003caddresses\u003e has been written into the input field",
  "keyword": "Given "
});
formatter.step({
  "name": "\u003czip\u003e has been written into the input field",
  "keyword": "When "
});
formatter.step({
  "name": "\u003ccity\u003e has been written into the input field",
  "keyword": "And "
});
formatter.step({
  "name": "\u003ccountry\u003e has been chosen The United Kingdom",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "addresses",
        "zip",
        "city",
        "country"
      ]
    },
    {
      "cells": [
        "Jana Kazimierza 53a",
        "01-267",
        "Warszawa",
        "United Kingdom"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Jana Kazimierza 53a has been written into the input field",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "01-267 has been written into the input field",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Warszawa has been written into the input field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "United Kingdom has been chosen The United Kingdom",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});