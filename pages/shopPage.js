const { element } = require('protractor');

this.shoplink = element(by.css("a[href='/protocommerce/shop']"));
this.entireCardofItemOnHomepage = element.all(by.tagName("app-card"));
this.nameofitem = element(by.css("h4 a"));
this.addtoCardBtn = element(by.css("button[class='btn btn-info']"));
this.checkoutbutton = element(by.partialLinkText("Checkout"));
this.pricetagsInCart = element.all(by.xpath("//td[@class='col-sm-1 col-md-1 text-center'][2]"));
this.totalpriceInCart = element(by.css("h3 strong"));
this.selectitem = selectitem;

function selectitem(phonename) {
    element.all(by.tagName("app-card")).each(function (item) {

        item.element(by.css("h4 a")).getText().then(function (text) {
            if (text == phonename) {

                item.element(by.css("button[class='btn btn-info']")).click();
            }

        });
    });
};



