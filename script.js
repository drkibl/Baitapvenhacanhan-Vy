<<<<<<< HEAD
const colors = [
  { name: "Dove Gray", code: "2954", hex: "#a7a69f", group: "regular", stock: true },
  { name: "Eggplant", code: "2930", hex: "#593b59", group: "regular", stock: true },
  { name: "Aqua", code: "2921", hex: "#78c7c7", group: "regular", stock: false },
  { name: "Pure Black", code: "2957", hex: "#252625", group: "regular", stock: false },
  { name: "Wicker White", code: "2894", hex: "#f1eee1", group: "regular", stock: true },
  { name: "Cayman Blue", code: "2953", hex: "#419eb2", group: "regular", stock: true },
  { name: "Cobalt Blue", code: "2926", hex: "#395e9e", group: "regular", stock: true },
  { name: "Autumn Leaves", code: "2943", hex: "#bd6e3d", group: "regular", stock: true },
  { name: "Bright Green", code: "2950", hex: "#63a748", group: "regular", stock: true },
  { name: "Bright Pink", code: "2896", hex: "#e96b9f", group: "regular", stock: true },
  { name: "Burnt Umber", code: "2909", hex: "#78513e", group: "regular", stock: true },
  { name: "Camel", code: "2945", hex: "#c2a277", group: "regular", stock: true },
  { name: "Carinal Red", code: "2900", hex: "#a83337", group: "regular", stock: true },
  { name: "Citrus Green", code: "2915", hex: "#9dbd47", group: "regular", stock: true },
  { name: "Classic Green", code: "2917", hex: "#38794d", group: "regular", stock: true },
  { name: "Coffee Latte", code: "2906", hex: "#ad8a70", group: "regular", stock: true },
  { name: "Daffodil Yellow", code: "2912", hex: "#f0d54e", group: "regular", stock: true },
  { name: "Fresh Foliage", code: "2942", hex: "#719d50", group: "regular", stock: true },
  { name: "Freshcut Grass", code: "2916", hex: "#7fa94e", group: "regular", stock: true },
  { name: "Glitter Glam Gold", code: "2958", hex: "#d8aa43", group: "glitter", stock: true },
  { name: "Glitter Royal Purple", code: "2962", hex: "#79559e", group: "glitter", stock: true },
  { name: "Glitter Sequin Silver", code: "2959", hex: "#b9bdc2", group: "glitter", stock: true },
  { name: "Glitter Turquoise", code: "2992", hex: "#55b9b6", group: "glitter", stock: true },
  { name: "Metallic 14K Gold", code: "2965", hex: "#c4a044", group: "metallic", stock: true },
  { name: "Metallic Antique Gold", code: "6302", hex: "#b78b45", group: "metallic", stock: true },
  { name: "Metallic Bronze", code: "6303", hex: "#967047", group: "metallic", stock: true },
  { name: "Metallic Rose Gold", code: "6304", hex: "#c8917c", group: "metallic", stock: true },
  { name: "Neon Glow Orange", code: "2975", hex: "#f18a3d", group: "pearl", stock: true },
  { name: "Neon Glow Pink", code: "2974", hex: "#f071a1", group: "pearl", stock: true },
  { name: "Neon Glow Yellow", code: "2976", hex: "#d9e64c", group: "pearl", stock: true },
  { name: "Pearl Aqua Moire", code: "2973", hex: "#9bd5d0", group: "pearl", stock: true },
  { name: "Pearl White", code: "2969", hex: "#e5e0d4", group: "pearl", stock: true }
];

const grid = document.getElementById("swatch-grid");
const mainImage = document.getElementById("main-image");
const price = document.getElementById("price");
const mobilePrice = document.getElementById("mobile-price");
const sku = document.getElementById("sku");
const stockBadge = document.getElementById("stock-badge");
const selectedLabel = document.getElementById("selected-color");
const quantityInput = document.getElementById("quantity");
const feedback = document.getElementById("purchase-feedback");
const cartCount = document.querySelector(".cart-button__count");
const cartButton = document.querySelector(".cart-button");
const toast = document.getElementById("toast");
const galleryAssets = {
  palette: {
    src: "images/c201002_plaid_folkart_multi-surface_12_grande.jpg",
    alt: "Bộ sưu tập nhiều màu FolkArt Multi-surface"
  },
  bottle: {
    src: "images/c201002_plaid_folkart_multi-surface_03_grande.jpg",
    alt: "Các chai màu vẽ FolkArt Multi-surface 59ml"
  },
  craft: {
    src: "images/c201002_plaid_folkart_multi-surface_06_grande.jpg",
    alt: "Bình thủy tinh trang trí bằng màu FolkArt Multi-surface"
  }
};

let selectedColor = colors[0];
let cartItems = 0;
let toastTimer;

function priceFor(color) {
  return color.group === "regular" ? "39.000₫" : "55.000₫";
}

function renderSwatches(filter = "all") {
  grid.replaceChildren();

  colors.filter((color) => filter === "all" || color.group === filter).forEach((color) => {
    const option = document.createElement("div");
    option.className = "product-swatch__option";

    const input = document.createElement("input");
    input.className = "product-swatch__input";
    input.type = "radio";
    input.name = "color";
    input.id = `color-${color.code}`;
    input.value = color.code;
    input.checked = color.code === selectedColor.code;
    input.setAttribute("aria-label", `${color.name} - ${color.code}${color.stock ? "" : " - Hết hàng"}`);

    const label = document.createElement("label");
    label.className = `product-swatch__item${color.stock ? "" : " product-swatch__item--out-of-stock"}`;
    label.htmlFor = input.id;
    label.title = `${color.name} - ${color.code}${color.stock ? "" : " (Hết hàng)"}`;

    const chip = document.createElement("span");
    chip.className = "product-swatch__color";
    chip.style.backgroundColor = color.hex;
    chip.setAttribute("aria-hidden", "true");
    label.append(chip);

    const tooltip = document.createElement("span");
    tooltip.className = "product-swatch__tooltip";
    tooltip.textContent = `${color.name} · ${color.code}${color.stock ? "" : " · Hết hàng"}`;

    input.addEventListener("change", () => selectColor(color));
    option.append(input, label, tooltip);
    grid.append(option);
  });
}

function selectColor(color) {
  selectedColor = color;
  const cost = priceFor(color);
  price.textContent = cost;
  mobilePrice.textContent = cost;
  sku.textContent = `C2010002-2-${color.code}`;
  selectedLabel.querySelector("strong").textContent = `${color.name} - ${color.code}`;
  stockBadge.classList.toggle("stock-badge--out", !color.stock);
  stockBadge.lastChild.textContent = color.stock ? "Còn hàng" : "Hết hàng";
  document.getElementById("add-to-cart").disabled = !color.stock;
  document.getElementById("mobile-add-to-cart").disabled = !color.stock;
  document.getElementById("buy-now").disabled = !color.stock;
  feedback.textContent = color.stock ? "" : "Màu này hiện đã hết hàng. Vui lòng chọn màu khác.";
}

function svgData(markup) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markup)}`;
}

function relatedIllustration(kind) {
  const art = {
    brushes: `<rect width="400" height="280" fill="#f3f0e7"/><path d="M92 215 174 60l17 8-77 158z" fill="#bb8655"/><path d="m174 68 13-27 17 9-13 27z" fill="#e1bd8b"/><path d="m151 219 68-168 18 7-64 169z" fill="#436f67"/><path d="m219 58 13-28 17 7-13 28z" fill="#e1bd8b"/><path d="m218 230 51-177 18 5-48 179z" fill="#cb6d55"/><path d="m269 58 10-29 18 5-10 29z" fill="#e1bd8b"/><text x="200" y="260" text-anchor="middle" fill="#36523d" font-family="Georgia,serif" font-size="18">ART BRUSHES</text>`,
    colors: `<rect width="400" height="280" fill="#f2eee3"/><rect x="55" y="48" width="290" height="184" rx="14" fill="#fffdf8" stroke="#e5dfd1"/><text x="200" y="78" text-anchor="middle" fill="#34523e" font-family="Georgia,serif" font-size="19">FolkArt palette</text>${["#d36f52", "#d9bd56", "#6d926d", "#689aac", "#795777", "#a7a69f", "#dab0a6", "#44443f", "#d89646", "#7d6a52", "#9aa85b", "#9d7188"].map((hex, index) => `<circle cx="${105 + (index % 6) * 39}" cy="${115 + Math.floor(index / 6) * 51}" r="14" fill="${hex}"/>`).join("")}`,
    ceramic: `<rect width="400" height="280" fill="#eee9dc"/><ellipse cx="200" cy="228" rx="100" ry="18" fill="#d9d2c3"/><path d="M130 105h140l-10 95c-2 17-14 28-34 28h-52c-20 0-32-11-34-28z" fill="#fffdf6" stroke="#ded8ca" stroke-width="4"/><path d="M175 146c9-22 31-23 42-7 12-17 33-13 34 8 1 19-35 39-35 39s-46-20-41-40z" fill="#bb6f64"/>`,
    finish: `<rect width="400" height="280" fill="#f3f0e7"/><rect x="151" y="57" width="98" height="28" rx="5" fill="#35523d"/><path d="M164 82h72v24c0 11 22 17 22 34v70c0 18-11 29-29 29h-58c-18 0-29-11-29-29v-70c0-17 22-23 22-34z" fill="#e8e5db" stroke="#d7d2c5" stroke-width="2"/><rect x="145" y="140" width="110" height="45" rx="4" fill="#fffdf7"/><text x="200" y="159" text-anchor="middle" fill="#36523d" font-family="Georgia,serif" font-size="15">FolkArt</text><text x="200" y="175" text-anchor="middle" fill="#686c61" font-family="Arial,sans-serif" font-size="8">GLOSS FINISH</text>`
  };
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280">${art[kind]}</svg>`);
}

function addToCart(quantity, itemName) {
  if (itemName === undefined && !selectedColor.stock) {
    showToast("Màu này hiện đã hết hàng.");
    return;
  }

  const amount = Math.max(1, Number(quantity) || 1);
  cartItems += amount;
  cartCount.textContent = cartItems > 99 ? "99+" : String(cartItems);
  cartButton.setAttribute("aria-label", `Giỏ hàng, ${cartItems} sản phẩm`);
  feedback.textContent = itemName
    ? `Đã thêm ${itemName} vào giỏ hàng.`
    : `Đã thêm ${amount} chai ${selectedColor.name} vào giỏ hàng.`;
  showToast(feedback.textContent);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("toast--visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("toast--visible"), 2600);
}

function updateQuantity(value) {
  quantityInput.value = Math.max(1, Number(value) || 1);
}

renderSwatches();
document.querySelectorAll("[data-count-for]").forEach((count) => {
  const filter = count.dataset.countFor;
  count.textContent = filter === "all" ? String(colors.length) : String(colors.filter((color) => color.group === filter).length);
});
document.getElementById("related-1").src = relatedIllustration("brushes");
document.getElementById("related-2").src = relatedIllustration("colors");
document.getElementById("related-3").src = relatedIllustration("ceramic");
document.getElementById("related-4").src = relatedIllustration("finish");

document.querySelectorAll(".color-filter__button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".color-filter__button--active").classList.remove("color-filter__button--active");
    button.classList.add("color-filter__button--active");
    document.querySelectorAll(".color-filter__button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderSwatches(button.dataset.filter);
  });
});

document.querySelectorAll(".gallery-thumb").forEach((button) => {
  button.addEventListener("click", () => {
    const activeThumbnail = document.querySelector(".gallery-thumb--active");
    if (activeThumbnail) activeThumbnail.classList.remove("gallery-thumb--active");
    button.classList.add("gallery-thumb--active");

    const scene = button.dataset.scene;
    mainImage.src = galleryAssets[scene].src;
    mainImage.alt = galleryAssets[scene].alt;
    document.querySelector(".image-index").innerHTML =
      `${scene === "palette" ? "01" : scene === "bottle" ? "02" : "03"} <i>/ 03</i>`;
  });
});

document.getElementById("quantity-minus").addEventListener("click", () => {
  updateQuantity(Number(quantityInput.value) - 1);
});
document.getElementById("quantity-plus").addEventListener("click", () => {
  updateQuantity(Number(quantityInput.value) + 1);
});
quantityInput.addEventListener("change", () => updateQuantity(quantityInput.value));

["add-to-cart", "mobile-add-to-cart"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => addToCart(quantityInput.value));
});
document.getElementById("buy-now").addEventListener("click", () => {
  if (!selectedColor.stock) {
    showToast("Màu này hiện đã hết hàng. Vui lòng chọn màu khác.");
    return;
  }
  addToCart(quantityInput.value);
  document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => addToCart(1, button.dataset.name));
});
=======
const colors = [
  { name: "Dove Gray", code: "2954", hex: "#a7a69f", group: "regular", stock: true },
  { name: "Eggplant", code: "2930", hex: "#593b59", group: "regular", stock: true },
  { name: "Aqua", code: "2921", hex: "#78c7c7", group: "regular", stock: false },
  { name: "Pure Black", code: "2957", hex: "#252625", group: "regular", stock: false },
  { name: "Wicker White", code: "2894", hex: "#f1eee1", group: "regular", stock: true },
  { name: "Cayman Blue", code: "2953", hex: "#419eb2", group: "regular", stock: true },
  { name: "Cobalt Blue", code: "2926", hex: "#395e9e", group: "regular", stock: true },
  { name: "Autumn Leaves", code: "2943", hex: "#bd6e3d", group: "regular", stock: true },
  { name: "Bright Green", code: "2950", hex: "#63a748", group: "regular", stock: true },
  { name: "Bright Pink", code: "2896", hex: "#e96b9f", group: "regular", stock: true },
  { name: "Burnt Umber", code: "2909", hex: "#78513e", group: "regular", stock: true },
  { name: "Camel", code: "2945", hex: "#c2a277", group: "regular", stock: true },
  { name: "Carinal Red", code: "2900", hex: "#a83337", group: "regular", stock: true },
  { name: "Citrus Green", code: "2915", hex: "#9dbd47", group: "regular", stock: true },
  { name: "Classic Green", code: "2917", hex: "#38794d", group: "regular", stock: true },
  { name: "Coffee Latte", code: "2906", hex: "#ad8a70", group: "regular", stock: true },
  { name: "Daffodil Yellow", code: "2912", hex: "#f0d54e", group: "regular", stock: true },
  { name: "Fresh Foliage", code: "2942", hex: "#719d50", group: "regular", stock: true },
  { name: "Freshcut Grass", code: "2916", hex: "#7fa94e", group: "regular", stock: true },
  { name: "Glitter Glam Gold", code: "2958", hex: "#d8aa43", group: "glitter", stock: true },
  { name: "Glitter Royal Purple", code: "2962", hex: "#79559e", group: "glitter", stock: true },
  { name: "Glitter Sequin Silver", code: "2959", hex: "#b9bdc2", group: "glitter", stock: true },
  { name: "Glitter Turquoise", code: "2992", hex: "#55b9b6", group: "glitter", stock: true },
  { name: "Metallic 14K Gold", code: "2965", hex: "#c4a044", group: "metallic", stock: true },
  { name: "Metallic Antique Gold", code: "6302", hex: "#b78b45", group: "metallic", stock: true },
  { name: "Metallic Bronze", code: "6303", hex: "#967047", group: "metallic", stock: true },
  { name: "Metallic Rose Gold", code: "6304", hex: "#c8917c", group: "metallic", stock: true },
  { name: "Neon Glow Orange", code: "2975", hex: "#f18a3d", group: "pearl", stock: true },
  { name: "Neon Glow Pink", code: "2974", hex: "#f071a1", group: "pearl", stock: true },
  { name: "Neon Glow Yellow", code: "2976", hex: "#d9e64c", group: "pearl", stock: true },
  { name: "Pearl Aqua Moire", code: "2973", hex: "#9bd5d0", group: "pearl", stock: true },
  { name: "Pearl White", code: "2969", hex: "#e5e0d4", group: "pearl", stock: true }
];

const grid = document.getElementById("swatch-grid");
const mainImage = document.getElementById("main-image");
const price = document.getElementById("price");
const mobilePrice = document.getElementById("mobile-price");
const sku = document.getElementById("sku");
const stockBadge = document.getElementById("stock-badge");
const selectedLabel = document.getElementById("selected-color");
const quantityInput = document.getElementById("quantity");
const feedback = document.getElementById("purchase-feedback");
const cartCount = document.querySelector(".cart-button__count");
const cartButton = document.querySelector(".cart-button");
const toast = document.getElementById("toast");
const galleryAssets = {
  palette: {
    src: "images/c201002_plaid_folkart_multi-surface_12_grande.jpg",
    alt: "Bộ sưu tập nhiều màu FolkArt Multi-surface"
  },
  bottle: {
    src: "images/c201002_plaid_folkart_multi-surface_03_grande.jpg",
    alt: "Các chai màu vẽ FolkArt Multi-surface 59ml"
  },
  craft: {
    src: "images/c201002_plaid_folkart_multi-surface_06_grande.jpg",
    alt: "Bình thủy tinh trang trí bằng màu FolkArt Multi-surface"
  }
};

let selectedColor = colors[0];
let cartItems = 0;
let toastTimer;

function priceFor(color) {
  return color.group === "regular" ? "39.000₫" : "55.000₫";
}

function renderSwatches(filter = "all") {
  grid.replaceChildren();

  colors.filter((color) => filter === "all" || color.group === filter).forEach((color) => {
    const option = document.createElement("div");
    option.className = "product-swatch__option";

    const input = document.createElement("input");
    input.className = "product-swatch__input";
    input.type = "radio";
    input.name = "color";
    input.id = `color-${color.code}`;
    input.value = color.code;
    input.checked = color.code === selectedColor.code;
    input.setAttribute("aria-label", `${color.name} - ${color.code}${color.stock ? "" : " - Hết hàng"}`);

    const label = document.createElement("label");
    label.className = `product-swatch__item${color.stock ? "" : " product-swatch__item--out-of-stock"}`;
    label.htmlFor = input.id;
    label.title = `${color.name} - ${color.code}${color.stock ? "" : " (Hết hàng)"}`;

    const chip = document.createElement("span");
    chip.className = "product-swatch__color";
    chip.style.backgroundColor = color.hex;
    chip.setAttribute("aria-hidden", "true");
    label.append(chip);

    const tooltip = document.createElement("span");
    tooltip.className = "product-swatch__tooltip";
    tooltip.textContent = `${color.name} · ${color.code}${color.stock ? "" : " · Hết hàng"}`;

    input.addEventListener("change", () => selectColor(color));
    option.append(input, label, tooltip);
    grid.append(option);
  });
}

function selectColor(color) {
  selectedColor = color;
  const cost = priceFor(color);
  price.textContent = cost;
  mobilePrice.textContent = cost;
  sku.textContent = `C2010002-2-${color.code}`;
  selectedLabel.querySelector("strong").textContent = `${color.name} - ${color.code}`;
  stockBadge.classList.toggle("stock-badge--out", !color.stock);
  stockBadge.lastChild.textContent = color.stock ? "Còn hàng" : "Hết hàng";
  document.getElementById("add-to-cart").disabled = !color.stock;
  document.getElementById("mobile-add-to-cart").disabled = !color.stock;
  document.getElementById("buy-now").disabled = !color.stock;
  feedback.textContent = color.stock ? "" : "Màu này hiện đã hết hàng. Vui lòng chọn màu khác.";
}

function svgData(markup) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markup)}`;
}

function relatedIllustration(kind) {
  const art = {
    brushes: `<rect width="400" height="280" fill="#f3f0e7"/><path d="M92 215 174 60l17 8-77 158z" fill="#bb8655"/><path d="m174 68 13-27 17 9-13 27z" fill="#e1bd8b"/><path d="m151 219 68-168 18 7-64 169z" fill="#436f67"/><path d="m219 58 13-28 17 7-13 28z" fill="#e1bd8b"/><path d="m218 230 51-177 18 5-48 179z" fill="#cb6d55"/><path d="m269 58 10-29 18 5-10 29z" fill="#e1bd8b"/><text x="200" y="260" text-anchor="middle" fill="#36523d" font-family="Georgia,serif" font-size="18">ART BRUSHES</text>`,
    colors: `<rect width="400" height="280" fill="#f2eee3"/><rect x="55" y="48" width="290" height="184" rx="14" fill="#fffdf8" stroke="#e5dfd1"/><text x="200" y="78" text-anchor="middle" fill="#34523e" font-family="Georgia,serif" font-size="19">FolkArt palette</text>${["#d36f52", "#d9bd56", "#6d926d", "#689aac", "#795777", "#a7a69f", "#dab0a6", "#44443f", "#d89646", "#7d6a52", "#9aa85b", "#9d7188"].map((hex, index) => `<circle cx="${105 + (index % 6) * 39}" cy="${115 + Math.floor(index / 6) * 51}" r="14" fill="${hex}"/>`).join("")}`,
    ceramic: `<rect width="400" height="280" fill="#eee9dc"/><ellipse cx="200" cy="228" rx="100" ry="18" fill="#d9d2c3"/><path d="M130 105h140l-10 95c-2 17-14 28-34 28h-52c-20 0-32-11-34-28z" fill="#fffdf6" stroke="#ded8ca" stroke-width="4"/><path d="M175 146c9-22 31-23 42-7 12-17 33-13 34 8 1 19-35 39-35 39s-46-20-41-40z" fill="#bb6f64"/>`,
    finish: `<rect width="400" height="280" fill="#f3f0e7"/><rect x="151" y="57" width="98" height="28" rx="5" fill="#35523d"/><path d="M164 82h72v24c0 11 22 17 22 34v70c0 18-11 29-29 29h-58c-18 0-29-11-29-29v-70c0-17 22-23 22-34z" fill="#e8e5db" stroke="#d7d2c5" stroke-width="2"/><rect x="145" y="140" width="110" height="45" rx="4" fill="#fffdf7"/><text x="200" y="159" text-anchor="middle" fill="#36523d" font-family="Georgia,serif" font-size="15">FolkArt</text><text x="200" y="175" text-anchor="middle" fill="#686c61" font-family="Arial,sans-serif" font-size="8">GLOSS FINISH</text>`
  };
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280">${art[kind]}</svg>`);
}

function addToCart(quantity, itemName) {
  if (itemName === undefined && !selectedColor.stock) {
    showToast("Màu này hiện đã hết hàng.");
    return;
  }

  const amount = Math.max(1, Number(quantity) || 1);
  cartItems += amount;
  cartCount.textContent = cartItems > 99 ? "99+" : String(cartItems);
  cartButton.setAttribute("aria-label", `Giỏ hàng, ${cartItems} sản phẩm`);
  feedback.textContent = itemName
    ? `Đã thêm ${itemName} vào giỏ hàng.`
    : `Đã thêm ${amount} chai ${selectedColor.name} vào giỏ hàng.`;
  showToast(feedback.textContent);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("toast--visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("toast--visible"), 2600);
}

function updateQuantity(value) {
  quantityInput.value = Math.max(1, Number(value) || 1);
}

renderSwatches();
document.querySelectorAll("[data-count-for]").forEach((count) => {
  const filter = count.dataset.countFor;
  count.textContent = filter === "all" ? String(colors.length) : String(colors.filter((color) => color.group === filter).length);
});
document.getElementById("related-1").src = relatedIllustration("brushes");
document.getElementById("related-2").src = relatedIllustration("colors");
document.getElementById("related-3").src = relatedIllustration("ceramic");
document.getElementById("related-4").src = relatedIllustration("finish");

document.querySelectorAll(".color-filter__button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".color-filter__button--active").classList.remove("color-filter__button--active");
    button.classList.add("color-filter__button--active");
    document.querySelectorAll(".color-filter__button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderSwatches(button.dataset.filter);
  });
});

document.querySelectorAll(".gallery-thumb").forEach((button) => {
  button.addEventListener("click", () => {
    const activeThumbnail = document.querySelector(".gallery-thumb--active");
    if (activeThumbnail) activeThumbnail.classList.remove("gallery-thumb--active");
    button.classList.add("gallery-thumb--active");

    const scene = button.dataset.scene;
    mainImage.src = galleryAssets[scene].src;
    mainImage.alt = galleryAssets[scene].alt;
    document.querySelector(".image-index").innerHTML =
      `${scene === "palette" ? "01" : scene === "bottle" ? "02" : "03"} <i>/ 03</i>`;
  });
});

document.getElementById("quantity-minus").addEventListener("click", () => {
  updateQuantity(Number(quantityInput.value) - 1);
});
document.getElementById("quantity-plus").addEventListener("click", () => {
  updateQuantity(Number(quantityInput.value) + 1);
});
quantityInput.addEventListener("change", () => updateQuantity(quantityInput.value));

["add-to-cart", "mobile-add-to-cart"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => addToCart(quantityInput.value));
});
document.getElementById("buy-now").addEventListener("click", () => {
  if (!selectedColor.stock) {
    showToast("Màu này hiện đã hết hàng. Vui lòng chọn màu khác.");
    return;
  }
  addToCart(quantityInput.value);
  document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => addToCart(1, button.dataset.name));
});
>>>>>>> 29b3951 (Them thu muc hinh anh)
