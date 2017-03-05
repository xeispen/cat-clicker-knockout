// JSON Array
initialCats = [
{
		clickCount: 0,
		name: 'Lebron James',
		imgSrc: 'img/Lebron James.jpg',
		imgAttribution: 'reddit.com',
		nickNames: 
			[{name: 'Lebron'},
			{name: 'Baby'}]
},
{
		clickCount: 0,
		name: 'Chris Paul',
		imgSrc: 'img/Chris Paul.jpg',
		imgAttribution: 'reddit.com',
		nickNames: 
			[{name: 'Point God'},
			{name: 'CP3'}]
},
{
		clickCount: 0,
		name: 'Stephen Curry',
		imgSrc: 'img/Stephen Curry.jpg',
		imgAttribution: 'reddit.com',
		nickNames: 
			[{name: 'Threesus'},
			{name: 'Baby Faced Assassin'}]
},
{
		clickCount: 0,
		name: 'Demar Derozan',
		imgSrc: 'img/Demar Derozan.jpg',
		imgAttribution: 'reddit.com',
		nickNames: 
			[{name: 'Midrange King'},
			{name: 'DD'}]
},
{
		clickCount: 0,
		name: 'Joel Embiid',
		imgSrc: 'img/Joel Embiid.jpg',
		imgAttribution: 'reddit.com',
		nickNames: 
			[{name: 'The Process'},
			{name: 'JOJO'}]
}
]
// Model is defined within the view model
// Functionality is seperate

// KO handles view to model and model to view

// Pass object literal called data into cat constructor function
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);

	// Computed observable
	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return 'Rookie'
		} else if (this.clickCount() < 20) {
			return 'Starter'
		} else {
			return 'MVP'
		};
	},this);
}

var ViewModel = function() {
	// self always maps to this ViewModel
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	// this. represents binding context of currentCat
	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};


ko.applyBindings(new ViewModel());