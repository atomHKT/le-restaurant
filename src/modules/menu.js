import { createDomElem, displayScrollArrows } from "./utilities";
import '/dist/styles/menu.css';

const renderMenu = (domSection) => {
  const menu = createDomElem("section", "menu");
  const container = createDomElem("div", "", "container", "");
  const scrollUp = createDomElem("div", "", "scrollUp", "");
  const upIcon = createDomElem("i", "", ["fas", "fa-arrow-circle-up"]);
  const wrapper = createDomElem("div", "", "wrapper", "");
  const h2 = createDomElem("h2", "", "", "Menu");
  const allMenus = createDomElem("div", "", "menu-container", "");
  const starters = createDomElem(
    "div",
    "starters",
    "tile",
    "<h3>Starters</h3>"
  );
  const mains = createDomElem("div", "mains", "tile", "<h3>Main Dishes</h3>");
  const desserts = createDomElem(
    "div",
    "desserts",
    "tile",
    "<h3>Desserts</h3>"
  );
  const drinks = createDomElem("div", "drinks", "tile", "<h3>Drinks</h3>");
  const scrollDown = createDomElem("div", "", "scrollDown", "");
  const downIcon = createDomElem("i", "", ["fas", "fa-arrow-circle-down"]);
  domSection.appendChild(menu);
  menu.appendChild(container);
  container.appendChild(scrollUp);
  scrollUp.appendChild(upIcon);
  container.appendChild(wrapper);
  wrapper.appendChild(h2);
  wrapper.appendChild(allMenus);
  allMenus.appendChild(starters);
  allMenus.appendChild(mains);
  allMenus.appendChild(desserts);
  allMenus.appendChild(drinks);

  for (let i = 0; i < 10; i++) {
    let item = createDomElem("div", "", "item", "");
    let dish = createDomElem("div", "", "dish", "Starter");
    let join = createDomElem("div", "", "join", "");
    let price = createDomElem("div", "", "price", "9.99$");
    starters.appendChild(item);
    item.appendChild(dish);
    item.appendChild(join);
    item.appendChild(price);
  }
  for (let i = 0; i < 15; i++) {
    let item = createDomElem("div", "", "item", "");
    let dish = createDomElem("div", "", "dish", "Main Dish");
    let join = createDomElem("div", "", "join", "");
    let price = createDomElem("div", "", "price", "5.99$");
    mains.appendChild(item);
    item.appendChild(dish);
    item.appendChild(join);
    item.appendChild(price);
  }
  for (let i = 0; i < 7; i++) {
    let item = createDomElem("div", "", "item", "");
    let dish = createDomElem("div", "", "dish", "Dessert");
    let join = createDomElem("div", "", "join", "");
    let price = createDomElem("div", "", "price", "4.99$");
    desserts.appendChild(item);
    item.appendChild(dish);
    item.appendChild(join);
    item.appendChild(price);
  }
  for (let i = 0; i < 12; i++) {
    let item = createDomElem("div", "", "item", "");
    let dish = createDomElem("div", "", "dish", "Drink");
    let join = createDomElem("div", "", "join", "");
    let price = createDomElem("div", "", "price", "2.99$");
    drinks.appendChild(item);
    item.appendChild(dish);
    item.appendChild(join);
    item.appendChild(price);
  }
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

	return menu;
};

export default renderMenu;
