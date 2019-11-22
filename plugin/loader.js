window.addEventListener("load",function(){
    setTimeout(function(){
        $('#pre-loader').fadeOut("500");
    }, 500);
});
(function () {
    const header = document.querySelector('.header_mobile');
   const icon = document.querySelector('.icon-container');
   icon.onclick = function () {
       header.classList.toggle('menu-open');
   }}());