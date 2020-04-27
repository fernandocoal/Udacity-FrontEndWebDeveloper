/* Navigation bar */
function createNavigationBar() {

    const navigationItems = ['Packages', 'Tips', 'About', 'Footer'];

    const ul = document.querySelector('ul')

    for (let navItem of navigationItems) {
        let li = document.createElement("li");
        if (navItem == 'Footer') {
            li.innerHTML += `<a href="#content-Footer"><p>${navItem}</p></a>`;
            li.id = navItem;
            ul.appendChild(li);
        }
        else {
            li.innerHTML += `<a href="#content-${navItem}"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = `navigation-${navItem} box`;
            ul.appendChild(li);
        }

    }

}

createNavigationBar();

/* Content Sections */
function createSec() {

    const sectionNames = ['Packages', 'Tips', 'About', 'Logo'];

    const content = document.getElementById('article');

    for (let sectionName of sectionNames) {
        section = document.createElement("section");
        section.className = "content box";
        section.id = `content-${sectionName}`;
        content.appendChild(section);
    }

}
createSec();


/*Creating the Announcement/publicity*/
function creatAnnoucement() {

    const announcementCards = [
        {
            title: "Venice",
            description: "\
            The romantic city of Venice is located in the Veneto region of Italy — \
            one of the northernmost states. This ancient and historically important city was originally \
            built on 100 small islands in the Adriatic Sea. \
            Instead or roads, Venice relies on a series of waterways and canals.",
            price:"250€"
        },
        {
            title: "Paris",
            description: "When it comes to visiting Paris, there are an abundance of reasons \
            to get yourself to the most romantic city in the world. From the ease of getting to \
            the French capital, to the city's rich and opulent history, to the changing of the seasons, \
            never has there been a better time to cross the channel.",
            price:'<span style="text-decoration: line-through; color: gray">300€ </span>200€',
        },
        {
            title: "Madrid",
            description: "In case you want to discover what Spain is truly like, \
            a visit to the more traditional city of Madrid is a better idea than heading to Barcelona.",
            price:"150€"
        },
        {
            title: "Liege",
            description: "Liège, a city along the Meuse River in Belgium’s French-speaking Wallonia region, has long been a commercial and cultural hub. Its old town is filled with landmarks dating to the medieval era, including the Romanesque Church of St. Bartholomew.",
            price:"100€"
        }];
    const titleHead = document.getElementById('content-Packages');

    for (let announcementCard of announcementCards) {
        announce = document.createElement("div");
        announce.className = "articleCards";
        announce.id=announcementCard.title;
        announce.innerHTML = `<img src="images/${announcementCard.title}.jpg" alt="${announcementCard.title}"><p class="announcementName">${announcementCard.title}</p><p class="description">${announcementCard.description}</p><p><strong>${announcementCard.price}</strong></p>`
        titleHead.appendChild(announce);
    }
}

creatAnnoucement();

/*Creating the Announcement/publicity*/
function creatTips() {

    const tipCards = [
        {
            title: "Always pack a towel",
            description: "It’s the key to successful galactic hitchhiking and plain common sense. \
            You never know when you will need it, whether it’s at the beach, on a picnic, or \
            just to dry off. While many hostels offer towels, you never know and carrying a \
            small towel won’t add that much weight to your bag.",
        },
        {
            title: "Take an extra bank card and credit card with you",
            description: "Disasters happen. It’s always good to have a backup in case you \
            get robbed or lose a card. You don’t want to be stuck somewhere new without \
            access to your funds. I once had a card duplicated and a freeze put on it.",
        },
        {
            title: "Always visit the local tourism office.",
            description: "They know about everything going on in town. \
            They can point you to free activities, special events happening during your stay, \
            and everything in between.",
        },
        {
            title: "Always carry a lock.",
            description: "They come in handy, especially when you stay in dorms and \
            need to lock your stuff up.",
        }];

    const tipText = document.getElementById('content-Tips');
    const tipHead = document.getElementById('content-Tips');
    var value=0;
    
    tipHead.innerHTML = "<h3>Here some nice tips for your best experience</h3>";

    for (let tipCard of tipCards) {
        tip = document.createElement("ol");
        value++;
        tip.className = "tipCards";
        tip.innerHTML = `<li class="tipName"><strong>${value} - ${tipCard.title}: </strong>${tipCard.description}</li>`
        tipText.appendChild(tip);
    }
    }

creatTips();

/* About Section */
function createAbout() {
    const aboutText = document.createElement('div');
    const about = document.getElementById('content-About');
    aboutText.innerHTML = "<h2>We’re an experienced team ready to propose you the best \
    packages available for your dream travel.</h2>";
    aboutText.className = "aboutText box";
    about.appendChild(aboutText);
}

createAbout();
 
//creation of logo
function addLogo(){
    const logoCards = [{title: "Logo"}];
    
    const logoHead = document.getElementById('content-Logo');

    for (let logoCard of logoCards) {
        logo = document.createElement("div");
        logo.className = "logoCard";
        logo.id=logoCard.title;
        logo.innerHTML = `<img src="images/${logoCard.title}.png">`
        logoHead.appendChild(logo);

    
}}

addLogo(); 

/*!
 * Determine if an element is in the viewport
*/
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var Tips = document.getElementById('content-Tips');
var menuTips=document.getElementById('Tips');

window.addEventListener('scroll', function (event) {
	if (isInViewport(Tips)) {
        menuTips.classList.add("active");
	} else {
    menuTips.classList.remove("active");
  }
}, false);

var Packages = document.getElementById('content-Packages');
var menuLogo=document.getElementById('Packages');

window.addEventListener('scroll', function (event) {
	if (isInViewport(Packages)) {
     menuLogo.classList.add("active");
	} else {
 menuLogo.classList.remove("active");
  }
}, false);

var About = document.getElementById('content-About');
var menuAbout=document.getElementById('About');

window.addEventListener('scroll', function (event) {
	if (isInViewport(About)) {
        menuAbout.classList.add("active");
	} else {
    menuAbout.classList.remove("active");
  }
}, false);

var Logo = document.getElementById('content-Footer');
var menuLogo=document.getElementById('Footer');

window.addEventListener('scroll', function (event) {
	if (isInViewport(Logo)) {
     menuLogo.classList.add("active");
	} else {
 menuLogo.classList.remove("active");
  }
}, false);