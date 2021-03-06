var Driver = require('./lib/Driver/Driver'),
	AbstractPageElement = require('./lib/Elements/AbstractPageElement'),
	WebElement = require('./lib/Elements/WebElement'),
	AbstractPage = require('./lib/Pages/AbstractPage'),
	PageCallback = require('./lib/Pages/PageCallback'),
	PageElement = require('./lib/Pages/PageElement'),
	PageHelper = require('./lib/Pages/PageHelper'),
	ToggleableElement = require('./lib/Pages/ToggleableElement'),
	Page = require('./lib/Pages/Page'),
	Users = require('./lib/Users/Users');

var JxActions = require('./lib/Jx/JxActions'),
	JxAlert = require('./lib/Jx/JxAlert'),
	JxInspector = require('./lib/Jx/JxInspector'),
	JxNavigate = require('./lib/Jx/JxNavigate'),
	JxTimeouts = require('./lib/Jx/JxTimeouts'),
	JxWaitUntil = require('./lib/Jx/JxWaitUntil');

var By = require('./lib/Jx/util/By'),
	ByJavascript = require('./lib/Jx/util/ByJavascript'),
	JxUtils = require('./lib/Jx/util/JxUtils');

var JxApi = require('./lib/Jx/api/JxApi');

var JxAction = require('./lib/Jx/action/JxAction'),
	AbstractJxAction = require('./lib/Jx/action/AbstractJxAction'),
	ClickAction = require('./lib/Jx/action/ClickAction'),
	DragAndDropAction = require('./lib/Jx/action/DragAndDropAction'),
	FocusAction = require('./lib/Jx/action/FocusAction'),
	HoverAction = require('./lib/Jx/action/HoverAction'),
	TypeAction = require('./lib/Jx/action/TypeAction');

var Sync = require('sync');

function wrapSync(fn) {
	return function(desc, t) {
		var f = fn;
		f(desc, function() {
			Sync(function() {
				return function(cb) {
					try {
						t();
						cb(null, true);
					} catch(e) {
						cb(e, false);
					}
				}.sync(null);
			}, function(e, result) {
				if (e) {
					throw e;
				}
			});
		});

	}
}


var test = require('selenium-webdriver/testing');
test.it = wrapSync(test.it);


var SPE = {
	Driver: Driver,
	Elements: {
		AbstractPageElement: AbstractPageElement,
		WebElement: WebElement
	},
	Pages: {
		AbstractPage: AbstractPage,
		Page: Page,
		PageCallback: PageCallback,
		PageElement: PageElement,
		PageHelper: PageHelper,
		ToggleableElement: ToggleableElement,
	},
	JxActions: JxActions,
	JxAlert: JxAlert,
	JxInspector: JxInspector,
	JxNavigate: JxNavigate,
	JxTimeouts: JxTimeouts,
	JxWaitUntil: JxWaitUntil,
	JxAction: {
		_: JxAction,
		AbstractJxAction: AbstractJxAction,
		Click: ClickAction,
		DragAndDrop: DragAndDropAction,
		Focus: FocusAction,
		Hover: HoverAction,
		Type: TypeAction
	},
	By: {
		_: By,
		Javascript: ByJavascript,
	},
	JxUtils: JxUtils,
	Users: Users,
	test: test
}

exports = module.exports = SPE;


