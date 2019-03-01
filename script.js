function toggleHideHome() {
    $('main').find('.home').toggleClass('js-hide', false);
    $('main').find('.about').toggleClass('js-hide', true);
    $('main').find('.projects').toggleClass('js-hide', true);
    $('main').find('.contact').toggleClass('js-hide', true);
    console.log("ran toggleHideHome");
}

function toggleHideAbout() {
    $('main').find('.home').toggleClass('js-hide', true);
    $('main').find('.about').toggleClass('js-hide', false);
    $('main').find('.projects').toggleClass('js-hide', true);
    $('main').find('.contact').toggleClass('js-hide', true);
    console.log("ran toggleHideAbout");
}

function toggleHideProjects() {
    $('main').find('.home').toggleClass('js-hide', true);
    $('main').find('.about').toggleClass('js-hide', true);
    $('main').find('.projects').toggleClass('js-hide', false);
    $('main').find('.contact').toggleClass('js-hide', true);
    console.log("ran toggleHideProjects");
}

function toggleHideContact() {
    $('main').find('.home').toggleClass('js-hide', true);
    $('main').find('.about').toggleClass('js-hide', true);
    $('main').find('.projects').toggleClass('js-hide', true);
    $('main').find('.contact').toggleClass('js-hide', false);
    console.log("ran toggleHideHome");
}

function handleHomeTab() {
    $('.nav-list').on('click', '#home', function(event) {
    console.log("ran handleHomeTab");
    toggleHideHome();
    location.reload();
    });
}

function handleAboutTab() {
    $('.nav-list').on('click', '#about', function(event) {
    console.log("ran handleAboutTab");  
    toggleHideAbout();
    openHideMenu();
    });
}

function handleProjectsTab() {
    $('.nav-list').on('click', '#projects', function(event) {
    console.log("ran handleProjectsTab");  
    toggleHideProjects();
    openHideMenu();
    });
}

function handleContactTab() {
    $('.nav-list').on('click', '#contact', function(event) {
    console.log("ran handleContactTab");  
    toggleHideContact();
    openHideMenu();
    });
}

function openHideMenu() {
    $('nav').find('.nav-list').toggleClass('js-menu');
}

function handleHamburgerMenu() {
    $('.navbar').on('click', '.hamburger', function(event) {
        console.log("ran handleHamburgerMenu");
        openHideMenu();
    });
}

function handleIconClick() {
    $('.navbar').on('click', '.icon', function(event) {
        location.reload();
    })
}

function runPortfolio() {
    handleHomeTab();
    handleAboutTab();
    handleProjectsTab();
    handleContactTab();
    handleHamburgerMenu();
    handleIconClick();
}

$(runPortfolio);