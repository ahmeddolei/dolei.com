function addToCart(productName, price, size, color) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ productName, price, size, color });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ تمت إضافة المنتج إلى السلة");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart-list");
  let totalDiv = document.getElementById("cart-total");
  if (!cartList) return;

  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartList.innerHTML += `<div> ${item.productName} | ${item.price} IQD | ${item.size || ""} ${item.color || ""} </div>`;
  });
  totalDiv.innerHTML = "الإجمالي: " + total + " IQD";
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

function sendOrder() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) { alert("❌ السلة فارغة"); return; }
  let message = "طلب جديد من موقع DOLEI:%0A";
  cart.forEach(item => {
    message += `- ${item.productName} | ${item.size || ""} ${item.color || ""} | ${item.price} IQD %0A`;
  });
  let phone = "0770XXXXXXX";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

window.onload = displayCart;

