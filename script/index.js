const lightBtn = document.querySelector('.lightBtn');
const body = document.querySelector('body');
const download = document.querySelector('.download');
const searchBox = document.querySelector('.search-box');
const adBox = document.querySelector('.adBox');
const boardBox = document.querySelector('.boardBox');
const boardCon = document.querySelectorAll('.board-content');
const footerLogo = document.querySelector('.footer-logo');

let imgCount = true;

lightBtn.addEventListener('click',function(){
    body.classList.toggle('active');
    download.classList.toggle('active');
    searchBox.classList.toggle('active');
    adBox.classList.toggle('active');
    boardBox.classList.toggle('active');
    if(imgCount == true) { 
        lightBtn.setAttribute('src','./images/icon-darkmode.svg');
        footerLogo.setAttribute('src','./images/icon-opgglogo-gray.svg');
        imgCount = false;
    }
    else {
        lightBtn.setAttribute('src','./images/icon-lightmode.svg');
        footerLogo.setAttribute('src','./images/opgglogo.svg');
        imgCount = true;
    }
    boardCon.forEach(function(board,i){
        board.classList.toggle('active');
    })
})