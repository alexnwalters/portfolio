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
    });
}

function handleAboutTab() {
    $('.nav-list').on('click', '#about', function(event) {
    console.log("ran handleAboutTab");  
    toggleHideAbout();
    });
}

function handleProjectsTab() {
    $('.nav-list').on('click', '#projects', function(event) {
    console.log("ran handleProjectsTab");  
    toggleHideProjects();
    });
}

function handleContactTab() {
    $('.nav-list').on('click', '#contact', function(event) {
    console.log("ran handleContactTab");  
    toggleHideContact();
    });
}

function runPortfolio() {
    handleHomeTab();
    handleAboutTab();
    handleProjectsTab();
    handleContactTab();
}

$(runPortfolio);