export type Locale = "en" | "ar";

export interface ProductItem {
  name: string;
  note?: string;
  description: string;
  image: string;
  points?: string[];
}

export interface Translations {
  // Navigation & Common
  nav_sweets: string;
  nav_brine: string;
  nav_about: string;
  nav_contact: string;
  nav_home: string;
  tagline: string;
  select_language: string;
  english: string;
  arabic: string;
  get_in_touch: string;
  enquire: string;
  view_btn: string;
  explore_btn: string;
  all_rights: string;
  read_full_story: string;

  // Home Hero
  hero_eyebrow: string;
  hero_title: string;
  hero_lede: string;
  hero_cta_explore: string;
  hero_cta_about: string;
  hero_note_natural: string;
  hero_note_flavours: string;
  hero_note_share: string;

  // Categories
  cat_sweets_title: string;
  cat_sweets_count: string;
  cat_brine_title: string;
  cat_brine_count: string;
  cat_coastal_title: string;
  cat_coastal_count: string;

  // Home Sections
  home_sweets_eyebrow: string;
  home_sweets_title: string;
  home_sweets_desc: string;
  home_sweets_cta: string;

  home_brine_eyebrow: string;
  home_brine_title: string;
  home_brine_desc: string;
  home_brine_cta: string;

  home_anchovy_eyebrow: string;
  home_anchovy_title: string;
  home_anchovy_desc: string;
  home_anchovy_points: string[];
  home_anchovy_cta: string;

  home_sauce_eyebrow: string;
  home_sauce_title: string;
  home_sauce_desc: string;
  home_sauce_points: string[];
  home_sauce_cta: string;

  home_divider_badge: string;

  home_about_eyebrow: string;
  home_about_title: string;
  home_about_desc: string;
  values_item1_title: string;
  values_item1_desc: string;
  values_item2_title: string;
  values_item2_desc: string;
  values_item3_title: string;
  values_item3_desc: string;

  home_contact_eyebrow: string;
  home_contact_title: string;
  home_contact_desc: string;

  // Sweets Page
  sweets_page_eyebrow: string;
  sweets_page_title: string;
  sweets_page_sub: string;
  sweets_collection_eyebrow: string;
  sweets_collection_title: string;
  sweets_collection_desc: string;
  sweets_marquee: string[];
  sweets_list: ProductItem[];
  sweets_cta_eyebrow: string;
  sweets_cta_title: string;
  sweets_cta_desc: string;

  // Brine Page
  brine_page_eyebrow: string;
  brine_page_title: string;
  brine_page_sub: string;
  brine_collection_eyebrow: string;
  brine_collection_title: string;
  brine_collection_desc: string;
  brine_marquee: string[];
  brine_list: ProductItem[];
  brine_anchovy_title: string;
  brine_anchovy_desc: string;
  brine_anchovy_points: string[];
  brine_anchovy_cta: string;
  brine_sauce_title: string;
  brine_sauce_desc: string;
  brine_sauce_points: string[];
  brine_sauce_cta: string;
  brine_cta_eyebrow: string;
  brine_cta_title: string;
  brine_cta_desc: string;

  // About Page
  about_page_eyebrow: string;
  about_page_title: string;
  about_page_sub: string;
  about_who_eyebrow: string;
  about_who_title: string;
  about_who_p1: string;
  about_who_p2: string;
  about_values_eyebrow: string;
  about_values_title: string;
  about_values_desc: string;
  about_val1_title: string;
  about_val1_desc: string;
  about_val2_title: string;
  about_val2_desc: string;
  about_val3_title: string;
  about_val3_desc: string;
  about_teaser_eyebrow: string;
  about_teaser_title: string;
  about_teaser_desc: string;
  about_view_sweets: string;
  about_view_brine: string;

  // Contact Page
  contact_page_eyebrow: string;
  contact_page_title: string;
  contact_page_sub: string;
  contact_start_eyebrow: string;
  contact_start_title: string;
  contact_quick_trade: string;
  contact_chat_whatsapp: string;
  contact_chat_whatsapp_sub: string;
  contact_email_label: string;
  contact_phone_label: string;
  contact_instagram_label: string;
  contact_factory_label: string;
  contact_factory_address: string[];
  contact_starter_eyebrow: string;
  contact_starter_title: string;
  contact_starter_desc: string;

  // Contact Form
  form_name_label: string;
  form_name_placeholder: string;
  form_email_label: string;
  form_email_placeholder: string;
  form_phone_label: string;
  form_phone_placeholder: string;
  form_message_label: string;
  form_message_optional: string;
  form_message_placeholder: string;
  form_submit_btn: string;
  form_sending_btn: string;
  form_sent_btn: string;
  form_retry_btn: string;
  form_success_title: string;
  form_success_msg: string;
  form_or_divider: string;
  form_whatsapp_btn: string;

  // WhatsApp Floating Widget
  whatsapp_title: string;
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav_sweets: "Sweets",
    nav_brine: "In Brine",
    nav_about: "About Us",
    nav_contact: "Get in touch",
    nav_home: "Home",
    tagline: "Good food. Warm memories.",
    select_language: "Select Language",
    english: "English",
    arabic: "العربية",
    get_in_touch: "Get in touch",
    enquire: "Enquire",
    view_btn: "View",
    explore_btn: "Explore",
    all_rights: "All rights reserved.",
    read_full_story: "Read our full story",

    hero_eyebrow: "EST. 2024 · HONEST INGREDIENTS",
    hero_title: "Tradition, packed for today.",
    hero_lede: "Familiar sweets, vibrant vegetables in brine, and coastal pantry seasonings — prepared with care and presented with pride.",
    hero_cta_explore: "Explore our range",
    hero_cta_about: "Discover ARARA FOOD",
    hero_note_natural: "Natural ingredients",
    hero_note_flavours: "Distinctive flavours",
    hero_note_share: "Made to share",

    cat_sweets_title: "Heritage Sweets",
    cat_sweets_count: "4 Products",
    cat_brine_title: "Vegetables in Brine",
    cat_brine_count: "4 Products",
    cat_coastal_title: "Coastal Pantry",
    cat_coastal_count: "2 Products",

    home_sweets_eyebrow: "THE SWEET SECTION",
    home_sweets_title: "Crunch, comfort and a little joy.",
    home_sweets_desc: "Familiar nut and seed sweets, polished into premium everyday treats.",
    home_sweets_cta: "View all sweets",

    home_brine_eyebrow: "VEGETABLES IN BRINE",
    home_brine_title: "Bright flavour, beautifully preserved.",
    home_brine_desc: "Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang.",
    home_brine_cta: "View all brine products",

    home_anchovy_eyebrow: "COASTAL PANTRY · DRY POWDER",
    home_anchovy_title: "Anchovy fish dry powder for deep savoury warmth.",
    home_anchovy_desc: "Carefully dehydrated and finely milled anchovy dry powder, capturing authentic coastal umami without fuss. An effortless pantry essential for elevating curries, sambars, roasts, and rice.",
    home_anchovy_points: ["100% pure anchovy essence", "Rich coastal umami", "Aroma-sealed pouch"],
    home_anchovy_cta: "Explore dry powder",

    home_sauce_eyebrow: "COASTAL PANTRY · SAUCE PRE-MIX",
    home_sauce_title: "Fish sauce pre-mix with balanced coastal richness.",
    home_sauce_desc: "A masterfully crafted pre-mix blend delivering the rich, savoury complexity of traditional fish sauce with effortless convenience. Simply stir into stir-fries, marinades, curries, and broths.",
    home_sauce_points: ["Instant gourmet umami", "Perfect savoury balance", "Versatile cooking pre-mix"],
    home_sauce_cta: "Explore sauce pre-mix",

    home_divider_badge: "✦ COASTAL PANTRY COLLECTION ✦",

    home_about_eyebrow: "OUR STORY",
    home_about_title: "Food that brings out the inner child.",
    home_about_desc: "ARARA FOOD brings familiar flavours into a confident new presentation — warm enough to feel nostalgic, polished enough to feel special.",
    values_item1_title: "Ingredient first",
    values_item1_desc: "Let the real food, colour and texture lead every product.",
    values_item2_title: "Made with care",
    values_item2_desc: "Thoughtful formats that feel reliable, generous and easy to enjoy.",
    values_item3_title: "Proudly distinctive",
    values_item3_desc: "A bold navy-and-gold identity that stands apart on every shelf.",

    home_contact_eyebrow: "TRADE & PRODUCT ENQUIRIES",
    home_contact_title: "Bring ARARA FOOD to your table or store.",
    home_contact_desc: "Tell us which products you are interested in and how we can help.",

    // Sweets Page
    sweets_page_eyebrow: "THE SWEET SECTION",
    sweets_page_title: "Crunch, comfort and a little joy.",
    sweets_page_sub: "Familiar nut and seed sweets, polished into premium everyday treats. Every bar and ball carries the warmth of tradition.",
    sweets_collection_eyebrow: "OUR COLLECTION",
    sweets_collection_title: "Four treats. One tradition.",
    sweets_collection_desc: "Each product is crafted from carefully selected nuts and seeds, using time-honoured methods that let the natural flavours speak for themselves.",
    sweets_marquee: [
      "Peanut Candy Balls", "Sesame Candy Balls", "Sesame Candy Bites", "Mysore Pak",
      "Natural Ingredients", "Heritage Recipes", "Made with Care", "Distinctive Flavours"
    ],
    sweets_list: [
      {
        name: "Peanut Candy (Balls)",
        description: "Crunchy roasted peanut clusters bound into golden candy balls. Hand-crafted for a satisfying, nutty crunch that melts into rich caramelized warmth.",
        image: "/products/peanut-candy-balls.jpg",
      },
      {
        name: "Sesame Candy (Balls)",
        description: "Toasted sesame seeds rolled into crisp, aromatic candy spheres. A time-honoured recipe with a clean, delicate crunch and rich nutty sweetness.",
        image: "/products/sesame-candy-balls.jpg",
      },
      {
        name: "Sesame Candy (Bites)",
        description: "Individually wrapped golden sesame candy squares. Crisp, crunchy, and packed with wholesome slow-toasted sesame in every bite.",
        image: "/products/sesame-candy-bar.jpg",
      },
      {
        name: "Mysore Pak",
        description: "Heritage royal sweet made from roasted gram flour, ghee, and caramelized sugar. A melt-in-the-mouth golden delicacy with irresistible buttery richness.",
        image: "/products/mysore-pak.jpg",
      },
    ],
    sweets_cta_eyebrow: "INTERESTED IN OUR SWEETS?",
    sweets_cta_title: "Let's bring these treats to your table.",
    sweets_cta_desc: "Tell us which sweets you're interested in and we'll help you get started.",

    // Brine Page
    brine_page_eyebrow: "VEGETABLES IN BRINE & COASTAL PANTRY",
    brine_page_title: "Bright flavour, beautifully preserved.",
    brine_page_sub: "Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang — alongside our coastal pantry of anchovy fish dry powder and fish sauce pre-mix.",
    brine_collection_eyebrow: "VEGETABLES IN BRINE",
    brine_collection_title: "Preserved with pride.",
    brine_collection_desc: "Glass-packed vegetables with vivid colour, honest texture and a clean savoury tang that elevates every meal.",
    brine_marquee: [
      "Mango in Brine", "Lemon in Brine", "Green Chilli", "Red Chilli",
      "Anchovy Fish Dry Powder", "Fish Sauce Pre-Mix", "Glass Packed", "Coastal Staple"
    ],
    brine_list: [
      {
        name: "Mango in Brine",
        note: "Tart · bright · juicy",
        description: "Firm mango wedges preserved for a vibrant, savoury tang. The tartness cuts through rich curries and pairs beautifully with rice.",
        image: "/products/mango-in-brine.png",
      },
      {
        name: "Lemon in Brine",
        note: "Citrusy · bold · aromatic",
        description: "Lemon wedges with a clean, concentrated citrus lift. A versatile condiment that brightens any meal with its aromatic punch.",
        image: "/products/lemon-in-brine.png",
      },
      {
        name: "Green Chilli in Brine",
        note: "Fresh · piquant · crisp",
        description: "Whole green chillies with lively heat and a bright finish. Preserved at peak freshness for a crisp, clean bite every time.",
        image: "/products/green-chilli-in-brine.png",
      },
      {
        name: "Red Chilli in Brine",
        note: "Fiery · rich · vibrant",
        description: "Red chillies preserved at peak colour for a deeper heat. Their rich, smoky warmth adds character to any dish.",
        image: "/products/red-chilli-in-brine.png",
      },
    ],
    brine_anchovy_title: "Anchovy Fish Dry Powder",
    brine_anchovy_desc: "Carefully dehydrated and finely milled anchovy dry powder, capturing authentic coastal umami without fuss. An effortless pantry essential for elevating curries, sambars, roasts, and rice.",
    brine_anchovy_points: [
      "100% pure anchovy essence",
      "Rich coastal umami",
      "Aroma-sealed freshness pouch"
    ],
    brine_anchovy_cta: "Enquire about Dry Powder",

    brine_sauce_title: "Fish Sauce Pre-Mix",
    brine_sauce_desc: "A masterfully crafted seasoning pre-mix that delivers the rich, savoury complexity of traditional fish sauce with instant convenience. Perfect for curries, noodles, marinades, and signature dipping sauces.",
    brine_sauce_points: [
      "Instant savoury depth",
      "Balanced umami seasoning",
      "Convenient culinary format"
    ],
    brine_sauce_cta: "Enquire about Sauce Pre-Mix",

    brine_cta_eyebrow: "TRADE & PRODUCT ENQUIRIES",
    brine_cta_title: "Bring bold flavours to your store or kitchen.",
    brine_cta_desc: "Tell us which products you're interested in — vegetables in brine, anchovy fish dry powder, fish sauce pre-mix, or the full ARARA FOOD collection.",

    // About Page
    about_page_eyebrow: "OUR STORY",
    about_page_title: "Food that brings out the inner child.",
    about_page_sub: "ARARA FOOD brings familiar flavours into a confident new presentation — warm enough to feel nostalgic, polished enough to feel special.",
    about_who_eyebrow: "WHO WE ARE",
    about_who_title: "Where tradition meets today.",
    about_who_p1: "Born from a love of honest, homemade food, ARARA FOOD started with a simple idea: the recipes we grew up with deserve a bigger stage. We take heritage sweets, bright vegetables in brine, anchovy fish dry powder, and fish sauce pre-mix, then present them with the care and quality they've always deserved.",
    about_who_p2: "Every product carries a piece of home — the crunch of a freshly made peanut bar, the tang of perfectly brined mango, the deep umami of our coastal dry powder and sauce pre-mix. We believe great food doesn't need to be complicated. It just needs to be made with heart.",
    about_values_eyebrow: "OUR VALUES",
    about_values_title: "What we stand for.",
    about_values_desc: "Three principles guide everything we make — from sourcing to packaging to the moment you open the product.",
    about_val1_title: "Ingredient first",
    about_val1_desc: "Let the real food, colour and texture lead every product. No shortcuts, no fillers — just the ingredients you'd use at home, sourced with care.",
    about_val2_title: "Made with care",
    about_val2_desc: "Thoughtful formats that feel reliable, generous and easy to enjoy. Every batch is checked, every package is sealed with pride.",
    about_val3_title: "Proudly distinctive",
    about_val3_desc: "A bold navy-and-gold identity that stands apart on every shelf. We believe heritage food deserves a premium presentation.",
    about_teaser_eyebrow: "EXPLORE OUR RANGE",
    about_teaser_title: "Discover what we make.",
    about_teaser_desc: "From heritage sweets to vibrant brine-packed vegetables, anchovy fish dry powder, and fish sauce pre-mix — there's something for every kitchen.",
    about_view_sweets: "View Sweets",
    about_view_brine: "View Brine & Coastal",

    // Contact Page
    contact_page_eyebrow: "TRADE & PRODUCT ENQUIRIES",
    contact_page_title: "Bring ARARA FOOD to your table or store.",
    contact_page_sub: "Whether you're a retailer, distributor or food lover — we'd love to hear from you. Fill in the form and we'll get back to you.",
    contact_start_eyebrow: "START AN ENQUIRY",
    contact_start_title: "Tell us about yourself.",
    contact_quick_trade: "Quick Trade Enquiries",
    contact_chat_whatsapp: "Chat directly on WhatsApp",
    contact_chat_whatsapp_sub: "Connect with our sales & product team instantly for catalogue, orders, or distribution questions.",
    contact_email_label: "Email Enquiries",
    contact_phone_label: "Phone & WhatsApp",
    contact_instagram_label: "Instagram",
    contact_factory_label: "Factory Location",
    contact_factory_address: [
      "Al Mubarak Factory Agency",
      "Building No. 2/20B, Panakkulam",
      "Rayaranghoth Post, Kerala"
    ],
    contact_starter_eyebrow: "NOT SURE WHERE TO START?",
    contact_starter_title: "Explore our full range first.",
    contact_starter_desc: "Browse our heritage sweets, brine-preserved vegetables, anchovy fish dry powder, and fish sauce pre-mix to find what suits your needs.",

    // Contact Form
    form_name_label: "Full Name",
    form_name_placeholder: "Your name",
    form_email_label: "Email Address",
    form_email_placeholder: "you@example.com",
    form_phone_label: "Phone Number",
    form_phone_placeholder: "+91 98765 43210",
    form_message_label: "Message",
    form_message_optional: "(optional)",
    form_message_placeholder: "Tell us which products you're interested in...",
    form_submit_btn: "Send Enquiry",
    form_sending_btn: "Sending Enquiry…",
    form_sent_btn: "✓ Enquiry Sent Successfully",
    form_retry_btn: "Retry Sending",
    form_success_title: "✓ Enquiry Sent!",
    form_success_msg: "Thank you! Your message has been sent to our team at ararafoodindustry@gmail.com. We will contact you shortly.",
    form_or_divider: "OR",
    form_whatsapp_btn: "Chat on WhatsApp (+91 96454 20727)",

    // WhatsApp Floating Widget
    whatsapp_title: "Chat with us",
  },
  ar: {
    nav_sweets: "حلويات تراثية",
    nav_brine: "مخللات في المحلول",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    nav_home: "الرئيسية",
    tagline: "طعام طيب. ذكريات دافئة.",
    select_language: "اختر اللغة",
    english: "English",
    arabic: "العربية",
    get_in_touch: "تواصل معنا",
    enquire: "استفسر الآن",
    view_btn: "عرض",
    explore_btn: "استكشف",
    all_rights: "جميع الحقوق محفوظة.",
    read_full_story: "اقرأ قصتنا كاملة",

    hero_eyebrow: "تأسست ٢٠٢٤ · مكونات طبيعية وصادقة",
    hero_title: "الأصالة والتراث، معبأة لليوم.",
    hero_lede: "حلويات مألوفة، خضروات طازجة في محلول ملحي، وتوابل ساحلية أصيلة — مُعدة بعناية ومقدمة بكل فخر واعتزاز.",
    hero_cta_explore: "استكشف منتجاتنا",
    hero_cta_about: "اكتشف أرارا فود",
    hero_note_natural: "مكونات طبيعية",
    hero_note_flavours: "نكهات مميزة",
    hero_note_share: "صُنعت لتُشارك",

    cat_sweets_title: "حلويات تراثية",
    cat_sweets_count: "٤ منتجات",
    cat_brine_title: "خضار في المحلول الملحي",
    cat_brine_count: "٤ منتجات",
    cat_coastal_title: "المونة الساحلية",
    cat_coastal_count: "منتجان",

    home_sweets_eyebrow: "قسم الحلويات",
    home_sweets_title: "قرمشة ممتعة ودفء وابتسامة.",
    home_sweets_desc: "حلويات المكسرات والبذور التراثية المألوفة، مصقولة في تشكيلة راقية ليومك.",
    home_sweets_cta: "عرض جميع الحلويات",

    home_brine_eyebrow: "خضروات في المحلول الملحي",
    home_brine_title: "نكهة نضرة، محفوظة بإتقان.",
    home_brine_desc: "خضروات معبأة في أوعية زجاجية بألوان حية وقوام طبيعي ونكهة حمضية منعشة.",
    home_brine_cta: "عرض جميع المخللات",

    home_anchovy_eyebrow: "المونة الساحلية · مسحوق مجفف",
    home_anchovy_title: "مسحوق سمك الأنشوفة لنكهة ساحلية عميقة وغنية.",
    home_anchovy_desc: "مسحوق الأنشوفة المجفف والمطحون بعناية، يجسد نكهة الأومامي الساحلية الأصيلة بدون أي عناء. إضافة لا غنى عنها في مطبخك للكاري والحساء والشوربات والأرز.",
    home_anchovy_points: ["خلاصة سمك الأنشوفة ١٠٠٪", "نكهة أومامي ساحلية غنية", "كيس محكم لحفظ النكهة"],
    home_anchovy_cta: "استكشف مسحوق الأنشوفة",

    home_sauce_eyebrow: "المونة الساحلية · خلطة الصلصة",
    home_sauce_title: "خلطة صلصة السمك المركزة بتوازن ساحلي مثالي.",
    home_sauce_desc: "مزيج متقن ومتبل يمنحك النكهة الغنية والعميقة لصلصة السمك التراثية بكل سهولة وسرعة. يضاف مباشرة إلى المقالي البحرية والتتبيلات وأطباق الكاري.",
    home_sauce_points: ["نكهة أومامي فورية", "توازن نكهات مثالي", "خلطة طهي متعددة الاستخدامات"],
    home_sauce_cta: "استكشف خلطة الصلصة",

    home_divider_badge: "✦ تشكيلة المونة الساحلية ✦",

    home_about_eyebrow: "قصتنا",
    home_about_title: "طعام يُعيد إليك بهجة الطفولة.",
    home_about_desc: "تأتيكم أرارا فود بالنكهات الدافئة المألوفة في حلة جديدة وعصرية — دافئة لتبعث على الحنين، وأنيقة لتناسب أبهى المناسبات.",
    values_item1_title: "المكون أولاً",
    values_item1_desc: "دع الأطعمة الحقيقية بألوانها وقوامها تقود كل منتج نصنعه.",
    values_item2_title: "صُنعت بعناية",
    values_item2_desc: "أحجام وأشكال مدروسة وسخية لتستمتع بها بكل موثوقية وسهولة.",
    values_item3_title: "هوية مميزة بكل فخر",
    values_item3_desc: "هوية كلاسيكية بلوني الكحلي والذهبي تبرز بفخامة على كل رف.",

    home_contact_eyebrow: "استفسارات المنتجات والتجارة",
    home_contact_title: "اجلب منتجات أرارا فود إلى مائدتك أو متجرك.",
    home_contact_desc: "أخبرنا بالمنتجات التي تهمك وكيف يمكننا مساعدتك وتلبية طلبك.",

    // Sweets Page
    sweets_page_eyebrow: "قسم الحلويات التراثية",
    sweets_page_title: "قرمشة ممتعة ودفء وابتسامة.",
    sweets_page_sub: "حلويات المكسرات والبذور الشهية، مصقولة في تشكيلة راقية للاستمتاع اليومي. كل قطعة تحمل دفء التقاليد وعراقتها.",
    sweets_collection_eyebrow: "مجموعتنا المختارة",
    sweets_collection_title: "أربعة أصناف. تراث واحد.",
    sweets_collection_desc: "صُنع كل منتج من مكسرات وبذور منتقاة بعناية، بطرق تقليدية أصيلة تجعل النكهات الطبيعية تعبر عن نفسها بوضوح.",
    sweets_marquee: [
      "كرات حلوى الفول السوداني", "كرات حلوى السمسم", "مربعات حلوى السمسم", "مايسور باك الفاخر",
      "مكونات طبيعية", "وصفات تراثية", "صُنعت بعناية", "نكهات أصيلة ومميزة"
    ],
    sweets_list: [
      {
        name: "كرات حلوى الفول السوداني (Peanut Candy)",
        description: "كرات الفول السوداني المحمص والمقرمش بكراميل ذهبي غني، مجهزة يدوياً لتقدم قرمشة مشبعة ومذاقاً دافئاً مفعماً بالأصالة.",
        image: "/products/peanut-candy-balls.jpg",
      },
      {
        name: "كرات حلوى السمسم (Sesame Candy)",
        description: "كرات بذور السمسم المحمص والمتبل بحلاوة متوازنة، هشة وخفيفة بنكهة عطرية أصيلة تبهج الحواس مع كل قضمة.",
        image: "/products/sesame-candy-balls.jpg",
      },
      {
        name: "مربعات حلوى السمسم (Sesame Candy)",
        description: "قطع حلوى السمسم الذهبية المربعة والمغلفة فردياً بكل عناية، سهلة التقديم ومحفوظة بطزاجة وقرمشة فائقة تدوم طويلاً.",
        image: "/products/sesame-candy-bar.jpg",
      },
      {
        name: "مايسور باك التراثي (Mysore Pak)",
        description: "حلوى المايسور باك الملكية الفاخرة المجهزة بدقيق الحمص المحمص والسمن البلدي النقي، تذوب في الفم بنعومة ونكهة غنية ساحرة.",
        image: "/products/mysore-pak.jpg",
      },
    ],
    sweets_cta_eyebrow: "مهتم بحلوياتنا التراثية؟",
    sweets_cta_title: "دعنا نجلب هذه الحلويات المميزة إلى مائدتك.",
    sweets_cta_desc: "أخبرنا بالحلويات التي ترغب في طلبها وسنساعدك بكل سرور في بدء طلبك.",

    // Brine Page
    brine_page_eyebrow: "خضروات في المحلول والمونة الساحلية",
    brine_page_title: "نكهة نضرة، محفوظة بإتقان.",
    brine_page_sub: "خضروات معبأة في أوعية زجاجية بألوان حية وملمس صادق ونكهة حمضية شهية — جنباً إلى جنب مع منتجات المونة الساحلية من مسحوق الأنشوفة وصلصة السمك.",
    brine_collection_eyebrow: "خضروات في المحلول الملحي",
    brine_collection_title: "محفوظة بكل فخر واعتزاز.",
    brine_collection_desc: "خضروات معبأة بعناية فائقة لتمنحك النكهة التراثية المنعشة التي تثري وترتقي بكل وجبة.",
    brine_marquee: [
      "مانجو في المحلول", "ليمون في المحلول", "فلفل أخضر", "فلفل أحمر",
      "مسحوق سمك الأنشوفة", "خلطة صلصة السمك", "معبأة في الزجاج", "أساسيات ساحلية"
    ],
    brine_list: [
      {
        name: "مانجو في المحلول الملحي",
        note: "حامض · منعش · طري",
        description: "قطع مانجو طازجة محفوظة بنكهة حمضية لاذعة ومميزة تتناغم بشكل رائع مع الكاري وأطباق الأرز.",
        image: "/products/mango-in-brine.png",
      },
      {
        name: "ليمون في المحلول الملحي",
        note: "حمضي · جريء · عطري",
        description: "قطع ليمون بنكهة حمضية مركزة وعطرية. إضافة مثالية تضفي بهجة ونكهة مميزة على مائدتك.",
        image: "/products/lemon-in-brine.png",
      },
      {
        name: "فلفل أخضر في المحلول الملحي",
        note: "طازج · حار · مقرمش",
        description: "فلفل أخضر كامل محفوظ في أوج نضارته ليمنحك حرارة نابضة وقرمشة شهية مع كل لقمة.",
        image: "/products/green-chilli-in-brine.png",
      },
      {
        name: "فلفل أحمر في المحلول الملحي",
        note: "حار جداً · غني · نابض",
        description: "فلفل أحمر ناضج بألوان زاهية ودفء عميق يضيف نكهة وشخصية مميزة لكل طبق.",
        image: "/products/red-chilli-in-brine.png",
      },
    ],
    brine_anchovy_title: "مسحوق سمك الأنشوفة المجفف",
    brine_anchovy_desc: "مسحوق الأنشوفة المجفف والمطحون بعناية فائقة، يجسد النكهة الساحلية التراثية الغنية لتتبيل وترقية أطباق الكاري والشوربات واليخنات والأرز.",
    brine_anchovy_points: [
      "خلاصة سمك الأنشوفة الصافية ١٠٠٪",
      "نكهة أومامي ساحلية غنية",
      "كيس محكم الإغلاق لحفظ النكهة الطازجة"
    ],
    brine_anchovy_cta: "استفسر عن مسحوق الأنشوفة",

    brine_sauce_title: "خلطة صلصة السمك المركزة",
    brine_sauce_desc: "خلطة توابل وتتبيل مبتكرة تقدم النكهة الغنية والعميقة لصلصة السمك التراثية بكل راحة وسرعة. مثالية للكاري والنودلز والتتبيلات والصلصات الخاصة.",
    brine_sauce_points: [
      "نكهة أومامي مركزة وفورية",
      "توازن توابل وتتبيل مثالي",
      "صيغة طهي سهلة ومتعددة الاستخدامات"
    ],
    brine_sauce_cta: "استفسر عن خلطة صلصة السمك",

    brine_cta_eyebrow: "استفسارات التجارة والتوزيع",
    brine_cta_title: "اجلب النكهات الأصيلة إلى متاجرك ومطبخك.",
    brine_cta_desc: "تواصل معنا وأخبرنا بالمنتجات التي ترغب في توفيرها — خضار في المحلول الملحي، مسحوق الأنشوفة، خلطة صلصة السمك، أو التشكيلة الكاملة من أرارا فود.",

    // About Page
    about_page_eyebrow: "قصتنا",
    about_page_title: "طعام يُعيد إليك بهجة الطفولة.",
    about_page_sub: "تأتيكم أرارا فود بالنكهات الدافئة المألوفة في حلة جديدة وعصرية — دافئة لتبعث على الحنين، وأنيقة لتناسب أبهى المناسبات.",
    about_who_eyebrow: "من نحن",
    about_who_title: "حيث يلتقي التراث بالحاضر.",
    about_who_p1: "انطلاقاً من حبنا للطعام الأصيل والمحضر في المنزل، بدأت أرارا فود بفكرة بسيطة: الوصفات التي نشأنا عليها تستحق انتشاراً أوسع واحتفاءً أكبر. نحن نأخذ الحلويات التراثية، والخضروات الطازجة في المحلول الملحي، ومسحوق الأنشوفة المجفف، وخلطة صلصة السمك، ونقدمها بالجودة والعناية التي تستحقها دائماً.",
    about_who_p2: "يحمل كل منتج من منتجاتنا قطعة من ذكريات المنزل — قرمشة لوح الفول السوداني الطازج، حموضة المانجو المنعشة، والعمق البحري الأصيل لمسحوق الأنشوفة وصلصاتنا الساحلية. نؤمن بأن الطعام الرائع لا يحتاج إلى تعقيد، بل يحتاج فقط إلى أن يُصنع بكل حب ومن صميم القلب.",
    about_values_eyebrow: "قيمنا ومبادئنا",
    about_values_title: "ما نؤمن به ونمثله.",
    about_values_desc: "ثلاثة مبادئ أصيلة توجه كل ما نصنعه — بدءاً من اختيار المكونات، مروراً بالتغليف، وحتى اللحظة التي تفتح فيها المنتج.",
    about_val1_title: "المكون أولاً",
    about_val1_desc: "دع الطعام الحقيقي بلونه الطبيعي وقوامه الأصيل يقود كل منتج. لا مساومات ولا مواد حشو صناعية — فقط المكونات التي تستخدمها في منزلك.",
    about_val2_title: "صُنعت بعناية",
    about_val2_desc: "أشكال وأحجام مصممة بعناية لتكون سخية وسهلة وممتعة. يتم فحص كل دفعة وختم كل عبوة بكل فخر وثقة.",
    about_val3_title: "هوية مميزة بكل فخر",
    about_val3_desc: "هوية جريئة بلوني الكحلي والذهبي تتألق على كل رف. نؤمن بأن الطعام التراثي يستحق تقديماً راقياً ومميزاً.",
    about_teaser_eyebrow: "استكشف منتجاتنا",
    about_teaser_title: "اكتشف ما نقدمه.",
    about_teaser_desc: "من الحلويات التراثية إلى المخللات المنعشة ومسحوق الأنشوفة وخلطة صلصة السمك — هناك نكهة تسعد كل مطبخ.",
    about_view_sweets: "عرض الحلويات",
    about_view_brine: "عرض المخللات والمنتجات الساحلية",

    // Contact Page
    contact_page_eyebrow: "استفسارات التجارة والتوزيع",
    contact_page_title: "اجلب منتجات أرارا فود إلى مائدتك أو متجرك.",
    contact_page_sub: "سواء كنت تاجر تجزئة أو موزعاً أو من عشاق المذاق الأصيل — يسعدنا جداً تواصلك معنا. املأ النموذج وسنرد عليك بأسرع وقت.",
    contact_start_eyebrow: "ابدأ استفسارك",
    contact_start_title: "أخبرنا عنك وعن طلبك.",
    contact_quick_trade: "استفسارات التجارة السريعة",
    contact_chat_whatsapp: "محادثة مباشرة عبر واتساب",
    contact_chat_whatsapp_sub: "تواصل مع فريق المبيعات والمنتجات مباشرة لطلب الكتالوج والأسعار وتفاصيل التوزيع.",
    contact_email_label: "البريد الإلكتروني للاستفسارات",
    contact_phone_label: "الهاتف وواتساب",
    contact_instagram_label: "إنستغرام",
    contact_factory_label: "موقع المصنع",
    contact_factory_address: [
      "وكالة مصنع المبارك",
      "مبنى رقم 2/20B، باناكولام",
      "بريد رايارانغوث، كيرالا"
    ],
    contact_starter_eyebrow: "لست متأكداً من أين تبدأ؟",
    contact_starter_title: "استكشف تشكيلتنا الكاملة أولاً.",
    contact_starter_desc: "تصفح حلوياتنا التراثية، وخضرواتنا المحفوظة في المحلول الملحي، ومسحوق الأنشوفة، وخلطة صلصة السمك لاختيار ما يناسب احتياجاتك.",

    // Contact Form
    form_name_label: "الاسم الكامل",
    form_name_placeholder: "اسمك الكريم",
    form_email_label: "البريد الإلكتروني",
    form_email_placeholder: "example@domain.com",
    form_phone_label: "رقم الهاتف",
    form_phone_placeholder: "+91 98765 43210",
    form_message_label: "الرسالة",
    form_message_optional: "(اختياري)",
    form_message_placeholder: "أخبرنا بالمنتجات التي ترغب في الاستفسار عنها...",
    form_submit_btn: "إرسال الاستفسار",
    form_sending_btn: "جاري الإرسال…",
    form_sent_btn: "✓ تم إرسال الاستفسار بنجاح",
    form_retry_btn: "إعادة المحاولة",
    form_success_title: "✓ تم الإرسال بنجاح!",
    form_success_msg: "شكراً لتواصلك! تم إرسال رسالتك إلى فريقنا على ararafoodindustry@gmail.com وسنقوم بالتواصل معك قريباً.",
    form_or_divider: "أو",
    form_whatsapp_btn: "تحدث معنا عبر واتساب (+91 96454 20727)",

    // WhatsApp Floating Widget
    whatsapp_title: "تواصل معنا عبر واتساب",
  },
};
