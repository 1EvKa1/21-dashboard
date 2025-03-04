// вывод данных из таблицы
Order.forEach(order =>
	{
	const tr = document.createElement('tr');
	const trContent =
		`
		<td data-label="Товар">${order.productName}</td>
		<td data-label="Артикул">${order.productNumber}</td>
		<td data-label="Статус заказа">${order.orderStatus}</td>
		<td data-label="Статус оплаты" class="${
			order.paymentStatus === "Не оплачен" ? 'danger' :
			order.paymentStatus === "В обработке" ? 'warning' : "success"
		}">${order.paymentStatus}</td>
		<td class="primary">Подробнее</td>
		`;
	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr);
})


// меню
const sideMenu = document.querySelector('.left'); //ищет левое меню
const menuBtn = document.querySelector('#menu-btn'); //ищет гамбургер
const closeBtn = document.querySelector('.close'); //ищет крестик

// при нажатии на гамбургер меню открывается
menuBtn.addEventListener('click', () => {
	sideMenu.style.display = "block";
});

// при нажатии на крестик меню закрывается
closeBtn.addEventListener('click', () => {
	sideMenu.style.display = "none";
});

// переключение темы
const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables');

	themeToggler.querySelector('span:nth-child(1)').classList.toggle('on');
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('on');
})