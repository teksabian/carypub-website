// ============================================================
// THE CARY PUB — SITE DATA
// Edit this file to update menu items, prices, specials, and info.
// After editing, just save and refresh the site.
// ============================================================

const MENU_DATA = {
  appetizers: [
    { name: "Buffalo Shrimp", desc: "Eight shrimp with choice of ranch or blue cheese", price: 11.99 },
    { name: "Ahi Tuna*", desc: "Sesame coated, served with pickled ginger, homemade wasabi and soy sauce", price: 13.99 },
    { name: "Cheese Fries", desc: "Cheese, bacon, scallions with side of ranch", price: 10.99 },
    { name: "Fried Mushrooms", desc: "Served with choice of horseradish sauce, ranch or blue cheese", price: 11.99 },
    { name: "Quesadilla", desc: "Braised chicken, peppers, onions, cheese, side of salsa and sour cream", price: 11.99 },
    { name: "Chicken Strips", desc: "Served with ranch, blue cheese, BBQ or honey mustard", price: 11.99 },
    { name: "Pretzel Sticks", desc: "Served with hot queso", price: 9.99 },
    { name: "Nachos", desc: "Chili, queso, lettuce, tomato, jalapeño, onion, side of salsa and sour cream", price: 12.99 },
  ],

  soupsAndSalads: [
    { name: "Soup of the Day", desc: "Ask your server for today's selection", price: 4.99 },
    { name: "Chili", desc: "Homemade chili", price: 4.99 },
    { name: "Side House Salad", desc: "Mixed greens, tomato, onion, cucumber and cheese", price: 4.99 },
    { name: "Side Caesar Salad", desc: "Romaine, parmesan cheese and croutons", price: 4.99 },
    { name: "House Salad", desc: "Mixed greens, tomato, onion, cucumber and cheese", price: 8.99 },
    { name: "Caesar Salad", desc: "Romaine, parmesan cheese and croutons", price: 9.99 },
    { name: "Chef Salad", desc: "Turkey, ham, mixed greens, tomato, onion, cucumber and cheese", price: 11.99 },
    { name: "Asian Salad*", desc: "Seared ahi tuna, wasabi peas, sliced almonds, mandarin oranges, wonton strips, ginger dressing", price: 14.99 },
  ],

  saladAddOns: "Add to any salad: Chicken $6.00 · Shrimp $6.00 · Ahi Tuna* $8.00",

  sandwiches: [
    { name: "Chicken Sandwich", desc: "Fried or grilled with lettuce, tomato and onion", price: 10.99 },
    { name: "BLT", desc: "Bacon, lettuce and tomato", price: 11.99 },
    { name: "Reuben", desc: "Corned beef or turkey, swiss cheese, sauerkraut and thousand island on rye", price: 13.99 },
    { name: "Pub Club", desc: "Turkey, ham, bacon, lettuce, tomato and mayo", price: 13.99 },
    { name: "Cuban Sandwich", desc: "Pulled pork, shaved ham, sliced pickles, swiss and mustard on a ciabatta roll", price: 14.50 },
    { name: "Philly Cheesesteak", desc: "Thin-sliced steak, cheese, grilled onions and peppers (or sub Chicken)", price: 14.99 },
    { name: "Turkey Apple Wrap", desc: "Roasted turkey, apples, cheddar, honey mustard, lettuce and tomato", price: 12.99 },
    { name: "Chipotle Turkey Sandwich", desc: "Roasted turkey, homemade chipotle mayo, lettuce and tomato", price: 11.99 },
    { name: "Cajun Bacon Turkey Wrap", desc: "Roasted turkey, bacon, cajun seasoning, lettuce, tomato, cheese and ranch", price: 11.99 },
    { name: "Chicken Salad Sandwich", desc: "Homemade chicken salad, lettuce and tomato", price: 9.99 },
  ],

  burgers: [
    { name: "Hamburger*", desc: "Lettuce, tomato and onion | add cheese $1 | add bacon $1", price: 12.99 },
    { name: "Carolina Burger*", desc: "American cheese, chili, slaw, onion and mustard", price: 14.99 },
    { name: "Mushroom Burger*", desc: "Sautéed mushrooms, swiss, lettuce, tomato and onion", price: 14.99 },
    { name: "Patty Melt*", desc: "Swiss, grilled onions and thousand island dressing on rye", price: 13.99 },
    { name: "Cowboy Burger", desc: "American cheese, bacon, jalapeño and BBQ sauce topped with a fried onion ring", price: 14.99 },
    { name: "Triple B Burger*", desc: "Blackened seasoning, homemade bacon jam, blue cheese crumbles, lettuce, tomato and onion", price: 14.99 },
    { name: "Beef Sliders*", desc: "Three sliders with American cheese and pickles", price: 12.99 },
  ],

  sidesIncluded: "Fries · Potato Salad · House Chips · Pasta Salad · Slaw",
  sidesPremium: "Soup · Side Salad · Tots · Sweet Potato Fries · Onion Rings · Seasonal Vegetable · Mac & Cheese",
  sidesUpcharge: 3.00,

  wings: {
    sizes: [
      { count: 6, price: 8.99 },
      { count: 12, price: 16.99 },
      { count: 18, price: 24.99 },
    ],
    flavors: [
      { name: "Mild", heat: 1, label: "Easy Breezy" },
      { name: "Buffalo", heat: 2, label: "Classic Heat" },
      { name: "Hot", heat: 4, label: "Feelin' It" },
      { name: "Sweet & Spicy", heat: 2, label: "Sweet Kick" },
      { name: "Teriyaki", heat: 0, label: "No Heat" },
      { name: "Garlic Parm", heat: 0, label: "No Heat" },
      { name: "BBQ", heat: 1, label: "Mild Smoke" },
      { name: "Cajun Dry Rub", heat: 3, label: "Cajun Fire" },
    ],
    note: "Served with celery and your choice of ranch or blue cheese. Extra dressings +$0.50",
  },
};

// ============================================================
// DAILY SPECIALS — Change these whenever specials change
// ============================================================
const DAILY_SPECIALS = {
  Sunday: {
    food: "Half-Price Wings All Day",
    drinks: ["$3 Domestic Drafts", "$5 Bloody Marys", "$4 Mimosas"],
    emoji: "🏈",
  },
  Monday: {
    food: "$9.99 Burger & Fries",
    drinks: ["$3 Domestic Bottles", "$5 House Margaritas"],
    emoji: "🍔",
  },
  Tuesday: {
    food: "$1 Tacos (minimum 3)",
    drinks: ["$3 Modelo & Corona", "$5 Tequila Shots"],
    emoji: "🌮",
  },
  Wednesday: {
    food: "Kids Eat Free (with adult entrée)",
    drinks: ["$4 Select Craft Pints", "Half-Price Wine Bottles"],
    emoji: "👨‍👩‍👧‍👦",
  },
  Thursday: {
    food: "$12.99 Steak Night",
    drinks: ["$4 Jack & Coke", "$5 Fireball Shots"],
    emoji: "🥩",
  },
  Friday: {
    food: "Fish Fry Friday $13.99",
    drinks: ["$5 Long Islands", "$4 Domestic Tall Boys"],
    emoji: "🐟",
  },
  Saturday: {
    food: "Smoked Wings Special $10.99",
    drinks: ["$6 Craft Cocktail of the Week", "$3 Shots"],
    emoji: "🎉",
  },
};

// ============================================================
// PUB INFO — Address, phone, hours, socials
// ============================================================
const PUB_INFO = {
  name: "The Cary Pub",
  tagline: "Not Your Ordinary Pub",
  address: "Corner of Cary Parkway & Tryon Rd",
  city: "Cary, North Carolina",
  phone: "(919) 467-1544",
  phoneHref: "tel:9194671544",
  hours: [
    { days: "Mon–Sat", time: "11am – 2am" },
    { days: "Sunday", time: "11am – 2am" },
  ],
  facebook: "@thecary.pub",
  facebookUrl: "https://www.facebook.com/thecary.pub",
  aboutP1: 'Since <strong>2013</strong>, The Cary Pub has been the place where Cary comes to unwind. We\'re a no-frills, come-as-you-are neighborhood spot with <strong>house-made food</strong>, wings that people drive across town for, and a beer list that hits every craving.',
  aboutP2: 'Catch the game on one of our <strong>fifteen flat screens</strong> with NFL Sunday Ticket, test your brains at weekly trivia, or just pull up a stool and enjoy a cold one. Whether you\'re a regular or walking in for the first time — welcome to the Pub.',
};
