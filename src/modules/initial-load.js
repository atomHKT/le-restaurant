import {
    createDomElem
} from './utilities';

const navItemArr = ['Home', 'Menu', 'About', 'Contact'];
const socialItemArr = [
    ['facebook', "#", ['fab', 'fa-facebook']],
    ['twitter', "#", ['fab', 'fa-twitter-square']],
    ['instagram', "#", ['fab', 'fa-instagram']]
];

const renderMain = () => {
    const bodyContent = document.getElementById('content');

    // header
    const header = createDomElem('header');
    const container = createDomElem('div', '', 'container');
    const logo = createDomElem('div', '', 'logo');
    const linkLogo = createDomElem('a');
    linkLogo.href = "#home";
    const logoImg = createDomElem('img');
    logoImg.src = './images/logo-white.png';
    logoImg.alt = 'Le Restaurant Logo';
    const menuBtn = createDomElem('div', '', 'menu-btn');
    const menuIcon = createDomElem('i', '', ['fas', 'fa-bars']);
    const nav = createDomElem('nav');
    const ul = createDomElem('ul');
    const navItems = [];
    navItemArr.forEach((elem) => {
        let liTemp = createDomElem('li');
        let aTemp = createDomElem('a', '', `${elem.toLowerCase()}`, elem);
        aTemp.href = `#${elem.toLowerCase()}`;
        navItems.push([liTemp, aTemp])
    });

    // content
    const contentContainer = createDomElem('div', 'content-container');

    // social
    const sectionFollow = createDomElem('section', '', 'section-follow');
    const stickyFollow = createDomElem('div', '', 'sticky');
    const h3 = createDomElem('h3', '', 'follow-me', 'Follow Us On');
    const socialMedia = createDomElem('div', '', 'social-media');
    const socialItems = [];
    socialItemArr.forEach((elem) => {
        let aTemp = createDomElem('a');
        let iTemp = createDomElem('i', '', elem[2]);
        aTemp.href = elem[1];
        socialItems.push([aTemp, iTemp])
    });

    // footer
    const footer = createDomElem('footer');
    const stickyFoot = createDomElem('div', '', 'sticky', 'Le Restaurant &copy; 2021');


    // header
    bodyContent.appendChild(header);
    header.appendChild(container);
    container.appendChild(logo);
    logo.appendChild(linkLogo);
    linkLogo.appendChild(logoImg);
    container.appendChild(menuBtn);
    menuBtn.appendChild(menuIcon);
    header.appendChild(nav);
    nav.appendChild(ul);
    navItems.forEach(elem => {
        ul.appendChild(elem[0]);
        elem[0].appendChild(elem[1]);
    })

    // content
    bodyContent.appendChild(contentContainer);

    // social
    bodyContent.appendChild(sectionFollow);
    sectionFollow.appendChild(stickyFollow);
    stickyFollow.appendChild(h3);
    stickyFollow.appendChild(socialMedia);
    socialItems.forEach(elem => {
        socialMedia.appendChild(elem[0]);
        elem[0].appendChild(elem[1]);
    })

    // footer
    bodyContent.appendChild(footer);
    footer.appendChild(stickyFoot);


    return {
        header,
        container,
        logoImg,
        menuBtn,
        nav,
        navItems,
        contentContainer,
    }
};

export default renderMain;