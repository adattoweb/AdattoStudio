const buyBtn = document.querySelector('.buy-button');
const zona = document.querySelector('.card-zona')
const close = document.querySelector('.card-close-img')

buyBtn.addEventListener('click', function () {
	zona.classList.toggle('active');
})
close.addEventListener('click', function () {
	zona.classList.toggle('active');
})