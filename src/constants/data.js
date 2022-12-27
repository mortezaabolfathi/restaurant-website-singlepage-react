import images from "./images";

const Lorem = {
  short: {
    Per: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.",
    En: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor.",
  },
  medium: {
    Per: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و.",
    En: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim pellentesque ex, et posuere est vestibulum vitae. In eros neque.",
  },
  long: {
    Per: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .",
    En: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur dignissim faucibus. Vestibulum in facilisis nibh, at eleifend libero. Maecenas vitae mollis eros, sed feugiat augue. Vivamus tellus nisi, imperdiet.",
  },
};

const nav = {
  Home: { Per: "خانه", En: "Home" },
  About: { Per: "درباره ما", En: "About" },
  Menu: { Per: "منو", En: "Menu" },
  Awards: { Per: "افتخارات", En: "Awards" },
  Contact: { Per: "تماس با ما", En: "Contact" },
  Login: { Per: "ورود / ثبت نام", En: "Log In / Register" },
  BookTable: { Per: "رزرو میز", En: "Book Table" },
};

const wines = {
  En: [
    {
      title: "Chapel Hill Shiraz",
      price: "$56",
      tags: "AU | Bottle",
    },
    {
      title: "Catena Malbee",
      price: "$59",
      tags: "AU | Bottle",
    },
    {
      title: "La Vieillw Rose",
      price: "$44",
      tags: "FR | 750 ml",
    },
    {
      title: "Rhino Pale Ale",
      price: "$31",
      tags: "CA | 750 ml",
    },
    {
      title: "Irish Guinness",
      price: "$26",
      tags: "IE | 750 ml",
    },
  ],
  Per: [
    {
      title: "پانچ زرشک شیراز",
      price: "ت56",
      tags: "0.5 لیتری | شیشه",
    },
    {
      title: "پانچ بلو دراگون",
      price: "ت59",
      tags: "0.5 لیتری | شیشه",
    },
    {
      title: "کوکتل شیر و رز",
      price: "ت44",
      tags: "0.75 لیتری | شیشه",
    },
    {
      title: "معجون میوه های بنفش",
      price: "ت31",
      tags: "0.75 لیتری | شیشه",
    },
    {
      title: "کوکتل سبز ایرلندی",
      price: "ت26",
      tags: "0.75 لیتری | شیشه",
    },
  ],
};

const cocktails = {
  En: [
    {
      title: "Aperol Sprtiz",
      price: "$20",
      tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
    },
    {
      title: "Dark 'N' Stormy",
      price: "$16",
      tags: "Dark rum | Ginger beer | Slice of lime",
    },
    {
      title: "Daiquiri",
      price: "$10",
      tags: "Rum | Citrus juice | Sugar",
    },
    {
      title: "Old Fashioned",
      price: "$31",
      tags: "Bourbon | Brown sugar | Angostura Bitters",
    },
    {
      title: "Negroni",
      price: "$26",
      tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
    },
  ],
  Per: [
    {
      title: "دمنوش نعنا",
      price: "ت20",
      tags: "نعنا |عصاره گیاهی نارنج | چای سبز | نبات ",
    },
    {
      title: "دمنوش شاهتوت",
      price: "ت16",
      tags: "شاهتوت | آبجوی طبیعی | لیموی برش خورده",
    },
    {
      title: "چای سبز",
      price: "ت10",
      tags: "چای سبز | عصاره لیمو | شکر",
    },
    {
      title: "دمنوش بهار نارنج",
      price: "ت31",
      tags: "لیمو | عصل طبیعی | بهار نارنج",
    },
    {
      title: "دمنوش سیب ترش",
      price: "ت26",
      tags: "گلاب | دارچین | شکر قهوه ای | سیب سبز مصری",
    },
  ],
};

const awards = {
  En: [
    {
      imgUrl: images.award02,
      title: "Bib Gourmond Award",
      subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      imgUrl: images.award01,
      title: "Rising Star Award",
      subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      imgUrl: images.award05,
      title: "AA Hospitality Award",
      subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      imgUrl: images.award03,
      title: "Outstanding Chef",
      subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
  ],
  Per: [
    {
      imgUrl: images.award02,
      title: "جایزه غذای بین الملل",
      subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی.",
    },
    {
      imgUrl: images.award01,
      title: "جایزه ستاره نو ظهور",
      subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی.",
    },
    {
      imgUrl: images.award05,
      title: "جایزه بهترین میزبانی",
      subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی.",
    },
    {
      imgUrl: images.award03,
      title: "بهترین سرآشپز",
      subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی.",
    },
  ],
};

export default { nav, wines, cocktails, awards, Lorem };
