export function loadContact() {
  const content = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Contactanos 📞";

  const info = document.createElement("div");
  info.innerHTML = `
    <p><strong>Teléfono:</strong> +58 412-1234567</p>
    <p><strong>Dirección:</strong> Av. Principal, San Fernando de Apure</p>
    <p><strong>Email:</strong> contacto@saborlatino.com</p>
  `;

  contactDiv.appendChild(title);
  contactDiv.appendChild(info);
  content.appendChild(contactDiv);
}
