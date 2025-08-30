body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}
.products {
  display: flex;
  gap: 20px;
  padding: 20px;
}
.product {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 6px;
}
#cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  background: #f9f9f9;
  box-shadow: -2px 0 5px rgba(0,0,0,0.2);
  padding: 20px;
  transition: right 0.3s;
  overflow-y: auto;
}
#cart.open {
  right: 0;
}
#checkout-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#checkout-form input, 
#checkout-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
}
#checkout-form button {
  background: black;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
}
#checkout-form button:hover {
  background: #444;
}
