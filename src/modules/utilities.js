export function createDomElem(type, id, classes, content) {
  const domElem = document.createElement(type);
  if (id) domElem.id = id;
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach((elem) => domElem.classList.add(elem));
    } else {
      domElem.classList.add(classes);
    }
  }
  if (content) domElem.innerHTML = content;

  return domElem;
}

export function displayScrollArrows (wrapper, scrollUp, scrollDown) {
	if (wrapper.scrollTop === 0) {
		scrollUp.classList.remove("active");
	} else {
		scrollUp.classList.add("active");
	}
	if (wrapper.scrollTop + wrapper.offsetHeight === wrapper.scrollHeight) {
		scrollDown.classList.remove("active");
	} else {
		scrollDown.classList.add("active");
	}
};