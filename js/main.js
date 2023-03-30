const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => 
{
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	//Local Storage
	if(document.body.classList.contains('dark'))
	{
		localStorage.setItem('dark-mode', 'true');
	}
	else
	{
		localStorage.setItem('dark-mode', 'false');
	}
});	

//Comprobacion
if(localStorage.getItem('dark-mode') === 'true')
{
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
}
else
{
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
  }

  const bindCarouselEvents = (containerId) => {
	const wrapper = document.getElementById(containerId);
	const btn_left = wrapper.getElementsByClassName('btn-left')[0]
	const btn_right = wrapper.getElementsByClassName('btn-right')[0]
	const content = wrapper.getElementsByClassName('carousel-content')[0]
	const content_scroll_width = content.scrollWidth;
	let content_scoll_left = content.scrollLeft;
	if (btn_right) {
		btn_right.addEventListener('click', () => {
			content_scoll_left += 224;
			if (content_scoll_left >= content_scroll_width) { 
				content_scoll_left = content_scroll_width;
			}
			content.scrollLeft = content_scoll_left;
		});
	}
	if (btn_left) {
		btn_left.addEventListener('click', () => {
			content_scoll_left -= 224;
			content.scrollLeft = content_scoll_left;
		});
	}

	// scroll binding
	content.addEventListener('scroll', () => {
		let scrollLeft = Math.ceil(content.scrollLeft)
		let contentScrollWidth = content.scrollWidth
		let contentWidth = content.clientWidth
		let rightEdge = (contentScrollWidth - contentWidth)
		if (scrollLeft >= rightEdge) {
			btn_right.style.display = "none"
		} else if (scrollLeft < rightEdge) {
			btn_right.style.display = "block"
		}

		if (scrollLeft == 0) {
			btn_left.style.display = "none"
		} else if (scrollLeft > 0) {
			btn_left.style.display = "block"
		}

		content_scoll_left = scrollLeft
	});
}

// javascript for scroll on click
window.addEventListener('DOMContentLoaded', function(){
	bindCarouselEvents('med-related-prod-wrapper')
});