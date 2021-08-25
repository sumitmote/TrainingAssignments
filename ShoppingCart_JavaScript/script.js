//Add Product Code Start Here -----

//Input Box for Product Name validation.
function charOnly(event) {
  var key = event.keyCode;
  return (
    (key >= 65 && key <= 90) ||
    key == 32 ||
    key == 08 ||
    (key >= 48 && key <= 57)
  );
}

//Function will fetch the element referneces of add product and push element into the array and local storage.
function fetchAndUpdate() {
  location.reload();
  let pname = document.getElementById("name").value;
  let pdetail = document.getElementById("details").value;
  let pimg = document.getElementById("file").files[0].name;
  let pquant = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;

  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([pname, pdetail, pimg, pquant, price]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    let itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([pname, pdetail, pimg, pquant, price]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
  location.reload();
}

//Function will update the exisitng array
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
}

add = document.getElementById("add");
add.addEventListener("click", fetchAndUpdate);
var itemJsonArray;
update();

//Function will perform clearing local storage
function clearStorage() {
  if (confirm("Do you areally want to clear?")) {
    console.log("Clearing the storage");
    localStorage.clear();
    location.reload();
    update();
  }
}

//Add Product Code End Here -----

//Product List Code Start Here-----

var showHhtml = "";
var output = document.getElementById("output");
var totalCart = document.getElementById("cart_show");
var shopCart = [];
var ProductItems = [];

window.onload = MainFunction;
function MainFunction() {
  ProductItems = [...itemJsonArray];
  itemListFun();

  var cartBtn = document.querySelectorAll(".add_to_cart_btn");

  for (var x = 0; x < cartBtn.length; x++) {
    cartBtn[x].addEventListener("click", function (e) {
      e.preventDefault();
      addItem();
    });
  }
  outputCart();
}

function addItem() {
  var iteminfo = event.target.dataset;
  console.log(iteminfo);

  iteminfo.qty = 1;
  var itemcartMin = false;

  shopCart.forEach(function (single) {
    if (single.id == iteminfo.id) {
      single.qty = parseInt(single.qty) + parseInt(iteminfo.qty);
      itemcartMin = true;
    }
  });

  if (!itemcartMin) {
    shopCart.push(iteminfo);
    console.log(shopCart);
  }

  localStorage.setItem("scart", JSON.stringify(shopCart));

  outputCart();
}


//Function will populate the cart elements in table format.
function outputCart() {
  if (localStorage.getItem("scart") != null) {
    shopCart = JSON.parse(localStorage.getItem("scart"));
  }
  var cartOutput =
    '<table class="table table-bordered table-hover table-striped"><thead><th>Quantity</th><th> Product </th><th>Price</th><th>Total</th> <th>Remove</th></thead>';
  var total = 0;
  shopCart.forEach(function (single) {
    console.log(single);
    var stotal = single.qty * single.price;
    total += stotal;
    cartOutput +=
      '<tr data-row="' + single.id +
      '"><td>' +      single.qty +
      "</td><td>" +      single.name +
      "</td><td>" +
      single.price +
      " Rs." +
      "</td><td>" +
      stotal +
      '</td><td><span class=" btn btn-danger btn-sm removeItem"  onclick="removeitem(' +
      single.id +
      ')" ><i class="fa fa-remove"></i></span></td></tr>';
  });

  cartOutput +=
    '<tr><td class="totalPrice bg-success " colspan=6>Total Amount : ' +
    total +
    " Rs.";
  ("</td></tr></table>");
  totalCart.innerHTML = cartOutput;
}

function itemListFun() {
  const copy = [...itemJsonArray];
  console.log(copy);
  var x = 0;
  let row;
  var i;
  ProductItems.forEach(function (item) {
    for (i = 0; i < 1; i++) {
      showHhtml += `<div class="col-md-4">
		<div class="item_wrapper border border-dark">
			<img class="img  container-fluid" src="${item[2]}" alt="product" />
			<div class="item_details">
        <h4> ${item[0]} </h4>
				<h3> ${item[1]} </h3>
				 <p> ${item[3]} Available Stock</p>
				<p>  ${item[4]} Rs.</p>
        
				<h3>
					<a href="#" class="add_to_cart_btn btn btn-warning btn-sm" data-price="${
            item[4]
          }" 
						data-id="${x}" data-name="${item[0]}" data-s="${item[1]}  "${item[3]}"="${
        item[3] - 1
      }"
      }"
      }">
						Add To Cart
					</a>
				</h3>
			</div>
		</div>
	</div>`;
    }
    x++;
  });
  output.innerHTML += showHhtml;
}

function removeitem(id) {
  for (var i = 0; i < shopCart.length; i++) {
    if (shopCart[i].id == id) {
      var rem = shopCart.splice(i, 1);
    }
  }
  localStorage.setItem("scart", JSON.stringify(shopCart));
  outputCart();
}
