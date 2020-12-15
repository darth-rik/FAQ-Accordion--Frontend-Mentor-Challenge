let questions = document.querySelectorAll(".question--tab");
let answers = document.querySelectorAll(".answers");
let images = document.querySelectorAll(".img");

document.querySelectorAll(".questions").forEach(function (item) {
	item.addEventListener("click", function (e) {
		if (!e.target.closest("p") && !e.target.closest("img")) {
			return;
		}

		let questionActive = this.children[0];
		let image = this.children[1];
		let nextElement = this.nextElementSibling;
		answers.forEach((item) => {
			if (item !== nextElement) {
				item.display = "none";
				item.style.maxHeight = null;
			}
		});
		questions.forEach((item) => {
			if (item !== questionActive)
				item.classList.remove("question--tab-active");
		});
		images.forEach((item) => {
			if (item !== image) item.style.transform = "rotate(0deg)";
		});
		if (nextElement.style.display === "block") {
			nextElement.display = "none";
		} else {
			nextElement.display = "block";
		}

		if (nextElement.style.maxHeight) {
			nextElement.style.maxHeight = null;
		} else {
			nextElement.style.maxHeight = nextElement.scrollHeight + "px";
		}

		if (image.style.transform === "rotate(180deg)") {
			image.style.transform = "rotate(0deg)";
		} else {
			image.style.transform = "rotate(180deg)";
		}
		questionActive.classList.toggle("question--tab-active");
	});
});
