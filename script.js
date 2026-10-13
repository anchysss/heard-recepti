const sr = {
  skip: "Preskoci na sadrzaj",
  brand_subtitle: "Recepti / Recipes",
  nav_features: "Mogucnosti",
  nav_demo: "Demo",
  nav_download: "Download",
  nav_upgrades: "Nadogradnje",
  hero_alt: "Telefon sa aplikacijom za recepte na kuhinjskom pultu i diskretnom mrezom podrske oko njega",
  hero_kicker: "projekat HEARD",
  hero_title: "Spasavanje zivota, sakriveno iza obicne aplikacije za recepte.",
  hero_lede: "Recepti izgleda kao mirna aplikacija za kuvanje. Ispod toga je tihi sigurnosni sloj: glasovni SOS, poverenici, enkriptovani snimci, lokacija, AI podrska i zajednica.",
  cta_download: "Preuzmi demo",
  cta_features: "Pogledaj sta moze",
  mission_kicker: "Zasto postoji",
  mission_title: "Dati glas utisanim pre nego sto pomoc zakasni.",
  mission_body: "HEARD je osmisljen za trenutke kada osoba ne moze da objasni, kuca, zove ili trazi pomoc pred nasilnikom. Aplikacija cuva privid svakodnevice, a u pozadini tiho pokrece unapred pripremljen sigurnosni tok.",
  features_kicker: "Mogucnosti aplikacije",
  features_title: "Sta sve Recepti moze da uradi",
  feature_1_title: "Glasovni SOS",
  feature_1_body: "Wake word moze da pokrene SOS tok cak i kada aplikacija nije otvorena, uz offline Vosk prepoznavanje.",
  feature_2_title: "Direktan poziv - pokusaj",
  feature_2_body: "Aplikacija pokusava podeseni emergency broj ako Android dozvoli, pa prelazi na poverenika ili dialer.",
  feature_3_title: "Poverenici",
  feature_3_body: "Vise osoba od poverenja mogu dobiti SMS sa lokacijom i sluziti kao no-tap call fallback.",
  feature_4_title: "Enkriptovani dokazi",
  feature_4_body: "Audio/video snimanje moze krenuti iz SOS-a ili rucno, a cuva enkriptovane fajlove sa timestampom i SHA-256 metadata zapisom.",
  feature_5_title: "Prerusen ulaz",
  feature_5_body: "Spolja je lista recepata. Skriveni deo se otvara tajnom frazom, PIN-om ili glasovnim kodom.",
  feature_6_title: "AI podrska",
  feature_6_body: "Trauma-informed chat pokazuje kako bi mirna, konkretna podrska mogla da radi u krizi.",
  feature_7_title: "Zajednica",
  feature_7_body: "Demo ukljucuje grupne sobe i 1-na-1 chat kao osnovu za mrezu podrske.",
  feature_8_title: "EN i SR rezim",
  feature_8_body: "English je default. US/SR rezimi menjaju wake reci, SOS brojeve, resurse i AI smernice.",
  demo_kicker: "Trenutni demo",
  demo_title: "Demo pokazuje tok, bez glumljenja da je produkcija spremna.",
  demo_body: "Android demo pokazuje osnovnu ideju: disguise, wake word, poverenici, enkriptovani snimci, SOS SMS, AI razgovor, zajednica i US/SR resursi za pomoc.",
  limits_title: "Namerno ograniceno pre primene",
  limit_1: "Emergency auto-call i dalje zavisi od Android-a, operatera i regionalnih pravila.",
  limit_2: "AI chat koristi dostupniju/free demo konfiguraciju; produkcija treba jaci placeni model kao Anthropic.",
  limit_3: "Peer chat jos treba produkcionu verifikaciju, moderaciju i end-to-end enkripciju.",
  limit_4: "Pravi iPhone/TestFlight build trazi nativnu iOS aplikaciju i Apple signing; ne pravi se iz Android APK-a.",
  limit_5: "Klinicka, pravna i trauma-informed validacija mora doci pre javne upotrebe.",
  download_kicker: "Download",
  download_title: "Probaj Android demo",
  download_body: "Ovaj paket je za validaciju na test telefonima. Nije store izdanje i ne treba ga tretirati kao zavrsen sigurnosni proizvod.",
  android_title: "HEARD Recepti demo APK",
  android_body: "Za test uredjaje sa ukljucenim sideload-om tokom validacije.",
  android_cta: "Preuzmi Android APK",
  android_note: "Demo build, nije Play Store izdanje.",
  ios_title: "iOS / TestFlight",
  ios_body: "Planiran kao nativni iOS build posle validacije sigurnosne arhitekture.",
  ios_cta: "Pogledaj iOS plan",
  ios_note: "iPhone executable trenutno nije dostupan u ovom Android demo paketu.",
  roadmap_kicker: "Produkcione nadogradnje",
  roadmap_title: "Put ka stvarnoj no-tap pomoci",
  road_1_title: "Backend alarm + response pozivi",
  road_1_body: "Telefon salje tihi SOS signal backend-u, a backend poziva poverenike ili 24/7 response liniju.",
  road_2_title: "Regulisani emergency dispatch",
  road_2_body: "Za US: istraziti Twilio E911 gde je podrzano, RapidSOS/Noonlight ili slicne dispatch partnere.",
  road_3_title: "Premium AI podrska",
  road_3_body: "Produkcija treba jaci placeni model kao Anthropic, uz review trauma strucnjaka.",
  road_4_title: "Verifikovana mreza podrske",
  road_4_body: "Plan za primenu je da NVO, savetnice i sigurni centri postanu verifikovani cvorovi podrske.",
  road_5_title: "Legal-grade evidence export",
  road_5_body: "Snimanje, enkripcija, timestamp i hash rade u demo aplikaciji; pravni export trazi forenzicki/pravni review.",
  road_6_title: "iOS i wearable signal",
  road_6_body: "Posebna iOS strategija, Apple Watch panic gesture i check-in tokovi koji postuju Apple ogranicenja.",
  closing_title: "Ovo nije stvarno aplikacija za recepte. To je nacin da neko bude cuven na vreme.",
  closing_cta: "Otvori download",
  footer_text: "HEARD / Recepti demo. Za validaciju, partnerstva i razvoj. Nije zamena za hitne sluzbe.",
  footer_link: "GitHub download repo"
};

const en = {};

function applyLanguage(lang) {
  const dict = lang === "sr" ? sr : en;
  document.documentElement.lang = lang === "sr" ? "sr" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = dict[key] || node.dataset.defaultText || node.textContent;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    node.alt = dict[key] || node.dataset.defaultAlt || node.alt;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang") === lang);
  });
  localStorage.setItem("heard-lang", lang);
}

document.querySelectorAll("[data-i18n]").forEach((node) => {
  node.dataset.defaultText = node.textContent;
});
document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
  node.dataset.defaultAlt = node.alt;
});
document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.getAttribute("data-lang")));
});

applyLanguage(localStorage.getItem("heard-lang") || "en");
