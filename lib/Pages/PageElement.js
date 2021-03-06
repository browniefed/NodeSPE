var driver = require('../Driver/Driver')(),
	activeDriver = driver.buildDriver(),
	WebElement = activeDriver.WebElement,
	By = driver.getDriver().By,
	klass = require('klass'),
	PEWebElement = require('../Elements/WebElement');
	
var PageElement = klass(function(root) {
	if (typeof root == 'function' && root instanceof WebElement) {
		this.root = root;
	} else if (root instanceof PEWebElement) {
		this.root = root.getEl();
	} else {
		this.root = activeDriver.findElement(root);
	}
	
}).methods({
	getRoot: function() {
		return this.root;
	}
})

exports = module.exports = PageElement;