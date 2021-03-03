import { createDomElem, displayScrollArrows } from "./utilities";

const renderAbout = (domSection) => {
  const about = createDomElem("section", "about");
  const container = createDomElem("div", "", "container", "");
  const scrollUp = createDomElem("div", "", "scrollUp", "");
  const upIcon = createDomElem("i", "", ["fas", "fa-arrow-circle-up"]);
  const wrapper = createDomElem("div", "", "wrapper", "");
  const h2 = createDomElem("h2", "", "", "About");
  const p1 = createDomElem(
    "p",
    "",
    "",
    "&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor cursus mi vitae euismod. Donec dapibus urna eget diam placerat commodo. Proin venenatis rhoncus est a egestas. Nunc facilisis a ante et vestibulum. Nam vulputate nisl in ultrices finibus. Morbi eget aliquam purus. Donec a sem ut sem dignissim tempus vitae et magna. Morbi tempus erat erat, vitae tincidunt mi vulputate sit amet. Cras facilisis, lacus eu elementum ultrices, metus mauris placerat mauris, vitae aliquam quam sem eu magna. Proin volutpat lacus et ullamcorper mollis. Mauris feugiat semper mauris sit amet sodales. Cras a nibh at sem tempus vehicula vitae at nunc."
  );
  const p2 = createDomElem(
    "p",
    "",
    "",
    "&emsp;Nunc id suscipit turpis. Duis rutrum diam a tortor mattis tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mollis convallis vulputate. Nullam metus leo, faucibus at neque in, vehicula faucibus orci. Aliquam eu nulla nisl. In tristique turpis euismod dapibus venenatis. Morbi condimentum et eros nec dignissim. Mauris pulvinar metus lorem. Phasellus iaculis lectus eu pharetra imperdiet. Maecenas ut mauris odio. Duis vestibulum quis odio nec dictum. Donec sit amet dapibus ipsum. Aliquam arcu ex, tincidunt id justo a, maximus sagittis ante."
  );
  const p3 = createDomElem(
    "p",
    "",
    "",
    "&emsp;Vivamus et tincidunt neque. Pellentesque sit amet dui sed lacus pulvinar molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Duis ut dui ultricies, cursus urna nec, molestie lectus. Etiam posuere magna eget maximus mattis. Cras ac venenatis mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc lobortis ultricies est aliquet fringilla. Integer ullamcorper egestas orci a placerat. Pellentesque in odio elit. Cras sit amet auctor arcu. Donec lorem elit, tincidunt eget faucibus eu, condimentum vitae arcu. Nulla urna tortor, molestie eu metus eu, auctor convallis orci. Nam id suscipit nunc. Aliquam dictum dolor viverra purus vestibulum, eget malesuada quam vehicula."
  );
  const scrollDown = createDomElem("div", "", "scrollDown", "");
  const downIcon = createDomElem("i", "", ["fas", "fa-arrow-circle-down"]);
  domSection.appendChild(about);
  about.appendChild(container);
  container.appendChild(scrollUp);
  scrollUp.appendChild(upIcon);
  container.appendChild(wrapper);
  wrapper.appendChild(h2);
  wrapper.appendChild(p1);
  wrapper.appendChild(p2);
  wrapper.appendChild(p3);
  container.appendChild(scrollDown);
  scrollDown.appendChild(downIcon);

  // init scroll arrows display
  displayScrollArrows(wrapper, scrollUp, scrollDown);

  // update scroll arrows if content overflow after window resize
  window.addEventListener("resize", function () {
    displayScrollArrows(wrapper, scrollUp, scrollDown);
  });

  // update scroll arrows if content is scrolled
  wrapper.addEventListener("scroll", function () {
    displayScrollArrows(wrapper, scrollUp, scrollDown);
  });

  scrollUp.addEventListener("click", function () {
    wrapper.scroll({
      top: wrapper.scrollTop - 200,
      behavior: "smooth",
    });
  });

  scrollDown.addEventListener("click", function () {
    wrapper.scroll({
      top: wrapper.scrollTop + 200,
      behavior: "smooth",
    });
  });

	return about;
};

export default renderAbout;
