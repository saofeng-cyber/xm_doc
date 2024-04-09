const lufthansa = {
  airLine: "Lufthansa",
  taCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(this);
    console.log(`${name} booked a seat on ${this.airLine}
        flight ${this.taCode}${flightNum}`);
    this.bookings.push({ flight: `${this.taCode}${flightNum}`, name });
    console.log(this.bookings);
  },
};

const euroWrings = {
  airLine: "EuRowings",
  taCode: "EW",
  bookings: [],
};
const book = lufthansa.book;

lufthansa.planes = 10;
lufthansa.buyPlane = function() {
    this.planes++;
    console.log(this);
}

book.call(euroWrings, 239, "Jonas");
const sp = document.querySelector(".btn")
sp.addEventListener("click", function() {
    console.log(this);
    book(23, "saofeng")
});
