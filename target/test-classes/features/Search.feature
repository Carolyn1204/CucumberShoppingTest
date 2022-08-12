Feature: Search

Scenario: Successful show the items list with valid searching keywords
Given user launch Chrome browser
And user opens url "https://www.roots.com/on/demandware.store/Sites-RootsCA-Site/en_CA/Account-Show"
When user click the searching icon
And user inputs the searching keywords "sweater"
And press enter key
Then items with keywords contained in the names should be listed
And close browser
