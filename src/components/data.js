const productList = [
  {
    id: 1,
    img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.31861.jpg",
    model: "Sauvage",
    brand: "Dior",
    price: 250000,
    color: "Blue",
    quantity: "100ml",
    concentration: "Eau de Parfum",
    longetivity: "Long Lasting",
    count: 1,
    isAdded: false,
    isTrnding: true,
    type: "Perfume",
    gender: "Male",
    description: "A masculine fragrance with fresh spicy, citrus, amber and woody notes. Suitable for everyday wear and special occasions."
  },
  {
    id: 2,
    img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.25967.jpg",
    model: "Blue de Chanel",
    brand: "Chanel",
    price: 280000,
    color: "Blue",
    quantity: "100ml",
    concentration: "Eau de Parfum",
    longetivity: "Long Lasting",
    count: 1,
    isAdded: false,
    isTrnding: true,
    type: "Perfume",
    gender: "Male",
    description:"A sophisitcated masculine fragrance combing citrus, amber, woody and aromatic notes"
  },
  {
    id: 3,
    img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.611.jpg",
    model: "Mademoiselle",
    brand: "Chanel",
    price: 285000,
    color: "Clear",
    quantity: "100ml",
    concentration: "Eau de Parfum",
    longetivity: "Long Lasting",
    count: 1,
    isAdded: false,
    isTrnding: true,
    type: "Perfume",
    gender: "Female",
    description: "A elegant feminine fragrance featuring citrus, rose, patchouli.vanilla and white musk."
  },
  {
      id: 4,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.56077.jpg",
      model: "Libre",
      brand: "Yves Saint Laurent",
      price: 230000,
      color: "Gold",
      quantity: "90ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A feminine floral fragrance combining lavender, orange blossom, jasmine, vanilla and musk."
    },

    {
      id: 5,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.16657.jpg",
      model: "Eros",
      brand: "Versace",
      price: 145000,
      color: "Blue",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A fresh and energetic men's fragrance with mint, green apple, lemon, vanilla and woody notes."
    },

    {
      id: 6,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.3747.jpg",
      model: "1 Million",
      brand: "Rabanne",
      price: 125000,
      color: "Gold",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm and spicy men's fragrance with cinnamon, citrus, amber, leather and woody notes."
    },

    {
      id: 7,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.39681.jpg",
      model: "Good Girl",
      brand: "Carolina Herrera",
      price: 220000,
      color: "Black",
      quantity: "80ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A sweet feminine fragrance with almond, coffee, tuberose, jasmine, cacao, vanilla and tonka bean."
    },

    {
      id: 8,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.75805.jpg",
      model: "Khamrah",
      brand: "Lattafa",
      price: 53000,
      color: "Brown",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A warm unisex fragrance with cinnamon, dates, praline, vanilla, tonka bean and amberwood."
    },

    {
      id: 9,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.65414.jpg",
      model: "9PM",
      brand: "Afnan",
      price: 59000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A sweet and spicy men's fragrance with apple, cinnamon, vanilla, amber and tonka bean."
    },

    {
      id: 10,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.34696.jpg",
      model: "Club de Nuit Intense Man",
      brand: "Armaf",
      price: 65000,
      color: "Black",
      quantity: "105ml",
      concentration: "Eau de Toilette",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A masculine citrus and woody fragrance with lemon, pineapple, blackcurrant, birch and vanilla."
    },

    {
      id: 11,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.410.jpg",
      model: "Acqua di Gio",
      brand: "Giorgio Armani",
      price: 190000,
      color: "Clear",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A fresh aquatic men's fragrance with citrus, marine, aromatic and woody notes."
    },

    {
      id: 12,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.14982.jpg",
      model: "La Vie Est Belle",
      brand: "Lancôme",
      price: 210000,
      color: "Pink",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A sweet feminine fragrance with blackcurrant, pear, iris, jasmine, praline, vanilla and patchouli."
    },

    {
      id: 13,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.210.jpg",
      model: "J'adore",
      brand: "Dior",
      price: 230000,
      color: "Gold",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A luxurious floral fragrance with jasmine, rose, tuberose, fruity notes, vanilla and musk."
    },

    {
      id: 14,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.25324.jpg",
      model: "Black Opium",
      brand: "Yves Saint Laurent",
      price: 220000,
      color: "Black",
      quantity: "90ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A warm feminine fragrance featuring coffee, vanilla, pear, jasmine, patchouli and cedar."
    },

    {
      id: 15,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.18471.jpg",
      model: "Invictus",
      brand: "Rabanne",
      price: 125000,
      color: "Silver",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A fresh aquatic men's fragrance with grapefruit, marine notes, bay leaf, woods and amber."
    },

    {
      id: 16,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.485.jpg",
      model: "Light Blue",
      brand: "Dolce & Gabbana",
      price: 135000,
      color: "Blue",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A fresh feminine fragrance with lemon, apple, cedar, jasmine, white rose and musk."
    },

    {
      id: 17,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.698.jpg",
      model: "The One",
      brand: "Dolce & Gabbana",
      price: 135000,
      color: "Gold",
      quantity: "75ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A warm feminine fragrance with peach, vanilla, amber, white flowers and citrus notes."
    },

    {
      id: 18,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.31909.jpg",
      model: "The One for Men",
      brand: "Dolce & Gabbana",
      price: 145000,
      color: "Brown",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm masculine fragrance with grapefruit, coriander, cardamom, tobacco, amber and cedar."
    },

    {
      id: 19,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.383.jpg",
      model: "Boss Bottled",
      brand: "Hugo Boss",
      price: 115000,
      color: "Brown",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A classic masculine fragrance with apple, cinnamon, plum, vanilla, sandalwood and cedar."
    },

    {
      id: 20,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.12201.jpg",
      model: "Santal 33",
      brand: "Le Labo",
      price: 320000,
      color: "Brown",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A distinctive unisex woody fragrance with sandalwood, leather, cedar, cardamom, violet and iris."
    },

    {
      id: 21,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.228.jpg",
      model: "Fahrenheit",
      brand: "Dior",
      price: 150000,
      color: "Red",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A distinctive masculine fragrance combining leather, violet, woody, aromatic and citrus notes."
    },

    {
      id: 22,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.223.jpg",
      model: "Miss Dior",
      brand: "Dior",
      price: 220000,
      color: "Pink",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A feminine floral fragrance with rose, jasmine, iris, citrus, patchouli and woody notes."
    },

    {
      id: 23,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.1460.jpg",
      model: "Flowerbomb",
      brand: "Viktor & Rolf",
      price: 195000,
      color: "Pink",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A rich floral fragrance featuring tea, bergamot, jasmine, rose, orchid, patchouli, musk and vanilla."
    },

    {
      id: 24,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.1361.jpg",
      model: "Daisy",
      brand: "Marc Jacobs",
      price: 150000,
      color: "White",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A fresh feminine floral fragrance with strawberry, violet, gardenia, jasmine, vanilla and musk."
    },

    {
      id: 25,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.253.jpg",
      model: "Euphoria",
      brand: "Calvin Klein",
      price: 95000,
      color: "Purple",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A sensual feminine fragrance with pomegranate, orchid, lotus, amber and woody notes."
    },

    {
      id: 26,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.707.jpg",
      model: "Alien",
      brand: "Mugler",
      price: 175000,
      color: "Purple",
      quantity: "90ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A distinctive feminine fragrance built around jasmine sambac, cashmeran and warm amber."
    },

    {
      id: 27,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.62036.jpg",
      model: "My Way",
      brand: "Giorgio Armani",
      price: 190000,
      color: "Pink",
      quantity: "90ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A feminine floral fragrance featuring bergamot, orange blossom, tuberose, jasmine, vanilla and cedar."
    },

    {
      id: 28,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.18453.jpg",
      model: "Si",
      brand: "Giorgio Armani",
      price: 175000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A sophisticated feminine fragrance with blackcurrant, rose, freesia, vanilla and patchouli."
    },

    {
      id: 29,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.632.jpg",
      model: "Bright Crystal",
      brand: "Versace",
      price: 115000,
      color: "Pink",
      quantity: "90ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A fresh feminine fragrance with yuzu, pomegranate, peony, lotus, magnolia, musk and amber."
    },

    {
      id: 30,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.26358.jpg",
      model: "Man In Black",
      brand: "Bvlgari",
      price: 150000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm masculine fragrance with rum, spices, leather, iris, tonka bean and woody notes."
    },

    {
      id: 31,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.17.jpg",
      model: "Terre d'Hermès",
      brand: "Hermès",
      price: 165000,
      color: "Orange",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A mature masculine fragrance with orange, grapefruit, pepper, vetiver, cedar and patchouli."
    },

    {
      id: 32,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.430.jpg",
      model: "Le Male",
      brand: "Jean Paul Gaultier",
      price: 135000,
      color: "Silver",
      quantity: "125ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm masculine fragrance with lavender, mint, cinnamon, vanilla, tonka bean and sandalwood."
    },

    {
      id: 33,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.50757.jpg",
      model: "Y Eau de Parfum",
      brand: "Yves Saint Laurent",
      price: 175000,
      color: "Blue",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A fresh masculine fragrance with apple, ginger, bergamot, sage, cedar, vetiver and amberwood."
    },

    {
      id: 34,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.412.jpg",
      model: "Armani Code",
      brand: "Giorgio Armani",
      price: 135000,
      color: "Black",
      quantity: "125ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm masculine fragrance with lemon, bergamot, leather, tonka bean and tobacco."
    },

    {
      id: 35,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.45258.jpg",
      model: "Stronger With You",
      brand: "Emporio Armani",
      price: 145000,
      color: "Brown",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A sweet masculine fragrance with chestnut, sugar, sage, lavender, vanilla and smoky notes."
    },

    {
      id: 36,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.30499.jpg",
      model: "Spicebomb Extreme",
      brand: "Viktor & Rolf",
      price: 155000,
      color: "Black",
      quantity: "90ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A powerful spicy men's fragrance with vanilla, tobacco, cinnamon, cumin and warm spices."
    },

    {
      id: 37,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.30947.jpg",
      model: "Ultra Male",
      brand: "Jean Paul Gaultier",
      price: 155000,
      color: "Blue",
      quantity: "125ml",
      concentration: "Eau de Toilette Intense",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A sweet and intense men's fragrance with pear, lavender, cinnamon, vanilla, amber and woods."
    },

    {
      id: 38,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.46890.jpg",
      model: "Hawas for Him",
      brand: "Rasasi",
      price: 60000,
      color: "Silver",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A fresh aquatic masculine fragrance with apple, bergamot, cinnamon, watery notes, musk and amber."
    },

    {
      id: 39,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.64948.jpg",
      model: "Oud for Glory",
      brand: "Lattafa",
      price: 48000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A rich unisex oud fragrance with saffron, nutmeg, lavender, patchouli, musk and woody notes."
    },

    {
      id: 40,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.1826.jpg",
      model: "Oud Wood",
      brand: "Tom Ford",
      price: 350000,
      color: "Brown",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A luxurious unisex woody fragrance with oud, sandalwood, cardamom, vanilla and amber."
    },

    {
      id: 41,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.33519.jpg",
      model: "Baccarat Rouge 540",
      brand: "Maison Francis Kurkdjian",
      price: 480000,
      color: "Red",
      quantity: "70ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A luxurious unisex fragrance with saffron, jasmine, amberwood, cedar, sugar and ambroxan."
    },

    {
      id: 42,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.38914.jpg",
      model: "Mon Paris",
      brand: "Yves Saint Laurent",
      price: 185000,
      color: "Pink",
      quantity: "90ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A romantic feminine fragrance with strawberry, raspberry, pear, jasmine, patchouli and vanilla."
    },

    {
      id: 43,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.51249.jpg",
      model: "The Only One",
      brand: "Dolce & Gabbana",
      price: 145000,
      color: "Gold",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A sweet feminine fragrance with violet, coffee, pear, iris, caramel, vanilla and patchouli."
    },

    {
      id: 44,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.1733.jpg",
      model: "Chloé Eau de Parfum",
      brand: "Chloé",
      price: 175000,
      color: "Pink",
      quantity: "75ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A feminine floral fragrance with peony, rose, freesia, lily-of-the-valley, magnolia and cedar."
    },

    {
      id: 45,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.209.jpg",
      model: "For Her",
      brand: "Narciso Rodriguez",
      price: 155000,
      color: "Pink",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A soft feminine musky fragrance with rose, peach, musk, amber and woody notes."
    },

    {
      id: 46,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.1018.jpg",
      model: "Black Orchid",
      brand: "Tom Ford",
      price: 300000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A dark and luxurious fragrance with truffle, orchid, chocolate, patchouli, vanilla and incense."
    },

    {
      id: 47,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.31666.jpg",
      model: "Olympéa",
      brand: "Rabanne",
      price: 140000,
      color: "Pink",
      quantity: "80ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A feminine fragrance with vanilla, salted accords, jasmine, sandalwood and amber."
    },

    {
      id: 48,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.45651.jpg",
      model: "Scandal",
      brand: "Jean Paul Gaultier",
      price: 160000,
      color: "Gold",
      quantity: "80ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A sweet feminine fragrance with blood orange, honey, gardenia, jasmine, caramel and patchouli."
    },

    {
      id: 49,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.125843.jpg",
      model: "La Nuit de L'Homme",
      brand: "Yves Saint Laurent",
      price: 180000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm masculine fragrance with red apple, bergamot, tobacco, red pepper and amber."
    },

    {
      id: 50,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.34761.jpg",
      model: "Armani Code Profumo",
      brand: "Giorgio Armani",
      price: 155000,
      color: "Black",
      quantity: "110ml",
      concentration: "Eau de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A warm masculine fragrance with cardamom, green apple, lavender, tonka bean, amber and leather."
    },

    {
      id: 51,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.9045.jpg",
      model: "Lady Million",
      brand: "Rabanne",
      price: 140000,
      color: "Gold",
      quantity: "80ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A glamorous feminine fragrance with raspberry, neroli, orange blossom, jasmine, honey and amber."
    },

    {
      id: 52,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.74962.jpg",
      model: "Fame",
      brand: "Rabanne",
      price: 145000,
      color: "Black",
      quantity: "80ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A playful feminine fragrance with mango, bergamot, jasmine, olibanum, vanilla and sandalwood."
    },

    {
      id: 53,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.50384.jpg",
      model: "Cloud",
      brand: "Ariana Grande",
      price: 85000,
      color: "White",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A sweet feminine gourmand fragrance with coconut, vanilla, musk and creamy fruity notes."
    },

    {
      id: 54,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.56741.jpg",
      model: "Thank U, Next",
      brand: "Ariana Grande",
      price: 75000,
      color: "Pink",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A sweet fruity gourmand fragrance with raspberry, pear, coconut, pink rose, macarons and musk."
    },

    {
      id: 55,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.55795.jpg",
      model: "Idôle",
      brand: "Lancôme",
      price: 175000,
      color: "Pink",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Female",
      description:
        "A modern feminine floral fragrance with pear, bergamot, pink pepper, rose, jasmine, vanilla and musk."
    },

    {
      id: 56,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.53441.jpg",
      model: "Pure Musc",
      brand: "Narciso Rodriguez",
      price: 155000,
      color: "White",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A clean feminine musk fragrance with floral, powdery, woody and soft amber notes."
    },

    {
      id: 57,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.514.jpg",
      model: "Black XS",
      brand: "Rabanne",
      price: 90000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Toilette",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Male",
      description:
        "A sweet masculine fragrance with lemon, sage, praline, cinnamon, patchouli and warm amber."
    },

    {
      id: 58,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.52002.jpg",
      model: "Explorer",
      brand: "Montblanc",
      price: 95000,
      color: "Black",
      quantity: "100ml",
      concentration: "Eau de Parfum",
      longetivity: "Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Male",
      description:
        "A versatile masculine fragrance with citrus, woods, vetiver, leather and aromatic notes."
    },

    {
      id: 59,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.90432.jpg",
      model: "Olympéa Parfum",
      brand: "Rabanne",
      price: 155000,
      color: "Gold",
      quantity: "80ml",
      concentration: "Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: false,
      type: "Perfume",
      gender: "Female",
      description:
        "A rich feminine floral fragrance with clary sage, pink pepper, jasmine, orange blossom, vanilla and musk."
    },

    {
      id: 60,
      img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.70900.jpg",
      model: "Baccarat Rouge 540 Extrait",
      brand: "Maison Francis Kurkdjian",
      price: 550000,
      color: "Red",
      quantity: "70ml",
      concentration: "Extrait de Parfum",
      longetivity: "Very Long Lasting",
      count: 1,
      isAdded: false,
      isTrending: true,
      type: "Perfume",
      gender: "Unisex",
      description:
        "A luxurious unisex extrait with saffron, bitter almond, cedar, ambergris, musk and woody notes."
    }
];

export default productList;
