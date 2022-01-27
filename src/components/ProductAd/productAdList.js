const productAdList = [
  {
    title: 'Bill payments got fast & convenient',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Recharge_186x116._SY116_CB663599035_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_186x116._SY116_CB663599035_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_186x116._SY116_CB663599035_.jpg',
    subtitle1: 'Prepaid Recharge',
    subtitle2: 'Electricity Bill',
    subtitle3: 'DTH Recharge',
    subtitle4: 'Broadband Bill',
  },
  {
    title: 'Now save bill details & get timely reminders',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Postpaid_186x116._SY116_CB663599035_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/LPG_186x116._SY116_CB663599035_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Credit_card_186x116._SY116_CB663599035_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/GPRC_186x116._SY116_CB663599035_.jpg',
    subtitle1: 'Postpaid Bill',
    subtitle2: 'LPG Gas cylinder',
    subtitle3: 'Credit card bill',
    subtitle4: 'Google Play recharge',
  },
  {
    title: 'Revamp your home in style',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg',
    subtitle1: 'Bedsheets, curtains & more',
    subtitle2: 'Home decoration',
    subtitle3: 'Home storage',
    subtitle4: 'Lighting solutions',
  },
  {
    title: 'Stay protected | Masks, PPE kits & more from startup...',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/mask_2_blue186x116._SY116_CB668519139_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/7.PPE-kit1_186x116._SY116_CB668519139_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/6.Sanitizers_186x116._SY116_CB668519139_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/4.-Vitamins1_186x116._SY116_CB668519139_.jpg',
    subtitle1: 'Masks',
    subtitle2: 'PPE kits & face shield',
    subtitle3: 'Sanitizers',
    subtitle4: 'Vitamins  ',
  },

  /////////////////////////////////////////////////////////////////////
  {
    title: 'Up to 45% off | Shop by Pet',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg',
    subtitle1: 'Dog Supplies',
    subtitle2: 'Cat Supplies',
    subtitle3: 'Birds & small animals',
    subtitle4: 'Aquarium accessories',
  },
  {
    title: 'Shop by Category',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg',
    subtitle1: 'Fresh',
    subtitle2: 'Mobiles',
    subtitle3: 'Fashion',
    subtitle4: 'Electronics',
  },
  {
    title: 'Top picks for your home',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg',
    subtitle1: 'ACs',
    subtitle2: 'Refrigerators',
    subtitle3: 'Microwaves',
    subtitle4: 'Washing Machines',
  },
  {
    title: 'Professional tools, testing & more',
    image1:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg',
    image2:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg',
    image3:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg',
    image4:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg',
    subtitle1: 'Professional tools',
    subtitle2: 'Measuring instruments',
    subtitle3: 'Cleaning supplies',
    subtitle4: 'Medical supplies',
  },
];

export default productAdList;
