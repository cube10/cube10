describe('our first angular test homepage', function() {                        
  beforeEach(function() {                                
    browser.get('http://127.0.0.1:8080/')                                
  })                                

  it('should have the correct title', function() {                              
    expect(browser.getTitle()).toEqual('Cube10')                 
  })                                
      
  it('should load approppriate ng-views on button clicks', function() {
    var homeButton = element(by.linkText('Home'))
    var loginButton = element(by.linkText('Login'))
    var aboutButton = element(by.linkText('About'))

    loginButton.click()
    homeButton.click()
    loginButton.click()
    

    
    
  })

  //it('should add a new snack', function() {
    //element(by.id('addSnack')).click()

    //var newName = element(by.id('newName'))
    //var newIngredients = element(by.id('newIngredients'))
    //var newTags = element(by.id('newTags'))
    //var addSnackButton = element(by.buttonText('Add Snack'))

    //newName.sendKeys('food')
    //newIngredients.sendKeys('food, stuff')
    //newTags.sendKeys('sustenance')
    //addSnackButton.click()

    //expect(newName.getAttribute('value')).toEqual('food')
    //expect(true)
    //expect(true)
  //})
})
