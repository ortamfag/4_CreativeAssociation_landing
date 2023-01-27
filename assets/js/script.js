const title = document.getElementById('title')
const titleBody = document.querySelector('.header__title')
const headerPictures = document.querySelectorAll('.header__item')

const titleBracketSVG = document.querySelectorAll('.header__title--svg')

for (let i = 0; i < headerPictures.length; i++) {
    headerPictures[i].addEventListener('mouseover', () => {
        switch(headerPictures[i].dataset.title) {
            case '1':
                title.innerHTML = 'Производство';
                titleBody.classList.remove('header__title--3')
                titleBody.classList.remove('header__title--2')
                titleBody.classList.remove('header__title--4')
                titleBody.classList.add('header__title--1')

                for (let i = 0; i < titleBracketSVG.length; i++) {
                    titleBracketSVG[i].classList.remove('header__title--svg2')
                    titleBracketSVG[i].classList.remove('header__title--svg3')
                    titleBracketSVG[i].classList.remove('header__title--svg4')
                    titleBracketSVG[i].classList.add('header__title--svg1')
                }

                break

            case '2':
                title.innerHTML = 'Сценарии';
                titleBody.classList.remove('header__title--3')
                titleBody.classList.remove('header__title--4')
                titleBody.classList.remove('header__title--1')
                titleBody.classList.add('header__title--2')

                for (let i = 0; i < titleBracketSVG.length; i++) {
                    titleBracketSVG[i].classList.remove('header__title--svg1')
                    titleBracketSVG[i].classList.remove('header__title--svg3')
                    titleBracketSVG[i].classList.remove('header__title--svg4')
                    titleBracketSVG[i].classList.add('header__title--svg2')
                }

                break

            case '3':
                title.innerHTML = 'Визуальные <br> эффекты';
                titleBody.classList.remove('header__title--4')
                titleBody.classList.remove('header__title--2')
                titleBody.classList.remove('header__title--1')
                titleBody.classList.add('header__title--3')

                for (let i = 0; i < titleBracketSVG.length; i++) {
                    titleBracketSVG[i].classList.remove('header__title--svg1')
                    titleBracketSVG[i].classList.remove('header__title--svg2')
                    titleBracketSVG[i].classList.remove('header__title--svg4')
                    titleBracketSVG[i].classList.add('header__title--svg3')
                }
                break

            case '4':
                title.innerHTML = 'Постпродакшн'
                titleBody.classList.remove('header__title--3')
                titleBody.classList.remove('header__title--2')
                titleBody.classList.remove('header__title--1')
                titleBody.classList.add('header__title--4')

                for (let i = 0; i < titleBracketSVG.length; i++) {
                    titleBracketSVG[i].classList.remove('header__title--svg1')
                    titleBracketSVG[i].classList.remove('header__title--svg2')
                    titleBracketSVG[i].classList.remove('header__title--svg3')
                    titleBracketSVG[i].classList.add('header__title--svg4')
                }
        }
    })
}