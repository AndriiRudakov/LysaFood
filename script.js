const shedevrItemTitle = document.querySelectorAll('shedevrTitle');

const shedevrItemData1 = ["Kebab 1", "100", "Andrii"];

localStorage.setItem('key1', shedevrItemData1);

shedevrItemTitle.innerHTML = "Hello";

console.log(localStorage.getItem('key1'));