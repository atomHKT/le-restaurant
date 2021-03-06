import { createDomElem, displayScrollArrows } from "./utilities";
import '/dist/styles/contact.css';

const renderContact = (domSection) => {
  const contact = createDomElem("section", "contact");
  const container = createDomElem("div", "", "container", "");
  const scrollUp = createDomElem("div", "", "scrollUp", "");
  const upIcon = createDomElem("i", "", ["fas", "fa-arrow-circle-up"]);
  const wrapper = createDomElem("div", "", "wrapper", "");
  const h2 = createDomElem("h2", "", "", "Contact");
  const contactInfo = createDomElem("div", "contact-info", "", "");
  const addrContent = createDomElem(
    "span",
    "",
    "content",
    "Le Restaurant<br>123/45 PP Main Road<br>83445 Province<br>Country"
  );
  const phoneContent = createDomElem(
    "span",
    "",
    "content",
    "+123 (0) 123 456 789"
  );
  const emailContent = createDomElem(
    "span",
    "",
    "content",
    "contact@lerestaurant.com"
  );
  const map = createDomElem("div", "map", "", "");
  const scrollDown = createDomElem("div", "", "scrollDown", "");
  const downIcon = createDomElem("i", "", ["fas", "fa-arrow-circle-down"]);
  domSection.appendChild(contact);
  contact.appendChild(container);
  container.appendChild(scrollUp);
  scrollUp.appendChild(upIcon);
  container.appendChild(wrapper);
  wrapper.appendChild(h2);
  wrapper.appendChild(contactInfo);
  contactInfo.appendChild(addrContent);
  contactInfo.appendChild(phoneContent);
  contactInfo.appendChild(emailContent);
  wrapper.appendChild(map);
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

	return contact;
};

export default renderContact;
