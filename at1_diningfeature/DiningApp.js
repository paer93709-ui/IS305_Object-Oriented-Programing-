/*
  Program: Dining Meal Booking Feature
  Student Name: Raymond Pae 
  Student ID: 240158
  Date: 20 July 2026
  Description: A JavaScript program demonstrating classes,
  objects, constructors, private fields and methods.
*/

const MealBooking = require('./MealBooking');

// Create a booking object
const booking1 = new MealBooking("240158", "Raymond", "20-07-2026", "Dinner", 3, "Vegetarian");

// Display summary
console.log(booking1.getSummary());


