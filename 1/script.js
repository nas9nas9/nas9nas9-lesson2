// ініціалізація змінної для зберігання кількості правильних відповідей
let correctAnswers = 0;

// питання №1
let answer1 = prompt("Хто з трьох мушкетерів фіхтував лівою рукою?");
if (answer1.toLowerCase() === "всі відповіді вірні") {
  correctAnswers++;
}
// питання №2
let answer2 = prompt("За італійською традицією на різдвяному столі має бути вугор. Який?");
if (answer2.toLowerCase() === "Самка") {
  correctAnswers++;
}
// питання №3
let answer3 = prompt("Від якого імені скорочене Нюра?");
if (answer3.toLowerCase() === "Анна") {
  correctAnswers++;
}
// питання №4
let answer4 = prompt("За які нагороди отримала свою назву жаба-бик");
if (answer4.toLowerCase() === "за голос") {
  correctAnswers++;
}
// питання №5
let answer5 = prompt("Хто із тварин розвозив подарунки з фінським Дідом Морозом Йоулупуккі?");
if (answer5.toLowerCase() === "Козел") {
  correctAnswers++;
}
// питання №6
let answer6 = prompt("Як перекладається з грецької перша частина слова динозавр?");
if (answer6.toLowerCase() === "Жахливий") {
  correctAnswers++;
}
// питання №7
let answer7 = prompt("Який персонаж казки Д.Родарі «Пригоди Чіполліно» мав титул герцога?");
if (answer7.toLowerCase() === "Мандарин") {
  correctAnswers++;
}
// питання №8
let answer8 = prompt("Як звали сестру Олександра I, до якої безуспішно сватався Наполеон I і яка стала королевою Нідерландів?");
if (answer8.toLowerCase() === "Анна") {
  correctAnswers++;
}
// питання №9
let answer9 = prompt("Якою фігурою окрім пішака в шахах можна зробити найперший хід?");
if (answer9.toLowerCase() === "Кінь") {
  correctAnswers++;
}
// питання №10
let answer10 = prompt("Що з 1871 року правила футболу дозволили робити воротареві?");
if (answer10.toLowerCase() === "Грати руками") {
  correctAnswers++;
}


// вивід статистики про кількість правильних відповідей з можливих 3
console.log(`Ви відповіли правильно на ${correctAnswers} з 10 запитань`);

// визначення рівня знань користувача на основі кількості набраних балів
if (correctAnswers === 10) {
  console.log("Вітаємо! Ви маєте високий рівень знань в JavaScript");
} else if (correctAnswers === 5) {
  console.log("Ви маєте середній рівень знань в JavaScript");
} else if (correctAnswers === 1) {
  console.log("Ви маєте початковий рівень знань в JavaScript");
} else {
  console.log("На жаль, ви не набрали жодного балу. Спробуйте ще раз!");
}