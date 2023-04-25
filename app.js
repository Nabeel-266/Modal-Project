const playBtn = document.querySelector('.playBtn');
const posterImg = document.querySelector('.posterImg');
const overlay = document.querySelector('.overlay');
const modalBox = document.querySelector('.modalBox');
const closeBtn = document.querySelector('.closeBtn');
const iframe = document.querySelector('iframe');

posterImg.addEventListener('click', () => {
    overlay.classList.remove('hide');
    modalBox.classList.remove('hide');
    iframe.classList.remove('hide');
})

playBtn.addEventListener('click', () => {
    overlay.classList.remove('hide');
    modalBox.classList.remove('hide');
    iframe.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hide');
    modalBox.classList.add('hide');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/videoseries?list=PLjpp5kBQLNTSvHo6Rp4Ky0X8x_MabmKye&pause=1');
})