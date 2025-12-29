const currentDate = document.querySelector(".current-date"),
	previousNextIcon = document.querySelectorAll(".icons .icon"),
	daysTag = document.querySelector(".days");

let date = new Date(),
	currentYear = date.getFullYear(),
	currentMonth = date.getMonth();

const months = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro"
]

const renderCalendar = () => {
	let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
		lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
		lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(),
		lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
	console.log(`Primeiro dia do mês: ${firstDayOfMonth}`);
	console.log(`Último dia do mês: ${lastDateOfMonth}`);
	console.log(lastDayOfMonth);
	console.log(lastDateOfLastMonth);
	
	let liTag = "";
	
	for (let i = firstDayOfMonth; i > 0; i--) {
		liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
	}
	
	for (let i = 1; i <= lastDateOfMonth; i++) {
		let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
		liTag += `<li class="${isToday}">${i}</li>`;
	}
	
	for (let i = lastDayOfMonth; i < 6; i++) {
		liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
	}
	
	currentDate.innerText = `${months[currentMonth]} de ${currentYear}`;
	daysTag.innerHTML = liTag;
}

renderCalendar();

previousNextIcon.forEach((icon) => {
	icon.addEventListener('click', () => {
		currentMonth = icon.id === "previous" ? currentMonth - 1 : currentMonth + 1;
		
		if (currentMonth < 0 || currentMonth > 11) {
			date = new Date(currentYear, currentMonth, new Date().getDate());
			currentYear = date.getFullYear();
			currentMonth = date.getMonth();
		} else {
			date = new Date();
		}
		
		renderCalendar();
	});
});