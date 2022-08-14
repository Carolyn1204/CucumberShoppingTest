package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//import io.cucumber.junit.Cucumber;
//import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",  
		glue = "stepDefinitions",
		monochrome=true,
		plugin = {"pretty","html:outputs/reports"}
		)  
public class TestRunner {
	
	

}