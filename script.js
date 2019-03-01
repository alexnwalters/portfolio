
function openHideMenu() {
    $('nav').find('.nav-list').toggleClass('js-menu');
}

function handleHamburgerMenu() {
    $('.navbar').on('click', '.hamburger', function(event) {
        openHideMenu();
    });
}

function handleSectionClick() {
    $('.nav-list').on('click', 'a', function(event) {
    openHideMenu();
    });
}

function runPortfolio() {
    handleHamburgerMenu();
    handleSectionClick();
}

$(runPortfolio);