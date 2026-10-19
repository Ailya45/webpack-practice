export function loadMenu() {
  const content = document.querySelector("#content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Nuestro Menú 📋";

  const items = [
    {
      name: "Pabellón Criollo",
      price: "$10",
      desc: "Arroz, carne desmechada, tajadas y caraotas.",
    },
    {
      name: "Empanadas Surtidas",
      price: "$5",
      desc: "3 empanadas de carne, pollo o queso.",
    },
    {
      name: "Hamburguesa Especial",
      price: "$8",
      desc: "Con carne artesanal, queso, tocineta y salsas de la casa.",
    },
  ];

  const menuList = document.createElement("div");
  items.forEach((item) => {
    const card = document.createElement("div");
    card.style.borderBottom = "1px solid #45475a";
    card.style.padding = "1rem 0";
    card.innerHTML = `
      <h3>${item.name} - ${item.price}</h3>
      <p>${item.desc}</p>
    `;
    menuList.appendChild(card);
  });

  menuDiv.appendChild(title);
  menuDiv.appendChild(menuList);
  content.appendChild(menuDiv);
}
