export const restaurantDetails = [
    {
      "id": "1",
      "name": "El Cabo Coffe Bar Tres De Mayo",
      "deliveryFee": 1.40,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 35,
      "rating": '4.0',
      "totalRatings": '10000',
      "image": [
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
      ],
      "subcategories": ['North Indian', 'Italian', '₹250 for one'],
      "discount": {
        "isDiscountAvailable": true,
        "discountPercentage": 20,
        "maxDiscount": 50,
      },
      "dishes": [
        {
          "id": 1,
          "name": "Cheese Tequeños",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "6 pieces of chese with sauce.",
          "price": 6.90,
          "rating": '4.1',
          "totalRatings": '1000',
          "type": "veg",
        },
        {
          "id": 2,
          "name": "Hamburger La Super Cabo Burger",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
          "description": "Double meat, gouda cheese, cheddar cheese, cooked ham, bacon, egg, salad and rustic potatoes.",
          "price": 8.90,
          "rating": '4.2',
          "totalRatings": '2000',
          "type": "non-veg"
        },
        {
          "id": 3,
          "name": "U.S.A. Burger",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
          "description": "Beef, gouda cheese, cheddar cheese, cooked ham, bacon, egg and salad.",
          "price": 5.40,
          "rating": '4.4',
          "totalRatings": '4000',
          "type": "non-veg"
        },
        {
          "id": 4,
          "name": "Slices of Llanero Cheese",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
          "description": "Ripe plantain with cheese and palm honey.",
          "price": 5.90,
          "rating": '3.9',
          "totalRatings": '9000',
          "type": "veg"
        },
        {
          "id": 5,
          "name": "Papas Locas El Cabo",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "French fries with shredded chicken, gouda cheese and ham.",
          "price": 7.90,
          "rating": '4.6',
          "totalRatings": '6700',
          "type": "veg"
        }
      ]
    },
    {
      "id": "2",
      "name": "Tony Roma's - C.C. Meridiano",
      "deliveryFee": 0.40,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 35,
      "rating": 4.7,
      "totalRatings": '14000',
      "image": [
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
      ],
      "subcategories": ['South Indian', 'French', '₹1000 for two'],
      "discount": {
        "isDiscountAvailable": true,
        "discountPercentage": 10,
        "maxDiscount": 100,
      },
      "dishes": [
        {
          "id": 6,
          "name": "Cajun Ribs",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "For lovers of a spicy touch. Ribs bathed in our Original sauce accompanied by Cajun spices. Served with French fries and coleslaw.",
          "price": 18.95,
          "rating": '4.1',
          "totalRatings": '1500',
          "type": "veg"
        },
        {
          "id": 7,
          "name": "The Original Baby Backs",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
          "description": "The house specialty. Pork ribs cooked on the barbecue and marinated with our original barbecue sauce. Served with French fries and coleslaw.",
          "price": 19.95,
          "rating": '4.4',
          "totalRatings": '1600',
          "type": "non-veg"
        },
        {
          "id": 8,
          "name": "Carolina Honey",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
          "description": "Our famous ribs marinated with our Carolina honey sauce, a mixture of honey with our original sauce. Ideal for those looking for a sweet touch. Served with French fries and coleslaw.",
          "price": 18.95,
          "rating": '4.8',
          "totalRatings": '4200',
          "type": "non-veg"
        },
        {
          "id": 9,
          "name": "Onion Rings",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
          "description": "Los tradicionales aros de cebolla de tony roma´s dorados, crujientes y ligeros. Únicos en el mundo, acompañados de salsa BBQ.",
          "price": 6.95,
          "rating": '3.5',
          "totalRatings": '1770',
          "type": "veg"
        },
        {
          "id": 10,
          "name": "Nachos Tony Roma's",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
          "description": "The best selling nachos! with our blend of melted cheeses, accompanied by guacamole, crispy bacon, ranch beans, and sour cream.",
          "price": 10.95,
          "rating": '3.7',
          "totalRatings": '4500',
          "type": "veg"
        }
      ]
    },
    {
      "id": "3",
      "name": "Brothers Barbecue",
      "deliveryFee": 1.40,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 30,
      "rating": 4.3,
      "totalRatings": '5000',
      "image": [
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
      ],
      "subcategories": ['Mughlai Cuisine', 'French', '₹1000 for two'],
      "discount": {
        "isDiscountAvailable": true,
        "discountPercentage": 25,
        "maxDiscount": 100,
      },
      "dishes": [
        {
          "id": 11,
          "name": "Burger Mustang",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "Homemade bread, burger sauce, lettuce, sweet and sour pickle, bacon, cheddar and BBQ sauce. Beef 180 grams.",
          "price": 5.90,
          "rating": '4.3',
          "totalRatings": '5600',
          "type": "veg"
        },
        {
          "id": 12,
          "name": "Alabama bread",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
          "description": "Artisan bread, butter sauce, garlic, BBQ chicken and cheddar.",
          "price": 3.00,
          "rating": '3.9',
          "totalRatings": '3500',
          "type": "non-veg"
        },
        {
          "id": 13,
          "name": "New York Burger",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
          "description": "Homemade bread, lettuce, burger sauce, 180 grams of beef, goat cheese and roasted apple.",
          "price": 5.90,
          "rating": '4.5',
          "totalRatings": '900',
          "type": "non-veg"
        },
        {
          "id": 14,
          "name": "Mac & Cheese Burger",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
          "description": "Homemade bread, lettuce, burger sauce, 180 grams of beef, mac and cheese, and American-style bacon.",
          "price": 5.90,
          "rating": '3.0',
          "totalRatings": '6000',
          "type": "veg"
        },
        {
          "id": 15,
          "name": "Nachos Brothers",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "Nachos, guacamole, cheddar sauce, beans, bacon, and cream cheese.",
          "price": 5.20,
          "rating": '4.6',
          "totalRatings": '4600',
          "type": "veg"
        }
      ]
    },
    {
      "id": "4",
      "name": "Hamburguesa Nostra La Salle",
      "deliveryFee": 0.90,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "rating": 4.5,
      "totalRatings": '5300',
      "image": [
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
      ],
      "subcategories": ['Street Food', 'World Street Food', '₹200 for two'],
      "discount": {
        "isDiscountAvailable": false,
        "discountPercentage": 50,
        "maxDiscount": 150,
      },
      "dishes": [
        {
          "id": 16,
          "name": "English burger",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "Beef with bacon, portobello mushrooms, tomato, cheddar cheese, grilled egg and our smoked sauce.",
          "price": 14.90,
          "rating": '3.7',
          "totalRatings": '2500',
          "type": "veg"
        },
        {
          "id": 17,
          "name": "Mexican Burger",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
          "description": "Beef, with pico de gallo, veggie chili, cheddar cheese, guacamole and smoked sauce.",
          "price": 14.90,
          "rating": '3.7',
          "totalRatings": '2600',
          "type": "non-veg"
        },
        {
          "id": 18,
          "name": "Tequeños",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
          "description": "Crispy sticks filled with melted cheese accompanied by tomato chutney.",
          "price": 9.90,
          "rating": '2.1',
          "totalRatings": '5200',
          "type": "non-veg"
        },
        {
          "id": 19,
          "name": "Starters Combo",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
          "description": "Tequeños, crispy onion and chicken delicacies.",
          "price": 13.90,
          "rating": '4.9',
          "totalRatings": '90',
          "type": "veg"
        },
        {
          "id": 20,
          "name": "Cesar Salad",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
          "description": "Green sprouts, pieces of grilled bacon, chicken delicacies, grated Parmesan, muffin croutons and fried onion confetti dressed with Caesar sauce.",
          "price": 10.50,
          "rating": '3.1',
          "totalRatings": '900',
          "type": "veg"
        }
      ]
    }
  ]