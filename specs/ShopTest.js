const { browser } = require('protractor');

describe('ecommerce', function () {


    var shop_page = require('C:\\Users\\aishwarya\\Desktop\\Protractor-Jasmine-Practice\\pages\\shopPage.js');

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://qaclickacademy.github.io/protocommerce/#");
    });

    it('total  details', function () {

        browser.sleep(5000);

        shop_page.shoplink.click();

        browser.sleep(5000);


        shop_page.selectitem("Nokia Edge");
        shop_page.selectitem("Samsung Note 8");
        shop_page.selectitem("iphone X");


        shop_page.checkoutbutton.click();

        shop_page.pricetagsInCart.getText().then(function (price) {


            var pricetag = price.toString().split("₹.");
            //console.log(pricetag[3].trim());
            var y = 0;
            for (let i = 0; i < pricetag.length; i++) {
                var str = pricetag[i].trim().replace(",", "");
                var x = Number(str);
                var y = x + y;
            }
            console.log(y);
            var total = 0;
            shop_page.totalpriceInCart.getText().then(function (text) {
                var total = text.toString().split("₹. ");
                var sum = Number(total[1].trim());
                //console.log(sum);


                expect(y).toEqual(sum);


            })
        })

    })
})




