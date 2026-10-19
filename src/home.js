export function loadHome() {
  const content = document.querySelector("#content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Bienvenido a Restaurante Sabor Latino 🍲";

  const description = document.createElement("p");
  description.textContent =
    "El mejor lugar para disfrutar de la comida casera con el toque tradicional y la más alta calidad de ingredientes.";

  const hours = document.createElement("p");
  hours.innerHTML =
    "<strong>Horarios:</strong> Lunes a Domingo de 12:00 PM - 10:00 PM";

  homeDiv.appendChild(title);
  homeDiv.appendChild(description);
  homeDiv.appendChild(hours);
  content.appendChild(homeDiv);
}
