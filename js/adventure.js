(function($){
    SPA = {};

    SPA.Location = function Location(text){
	this.text = text;
    }

    SPA.Adventure = function Adventure(locations, startIndex){
	var currentIndex = startIndex;
	var listeners = [];

	this.currentLocation = function(){
	    return locations[currentIndex];
	};

	this.addListener = function(listener){
	    listeners.push(listener);
	};

	this.notifyListeners = function(){
	    for (var index = 0; index < listeners.length; index++) {
		listeners[index].call();
	    }
	};

	function moveWest(){
	    currentIndex -= 1;
	    if (currentIndex < 0) {
		var location = locations[0];
		locations = [location].concat(locations);
		currentIndex = 0;
	    }
	}
	function moveEast(){
	    currentIndex += 1;
	    if (currentIndex >= locations.length) {
		var location = locations[locations.length - 1];
		locations = locations.concat([location]);
		currentIndex = locations.length - 1;
	    }
	}

	this.goWest = function(){
	    moveWest();
	    this.notifyListeners();
	};
	this.goEast = function(){
	    moveEast();
	    this.notifyListeners();
	};
    }

    function LocationView(container, adventure){
	var update = function(){ container.text(adventure.currentLocation().text); };
	update();
	adventure.addListener(update);
    }

    SPA.AdventureView = function AdventureView(containerId, adventure){
	var container = $(containerId);
	container.addClass('adventure');

	var westButton = $('<button/>');
	westButton.append('West');
	westButton.click(function(){ adventure.goWest(); });

	var content = $('<div/>');
	new LocationView(content, adventure);

	var eastButton = $('<button/>');
	eastButton.append('East');
	eastButton.click(function(){ adventure.goEast(); });

	container.append(westButton);
	container.append(content);
	container.append(eastButton);
    }

    window.SPA = SPA;
})(jQuery);
