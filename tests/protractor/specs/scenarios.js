describe('our first angular test homepage', function() {                        
  beforeEach(function() {                                
    browser.get('http://127.0.0.1:8080/')                                
  })                                

  it('should have the correct title', function() {                              
    expect(browser.getTitle()).toEqual('Cube10')                 
  })                                
      
  it('incorrect routes should redirect to #/index', function() {
    var baseUrl = 'http://127.0.0.1:8080/'
    var indexUrl = 'http://127.0.0.1:8080/#/index'
    var url = browser.getCurrentUrl()

    browser.get(baseUrl)
    expect(url).toEqual(browser.getCurrentUrl())

    browser.get(baseUrl+'#')
    expect(url).toEqual(browser.getCurrentUrl())
    
    browser.get(baseUrl+'#/index')
    expect(url).toEqual(browser.getCurrentUrl())
  
    for (var i = 0; i < 10; i++) {
      browser.get(baseUrl+'#' + i + i)
      expect(url).toEqual(browser.getCurrentUrl())
    }
    
  })

  it('should load login form views on button clicks', function() {
    var urlString = 'http://127.0.0.1:8080/#/login'
    var loginButton = element(by.linkText('Login'))
    var ngViewContainer = element(by.id('viewContainer'))
    var indexUrl = browser.getCurrentUrl()
    
    loginButton.click()

    var url = browser.getCurrentUrl()
    browser.get(urlString)
    expect(url).toEqual(browser.getCurrentUrl())

    element(by.id('loginHeader')).getText()
      .then(function(text) {
        expect(text).toEqual('Login Form')
      })
  })

  it('should load home form view on button click', function() {
    var url = browser.getCurrentUrl()
    var homeButton = element(by.linkText('Home'))
    var loginButton = element(by.linkText('Login'))
    var aboutButton = element(by.linkText('About'))
    var ngViewContainer = element(by.id('viewContainer'))
    
    loginButton.click()
    homeButton.click()
    aboutButton.click()
    homeButton.click()
    expect(url).toEqual(browser.getCurrentUrl())
    expect(element(by.css('.cube-container')).isPresent()).toBe(true)
  })

  it('should allow user to navigate to register form', function() {
    var urlString = 'http://127.0.0.1:8080/#/signUp'

    element(by.linkText('Login')).click()
    element(by.buttonText('Register')).click()
  
    var url = browser.getCurrentUrl()
    browser.get(urlString)
    expect(url).toEqual(browser.getCurrentUrl())
  })

  it('should allow user to login', function() {
    var indexUrl = browser.getCurrentUrl()
    element(by.linkText('Login')).click()

    // form elements
    var username = element(by.model('user.username'))
    var password = element(by.model('user.password'))
    var submitButton = element(by.id('submitButton'))

    username.sendKeys('test1')
    password.sendKeys('test1')
    submitButton.click()

    expect(browser.getCurrentUrl()).toEqual(indexUrl)
  
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
