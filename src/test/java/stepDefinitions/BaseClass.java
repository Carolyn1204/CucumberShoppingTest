package stepDefinitions;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;


import pages.LoginPage;
import pages.SearchBar;
import utilities.ReadConfig;



public class BaseClass {

	public WebDriver driver;
	public Logger logger;
	public LoginPage lp;
	public SearchBar sb;
	
	
	
	
	ReadConfig rc = new ReadConfig();
	public String url = rc.get_url();
	public String browser = rc.get_browser();

	
	
	

	
	
	
}
