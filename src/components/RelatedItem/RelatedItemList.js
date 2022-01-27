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
const relatedItemList = [
  {
    image:
      'https://m.media-amazon.com/images/I/81p+EkIvUUL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81p+EkIvUUL._SL1500_.jpg',
    title: 'Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB Storage)',
    price: '8,489.00',
    newPrice: '6,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81S-XYJlzTL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81S-XYJlzTL._SL1500_.jpg',
    title:
      'Redmi Note 10 Pro (Dark Night, 8GB RAM, 128GB Storage) -120hz Super Amoled Display | 64MP with 5MP Super Tele-Macro',
    price: '21,999.00',
    newPrice: '18,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg',
    title:
      'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers',
    price: '74,999.00',
    newPrice: '36,990.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81leb5g4asL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81leb5g4asL._SL1500_.jpg',
    title:
      'Redmi Note 10S (Frost White, 8GB RAM,128 GB Storage) - Super Amoled Display | 64 MP Quad Camera | Alexa Built in',
    price: '20,999.00',
    newPrice: '17,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71CyDMPnuFL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71CyDMPnuFL._SL1500_.jpg',
    title:
      'Xiaomi 11 Lite NE 5G (Vinyl Black 6GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision |Additional Off up to 5000 on Exchange',
    price: '31,999.00',
    newPrice: '26,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61uIgwiP90S._SL1200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61uIgwiP90S._SL1200_.jpg',
    title:
      "iQOO Z3 5G (Ace Black, 6GB RAM, 128GB Storage) | India's First SD 768G 5G Processor | 55W FlashCharge | Upto 9 Months No Cost EMI | 6 Months Free Screen Replacement",
    price: '22,980.00',
    newPrice: '19,990.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg',
    title: 'OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)',
    price: '29,999.00',
    newPrice: '24,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61NC3RS4RXL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61NC3RS4RXL._SL1500_.jpg',
    title: 'OnePlus 9RT 5G (Nano Silver, 8GB RAM, 128GB Storage)',
    price: '44,999.00',
    newPrice: '42,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71wevQRS5qL._SL1196_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71wevQRS5qL._SL1196_.jpg',
    title:
      'iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge',
    price: '29,990.00',
    newPrice: '23,990.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71TdXNLT1FL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71TdXNLT1FL._SL1500_.jpg',
    title:
      'Oppo A15s (Fancy White, 4GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers (CPH2179)',
    price: '14,990.00',
    newPrice: '13,490.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71os5DRhuSL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71os5DRhuSL._SL1500_.jpg',
    title: 'Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)',
    price: '25,999.00',
    newPrice: '18,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/91kAtEXPIeL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/91kAtEXPIeL._SL1500_.jpg',
    title: 'Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)',
    price: '10,989.00',
    newPrice: '9,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/816VTQXz8-L._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/816VTQXz8-L._SL1500_.jpg',
    title:
      'Tecno Pop 5 LTE(Ice Blue 2G+32G)| 6.52" HD+Dot Notch | 5000mAh | 8MP Dual Camera | Front Flash| IPX2 Splash Resistant',
    price: '8,999.00',
    newPrice: '6,299.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81di9YjMe-L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81di9YjMe-L._SL1500_.jpg',
    title:
      'Redmi 10 Prime (Bifrost Blue 4GB RAM 64GB ROM |Helio G88 with extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)',
    price: '15,999.00',
    newPrice: '12,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg',
    title: 'OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)',
    price: '32,999.00',
    newPrice: '29,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81-tqKsrTuL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81-tqKsrTuL._SL1500_.jpg',
    title:
      'Samsung Galaxy M52 5G (ICY Blue, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display',
    price: '34,999.00',
    newPrice: '24,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg',
    title: 'OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)',
    price: '42,999.00',
    newPrice: '39,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51OvvRTnJTS._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51OvvRTnJTS._SL1200_.jpg',
    title:
      'iQOO 7 5G (Storm Black, 8GB RAM, 128GB Storage) | 3GB Extended RAM | Upto 12 Months No Cost EMI | 6 Months Free Screen Replacement',
    price: '34,989.00',
    newPrice: '29,990.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71hgVYiuFXL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71hgVYiuFXL._SL1500_.jpg ',
    title:
      'realme narzo 50A (Oxygen Blue, 4GB RAM + 64GB Storage) - with No Cost EMI/Additional Exchange Offers',
    price: '12,999.00',
    newPrice: '11,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71hXNHGym5L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71hXNHGym5L._SL1500_.jpg',
    title:
      'Redmi Note 10 Lite (Glacier White, 4GB RAM, 64GB Storage) | Alexa Built-in',
    price: '16,999.00',
    newPrice: '12,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71VOACL2KnS._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71VOACL2KnS._SL1500_.jpg',
    title:
      'realme 8 (Cyber Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers ',
    price: '18,999.00',
    newPrice: '17,905.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },

  {
    image:
      'https://m.media-amazon.com/images/I/81zCLFEqTPL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81zCLFEqTPL._SL1500_.jpg',
    title:
      'Tecno Spark Go 2022 (Turquoise Cyan, 2/32GB) | 5000mAh Battery| 6.52" HD+ Display | 13MP Dual Rear Camera| Front Flash| Stylish Design',
    price: '8,999.00',
    newPrice: '7,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  //
  {
    image:
      'https://m.media-amazon.com/images/I/81cHpJNr07L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81cHpJNr07L._SL1500_.jpg',
    title: 'Samsung Galaxy S21 FE 5G (Graphite, 8GB, 128GB Storage)',
    price: '74,999.00',
    newPrice: '49,999.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/715pTDrrbiL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/715pTDrrbiL._SL1200_.jpg',
    title:
      'Vivo X50 (Frost Blue, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers',
    price: '44,990.00',
    newPrice: '37,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81SCv8+cG1L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81zCLFEqTPL._SL1500_.jpg',
    title:
      'Tecno Spark Go 2022 (Turquoise Cyan, 2/32GB) | 5000mAh Battery| 6.52" HD+ Display | 13MP Dual Rear Camera| Front Flash| Stylish Design',
    price: '8,999.00',
    newPrice: '7,499.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
];

const popularItemList = [
  {
    image:
      'https://m.media-amazon.com/images/I/61eKn7FGxfL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81vte5kqDEL._SL1500_.jpg',
    title:
      'Huggies Wonder Pants, Medium (M) Size Baby Diaper Pants, 7 - 12 kg, Combo Pack of 2, 50 count Per Pack, 100 count, with Bubble Bed Technology for comfort',
    price: '1,398.00',
    newPrice: '964.00 ',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/514DjbvLP5L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/514DjbvLP5L._SL1000_.jpg',
    title:
      'AS-IT-IS Nutrition Whey Protein Concentrate 80% Unflavoured, Labdoor Certified (1kg)',
    price: '1,999.00',
    newPrice: '1,599.00 ',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/6140NhEjjiL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/618MTeeCweL._SL1500_.jpg',
    title:
      'Drools Absolute Calcium Bone Jar, Dog Treats - 20 Pieces (300 g)',
    price: '300',
    newPrice: '277',
    rating: 3,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61J0UmB6HQL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61J0UmB6HQL._SL1000_.jpg',
    title: 'Biotique Bio Cucumber Pore Tightening Toner, 120ml',
    price: '173.00',
    newPrice: '92.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61Uogt0x09L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61Uogt0x09L._SL1500_.jpg',
    title:
      'Ariel Matic Top Load Detergent Washing Powder - 4 kg with Free Detergent Powder - 2 kg - Pantry',
    price: '1,050.00',
    newPrice: '990.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/718oAmciv+L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/718oAmciv+L._SL1000_.jpg',
    title:
      'Colgate MaxFresh Breath Freshener Toothpaste, 600g (150g x 4), Peppermint Ice, Blue Gel Paste with Menthol, Cooling crystals for bad breath control',
    price: '396.00',
    newPrice: '344.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71ZhGcb5LcS._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71ZhGcb5LcS._SL1500_.jpg',
    title:
      'Boldfit N95 face mask for men and women (Pack of 5) N95 mask PM 0.3 Filtration BIS Approved Masks N95 Masks Reusable and Comfortable for protection from Pollution',
    price: '750.00',
    newPrice: '399.00 ',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61z8h3l3DvL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61z8h3l3DvL._SL1000_.jpg',
    title:
      "Harpic Disinfectant Toilet Cleaner Liquid, Original - 1 L (Pack of 2) | India's # 1 Toilet Cleaner",
    price: '374.00',
    newPrice: '351.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51RcxiQNx9L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51RcxiQNx9L._SL1000_.jpg',
    title: 'Tata Tea Gold, 1kg',
    price: '625.00',
    newPrice: '431.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61RjDLGW9QL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61RjDLGW9QL._SL1000_.jpg',
    title:
      'Pedigree Adult Wet Dog Food, Chicken & Liver Chunks in Gravy, 70 g (Pack of 15)',
    price: '525.00',
    newPrice: '446.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61Tusla5Y9L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61Tusla5Y9L._SL1200_.jpg',
    title:
      'Bigmuscles Nutrition Premium Gold Whey 1Kg Whey Protein Isolate Blend, Labdoor USA certified, 25g Protein Per Serving [Belgian chocolate]',
    price: '2,199.00',
    newPrice: '1,599.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81YakxRZLzL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81YakxRZLzL._SL1500_.jpg',
    title:
      'Tide Plus Double Power Detergent Washing Powder Jasmine & Rose 6kg + 2kg FREE',
    price: '719',
    newPrice: '704',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/81qpVyjF20L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/81qpVyjF20L._SL1500_.jpg',
    title:
      'Maggi 2-Minute Special Masala Instant Noodles, 70g (Pack of 12)',
    price: '199.00',
    newPrice: '194.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/614eZL-F40L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/614eZL-F40L._SL1500_.jpg',
    title:
      'Mamaearth Milky Soft Natural Baby Face Cream for Babies 60mL',
    price: '199.00',
    newPrice: '169.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61AXqbaTXkL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61AXqbaTXkL._SL1000_.jpg',
    title: 'Dettol Liquid Hand wash Refill Original -1500 ml',
    price: '209.00',
    newPrice: '178.00 ',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/51yGgQXevSL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/51yGgQXevSL._SL1000_.jpg',
    title:
      'NIVEA Soft Light Moisturizer for Face, Hand & Body, Non-Sticky Cream with Vitamin E & Jojoba Oil, 300 ml',
    price: '399.00',
    newPrice: '227.00',
    rating: '',
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61u8res2o0L._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61u8res2o0L._SL1500_.jpg',
    title: 'Parachute Advansed Body Lotion Deep Nourish, 400 ml',
    price: '299',
    newPrice: '158',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/61ffhTkguIL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61ffhTkguIL._SL1200_.jpg',
    title:
      'Lotus Herbals WhiteGlow Skin Whitening And Brightening Gel, Face Cream with SPF-25, for all skin types, 40g',
    price: '280.00',
    newPrice: '187.00',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },

  {
    image:
      'https://m.media-amazon.com/images/I/61L-epiEFPS._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/61L-epiEFPS._SL1200_.jpg',
    title:
      'Godrej Aer Power Pocket | Air Freshener- Bathroom and Toilet | Lasts Up to 30 days | Assorted Pack of 5 (50g)',
    price: '265.00',
    newPrice: '234.00',
    rating: 3,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
  {
    image:
      'https://m.media-amazon.com/images/I/71xhji8aAZL._AC_SY200_.jpg',
    imageDetail:
      'https://m.media-amazon.com/images/I/71xhji8aAZL._SL1500_.jpg',
    title:
      'Complan Nutrition and Health Drink Royale Chocolate, 500gm (Carton)',
    price: '280',
    newPrice: '260',
    rating: 4,
    day: days[(today.getDay() + 2) % 7],
    date: months[today.getMonth() % 12] + ' ' + (today.getDate() + 2),
  },
];

const responsiveRelatedItem = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export { relatedItemList, responsiveRelatedItem, popularItemList };
