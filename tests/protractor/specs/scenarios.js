describe('our first angular test homepage', function() {                        
  beforeEach(function() {                                
    browser.get('http://127.0.0.1:8080/')                                
  })                                

  //for(var i = 0; i < 4; i++) {
    //it('should be true', function(){})
  //}


  it('should have the correct title', function() {                              
    expect(browser.getTitle()).toEqual('Cube10')                 
  })                                
      
  it('routing should redirect to currect routes', function() {
    var urlString = 'http://127.0.0.1:8080/'
    var url = browser.getCurrentUrl()

    browser.get(urlString)
    expect(url).toEqual(browser.getCurrentUrl())
  
    browser.get(urlString+'#')
    expect(url).toEqual(browser.getCurrentUrl())

    browser.get(urlString+'#/index')
    expect(url).toEqual(browser.getCurrentUrl())
  
    for (var i = 0; i < 10; i++) {
      browser.get(urlString+'#' + i + i)
      expect(url).toEqual(browser.getCurrentUrl())
    }
  })



  it('should load login form views on button clicks', function() {
    var homeButton = element(by.linkText('Home'))
    var loginButton = element(by.linkText('Login'))
    var aboutButton = element(by.linkText('About'))
    var ngViewContainer = element(by.id('viewContainer'))
    var indexUrl = browser.getCurrentUrl()

    
    loginButton.click()
    homeButton.click()
    aboutButton.click()
    loginButton.click()

    element(by.id('loginHeader')).getText()
      .then(function(text) {
        expect(text).toEqual('Login Form')
      })

    console.log(browser.getCurrentUrl())
  })

  it('should load home form view on button click', function() {
    var homeButton = element(by.linkText('Home'))
    var loginButton = element(by.linkText('Login'))
    var aboutButton = element(by.linkText('About'))
    var ngViewContainer = element(by.id('viewContainer'))
    
    loginButton.click()
    homeButton.click()
    aboutButton.click()
    loginButton.click()
    homeButton.click()

    //element(by.id('loginHeader')).getText()
      //.then(function(text) {
        //expect(text).toEqual('Login Form')
      //})
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
