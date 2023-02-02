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
                titleBracketSVGItem.classList = `header__title--svg header__title--svg${pictureToTitleID}`
            });
        }
    });
});

const teleport = document.querySelector('.teleport')

function noSelect() {
    headerPictures.forEach((item) => {
        item.classList.add('noSelect')
        console.log(item)
    })
}


function Select() {
    headerPictures.forEach((item) => {
        item.classList.remove('noSelect')
    })
}

document.addEventListener('scroll', () => {
    if (window.scrollY >= 1472) {
        title.innerHTML = 'ЧЕТВЕРТОЕ <br> ТВОРЧЕСКОЕ <br> ОБЪЕДИНЕНИЕ'

        if (window.innerWidth >= 1024) {
            teleport.classList.add('visible')
        }
    } else {
        teleport.classList.remove('visible')
    }
})

teleport.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    noSelect()
    setTimeout(() => {
        Select()
    }, "2000")
})