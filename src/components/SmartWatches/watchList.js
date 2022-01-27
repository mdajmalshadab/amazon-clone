const today = new Date();
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
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
const watchList = [
  {
    image:
      'https://m.media-amazon.com/images/I/61W4meSdVQL._SL1000_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61W4meSdVQL._SL1000_.jpg',
    title:
      '(Renewed) Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)',
    price: '11,999.00',
    newPrice: '9,599.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51RIxsmfcIS._SL1000_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51RIxsmfcIS._SL1000_.jpg',
    title:
      '(Renewed) Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7 with Heart Rate, BP, Fitness and Sports Tracking (Pink)',
    price: '3,999',
    newPrice: '2,097',
    rating: 3,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51yp45mO78S._SL1000_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51yp45mO78S._SL1000_.jpg',
    title:
      'Fire-Boltt SPO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7 with Heart Rate, BP, Fitness and Sports Tracking (Grey)',
    price: '1,999.00',
    newPrice: '1,399.00',
    rating: 4.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61RdLS1lGBL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61RdLS1lGBL._SL1500_.jpg',
    title:
      'Fire-Boltt Supreme 1.79 inches Borderless LTPS 368*448 UHD PRO Display with 96% Screen to Body Ratio, 3ATM Waterproof , Spo2, Heart Rate and Blood Pressure Smart Watch (Black)',
    price: '4,999',
    newPrice: '3,899',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71s6oBrx7DL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71s6oBrx7DL._SL1500_.jpg',
    title:
      'Fire-Boltt Supreme 1.79 inches Borderless LTPS 368*448 UHD PRO Display with 96% Screen to Body Ratio, 3ATM Waterproof , Spo2, Heart Rate and Blood Pressure Smart Watch (Gray)',
    price: '4,999',
    newPrice: '3,899',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61UVyBbjcCL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61UVyBbjcCL._SL1500_.jpg',
    title:
      'Fire-Boltt Supreme 1.79 inches Borderless LTPS 368*448 UHD PRO Display with 96% Screen to Body Ratio, 3ATM Waterproof , Spo2, Heart Rate and Blood Pressure Smart Watch (Blue)',
    price: '4,999',
    newPrice: '3,899',
    rating: 4.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/7169je4u88L._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/7169je4u88L._SL1500_.jpg',
    title:
      'Fire-Boltt Supreme 1.79 inches Borderless LTPS 368*448 UHD PRO Display with 96% Screen to Body Ratio, 3ATM Waterproof , Spo2, Heart Rate and Blood Pressure Smart Watch (Pink)',
    price: '4,999',
    newPrice: '3,899',
    rating: 4.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51ToMhOMj+L._SL1000_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51ToMhOMj+L._SL1000_.jpg',
    title: 'Oppo WiFi Watch- Gold (Compatible with Android Wireless)',
    ice: '17,990',
    newPrice: '15,291',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51JSLD7dCML._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51JSLD7dCML._AC_SY200_.jpg',
    title:
      'FLiX (Beetel) S1 Smart Watch, IP 68 Water Resistant, 1.4 Inch Color Display, Body Temperature & Heart Rate Monitor, Sport & Fitness Activity Tracker (Black)',
    price: '2,340.00',
    newPrice: '1,989.00',
    rating: 5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/31x-J+tVmgS._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/31x-J+tVmgS.jpg',
    title:
      "Mi Smart Band 5 - India's No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women's Health Tracking",
    price: '1,999.00',
    newPrice: '1,699.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61BOk+NPOhL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61BOk+NPOhL._SL1000_.jpg',
    title: 'Fitbit Inspire Fitness Tracker, One Size',
    ice: '5,999.00',
    newPrice: '4,997.00',
    rating: 3.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61eenQ6rFPL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61eenQ6rFPL._SL1500_.jpg',
    title:
      'Honor Band 6 Meteorite Black - 1.47 inches AMOLED Touch Display, Smart Watch Like Design, 14 Days Battery, SpO2, 24/7 Heart Rate, Stress & Sleep Monitor, Personalised Watch Faces, Workout Auto-Detection',
    price: '3,499',
    newPrice: '2,499',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61f-B-uQI2L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61f-B-uQI2L._SL1500_.jpg',
    title:
      "HONOR Band 6 Sandstone Grey - 1.47'' AMOLED Touch Display, Smart Watch Like Design, 14 Days Battery, SpO2, 24/7 Heart Rate, Stress & Sleep Monitor, Personalised Watch Faces, Workout Auto-Detection",
    price: '2,999.00',
    newPrice: '2,599.00',
    rating: 4.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/613hwCO1axL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51QbU8CGQVS._SL1497_.jpg',
    title:
      'Infinix Band 5 (Red)- Color IPS Display, 24 * 7 Heart Rate Monitor, Upto 7 Day Battery Life, IP67 Splash Proof, Calls/SMS/App Notifications',
    price: '2,999.00',
    newPrice: '899.00',
    rating: 4.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  ////////////////////////////////////
  {
    image:
      'https://m.media-amazon.com/images/I/61ui0ZVzD0S._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61ui0ZVzD0S._SL1500_.jpg',
    title:
      "Fire-Boltt Beast SpO2 1.69” Industry's Largest Display Size Full Touch Smart Watch with Blood Oxygen Monitoring, Heart Rate Monitor, Multiple Watch Faces & Long Battery Life (Black)",
    price: '7,999.00',
    newPrice: '2,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61A6qMnXfDL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61A6qMnXfDL._SL1500_.jpg',
    title:
      'Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate Monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Grey)',
    price: '5,999.00',
    newPrice: '1,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61SxX7rYg0L._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61SxX7rYg0L._SL1500_.jpg',
    title:
      'Fire-Boltt Terra AMOLED Always ON 390*390 Pixel Full Touch Screen, Spo2 & Heart Rate Monitoring Smartwatch with Custom Widget Shortcuts - Black',
    price: '7,999',
    newPrice: '4,999',
    rating: 3.5,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },

  {
    image:
      'https://m.media-amazon.com/images/I/61WN0iEt8DS._SL1200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61WN0iEt8DS._SL1200_.jpg',
    title:
      'Noise ColorFit Pro 2 Oxy Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display (Onyx Black)',
    price: '4,999.00',
    newPrice: '1,999',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],

    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61yeJbZkwmL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61yeJbZkwmL._SL1500_.jpg',
    title:
      'Crossbeats Ignite Full Touch 1.4 inch Smart Watch Metal Body 10 Days Battery Life with 24*7 Heart Rate Monitoring IP68 Waterproof with Blood Oxygen, Fitness, Sports & Sleep Tracking (Desert Gold)',
    price: '7,999',
    newPrice: '2,999',
    rating: 3.5,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61ufJzReYZS._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61ufJzReYZS._SL1500_.jpg',
    title:
      'Fire-Boltt 360 SpO2 Full Touch Large Display Round Smart Watch with in-Built Games, 8 Days Battery Life, IP67 Water Resistant with Blood Oxygen and Heart Rate Monitoring (Black)',
    price: '7,999',
    newPrice: '5,999',
    rating: 4.5,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/613hwCO1axL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/613hwCO1axL._SL1000_.jpg',
    title:
      'Pebble Zen Smart Watch Full Touch Fitness Tracker with Heart Rate BP Oxygen Monitor Waterproof Calories Sleep Tracker Pedometer for Men Women Compatible with iPhone Android - Black (Black)',
    price: '5,999',
    newPrice: '2,974',
    rating: 3.5,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
];

export default watchList;
