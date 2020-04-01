package step_definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class MyStepdefs {

    private WebDriver driver;

    @Given("User open browser with sign in page")
    public void userOpenBrowserWithSignInPage() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");
    }


    @When("Mail word has been written into the input field")
    public void mailWordHasBeenWrittenIntoTheInputField() {
        WebElement inputField = driver.findElement(By.name("email"));
        String email_create = "a.kadej@gmail.com";
        inputField.sendKeys(email_create);
    }

    @And("Password has been written into the input field and submit")
    public void passwordHasBeenWrittenIntoTheInputFieldAndSubmit() {
        WebElement inputField = driver.findElement(By.name("password"));
        String password = "kadej";
        inputField.sendKeys(password);
        inputField.submit();

    }

    @And("Click in my store")
    public void clickInMyStore() {
        List<WebElement> clothes = driver.findElements(By.cssSelector(".logo.img-responsive"));
        clothes.get(0).click();
    }

    @Then("Click in Hummingbird Printed Sweater")
    public void clickInHummingbirdPrintedSweater() {
        List<WebElement> sweater = driver.findElements(By.cssSelector(".h3.product-title"));
        sweater.get(1).click();

    }

    @And("Pick size M")
    public void pickSizeM() {
        WebElement inputField = driver.findElement(By.xpath("//*[contains(@title, 'M')]"));
        inputField.click();

    }

    @And("Pick 5 pieces")
    public void pickPieces() {
        WebElement inputField = driver.findElement(By.name("qty"));
        inputField.clear();
        inputField.sendKeys( "5");

    }

    @And("Add to cart")
    public void addToCart() {
        List<WebElement> cart = driver.findElements(By.cssSelector(".btn.btn-primary.add-to-cart"));
        cart.get(0).click();

    }

    @And("Click in Proceed to Checkout")
    public void clickInProceedToCheckout() {
        List<WebElement> cart = driver.findElements(By.cssSelector(".btn.btn-primary"));
        cart.get(3).click();

    }
}
