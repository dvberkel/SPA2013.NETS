(function($){
    $(function(){
        $("textarea.code").snippits({
            onFinish : function(){
		$.deck('.slide');
	    }
        })

	$("#toc").toc({
	    "selectors" : "h2",
	    "container" : "body",
	    "smoothScrolling" : false,
	    "prefix" : "toc",
	    "highlightOnScroll" : false,
	    "anchorName": function(i, heading, prefix) {
		var name = prefix + "-" + $(heading).parents("section").attr("id");
		return name;
	    }
	}).decktoc();

	$(".gallery").gallery({ duration : 2000 });

	var adventure = new SPA.Adventure([
	    new SPA.Location('You are entirely enveloped by thick clouds hindering your progress. You gasp for air without effect. You feel nauseous and you wish you were in the comfort of your comely home. The path to the west slopes ever upward, the path to the east slopes invitingly downward'),
	    new SPA.Location('Clouds surround you and obscure your view. Your breathing becomes heavier with every step. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('You are in a field clear of trees. To the west clouds seem to form. There is a forest to the east. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('In the forest that you are in the trees are far apart. Looking to the west there seems to be a clearing. The forest to the east is getting thicker. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('You find yourself in a forest full of pine trees. All the trees look alike. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('The forest you are in holds a mixture of trees. To the west pine trees seem more prevalent. Mighty oaks stand in the east. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('You are in an oak forest. A squirrel sprints up a tree when you pass. The forest to the west is dark and damp. A bright light shines in the east. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('You stand in a beautiful meadow. A number of cows is standing around chewing grass. To the west you see a forest. The meadow continues in the east. The path to the west slopes upward, the path to the east slopes downward'),
	    new SPA.Location('You find yourself in a valley of sorts. You spot  peculiar figure up ahead. Upon coming closer it seems to be a gnome guarding a pot of gold. Both the path west and to the east slope upward.'),
	    new SPA.Location('The ridge you are on gives a clear view of your surrounding. A lush green meadow unfolds to the west. To the east a beautiful lake beckons you. Both the paths to the west and the east slope downwards.'),
	    new SPA.Location('You stop by a great lake. The water is clear and seems to invite you to take a dive. A oddly familiar man greets you. "Welcome weary traveller, rest here for you found what you were looking for." Instinctly you know the man is right. A place to rest is all you need. Both the path to the west and east slope upward'),
	    new SPA.Location('The grass stops abruptly and dark rock continues in its stead. There is a lake to the west that sparkles in the sun. To the east a rocky terrain lays. The path to the west slopes downward, the path to the east slopes upward'),
	    new SPA.Location('Rocks rise all around you. You navigate the cracks with every increasing difficulty. The path to the west slopes upward, the path to the east slopes downward'),
	], 4);
	new SPA.AdventureView('#adventure', adventure);
    })
})(jQuery, SPA);
