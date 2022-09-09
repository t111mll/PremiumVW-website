//------------------------------navigation bar


//toggle menu
const menu = document.getElementById("menu");
const burger_btn = document.getElementById('burger_btn');

burger_btn.onclick = function() {
    burger_btn.classList.toggle('active');
    menu.classList.toggle('active');
}

menu.onclick = function() {
    burger_btn.classList.toggle('active');
    menu.classList.toggle('active');
}
