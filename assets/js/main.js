$(document).ready(function(){
    /* ---------------- NAV-LINK SCROLL BEHAVIOR (CUSTOM SCROLLSPY ) ----------- */
	var offset = parseInt($("#page-container").css("margin-top"));
	var sections = $(".nav-link").map(function(){return $(this).attr("href")}).get();
	var heights = sections.map(x => $(x).offset().top);
	var prevSection = sections[ heights.map(ht => ht - offset <= window.pageYOffset).lastIndexOf(true) ];
	$(".nav-link[href='" +  prevSection + "']").toggleClass("active");

	$(window).on("scroll", function(){
		var currentSectionIndex = heights.map(ht => ht - offset <= window.pageYOffset).lastIndexOf(true);
		var currentSection = sections[ currentSectionIndex ];
		if (prevSection!=currentSection) {
			$(".nav-link.active").toggleClass("active");
			$(".nav-link[href='" +  currentSection + "']").toggleClass("active");
			prevSection = currentSection;
		}
	});

	/* nav-link click behavior */
	$('.nav-link, .navbar-brand, #my-projects-btn').click(function(event) {
		event.preventDefault();
		$(window).scrollTop($($(this).attr('href')).offset().top - offset);
	});
});