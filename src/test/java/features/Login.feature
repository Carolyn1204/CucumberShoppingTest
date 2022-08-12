Feature: Login

Scenario: Successful login with valid username and password
Given user launch Chrome browser
And user opens url "https://www.roots.com/on/demandware.store/Sites-RootsCA-Site/en_CA/Account-Show"
When user enters username "1659145340@qq.com" and password "1204fighting"
And click on login
Then there should be "Welcome" on the page
And close browser
