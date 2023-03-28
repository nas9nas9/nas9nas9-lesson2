let name = prompt("Введіть своє ім'я:");
if (name === null) {
  alert("Вхід скасований");
} else if (name === "Ім’я") {
  let password = prompt("Введіть пароль:");
  if (password === null) {
    alert("Вхід скасований");
  } else if (password === "ЛОГОС") {
    alert("Ласкаво просимо!");
  } else {
    alert("Пароль невірний");
  }
} else {
  alert("Я вас не знаю");
}