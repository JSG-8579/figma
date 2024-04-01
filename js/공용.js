
const elMenuIcon = document.querySelector('.menu_icon'),
    elMenuBar = document.querySelector('.MenuBar '),
    elXbar = document.querySelector('.Xbar'),
    elSearchBar = document.querySelector('.SearchBar'),
    elSearchOn = document.querySelector('.Search_icon'),
    elSearchOff = document.querySelector('.SearchBar a'),
    elSearchImg = document.querySelector('.SearchBar a img'),
    elSearchInput = document.querySelector('.SearchBar input');

asd.onclick = function () {
    elSearchBar.classList.toggle('active');
    elSearchInput.value = '';
}

elMenuIcon.onclick = function () {
    elMenuBar.classList.toggle('active');
}

elXbar.onclick = function () {
    elMenuBar.classList.remove('active');

}

elSearchOn.onclick = function () {
    elSearchBar.classList.toggle('active');
    elSearchInput.value = '';
}

elSearchOff.onclick = function () {
    elSearchBar.classList.add('active');
    if (elSearchInput.value == '') {
        alert('입력해주세요!');
    } else {
        elSearchBar.classList.remove('active');
    }

}

window.addEventListener('resize', function () {
    let ww = window.innerWidth;
    if (ww >= 760) {
        elSearchBar.classList.remove('active');
        elMenuBar.classList.remove('active');
    }
});

