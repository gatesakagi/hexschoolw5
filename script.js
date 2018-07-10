window.addEventListener("resize", function() {
    dynamicWrapElementMarginTop();
});

dynamicWrapElementMarginTop();

function dynamicWrapElementMarginTop() {
	var wrapelement = document.querySelector('.wrap');
	var heightOfwrapelement = wrapelement.offsetHeight;
	wrapelement.style.marginTop = '-' + (heightOfwrapelement / 2) + 'px';	
}
