const { element } = require('protractor');

this.namefield = element(by.name("name"));

this.emailfield = element(by.name("email"));
this.password = element(by.id("exampleInputPassword1"));
this.gender = element(by.cssContainingText('option', 'Female'));
this.submitbtn = element(by.css("input[class='btn btn-success']"));
this.successmsg = element(by.cssContainingText('strong', 'Success!'));