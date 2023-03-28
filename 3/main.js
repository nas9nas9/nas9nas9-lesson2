const monthNumber = prompt("Введіть номер місяця (від 1 до 12):");

if (monthNumber >= 1 && monthNumber <= 12) {

  let season;
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = "зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "літо";
      break;
    case 9:
    case 10:
    case 11:
      season = "осінь";
      break;
  }

  alert(`Місяць ${monthNumber} належить до пори року "${season}".`);
} else {

  alert("Неможливо визначити пору року для введеного числа.");
}