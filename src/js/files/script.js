// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
//========================================================================================================================================================
function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Додаємо нулі перед одиничними цифрами
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let timeString = hours + ':' + minutes;
  document.getElementById('clock').innerText = timeString;

  // Оновлюємо час кожну хвилину
  setTimeout(showTime, 1000);
}
showTime()