const { browser } = require('protractor');

describe("Describes the Test Suite",function(){
    
    var homepage= require('C:\\Users\\aishwarya\\Desktop\\Protractor-Jasmine-Practice\\pages\\homepage.js');
    var d = require("C:\\Users\\aishwarya\\Desktop\\Protractor-Jasmine-Practice\\resources\\testdata.js")
    var using = require('jasmine-data-provider');
    

using(d.dataset,function(data,description){    
it("submit form",function(){


browser.get("https://qaclickacademy.github.io/protocommerce/#").then(function(){
    browser.sleep(6000);

    homepage.namefield.sendKeys(data.name);
    homepage.emailfield.sendKeys(data.email);
    homepage.gender.click();

    homepage.submitbtn.click();
        if(homepage.successmsg.isDisplayed)
        
            homepage.successmsg.getText().then(function(text){
                expect(text).toContain("Success!");
            });

        });
  

});



});
});


