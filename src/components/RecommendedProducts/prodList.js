const today = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const prodList = [
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/61PDbUd1VaL._AC_UL160_SR160,160_.jpg',
    title: 'OnePlus 9R 5G (Carbon Black, 12GB RAM, 256 GB Storage)',
    rating: 4,
    ratingCount: '34,748',
    price: '40,999.00',
    day: days[today.getDay() + 2],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/51SnNA+TItL._AC_UL160_SR160,160_.jpg',
    title:
      'AE Mobile Accessories Back Cover for Oppo F19 Pro+ 5G Smoke Fashionable Colored Buttons...',
    rating: 4,
    ratingCount: '7',
    price: '179.00',
    day: days[today.getDay() + 5],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 5),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/61StqgIVfTL._AC_UL160_SR160,160_.jpg',
    title:
      "XTRENGTH's Advanced HD+ Tempered Glass Screen Protector Designed for OnePlus Nord CE 5G / OnePlus…",
    rating: 4,
    ratingCount: '1,089',
    price: '299.00',
    day: days[today.getDay() + 6],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 6),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/61IwksZ-DGL._AC_UL160_SR160,160_.jpg',
    title: 'OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)',
    rating: 4,
    ratingCount: '34,748',
    price: '40,999.00',
    day: days[today.getDay() + 2],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/71Q3iSQAwAS._AC_UL160_SR160,160_.jpg',
    title:
      'Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime',
    rating: 4,
    ratingCount: '27,889',
    price: '14,999.00',
    day: days[today.getDay() + 6],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 6),
  },
  //
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/51QT2VNuoJL._AC_UL160_SR160,160_.jpg',
    title:
      'CEDO OnePlus Nord CE 5G Back Cover Smoke Case | Camera Bump Protection Frosted Matte | 360 Degree…',
    rating: 4,
    ratingCount: '297',
    price: '225.00',
    day: days[today.getDay() + 5],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 5),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/91kAtEXPIeL._AC_UL160_SR160,160_.jpg',
    title: 'Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)',
    rating: 4,
    ratingCount: '136,054',
    price: '9,199.00',
    day: days[today.getDay() + 5],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 5),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/712+A5mH44L._AC_UL160_SR160,160_.jpg',
    title:
      'Samsung Galaxy M21 2021 Edition (Charcoal Black, 4GB RAM, 64GB Storage) | FHD+ sAMOLED | 6 Months…',
    rating: 4,
    ratingCount: '203,448',
    price: '11,999.00',
    day: days[today.getDay() + 3],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 3),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC_UL160_SR160,160_.jpg',
    title:
      'Redmi 9A (Sea Blue 2GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery',
    rating: 4,
    ratingCount: '138,507',
    price: '6,999.00',
    day: days[today.getDay() + 2],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/61s2geMvnhL._AC_UL160_SR160,160_.jpg',
    title:
      'CEDO OnePlus Nord CE 5G Tempered Glass | Screen Protector Full HD Quality Edge to Edge Coverage for OnePlus…',
    rating: 3,
    ratingCount: '48',
    price: '165.00',
    day: days[today.getDay() + 2],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },

  //

  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/61TnX0PmqES._AC_UL160_SR160,160_.jpg',
    title: 'OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)',
    rating: 4,
    ratingCount: '60,812',
    price: '29,999.00',
    day: days[today.getDay() + 5],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 5),
  },

  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/61bQ6pC4YuS._AC_UL160_SR160,160_.jpg',
    title:
      'CEDO OnePlus Nord CE 5G Defender Case | Rotating Ring Holder & Kickstand | Military Grade Armor Back…',
    rating: 4,
    ratingCount: '74',
    price: '299.00',
    day: days[today.getDay() + 2],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    imageURL:
      'https://images-eu.ssl-images-amazon.com/images/I/81HxUqyEjFL._AC_UL160_SR160,160_.jpg',
    title:
      'Redmi Note 10T 5G (Metallic Blue, 4GB RAM, 64GB Storage) | Dual 5G | 90Hz Adaptive Refresh Rate | MediaTek…',
    rating: 4,
    ratingCount: '7397',
    price: '13,999.00',
    day: days[today.getDay() + 5],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 5),
  },
];

export default prodList;
