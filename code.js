const figurine = [
  {
    Name: "Anthony Edwards",
    Position: "SG",
    PPG: 28.8,
    Team: "Minnesota Timberwolves",
    Price: 88.92,
    IsAllStar: false,
    Stock: 2,
  },
  {
    Name: "Ja Morant",
    Position: "PG",
    PPG: 19.5,
    Team: "Memphis Grizzlies",
    Price: 45.99,
    IsAllStar: false,
    Stock: 3,
  },
  {
    Name: "Jayson Tatum",
    Position: "SF",
    PPG: 21.8,
    Team: "Boston Celtics",
    Price: 49.99,
    IsAllStar: false,
    Stock: 5,
  },
  {
    Name: "Ausar Thompson",
    Position: "SF",
    PPG: 9.9,
    Team: "Detroit Pistons",
    Price: 27.99,
    IsAllStar: false,
    Stock: 2,
  },
  {
    Name: "Luka Doncic",
    Position: "PG",
    PPG: 33.5,
    Team: "Los Angeles Lakers",
    Price: 99.99,
    IsAllStar: true,
    Stock: 4,
  },
  {
    Name: "Jalen Duren",
    Position: "C",
    PPG: 19.5,
    Team: "Detroit Pistons",
    Price: 35.45,
    IsAllStar: true,
    Stock: 3,
  },
  {
    Name: "Victor Wembanyama",
    Position: "C",
    PPG: 25,
    Team: "San Antonio Spurs",
    Price: 123.33,
    IsAllStar: true,
    Stock: 2,
  },
  {
    Name: "Shai Gilgeous-Alexander",
    Position: "PG",
    PPG: 31.1,
    Team: "Oklahoma City Thunder",
    Price: 110.22,
    IsAllStar: true,
    Stock: 3,
  },
  {
    Name: "Jalen Brunson",
    Position: "PG",
    PPG: 26,
    Team: "New York Knicks",
    Price: 92.87,
    IsAllStar: true,
    Stock: 4,
  },
  {
    Name: "Kevin Durant",
    Position: "PF",
    PPG: 26,
    Team: "Houston Rockets",
    Price: 85.67,
    IsAllStar: true,
    Stock: 5,
  },
  {
    Name: "Donovan Mitchell",
    Position: "SG",
    PPG: 27.9,
    Team: "Cleveland Cavaliers",
    Price: 78.99,
    IsAllStar: true,
    Stock: 3,
  },
  {
    Name: "Jalen Johnson",
    Position: "PF",
    PPG: 22.5,
    Team: "Atlanta Hawks",
    Price: 65.99,
    IsAllStar: true,
    Stock: 2,
  },
  {
    Name: "Nikola Jokic",
    Position: "C",
    PPG: 27.7,
    Team: "Denver Nuggets",
    Price: 120.99,
    IsAllStar: true,
    Stock: 4,
  },
  {
    Name: "Chet Holmgren",
    Position: "C",
    PPG: 17.1,
    Team: "Oklahoma City Thunder",
    Price: 20.99,
    IsAllStar: true,
    Stock: 3,
  },
  {
    Name: "Tyler Herro",
    Position: "SG",
    PPG: 20.5,
    Team: "Miami Heat",
    Price: 30.99,
    IsAllStar: false,
    Stock: 2,
  },
  {
    Name: "Mikal Bridges",
    Position: "SG",
    PPG: 14.4,
    Team: "New York Knicks",
    Price: 25.99,
    IsAllStar: false,
    Stock: 3,
  },
  {
    Name: "Cooper Flagg",
    Position: "SF",
    PPG: 21,
    Team: "Dallas Mavericks",
    Price: 132.73,
    IsAllStar: false,
    Stock: 2,
  },
  {
    Name: "Jalen Williams",
    Position: "SF",
    PPG: 17.1,
    Team: "Oklahoma City Thunder",
    Price: 76.11,
    IsAllStar: false,
    Stock: 3,
  },
  {
    Name: "Patrick Williams",
    Position: "PF",
    PPG: 7,
    Team: "Chicago Bulls",
    Price: 15.99,
    IsAllStar: false,
    Stock: 2,
  },
  {
    Name: "Jabari Smith Jr.",
    Position: "PF",
    PPG: 15.8,
    Team: "Houston Rockets",
    Price: 22.99,
    IsAllStar: false,
    Stock: 3,
  },
];

const cart = {};

const discount = {
  save10: 0.1,
  save20: 0.2,
  save50: 0.5,
};

let total = 0;
let activeDiscount = null;

function shoppingcart(stuff) {
  let storeItem = null;
  for (let i = 0; i < figurine.length; i++) {
    if (figurine[i].Name === stuff.Name) {
      storeItem = figurine[i];
      break;
    }
  }

  if (stuff.qty <= storeItem.Stock) {
    storeItem.Stock = storeItem.Stock - stuff.qty;
    console.log(`remaining stock left for ${stuff.Name} is ${storeItem.Stock}`);

    if (cart[stuff.Name]) {
      cart[stuff.Name].qty += stuff.qty;
    } else {
      cart[stuff.Name] = stuff;
    }
  } else {
    console.log(
      `Sorry, cannot add ${stuff.qty} of ${stuff.Name}. Only ${storeItem.Stock} left in stock`,
    );
    return;
  }
  if (stuff.discountCode) {
    if (activeDiscount !== null) {
      console.log("opnlt one discount code can be appllied");
    } else if (discount[stuff.discountCode]) {
      activeDiscount = stuff.discountCode;
      console.log(`Discount code ${activeDiscount} applied`);
    } else {
      console.log("sorry invalid code: ${stuff.discountCode}");
    }
  }
  total = 0;
  for (let shop in cart) {
    let item = cart[shop];
    total += item.Price * item.qty;
  }

  if (activeDiscount !== null) {
    total = total - total * discount[activeDiscount];
  }
}

shoppingcart({
  Name: "Cooper Flagg",
  Position: "SF",
  PPG: 21,
  Team: "Dallas Mavericks",
  Price: 132.73,
  IsAllStar: false,
  qty: 1,
  discountCode: "save10",
});

console.log(cart);

shoppingcart({
  Name: "Patrick Williams",
  Position: "PF",
  PPG: 7,
  Team: "Chicago Bulls",
  Price: 15.99,
  IsAllStar: false,
  qty: 1,
  discountCode: "save10",
});
console.log(cart);

console.log(`Yo this is the total ${total}`);
