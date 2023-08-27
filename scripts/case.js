const coloredBoxes = document.querySelectorAll('.colorbox');

window.addEventListener('scroll', () => {
	coloredBoxes.forEach((box) => {
		if (box.getBoundingClientRect().top <= document.body.scrollTop) {
            console.log(box.dataset.color);
			document.body.style.backgroundColor = box.dataset.color;
		}
	});
});
