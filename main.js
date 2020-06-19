const buttonElement = document.createElement('button')
document.body.append(buttonElement)
buttonElement.append('remove')

const mainElement = document.createElement('main')
document.body.append(mainElement)

const imgElement = document.createElement('img')
mainElement.append(imgElement)
imgElement.src = 'https://i.ytimg.com/vi/c75pb6fDSDk/hqdefault.jpg';
imgElement.className = 'img';

const anchorElement = document.createElement('a')
mainElement.append(anchorElement)
anchorElement.href = 'https://www.google.com/';
anchorElement.className = 'link';
anchorElement.append('Click me')

buttonElement.addEventListener('click', function () {
    let erase = document.querySelector('main')
    erase.remove();
});