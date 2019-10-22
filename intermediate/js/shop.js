window.onload = listItem();

function listItem(){
for (let i = 1; i<product.length; i++) {

	var obj = product[i];
	

//productCard:
let productCard = document.createElement("div");
productCard.setAttribute("class", "product-card");


//elements in productCard:
let productCardImgDiv = document.createElement("div");
productCardImgDiv.setAttribute("class", "product-card-img");

let productCardDesc = document.createElement("div");
productCardDesc.setAttribute("class", "product-card-desc");
productCardDesc.textContent = obj.name;

let productCardPrice = document.createElement("p");
productCardDesc.setAttribute("class", "product-card-price");
productCardDesc.textContent = obj.name +" : EUR "+ obj.price;
productCardPrice.setAttribute("class", "product-card-price");

let shoppingCartButton = document.createElement("img");
shoppingCartButton.setAttribute("class", "shopping-cart-button");
shoppingCartButton.setAttribute("src", "./img/cart.png");

/*shoppingCartButton.addEventListener('click', function() {

  modal.style.display = "block";
  document.getElementById("product-description").textContent = product[i].name;
  document.getElementById("product-image").src = product[i].image;
  document.getElementById("product-preis").textContent = Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' }).format(product[i].price);

}
);*/

productCard.appendChild(productCardImgDiv);
productCard.appendChild(productCardDesc);
productCard.appendChild(productCardPrice);
productCard.appendChild(shoppingCartButton);

// elements in productCardImgDiv:

let productCardImg = document.createElement("img");
productCardImg.setAttribute("src", obj.picurl);
productCardImgDiv.appendChild(productCardImg);

//html connection:
document.getElementById("product-area").appendChild(productCard);
}
}

