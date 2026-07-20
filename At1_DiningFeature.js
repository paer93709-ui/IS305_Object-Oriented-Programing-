/*
  Program: Dining Meal Booking Feature
  Student Name: Raymond Pae
  Student ID: 240158
  Date: 20 July 2026
  Description: Consolidated JavaScript implementation for the dining meal booking feature.
*/

class MealBooking {
  #studentId;
  #studentName;
  #mealDate;
  #mealType;
  #quantity;
  #dietaryNote;
  #bookingStatus;

  constructor(studentId, studentName, mealDate, mealType, quantity, dietaryNote) {
    this.#studentId = studentId;
    this.#studentName = studentName;
    this.#mealDate = mealDate;
    this.#mealType = mealType;
    this.#quantity = quantity;
    this.#dietaryNote = dietaryNote;
    this.#bookingStatus = "Pending";
  }

  get studentId() { return this.#studentId; }
  get studentName() { return this.#studentName; }
  get mealDate() { return this.#mealDate; }
  get mealType() { return this.#mealType; }
  get quantity() { return this.#quantity; }
  get dietaryNote() { return this.#dietaryNote; }
  get bookingStatus() { return this.#bookingStatus; }

  set studentName(name) { this.#studentName = name; }
  set mealDate(date) { this.#mealDate = date; }
  set mealType(type) { this.#mealType = type; }
  set quantity(qty) { this.#quantity = qty; }
  set dietaryNote(note) { this.#dietaryNote = note; }
  set bookingStatus(status) { this.#bookingStatus = status; }

  calculateTotal() {
    let price = 0;
    if (this.#mealType === "Breakfast") price = 10;
    else if (this.#mealType === "Lunch") price = 15;
    else if (this.#mealType === "Dinner") price = 20;
    return price * this.#quantity;
  }

  getSummary() {
    return `
    Booking Summary:
    Student: ${this.#studentName} (ID: ${this.#studentId})
    Meal: ${this.#mealType} on ${this.#mealDate}
    Quantity: ${this.#quantity}
    Dietary Note: ${this.#dietaryNote}
    Status: ${this.#bookingStatus}
    Total Cost: K${this.calculateTotal()}
    `;
  }
}

const booking1 = new MealBooking("240158", "Raymond", "20-07-2026", "Dinner", 3, "Vegetarian");
console.log(booking1.getSummary());
