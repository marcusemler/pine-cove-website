const heroImages = {
  main: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/Pine-Cove-Treehouse-Hot-Tub-1920x1200.jpeg",
  secondary: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/wild-cherry-interior-slide.jpg"
};

const pageHeroImages = {
  "gallery.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/Exterior-1296x916.jpg",
  "location.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/lofty-willows-exterior-slide-1296x916.jpg",
  "attractions.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/horse-and-green-buggy.jpg",
  "collection.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/Pine-Cove-Treehouse-Hot-Tub-1920x1200.jpeg",
  "faq.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/wild-cherry-interior-slide.jpg",
  "contact.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/evergreen-cabin-exterior-overview.jpg"
};

const galleryItems = [
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/Pine-Cove-Treehouse-Hot-Tub-1920x1200.jpeg",
    title: "Private outdoor hot tubs",
    copy: "Soak under the stars with nothing but pines around you — select treehouses include covered outdoor hot tubs."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/Exterior-1296x916.jpg",
    title: "Wild Cherry Treehouse",
    copy: "Nestled into the evergreens on 7 wooded acres, a quarter mile from downtown Berlin."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/lofty-willows-exterior-slide-1296x916.jpg",
    title: "Lofty Willows Treehouse",
    copy: "A couples treehouse with a full kitchen, jetted tub, and fireplace tucked into the canopy."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/whispering-pines-exterior-slide-1296x916.jpg",
    title: "Whispering Pines Treehouse",
    copy: "Hot tub, full kitchen, and fireplace — designed for two, surrounded by pines."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/evergreen-cabin-exterior-overview.jpg",
    title: "The Evergreen Cabin",
    copy: "A private cabin for up to four with a three-person hot tub, full kitchen, and wood-burning fireplace."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/wild-cherry-interior-slide.jpg",
    title: "Warm, romantic interiors",
    copy: "Farmhouse finishes, soft lighting, and jetted tubs set the mood from the moment you arrive."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/barn-suite-overview.jpg",
    title: "Barn Suite",
    copy: "A farmhouse suite with a king bed, fireplace, and jetted tub — rustic charm, modern comfort."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/parlor-suite-overview.jpg",
    title: "Parlor Suite",
    copy: "Elegant and intimate — a couples suite with a fireplace and two-person jetted tub."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/magnolia-suite-overview.jpg",
    title: "Magnolia Suite",
    copy: "Soft, romantic tones and a jetted tub make this a favorite for anniversaries and getaways."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/silo-suite-overview.jpg",
    title: "Silo Suite",
    copy: "Two bedrooms, two bathrooms, and a fireplace — the largest farmhouse suite, perfect for two couples."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/cottonwood-suite-overview.jpg",
    title: "Cottonwood Suite",
    copy: "A cozy king suite with a fireplace and jetted tub — quiet, comfortable, and close to town."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2020/03/pine-cove-specials-callout.jpg",
    title: "Seven wooded acres",
    copy: "Pine Cove sits on 7 serene acres just 1 mile from downtown Berlin — private by nature, close by design."
  }
];

const faqs = [
  {
    question: "How do I book a stay at Pine Cove?",
    answer: "Every page on this website links directly to the Amish Country Lodging booking engine so you can book your exact suite or cabin in just a few clicks. You can also call (330) 893-1001 for personal assistance."
  },
  {
    question: "How close is Pine Cove to downtown Berlin?",
    answer: "Pine Cove sits on 7 wooded acres about 1 mile from the shops and restaurants of downtown Berlin. You get the privacy of a secluded retreat with everything the town has to offer just minutes away."
  },
  {
    question: "Is Pine Cove designed for couples?",
    answer: "Yes — Pine Cove was designed with romance in mind, and most stays feature king beds, two-person jetted tubs, and fireplaces. That said, families are absolutely welcome. The Silo Suite offers two bedrooms and two bathrooms with two king beds, and The Evergreen is a private cabin with two queen beds — both comfortably sleep four and are popular choices for families and two couples traveling together."
  },
  {
    question: "What amenities are included with each stay?",
    answer: "Depending on the unit, guests enjoy fireplaces, two-person jetted tubs, full kitchens or kitchenettes, outdoor hot tubs (select stays), ROKU Smart TVs, complimentary WiFi, and private parking. Linens, towels, and basic essentials are provided."
  },
  {
    question: "What is the difference between the farmhouse suites and the treehouses?",
    answer: "The farmhouse suites are ground-level accommodations inside the renovated Pine Cove farmhouse building — warm, intimate, and beautifully appointed. The treehouses (Wild Cherry, Lofty Willows, Whispering Pines) are elevated standalone cabins nestled into the woods. Both offer fireplaces and jetted tubs; treehouses add the elevated wooded setting."
  },
  {
    question: "What is The Evergreen?",
    answer: "The Evergreen is a private standalone cabin that sleeps up to 4 guests with two queen beds, a full kitchen, fireplace, two-person jetted tub, and a three-person outdoor hot tub. It's the most spacious standalone unit at Pine Cove."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation terms are displayed at the time of booking and may vary by unit and season. For questions about an existing reservation, please call (330) 893-1001."
  },
  {
    question: "Is Pine Cove pet-friendly?",
    answer: "Pine Cove is not pet-friendly, but several pet-friendly options are available across the Amish Country Lodging family of properties. Call (330) 893-1001 or visit amishcountrylodging.com for details."
  },
  {
    question: "Is there WiFi and cell service at the property?",
    answer: "Yes. All stays include complimentary WiFi. Most major carriers have good coverage in the Berlin area, though signal strength may vary slightly by unit."
  },
  {
    question: "Is Pine Cove accessible for guests with mobility limitations?",
    answer: "The farmhouse suites are ground-level and easier to access. The treehouses involve stairs and elevated walkways. Please call (330) 893-1001 to discuss your specific needs — we'll help you find the right fit."
  },
  {
    question: "What is the best time of year to visit?",
    answer: "Pine Cove is beautiful year-round. Fall is the most popular season in Amish Country with stunning foliage. Spring and summer bring lush green surroundings and warm outdoor evenings. Winter is especially cozy with fireplaces, jetted tubs, and snow-quiet woods."
  },
  {
    question: "How far is Pine Cove from Cleveland or Columbus?",
    answer: "Pine Cove is approximately 90 minutes from Cleveland and about 2 hours from Columbus — an easy weekend escape from anywhere in Ohio or the surrounding region."
  }
];

const featuredUnitNames = [
  "Wild Cherry Treehouse",
  "Whispering Pines Treehouse",
  "The Evergreen",
  "Barn Suite",
  "Silo Suite",
  "Lofty Willows Treehouse"
];

const units = [
  {
    name: "Wild Cherry Treehouse",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Couples treehouse",
    highlight: "An elevated treehouse for two with an outdoor hot tub, kitchenette, fireplace, and two-person jetted tub.",
    amenities: ["Outdoor hot tub", "Kitchenette", "Fireplace", "Jetted tub", "Smart TV", "WiFi"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214138",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/Exterior-1296x916.jpg"
  },
  {
    name: "Lofty Willows Treehouse",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Couples treehouse",
    highlight: "A wooded treehouse for two with a full kitchen, fireplace, and two-person jetted tub.",
    amenities: ["Full kitchen", "Fireplace", "Jetted tub", "Smart TV", "WiFi", "Private parking"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214137",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/lofty-willows-exterior-slide-1296x916.jpg"
  },
  {
    name: "Whispering Pines Treehouse",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Hot tub treehouse",
    highlight: "A secluded treehouse for two with an outdoor hot tub, full kitchen, fireplace, and jetted tub.",
    amenities: ["Outdoor hot tub", "Full kitchen", "Fireplace", "Jetted tub", "Smart TV", "WiFi"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214139",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/whispering-pines-exterior-slide-1296x916.jpg"
  },
  {
    name: "The Evergreen",
    guests: "Up to 4",
    beds: "2 queen beds",
    type: "Private cabin",
    highlight: "A standalone cabin for up to four with a three-person hot tub, full kitchen, fireplace, and two-person jetted tub.",
    amenities: ["3-person hot tub", "Full kitchen", "Fireplace", "Jetted tub", "2 queen beds", "Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214132",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/evergreen-cabin-exterior-overview.jpg"
  },
  {
    name: "Barn Suite",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Farmhouse suite",
    highlight: "A farmhouse suite with a king bed, fireplace, kitchenette, and two-person jetted tub.",
    amenities: ["Fireplace", "Kitchenette", "Jetted tub", "King bed", "Smart TV", "WiFi"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214133",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/barn-suite-overview.jpg"
  },
  {
    name: "Parlor Suite",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Farmhouse suite",
    highlight: "An elegant couples suite with a king bed, fireplace, kitchenette, and two-person jetted tub.",
    amenities: ["Fireplace", "Kitchenette", "Jetted tub", "King bed", "Smart TV", "WiFi"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214135",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/parlor-suite-overview.jpg"
  },
  {
    name: "Magnolia Suite",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Farmhouse suite",
    highlight: "A romantic farmhouse suite with a king bed, fireplace, kitchenette, and two-person jetted tub.",
    amenities: ["Fireplace", "Kitchenette", "Jetted tub", "King bed", "Smart TV", "WiFi"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214134",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/magnolia-suite-overview.jpg"
  },
  {
    name: "Silo Suite",
    guests: "Up to 4",
    beds: "2 king beds",
    type: "Two-bedroom suite",
    highlight: "A spacious two-bedroom, two-bathroom farmhouse suite with two king beds, fireplace, and jetted tub — ideal for two couples.",
    amenities: ["2 bedrooms", "2 bathrooms", "Fireplace", "Kitchen", "Jetted tub", "Sleeps 4"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214136",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/silo-suite-overview.jpg"
  },
  {
    name: "Cottonwood Suite",
    guests: "2 guests",
    beds: "1 king bed",
    type: "Farmhouse suite",
    highlight: "A cozy king suite with a fireplace, kitchenette, and two-person jetted tub in the Pine Cove farmhouse.",
    amenities: ["Fireplace", "Kitchenette", "Jetted tub", "King bed", "Smart TV", "WiFi"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214140",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/cottonwood-suite-overview.jpg"
  }
];
