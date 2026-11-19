const EMIRATES = [
  { id: "abu-dhabi",      name: { en: "Abu Dhabi",      ar: "أبوظبي" },    emoji: "🕌" },
  { id: "dubai",          name: { en: "Dubai",          ar: "دبي" },        emoji: "🏙️" },
  { id: "sharjah",        name: { en: "Sharjah",        ar: "الشارقة" },    emoji: "🎭" },
  { id: "ajman",          name: { en: "Ajman",          ar: "عجمان" },      emoji: "🏖️" },
  { id: "umm-al-quwain",  name: { en: "Umm Al Quwain",  ar: "أم القيوين" }, emoji: "🌊" },
  { id: "ras-al-khaimah", name: { en: "Ras Al Khaimah", ar: "رأس الخيمة" }, emoji: "⛰️" },
  { id: "fujairah",       name: { en: "Fujairah",       ar: "الفجيرة" },    emoji: "🌄" }
];

const CATEGORIES = [
  { id: "fort",           name: { en: "Forts",             ar: "الحصون" } },
  { id: "museum",         name: { en: "Museums",           ar: "المتاحف" } },
  { id: "archaeological", name: { en: "Archaeological",    ar: "المواقع الأثرية" } },
  { id: "village",        name: { en: "Historic Villages", ar: "القرى التاريخية" } },
  { id: "oasis",          name: { en: "Oases",             ar: "الواحات" } }
];

const PLACES = [
  { id: "qasr-al-hosn", emirate: "abu-dhabi", category: "fort",
    name: { en: "Qasr Al Hosn", ar: "قصر الحصن" },
    description: { en: "The oldest stone building in Abu Dhabi, once home to the ruling Al Nahyan family. Today it stands as a museum chronicling the emirate's transformation from a pearling village to a modern capital.", ar: "أقدم مبنى حجري في أبوظبي، وكان مقراً للعائلة الحاكمة آل نهيان. اليوم يعد متحفاً يوثق تحول الإمارة من قرية لصيد اللؤلؤ إلى عاصمة حديثة." },
    notes: { en: "Open daily 9:00–20:00. Guided tours available. Located in downtown Abu Dhabi.", ar: "مفتوح يومياً من ٩:٠٠ إلى ٢٠:٠٠. تتوفر جولات مرشدة. يقع في وسط مدينة أبوظبي." },
    image: "images/qasr-al-hosn.jpg" },
  { id: "louvre-abu-dhabi", emirate: "abu-dhabi", category: "museum",
    name: { en: "Louvre Abu Dhabi", ar: "اللوفر أبوظبي" },
    description: { en: "A universal museum on Saadiyat Island with a spectacular 'rain of light' dome. Houses artworks from civilisations across the world.", ar: "متحف عالمي على جزيرة السعديات بقبة مذهلة تسمح بمرور 'مطر من الضوء'. يضم أعمالاً فنية من حضارات العالم." },
    notes: { en: "Open Tue–Sun 10:00–18:30. Closed Mondays. Book tickets online.", ar: "مفتوح الثلاثاء–الأحد ١٠:٠٠–١٨:٣٠. مغلق الاثنين. احجز التذاكر عبر الإنترنت." },
    image: "images/louvre-abu-dhabi.jpg" },
  { id: "al-ain-oasis", emirate: "abu-dhabi", category: "oasis",
    name: { en: "Al Ain Oasis", ar: "واحة العين" },
    description: { en: "A UNESCO World Heritage Site featuring ancient falaj irrigation channels that have sustained palm groves for centuries.", ar: "موقع تراث عالمي لليونسكو يضم قنوات الري (الأفلاج) القديمة التي تغذي بساتين النخيل منذ قرون." },
    notes: { en: "Free entry. Open daily. Wear comfortable shoes for walking.", ar: "الدخول مجاني. مفتوح يومياً. احرص على ارتداء أحذية مريحة." },
    image: "images/al-ain-oasis.jpg" },
  { id: "al-fahidi", emirate: "dubai", category: "village",
    name: { en: "Al Fahidi Historical District", ar: "حي الفهيدي التاريخي" },
    description: { en: "Dubai's oldest neighbourhood, with wind-tower houses, narrow lanes, art galleries, and traditional coffee houses.", ar: "أقدم حي في دبي، يضم بيوت البراجيل والأزقة الضيقة والمعارض الفنية والمقاهي التقليدية." },
    notes: { en: "Free to explore. Best visited in cooler months. Located in Bur Dubai.", ar: "الاستكشاف مجاني. يفضل زيارته في الأشهر الباردة. يقع في بر دبي." },
    image: "images/al-fahidi.jpg" },
  { id: "jumeirah-mosque", emirate: "dubai", category: "museum",
    name: { en: "Jumeirah Mosque", ar: "مسجد الجميرا" },
    description: { en: "An iconic example of Fatimid architecture and one of the few mosques in the UAE open to non-Muslim visitors.", ar: "مثال بارز على العمارة الفاطمية وأحد المساجد القليلة في الإمارات المفتوحة لغير المسلمين." },
    notes: { en: "Guided tours most mornings except Fridays. Modest dress required.", ar: "جولات مرشدة معظم الصباحات عدا الجمعة. يُشترط اللباس المحتشم." },
    image: "images/jumeirah-mosque.jpg" },
  { id: "sharjah-fort", emirate: "sharjah", category: "fort",
    name: { en: "Sharjah Fort (Al Hisn)", ar: "حصن الشارقة (الحصن)" },
    description: { en: "The historic seat of Sharjah's rulers, restored to show traditional architecture and life of the Al Qasimi dynasty.", ar: "المقر التاريخي لحكام الشارقة، أعيد ترميمه ليظهر العمارة التقليدية وحياة أسرة القواسم." },
    notes: { en: "Open Sat–Thu 8:00–20:00. Part of Sharjah Museums.", ar: "مفتوح السبت–الخميس ٨:٠٠–٢٠:٠٠. ضمن متاحف الشارقة." },
    image: "images/sharjah-fort.jpg" },
  { id: "ajman-fort", emirate: "ajman", category: "fort",
    name: { en: "Ajman Fort", ar: "حصن عجمان" },
    description: { en: "A historic fort dating back to 1820, now serving as a museum displaying artifacts from the emirate's history.", ar: "حصن تاريخي يعود تاريخه إلى عام ١٨٢٠، يعمل الآن كمتحف يعرض مقتنيات من تاريخ الإمارة." },
    notes: { en: "Open daily except Friday mornings.", ar: "مفتوح يومياً عدا صباح الجمعة." },
    image: "images/ajman-fort.jpg" },
  { id: "umm-al-quwain-fort", emirate: "umm-al-quwain", category: "fort",
    name: { en: "Umm Al Quwain Fort", ar: "حصن أم القيوين" },
    description: { en: "Also known as Al Ali Fort, this structure houses a museum with archaeological finds and traditional weapons.", ar: "يُعرف أيضاً بحصن آل علي، ويضم متحفاً يحتوي على مكتشفات أثرية وأسلحة تقليدية." },
    notes: { en: "Located in the old town. Small entry fee.", ar: "يقع في البلدة القديمة. رسوم دخول بسيطة." },
    image: "images/umm-al-quwain-fort.jpg" },
  { id: "dhayah-fort", emirate: "ras-al-khaimah", category: "fort",
    name: { en: "Dhayah Fort", ar: "حصن ضاية" },
    description: { en: "A hilltop fort with stunning views over palm groves and the Hajar Mountains. Site of a historic battle in 1819.", ar: "حصن على قمة تل بإطلالات خلابة على بساتين النخيل وجبال الحجر. موقع معركة تاريخية عام ١٨١٩." },
    notes: { en: "Requires a short hike up the hill. Open daily.", ar: "يتطلب المشي لمسافة قصيرة صعوداً. مفتوح يومياً." },
    image: "images/dhayah-fort.jpg" },
  { id: "fujairah-fort", emirate: "fujairah", category: "fort",
    name: { en: "Fujairah Fort", ar: "حصن الفجيرة" },
    description: { en: "The oldest fort in the UAE, built around 1500. It stands prominently in the old town area.", ar: "أقدم حصن في الإمارات، بُني حوالي عام ١٥٠٠. يقع في منطقة البلدة القديمة." },
    notes: { en: "Located near the Fujairah Museum. Good views of the city.", ar: "يقع بالقرب من متحف الفجيرة. إطلالات جيدة على المدينة." },
    image: "images/fujairah-fort.jpg" }
];

const TIMELINE = [
  { year: "6000 BCE", title: { en: "Neolithic Settlements", ar: "المستوطنات الحجرية" }, text: { en: "Early communities appear along the coast and oases of the Arabian Peninsula.", ar: "ظهرت مجتمعات مبكرة على الساحل والواحات في شبه الجزيرة العربية." } },
  { year: "3000 BCE", title: { en: "Bronze Age & Magan", ar: "العصر البرونزي وماجان" }, text: { en: "The region emerges as 'Magan', a major hub for copper trade with Mesopotamia.", ar: "برزت المنطقة باسم 'ماجان' كمركز رئيسي لتجارة النحاس مع بلاد الرافدين." } },
  { year: "7th Century CE", title: { en: "Arrival of Islam", ar: "وصول الإسلام" }, text: { en: "Islam spreads across the region, shaping its culture and society.", ar: "انتشر الإسلام في المنطقة، مما شكل ثقافتها ومجتمعها." } },
  { year: "16th Century", title: { en: "Pearling & Trade", ar: "صيد اللؤلؤ والتجارة" }, text: { en: "Pearl diving becomes the backbone of the local economy.", ar: "أصبح صيد اللؤلؤ العمود الفقري للاقتصاد المحلي." } },
  { year: "1820", title: { en: "Trucial States", ar: "الإمارات المتصالحة" }, text: { en: "The British sign a treaty with local rulers, establishing the Trucial States.", ar: "وقعت بريطانيا معاهدة مع الحكام المحليين، مما أدى إلى تأسيس الإمارات المتصالحة." } },
  { year: "1958", title: { en: "Discovery of Oil", ar: "اكتشاف النفط" }, text: { en: "Oil is discovered in Abu Dhabi, transforming the region's future.", ar: "تم اكتشاف النفط في أبوظبي، مما غير مستقبل المنطقة." } },
  { year: "1971", title: { en: "The Union", ar: "الاتحاد" }, text: { en: "The seven emirates unite to form the United Arab Emirates under Sheikh Zayed bin Sultan Al Nahyan.", ar: "تتحد الإمارات السبع لتشكيل دولة الإمارات العربية المتحدة بقيادة الشيخ زايد بن سلطان آل نهيان." } },
  { year: "Today", title: { en: "Modern UAE", ar: "الإمارات الحديثة" }, text: { en: "The UAE is a global hub for trade, tourism, and culture, while preserving its rich heritage.", ar: "تعد الإمارات مركزاً عالمياً للتجارة والسياحة والثقافة، مع الحفاظ على تراثها الغني." } }
];

const CULTURE = [
  { icon: "☕", title: { en: "Hospitality (Gahwa)", ar: "الكرم (القهوة)" }, text: { en: "Serving Arabic coffee (Gahwa) and dates to guests is a deeply rooted symbol of Emirati generosity and welcome.", ar: "تقديم القهوة العربية والتمر للضيوف هو رمز متجذر في الكرم والترحيب الإماراتي." } },
  { icon: "🦪", title: { en: "Pearl Diving", ar: "الغوص على اللؤلؤ" }, text: { en: "Before oil, pearl diving was the lifeblood of the coastal communities, requiring immense bravery and teamwork.", ar: "قبل النفط، كان الغوص على اللؤلؤ شريان الحياة للمجتمعات الساحلية، ويتطلب شجاعة وعملاً جماعياً هائلاً." } },
  { icon: "🐪", title: { en: "Camel Racing", ar: "سباق الهجن" }, text: { en: "A traditional sport that celebrates the Bedouin relationship with camels, now featuring robot jockeys.", ar: "رياضة تقليدية تحتفي بعلاقة البدو بالإبل، وتشهد الآن استخدام الروبوتات كفرسان." } },
  { icon: "🪡", title: { en: "Al Sadu Weaving", ar: "السدو" }, text: { en: "A traditional form of weaving practiced by Bedouin women, recognized by UNESCO as intangible cultural heritage.", ar: "شكل تقليدي من النسيج تمارسه النساء البدويات، وتعتبره اليونسكو تراثاً ثقافياً غير مادي." } },
  { icon: "🦅", title: { en: "Falconry", ar: "الصقارة" }, text: { en: "A historic hunting method and a noble art form that symbolizes patience, discipline, and the desert spirit.", ar: "طريقة صيد تاريخية وفن نبيل يرمز إلى الصبر والانضباط وروح الصحراء." } },
  { icon: "📜", title: { en: "Nabati Poetry", ar: "الشعر النبطي" }, text: { en: "A form of colloquial poetry that has been passed down orally for centuries, expressing emotions and wisdom.", ar: "شكل من الشعر العامي تم تناقله شفهياً منذ قرون، ويعبر عن المشاعر والحكمة." } }
];