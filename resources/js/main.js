//$(document).ready(function() {
//	$('#multiscroll').multiscroll();
//});


$(document).ready(function() {
	$('#multiscroll').multiscroll({
		verticalCentered : true,
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: '#menu',
		sectionsColor: [],
		navigation: false,
		navigationPosition: 'right',
		navigationColor: '#000',
		navigationTooltips: ['Home', 'Skills', 'Portfolio'],
		loopBottom: false,
		loopTop: false,
		css3: false,
		paddingTop: 0,
		paddingBottom: 0,
		normalScrollElements: null,
		keyboardScrolling: true,
		touchSensitivity: 5,

		//responsive
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveExpand: false,

		// Custom selectors
		sectionSelector: '.ms-section',
		leftSelector: '.ms-left',
		rightSelector: '.ms-right',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
	});
});