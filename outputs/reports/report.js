$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5957208600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with valid username and password",
  "description": "",
  "id": "login;successful-login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens url \"https://www.roots.com/on/demandware.store/Sites-RootsCA-Site/en_CA/Account-Show\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters username \"1659145340@qq.com\" and password \"1204fighting\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "there should be \"Welcome\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 483928400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.roots.com/on/demandware.store/Sites-RootsCA-Site/en_CA/Account-Show",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 3405306400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1659145340@qq.com",
      "offset": 22
    },
    {
      "val": "1204fighting",
      "offset": 55
    }
  ],
  "location": "Steps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1291012100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 2192070300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 17
    }
  ],
  "location": "Steps.there_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 211071900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 906660800,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "",
  "id": "search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3593135200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful show the items list with valid searching keywords",
  "description": "",
  "id": "search;successful-show-the-items-list-with-valid-searching-keywords",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens url \"https://www.roots.com/on/demandware.store/Sites-RootsCA-Site/en_CA/Account-Show\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user click the searching icon",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user inputs the searching keywords \"sweater\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "press enter key",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "items with keywords contained in the names should be listed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1535100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.roots.com/on/demandware.store/Sites-RootsCA-Site/en_CA/Account-Show",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 3075157200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_the_searching_icon()"
});
formatter.result({
  "duration": 135040800,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d104.0.5112.81)\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027LAPTOP-FU74VF0U\u0027, ip: \u0027192.168.2.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d61ce62dd351e724ce4f255e927ad1a3, clickElement {id\u003d7cdbebf2-5b69-48ba-8dbc-4a133516ea77}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.81, chrome: {chromedriverVersion: 103.0.5060.134 (8ec6fce403b..., userDataDir: C:\\Users\\carol\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:3438}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:3438/devtool..., se:cdpVersion: 104.0.5112.81, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (d61ce62dd351e724ce4f255e927ad1a3)] -\u003e xpath: //button[@aria-label\u003d\u0027Search\u0027]/span[@class\u003d\u0027header-icon-search\u0027]]\nSession ID: d61ce62dd351e724ce4f255e927ad1a3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat pages.SearchBar.search_icon_click(SearchBar.java:42)\r\n\tat stepDefinitions.Steps.user_click_the_searching_icon(Steps.java:97)\r\n\tat ✽.When user click the searching icon(Search.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sweater",
      "offset": 36
    }
  ],
  "location": "Steps.user_inputs_the_searching_keywords(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.press_enter_key()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.items_with_keywords_contained_in_the_names_should_be_listed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});