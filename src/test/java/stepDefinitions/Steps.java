package stepDefinitions;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
//import io.cucumber.java.Before;
//import io.cucumber.java.en.*;
import pages.LoginPage;
import pages.SearchBar;


public class Steps extends BaseClass {
	
	
	@Before
	public void setup() {
		
		logger = Logger.getLogger("shoppingTest");
		PropertyConfigurator.configure("log4j.properties");
		
		if(browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",rc.get_chromepath());
			driver = new ChromeDriver();
			
		}else if(browser.equals("firefox")) {
			System.setProperty("webdriver.chrome.driver",rc.get_firefoxpath());
			driver = new FirefoxDriver();
		}
		
		logger.info("lanching browser");
		driver.manage().window().maximize();
		
		
	}
	
	@Given("^user launch Chrome browser$")
	public void user_launch_Chrome_browser() throws Throwable {
	    
		lp = new LoginPage(driver);
	}

	@Given("^user opens url \"([^\"]*)\"$")
	public void user_opens_url(String arg1) throws Throwable {
	    
		driver.get(url);
	    logger.info("open url: "+url);
	}

	@When("^user enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_username_and_password(String username, String password) throws Throwable {
		
		lp.setUsername(username);
		lp.setPwd(password);
	    
	}

	@When("^click on login$")
	public void click_on_login() throws Throwable {
		
		lp.click_signIn_button();
	    
	}

	@Then("^there should be \"([^\"]*)\" on the page$")
	public void there_should_be_on_the_page(String wel) throws Throwable {
		
		if(driver.getPageSource().contains(wel)) {
		    logger.info("testcase pass");
			Assert.assertTrue(true);
			
		}
		else {
		//	captureScreen(driver, this.getClass().getSimpleName());
		    logger.error("testcase fail");
			Assert.assertTrue(false);
			
		}
	    
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		
		logger.info("close browser");
	    driver.quit();
	    
	}

	@When("^user click the searching icon$")
	public void user_click_the_searching_icon() throws Throwable {
		
		sb = new SearchBar(driver);
	    sb.search_icon_click();
	    logger.info("click searching icon");
	    
	}

	@When("^user inputs the searching keywords \"([^\"]*)\"$")
	public void user_inputs_the_searching_keywords(String keywords) throws Throwable {
		
		sb.search_input_click();
		sb.search_input_sendkeys(keywords);
		logger.info("entering searching keywords");
	    
	}

	@When("^press enter key$")
	public void press_enter_key() throws Throwable {
	    
		sb.press_enter();
	}

	@Then("^items with keywords contained in the names should be listed$")
	public void items_with_keywords_contained_in_the_names_should_be_listed() throws Throwable {
	    
	}

}
