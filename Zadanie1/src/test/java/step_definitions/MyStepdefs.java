package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

    public class MyStepdefs {

        private WebDriver driver;


    @Given("User open browser with sign in page")
    public void openBrowserWithRegistrationPage() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");


    }

    @When("Mail word has been written into the input field")
    public void mailWordHasBeenWrittenIntoTheInputFieldAndSubmitted() {
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

    @And("Click on Addresses")
    public void clickOnAddresses() {
        WebElement inputField = driver.findElement(By.xpath("//*[contains(@title, 'Addresses')]"));
        inputField.click();



    }

    @And("Click on Create New Address")
    public void clickOnCreateNewAddress() {
        WebElement inputField = driver.findElement(By.xpath("//a[@data-link-action='add-address']"));
        inputField.click();
    }


    @Given("<addresses> has been written into the input field")
    public void addressesHasBeenWrittenIntoTheInputField(String addresses) {
        WebElement inputField = driver.findElement(By.name("address1"));
        inputField.click();
        inputField.sendKeys(addresses);

    }

    @When("<zip> has been written into the input field")
    public void zipHasBeenWrittenIntoTheInputField(String zip) {
        WebElement inputField = driver.findElement(By.name("postcode"));
        inputField.click();
        inputField.sendKeys(zip);


    }

    @And("<city> has been written into the input field")
    public void cityHasBeenWrittenIntoTheInputField(String city) {
        WebElement inputField = driver.findElement(By.name("city"));
        inputField.click();
        inputField.sendKeys(city);



    }

}
