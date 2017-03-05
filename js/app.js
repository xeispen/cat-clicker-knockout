// Model is defined within the view model
// Functionality is seperate

// KO handles view to model and model to view

var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('reddit.com');
	this.nickNames = ko.observableArray([
		{name: 'Lebron'},
		{name: 'Chris'},
		{name: 'Deandre'},
		{name: 'Jimmy'}
		]);

	// Computed observable
	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return 'Kitten'
		} else if (this.clickCount() < 20) {
			return 'Teen'
		} else {
			return 'Cat'
		};
	},this);
}

var ViewModel = function() {
	// Stores current cat in a KO observable
	// this. represents ViewModel
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
};


ko.applyBindings(new ViewModel());