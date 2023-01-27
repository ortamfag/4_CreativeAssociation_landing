const titleTexts = { 
    1: 'Производство', 
    2: 'Сценарии', 
    3: 'Визуальные <br> эффекты', 
    4: 'Постпродакшн' 
};

const title = document.getElementById('title');
const titleBody = document.querySelector('.header__title');
const titleBracketSVG = document.querySelectorAll('.header__title--svg');

const headerPictures = document.querySelectorAll('.header__item');

headerPictures.forEach((picture) => {
    const pictureToTitleID = picture.dataset.title;
    const currTitleText = titleTexts?.[pictureToTitleID] || '';

    picture.addEventListener('mouseover', () => {
        if (title) {
            title.innerHTML = currTitleText;
        }

        if (titleBody) {
            titleBody.className = `header__title header__title--${pictureToTitleID}`;
        }

        if (titleBracketSVG) {
            titleBracketSVG.forEach((titleBracketSVGItem) => {
                titleBracketSVGItem.className = `header__title--svg header__title--svg${pictureToTitleID}`;
            });
        }
    });
});
