import { createDomElem } from "./utilities";

const renderHome = (domSection) => {
  const home = createDomElem("section", "home");
  const h1 = createDomElem("h1", "", "", "Le Restaurant");
  domSection.appendChild(home);
  home.appendChild(h1);

  return home;
};

export default renderHome;
