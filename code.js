const figurine = [
  {
    Name: "Anthony Edwards",
    Position: "SG",
    PPG: 28.8,
    Team: "Minnesota Timberwolves",
    Price: 88.92,
    IsAllStar: false,
  },
  {
    Name: "Ja Morant",
    Position: "PG",
    PPG: 19.5,
    Team: "Memphis Grizzlies",
    Price: 45.99,
    IsAllStar: false,
  },
  {
    Name: "Jayson Tatum",
    Position: "SF",
    PPG: 21.8,
    Team: "Boston Celtics",
    Price: 49.99,
    IsAllStar: false,
  },
  {
    Name: "Ausar Thompson",
    Position: "SF",
    PPG: 9.9,
    Team: "Detroit Pistons",
    Price: 27.99,
    IsAllStar: false,
  },
  {
    Name: "Luka Doncic",
    Position: "PG",
    PPG: 33.5,
    Team: "Los Angeles Lakers",
    Price: 99.99,
    IsAllStar: true,
  },
  {
    Name: "Jalen Duren",
    Position: "C",
    PPG: 19.5,
    Team: "Detroit Pistons",
    Price: 35.45,
    IsAllStar: true,
  },
  {
    Name: "Victor Wembanyama",
    Position: "C",
    PPG: 25,
    Team: "San Antonio Spurs",
    Price: 123.33,
    IsAllStar: true,
  },
  {
    Name: "Shai Gilgeous-Alexander",
    Position: "PG",
    PPG: 31.1,
    Team: "Oklahoma City Thunder",
    Price: 110.22,
    IsAllStar: true,
  },
  {
    Name: "Jalen Brunson",
    Position: "PG",
    PPG: 26,
    Team: "New York Knicks",
    Price: 92.87,
    IsAllStar: true,
  },
  {
    Name: "Kevin Durant",
    Position: "PF",
    PPG: 26,
    Team: "Houston Rockets",
    Price: 85.67,
    IsAllStar: true,
  },
  {
    Name: "Donovan Mitchell",
    Position: "SG",
    PPG: 27.9,
    Team: "Cleveland Cavaliers",
    Price: 78.99,
    IsAllStar: true,
  },
  {
    Name: "Jalen Johnson",
    Position: "PF",
    PPG: 22.5,
    Team: "Atlanta Hawks",
    Price: 65.99,
    IsAllStar: true,
  },
  {
    Name: "Nikola Jokic",
    Position: "C",
    PPG: 27.7,
    Team: "Denver Nuggets",
    Price: 120.99,
    IsAllStar: true,
  },
  {
    Name: "Chet Holmgren",
    Position: "C",
    PPG: 17.1,
    Team: "Oklahoma City Thunder",
    Price: 20.99,
    IsAllStar: true,
  },
  {
    Name: "Tyler Herro",
    Position: "SG",
    PPG: 20.5,
    Team: "Miami Heat",
    Price: 30.99,
    IsAllStar: false,
  },
  {
    Name: "Mikal Bridges",
    Position: "SG",
    PPG: 14.4,
    Team: "New York Knicks",
    Price: 25.99,
    IsAllStar: false,
  },
  {
    Name: "Cooper Flagg",
    Position: "SF",
    PPG: 21,
    Team: "Dallas Mavericks",
    Price: 132.73,
    IsAllStar: false,
  },
  {
    Name: "Jalen Williams",
    Position: "SF",
    PPG: 17.1,
    Team: "Oklahoma City Thunder",
    Price: 76.11,
    IsAllStar: false,
  },
  {
    Name: "Patrick Williams",
    Position: "PF",
    PPG: 7,
    Team: "Chicago Bulls",
    Price: 15.99,
    IsAllStar: false,
  },
  {
    Name: "Jabari Smith Jr.",
    Position: "PF",
    PPG: 15.8,
    Team: "Houston Rockets",
    Price: 22.99,
    IsAllStar: false,
  },
];

function shoppingcart() {
  let total = 0;
  let cart = [];
  console.log(`HELLO, here are the figurines for sale: `);
  for (let i = 0; i < figurine.length; i++) {
    console.log(
      `${figurine[i].Name} - ${figurine[i].Position} - ${figurine[i].Team} - $${figurine[i].Price}`,
    );
  }

  while (true) {
    let choice = prompt("Hello, would you like to filter your items?(yes/no)");
    if (choice === "yes") {
      let question = prompt(
        "Would you like to filter by position, team, PPG, price, or all star?(Type Position, Team, PPG, Price, or All Star)",
      );
      if (question === "Position") {
        let position = prompt(
          "What position would you like to filter by?(Type PG, SG, SF, PF, or C)",
        );
        const filteredByPosition = figurine.filter(
          (item) => item.Position === position,
        );
        console.log(`Here are the figurines that match your filter: `);
        for (let i = 0; i < filteredByPosition.length; i++) {
          console.log(
            `${filteredByPosition[i].Name} - ${filteredByPosition[i].Position} - ${filteredByPosition[i].Team} - $${filteredByPosition[i].Price}`,
          );
        }
      }
    }
  }
}
shoppingcart();
