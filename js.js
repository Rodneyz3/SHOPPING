const container = document.querySelector(".container");
figurine.forEach(function (item) {
  ("beforeend",
    (
      <div class="card">
        <h1>player</h1>
        <p>Team: team name</p>
        <p>Position: position</p>
        <p>PPG: #</p>
        <p>Price: $</p>
        <p>Stock: #</p>
        <button class="add-btn">Add to Cart</button>
      </div>
    ));
});
//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
