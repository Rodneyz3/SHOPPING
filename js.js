const figurine = [
  {
    Name: "Anthony Edwards",
    Position: "SG",
    PPG: 28.8,
    Team: "Minnesota Timberwolves",
    Price: 88.92,
    IsAllStar: false,
    img: "image/ANTHONY EDWARDS.webp",
    Stock: 2,
  },
  {
    Name: "Ja Morant",
    Position: "PG",
    PPG: 19.5,
    Team: "Memphis Grizzlies",
    Price: 45.99,
    IsAllStar: false,
    img: "image/JA MORANT.avif",
    Stock: 3,
  },
  {
    Name: "Jayson Tatum",
    Position: "SF",
    PPG: 21.8,
    Team: "Boston Celtics",
    Price: 49.99,
    IsAllStar: false,
    img: "image/TATUM.png",
    Stock: 5,
  },
  {
    Name: "Ausar Thompson",
    Position: "SF",
    PPG: 9.9,
    Team: "Detroit Pistons",
    Price: 27.99,
    IsAllStar: false,
    img: "image/AUSAR THOMPSON.jpg",
    Stock: 2,
  },
  {
    Name: "Luka Doncic",
    Position: "PG",
    PPG: 33.5,
    Team: "Los Angeles Lakers",
    Price: 99.99,
    IsAllStar: true,
    img: "image/LUKA DONCIC.avif",
    Stock: 4,
  },
  {
    Name: "Jalen Duren",
    Position: "C",
    PPG: 19.5,
    Team: "Detroit Pistons",
    Price: 35.45,
    IsAllStar: true,
    img: "image/JALEN DUREN.jpg",
    Stock: 3,
  },
  {
    Name: "Victor Wembanyama",
    Position: "C",
    PPG: 25,
    Team: "San Antonio Spurs",
    Price: 123.33,
    IsAllStar: true,
    img: "image/WEMBY.jpg",
    Stock: 2,
  },
  {
    Name: "Shai Gilgeous-Alexander",
    Position: "PG",
    PPG: 31.1,
    Team: "Oklahoma City Thunder",
    Price: 110.22,
    IsAllStar: true,
    img: "image/SHAI GOAT.avif",
    Stock: 3,
  },
  {
    Name: "Jalen Brunson",
    Position: "PG",
    PPG: 26,
    Team: "New York Knicks",
    Price: 92.87,
    IsAllStar: true,
    img: "image/JALEN BRUNSON.png",
    Stock: 4,
  },
  {
    Name: "Kevin Durant",
    Position: "PF",
    PPG: 26,
    Team: "Houston Rockets",
    Price: 85.67,
    IsAllStar: true,
    img: "image/KEVIN DURANT.avif",
    Stock: 5,
  },
  {
    Name: "Donovan Mitchell",
    Position: "SG",
    PPG: 27.9,
    Team: "Cleveland Cavaliers",
    Price: 78.99,
    IsAllStar: true,
    img: "image/DONOVAN MITCHELL.jpg",
    Stock: 3,
  },
  {
    Name: "Jalen Johnson",
    Position: "PF",
    PPG: 22.5,
    Team: "Atlanta Hawks",
    Price: 65.99,
    IsAllStar: true,
    img: "image/JALEN JOHNSON.jpg",
    Stock: 2,
  },
  {
    Name: "Nikola Jokic",
    Position: "C",
    PPG: 27.7,
    Team: "Denver Nuggets",
    Price: 120.99,
    IsAllStar: true,
    img: "image/NIKOLA JOKIC.jpg",
    Stock: 4,
  },
  {
    Name: "Chet Holmgren",
    Position: "C",
    PPG: 17.1,
    Team: "Oklahoma City Thunder",
    Price: 20.99,
    IsAllStar: true,
    img: "image/CHET HOLGREM.webp",
    Stock: 3,
  },
  {
    Name: "Tyler Herro",
    Position: "SG",
    PPG: 20.5,
    Team: "Miami Heat",
    Price: 30.99,
    IsAllStar: false,
    img: "image/TYLER HERRO.jpg",
    Stock: 2,
  },
  {
    Name: "Mikal Bridges",
    Position: "SG",
    PPG: 14.4,
    Team: "New York Knicks",
    Price: 25.99,
    IsAllStar: false,
    img: "image/MIKAL BRIDGES.webp",
    Stock: 3,
  },
  {
    Name: "Cooper Flagg",
    Position: "SF",
    PPG: 21,
    Team: "Dallas Mavericks",
    Price: 132.73,
    IsAllStar: false,
    img: "image/COOPER FLAGG.jpg",
    Stock: 2,
  },
  {
    Name: "Jalen Williams",
    Position: "SF",
    PPG: 17.1,
    Team: "Oklahoma City Thunder",
    Price: 76.11,
    IsAllStar: false,
    img: "image/JALEN WILLIAMS.webp",
    Stock: 3,
  },
  {
    Name: "Patrick Williams",
    Position: "PF",
    PPG: 7,
    Team: "Chicago Bulls",
    Price: 15.99,
    IsAllStar: false,
    img: "image/PATRICK WILLIAMS.webp",
    Stock: 2,
  },
  {
    Name: "Jabari Smith Jr.",
    Position: "PF",
    PPG: 15.8,
    Team: "Houston Rockets",
    Price: 22.99,
    IsAllStar: false,
    img: "image/JABARI SMITH JR.jpg",
    Stock: 3,
  },
];

const container = document.querySelector(".container");
const cartContainer = document.querySelector("#cart-item");
const subtotal = document.querySelector("#subtotal-price");
const discount = document.querySelector("#discount-amount");
const totalEl = document.querySelector("#total-price");
// ok so we save the location where those specific boxs are displayed in variables like container and subtotal so
// we can add and manipulate it however we want

let cart = {};
let discountPercent = 0;
// cart is a place where we store M and it's value. For example Ja morant, which has the posiiton of 1 in our figurine array
// would be {1:#}, # would depend on how many times someone ordered Ja morant. For example {1:2, 2:0, 3:3, 4:4, 5:0 and so on}
// For discount Percent I am just establishing a variable with the value of 0 so I can use later.

function inject(item, index) {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h1>${item.Name}</h1>
      <p>Team: ${item.Team}</p>
      <p>Position: ${item.Position}</p>
      <p>PPG: ${item.PPG}</p>
      <p>Price: $${item.Price.toFixed(2)}</p>
      <p>Stock: ${item.Stock}</p>
      <p>IsAllStar: ${item.IsAllStar}</p>
      <img src="${item.img}" alt="${item.Name}">
      <button class="add-btn" data-index="${index}">Add to Cart</button>
    </div>`,
  );
}
// Ok so this is an function call inject. We have two perimeter, item, which we got from the showItems function
// it is is the information needed to make every single card. We also have index, which we save in data-index, to use for later
// "beforeend" makes it so each card after each card made in the past. and then the next couple of lines are js the html
// each card has.  Data index is the value we got from inside the showtime function, which is the ValueForTheIndex variable

function setupCardButtons() {
  const buttons = document.querySelectorAll(".add-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const M = btn.getAttribute("data-index");
      addToCart(M);
    });
  });
}
//Ok for my setupCardButtons function . I am creating the variable button that controls the add button for each card
// Then For each of those button, I am adding a "click" so that whenever an user clicks on it, it gets the index information from that specific
// cart and saves it into M. and then addToCart do what its supposed to do.

function showItems(list) {
  container.innerHTML = "";
  list.forEach((item) => {
    let ValueForTheIndex = figurine.indexOf(item);
    inject(item, ValueForTheIndex);
  });
  setupCardButtons();
}
// ok so, the list variable is our figurine array, we do
// for each, and making each individual object in our array into
// item. we then use that item variable(for example name:ja ppg:20 team:...)
// to make each card one by one. also indexOf is a built in function that
// finds each item's position in our figurine arrary( for example
// ja morant is 1 in our array. We keep track of this in ValueForTheIndex so i can add and remove stuff easier)
// then I inject each of the 20 cards and their inject
// and then setupCardButton would do what it is supposed to

function addToCart(M) {
  const item = figurine[M];
  const currentQty = cart[M] || 0;

  if (currentQty >= item.Stock) {
    alert(`Only ${item.Stock} of ${item.Name} in stock!`);
    return;
  }

  cart[M] = currentQty + 1;
  renderCart();
}
//Ok this might be a little confusing cuz I cooked too hard. So the function addToCart had perimeter M(the position of a card in
// the figurine array), which we got
// when the user clicks a card's button. That card's info,such as the name,ppg, and team gets stored in variable item which we
// use later. and for the second line, currentQty checks if that specific card is already in our website cart area. So if
// the user haven't ordered anything, CurrentQty would be false/undefined, and I made so if it is false,
// it is automatically 0 .... Ex: {1:0}
// And if that card is already in the cart(granted that CurrentQty would have had to be false at some point, making it 0 and making it
// possible to add numbers to it) Current Qty would become the value of M. For example {1:2}(Ja morant is 1 in our figurine arrary
// and has a value of 2(meaning the user alr ordered 2 Ja morants) Current QTY would = 2). Now that currentQty has a value, it passes
// to the next line. It checks if CurrentQty is equal to or exceeded the amount of stock A card has(Ja morant has 5 stocks). If it is more
// we alert the user we ran out of stock. if it less, we move on to the next line. Cart(M) = currentQty + 1.
//Cart[1](equal to 2) = currentQty( which is also Cart[1], value of 2) + 1  We make it so when the user adds a card, we change the value of
// M in cart to be 1 greater.
// and then renderCart do what it is supposed to do.

function removeFromCart(M) {
  if (!cart[M]) return;

  cart[M] -= 1;
  if (cart[M] <= 0) {
    delete cart[M];
  }
  renderCart();
}
// !cart[M] means that if there is nothing in the cart, the function ends and it doesn't do anything. Cart[M] - =1 means that
// the amount of a card someone orders decreases by one. For example, person ordered 2 ja morant {1:2} and cart[M] -=1 makes it
//{1:1} Once the key of the object if the cart array becomes 0, it deletes the M(it can always come back with addtoCart).
// and then it does renderCart

function updateTotals(Amount) {
  const discountAmount = Amount * (discountPercent / 100);
  const total = Amount - discountAmount;

  subtotal.textContent = `Subtotal: $${Amount.toFixed(2)}`;
  discount.textContent = `Discount: -$${discountAmount.toFixed(2)}`;
  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}
// It gets the value made from RenderCart and calculates the discounted amount. The full amount(the value we got from rendercart)
// - the discountamount gets the real total. the next 3 lines js display the value of the subtotal, discount, and total variable

function renderCart() {
  cartContainer.innerHTML = "";
  const cartKeys = Object.keys(cart);

  if (cartKeys.length === 0) {
    cartContainer.innerHTML = `<p class="empty-cart">Cart is empty.</p>`;
    updateTotals(0);
    return;
  }

  let subtotal = 0;

  cartKeys.forEach((M) => {
    const item = figurine[M];
    const qty = cart[M];
    const itemTotal = item.Price * qty;
    subtotal += itemTotal;

    cartContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="cart-row">
        <p>${item.Name} - $${item.Price.toFixed(2)} x ${qty} ($${itemTotal.toFixed(2)})</p>
        <div class="cart-controls">
          <button class="remove-btn" data-index="${M}">-</button>
          <button class="plus-btn" data-index="${M}">+</button>
        </div>
      </div>`,
    );
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.getAttribute("data-index"));
    });
  });

  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.getAttribute("data-index"));
    });
  });

  updateTotals(subtotal);
}
//CartContainer.inner Html clears all the existing items in the cart in case of bug or glitch. const cartkey =object.keys(cart
// just gets the value of all the M in out cart) If there is no M in the cart at all, it js says the cart is empty and updates all
// the total and subtotal and discount amount into 0. let subtotal = 0 js defines a variable to 0. const item gets the info of all the cards
// from our Cart(their name, price and etc). const qty gets all the value of M in out cart and saves it( effective the amount
// the user ordered of each figurine) const ItemTotal calulates the full price of each figurine x the quantity and adds it to subtotal
// it repeats until it does it for each figurine. the next couple of lines is js me making the + and - button. I didn't make it in the html
// because i want it to disappear and reappear each time the user add or removes items. the next 2 thing is just if the user clicks those
// buttons that I made, it does the add and remove function with btn.getAttribute("date-index") being M. updatetotal(subtotal) calulates
// the real price after discount

showItems(figurine);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let x = document.querySelector("#discount-input");
  let msg = document.querySelector("#discount-msg");
  let code = x.value.trim().toLowerCase();

  if (code === "save10") {
    discountPercent = 10;
    msg.textContent = "10% discount applied!";
  } else if (code === "save20") {
    discountPercent = 20;
    msg.textContent = "20% discount applied!";
  } else if (code === "save50") {
    discountPercent = 50;
    msg.textContent = "50% discount applied!";
  } else {
    discountPercent = 0;
    msg.textContent = "Invalid discount code.";
  }

  x.value = "";
  renderCart();
});

document.querySelector("#btn-all").addEventListener("click", () => {
  showItems(figurine);
});

document.querySelector("#btn-allstar").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.IsAllStar === true);
  showItems(filtered);
});

document.querySelector("#btn-not-allstar").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.IsAllStar === false);
  showItems(filtered);
});

document.querySelector("#btn-pg").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.Position === "PG");
  showItems(filtered);
});

document.querySelector("#btn-sg").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.Position === "SG");
  showItems(filtered);
});

document.querySelector("#btn-sf").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.Position === "SF");
  showItems(filtered);
});

document.querySelector("#btn-pf").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.Position === "PF");
  showItems(filtered);
});

document.querySelector("#btn-c").addEventListener("click", () => {
  const filtered = figurine.filter((item) => item.Position === "C");
  showItems(filtered);
});
// those just makes it so we delete all the existing card and the showItem function only makes the card with the filtered attribute
