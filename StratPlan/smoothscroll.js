$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        // const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
    }
});

//Scroll magic code for goals and facts section
var controller = new ScrollMagic.Controller();

var plan_tn = new TimelineMax();
plan_tn.to("#plan", 2, {opacity:1});
	var scene = new ScrollMagic.Scene({
		triggerElement: "#plan"
	})
	.setTween(plan_tn).addTo(controller);

var goal_one = new TimelineMax();
goal_one.from("#goal_trans_1", 1, {xPercent:1000}).to("#goal_trans_1", 1, {xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: "#goal_trans_1",
		reverse:false
	})
	.setTween(goal_one).addTo(controller);

var goal_two = new TimelineMax();
goal_two.from("#goal_trans_2", 1.5, {xPercent:-1000}).to("#goal_trans_2", 1.5, {xPercent:0})
	.to("#goal_trans_2", 1,{opacity:1});
	var scene = new ScrollMagic.Scene({
		triggerElement: "#goal_trans_2",
		reverse:false
	})
	.setTween(goal_two).addTo(controller);

var goal_three = new TimelineMax();
goal_three.from("#goal_trans_3", 1.5, {xPercent:1000}).to("#goal_trans_3", 1.5, 																			{xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: "#goal_trans_3",
		reverse:false
	})
	.setTween(goal_three).addTo(controller);

var goal_four = new TimelineMax();
goal_four.from("#goal_trans_4", 1.5, {xPercent:-1000}).to("#goal_trans_4", 1.5, 																			{xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: "#goal_trans_4",
		reverse:false
	})
	.setTween(goal_four).addTo(controller);

var container_inner = new TimelineMax();
container_inner.from(".container_inner", 1, {xPercent:1000}).to(".container_inner", 1, 																				{xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".container_inner",
		reverse:false
	})
	.setTween(container_inner).addTo(controller);
	
var mandate_container = new TimelineMax();
mandate_container.from(".mandate_container", 1, {xPercent:-1000}).to(".mandate_container", 1, {xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".mandate_container",
		reverse:false
	})
	.setTween(mandate_container).addTo(controller);
	
var vision_container = new TimelineMax();
vision_container.from(".vision_container", 1, {xPercent:-1000}).to(".vision_container", 1, {xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".vision_container",
		reverse:false
	})
	.setTween(vision_container).addTo(controller);

var fcompass_container = new TimelineMax();
fcompass_container.from(".fcompass_container", 1, {xPercent:-1000}).to(".fcompass_container", 1, {xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".fcompass_container",
		reverse:false
	})
	.setTween(fcompass_container).addTo(controller);
	
var foffice_container = new TimelineMax();
foffice_container.from(".foffice_container",1, {xPercent:-1000}).to(".foffice_container", 1, {xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".foffice_container",
		reverse:false
	})
	.setTween(foffice_container).addTo(controller);

var fvalues_container = new TimelineMax();
fvalues_container.from(".fvalues_container", 1, {xPercent:-1000}).to(".fvalues_container", 1, {xPercent:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: ".fvalues_container",
		reverse:false
	})
	.setTween(fvalues_container).addTo(controller);
	
var regulations = new TimelineMax();
regulations.to("#regulations", 4, {opacity:1});
	var scene = new ScrollMagic.Scene({
		triggerElement: "#regulations",
		reverse:false
	})
	.setTween(regulations).addTo(controller);




