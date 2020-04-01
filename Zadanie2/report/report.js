$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/buyProduct.feature");
formatter.feature({
  "name": "Pick and buy products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open browser with sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userOpenBrowserWithSignInPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mail word has been written into the input field",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.mailWordHasBeenWrittenIntoTheInputField()"
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
  "name": "Click in my store",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.clickInMyStore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click in Hummingbird Printed Sweater",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.clickInHummingbirdPrintedSweater()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pick size M",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.pickSizeM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pick 5 pieces",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.pickPieces()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.addToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click in Proceed to Checkout",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.clickInProceedToCheckout()"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index 3 out of bounds for length 3\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\n\tat java.base/java.util.Objects.checkIndex(Objects.java:373)\n\tat java.base/java.util.ArrayList.get(ArrayList.java:425)\n\tat step_definition.MyStepdefs.clickInProceedToCheckout(MyStepdefs.java:81)\n\tat ✽.Click in Proceed to Checkout(src/test/resources/features/buyProduct.feature:12)\n",
  "status": "failed"
});
});