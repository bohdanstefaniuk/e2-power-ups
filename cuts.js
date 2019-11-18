function initAllCuts() {
	var $cutButtons = document.getElementsByClassName("cut-button");
	for (let cutButton of $cutButtons) {
		initCut(cutButton);
	}
}

function initCut(button, cut) {
	var content = button.nextElementSibling;

	if (!content || !content.classList.contains("cut-content")) {
		return;
	}

	setButtonOpenState(button, false);
	addOpenCloseHandler(button, content);
}

function addOpenCloseHandler(button, content) {
	var buttonText = button.innerText;
	button.addEventListener("click", function() {
		openCloseHandler(button, content, buttonText);
	});
}

function openCloseHandler(button, content, buttonText) {
	if (getIsButtonOpen(button)) {
		hideCutContent(button, content, buttonText);
	} else {
		showCutContent(button, content, buttonText);
	}
}

function hideCutContent(button, content, buttonText) {
	content.classList.remove("visible");
	button.innerText = buttonText;
	setButtonOpenState(button, false);
}

function showCutContent(button, content, buttonText) {
	content.classList.add("visible");
	setButtonOpenState(button, true);
	button.innerText = "Скрыть";
}

function setButtonOpenState(button, state) {
	button.setAttribute("data-is-open", state);
}

function getIsButtonOpen(button) {
	return (button.dataset.isOpen == "true")
}