const coloredBoxes = document.querySelectorAll('.colorbox');
const nodeImageElements = document.querySelectorAll('.node-image');

window.addEventListener('scroll', () => {
	coloredBoxes.forEach((box) => {
		if (box.getBoundingClientRect().top <= document.body.scrollTop) {
			// console.log(box.dataset.color);
			document.body.style.backgroundColor = box.dataset.color;
			nodeImageElements.forEach((node) => {
				// console.log(node);
				node.style.backgroundColor = box.dataset.color;
			});
		}
	});
});
