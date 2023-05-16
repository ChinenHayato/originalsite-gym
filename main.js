"use strict";

let nav = document.querySelector("#navArea");
let inner = document.querySelector(".inner");
let btn = document.querySelector(".menu_btn");
let mask = document.querySelector("#mask");
inner.onclick = () => {
    nav.classList.toggle("open");
}
btn.onclick = () => {
    nav.classList.toggle("open");
}
mask.onclick = () => {
    nav.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.hash),
            adjust = 100,
            offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    })
});

jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});