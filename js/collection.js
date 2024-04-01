

full.onclick = function (e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('active')
}

full1.onclick = function (e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('active')
}

full2.onclick = function (e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('active')
}

elSearchOn.onclick = function () {
    elSearchBar.classList.toggle('active');
    elSearchImg.setAttribute('src', 'image/흰돋보기.png');
    elSearchImg.setAttribute('height', '28');
    elSearchInput.value = '';
}

asd.onclick = function () {
    elSearchImg.setAttribute('src', 'image/ic-search.png');
    elSearchBar.classList.toggle('active');
    elSearchInput.value = '';
}

