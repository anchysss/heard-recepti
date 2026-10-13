const sr = {
  skip: "Preskoči na sadržaj",
  brand_subtitle: "Recepti / Recipes",
  nav_features: "Mogućnosti",
  nav_demo: "Demo",
  nav_download: "Preuzimanje",
  nav_upgrades: "Nadogradnje",
  hero_alt: "Telefon sa aplikacijom za recepte na kuhinjskom pultu i diskretna mreža podrške oko njega",
  hero_kicker: "HEARD",
  hero_title: "Tihi način da se zatraži pomoć kada nije bezbedno govoriti.",
  hero_lede: "Recepti izgleda kao mirna aplikacija za kuvanje. Ispod toga može da pomogne osobi da obavesti ljude od poverenja, zabeleži šta se dešava, pronađe podršku i sakrije pravu namenu.",
  cta_download: "Preuzmi demo",
  cta_features: "Pogledaj šta može",
  mission_kicker: "Zašto postoji",
  mission_title: "Za ljude koji ne mogu bezbedno da kažu šta se dešava.",
  mission_body: "HEARD je osmišljen za trenutke kada traženje pomoći naglas može da pogorša opasnost. Aplikacija čuva izgled svakodnevice, a u pozadini pokreće unapred pripremljen plan zaštite.",
  features_kicker: "U čemu pomaže",
  features_title: "Kako Recepti mogu da zaštite nekoga",
  feature_1_title: "SOS glasom",
  feature_1_body: "Dogovorena fraza može da pokrene plan pomoći kada bi otvaranje skrivenog dela bilo opasno.",
  feature_2_title: "Pozivi za pomoć",
  feature_2_body: "Aplikacija može prvo da pokuša hitan broj, a zatim osobu od poverenja ako telefon blokira taj poziv.",
  feature_3_title: "Ljudi od poverenja",
  feature_3_body: "Može se dodati više osoba koje dobijaju upozorenje i brzo proveravaju da li je osoba bezbedna.",
  feature_4_title: "Privatni dokazi",
  feature_4_body: "Snimanje može da krene tokom SOS-a ili ručno. Fajlovi su zaštićeni i označeni vremenom i proverom integriteta.",
  feature_5_title: "Sakriveno iza recepata",
  feature_5_body: "Spolja izgleda obično. Sigurnosni deo se otvara samo tajnom frazom, PIN-om ili glasovnim kodom.",
  feature_6_title: "Miran AI razgovor",
  feature_6_body: "Demo pokazuje kako pomagač može da ponudi jasne, smirene sledeće korake kada je osoba preplavljena strahom.",
  feature_7_title: "Zajednica podrške",
  feature_7_body: "Grupni razgovori i 1-na-1 chat pokazuju kako oko aplikacije može da nastane sigurnija mreža podrške.",
  feature_8_title: "Engleski i srpski",
  feature_8_body: "Engleski je početni jezik. Izbor jezika menja brojeve za pomoć, linkove, fraze i smernice.",
  demo_kicker: "Trenutni demo",
  demo_title: "Demo jasno pokazuje ideju spasavanja života, bez pretvaranja da je proizvod završen.",
  demo_body: "Prikazuje glavno iskustvo: aplikaciju koja izgleda kao recepti, skriveni sigurnosni deo, ljude od poverenja, SOS upozorenja, zaštićene snimke, razgovor podrške i resurse za pomoć.",
  limits_title: "Šta je namerno ograničeno za sada",
  limit_1: "Pozivanje hitnih službi zavisi od pravila telefona, operatera i države. Aplikacija ne može da zaobiđe ta pravila.",
  limit_2: "AI razgovor koristi povoljnije demo podešavanje. Prava usluga treba jači plaćeni model koji pregledaju stručnjaci.",
  limit_3: "Razgovori u zajednici moraju da imaju moderaciju, pravila bezbednosti i jaču zaštitu pre stvarne upotrebe.",
  limit_4: "iPhone fajl je demo artefakt. Prava instalacija na iPhone traži Apple potpisivanje ili TestFlight.",
  limit_5: "Pravna, klinička i survivor-safety provera moraju da se urade pre javne upotrebe.",
  download_kicker: "Preuzimanje",
  download_title: "Probaj demo na test telefonima",
  download_body: "Ovi fajlovi su za pažljivu validaciju sa ljudima od poverenja. Nisu store izdanja i ne treba ih tretirati kao završen sigurnosni proizvod.",
  android_title: "HEARD Recepti demo APK",
  android_body: "Za Android test telefone koji se koriste tokom pregleda i validacije.",
  android_cta: "Preuzmi Android APK",
  android_note: "Demo verzija, nije Play Store izdanje.",
  ios_title: "HEARD Recepti iPhone demo",
  ios_body: "Zaseban iPhone demo za ljude koji treba da pregledaju iskustvo.",
  ios_cta: "Preuzmi iPhone demo fajl",
  ios_note: "Ovaj fajl je za developere i ljude koji pregledaju demo; stvarna instalacija na iPhone traži Apple potpisivanje ili TestFlight.",
  roadmap_kicker: "Sledeći koraci",
  roadmap_title: "Šta je potrebno pre stvarne upotrebe",
  road_1_title: "Linija podrške koja može da uzvrati poziv",
  road_1_body: "Kada se SOS pokrene, proverena služba može da pozove osobu, obavesti kontakte i prati slučaj dalje.",
  road_2_title: "Partneri za hitne situacije",
  road_2_body: "Za SAD, projekat treba da radi sa odobrenim emergency i safety partnerima pre nego što obeća direktno slanje policije.",
  road_3_title: "Jača krizna podrška",
  road_3_body: "Prava usluga treba jači plaćeni AI model, a odgovore treba da pregledaju stručnjaci za traumu.",
  road_4_title: "Proverena mreža podrške",
  road_4_body: "NVO, savetnice i sigurni centri mogu da postanu proverene tačke podrške sa jasnim ulogama i odgovornošću.",
  road_5_title: "Paket dokaza za profesionalce",
  road_5_body: "Demo već štiti snimke i beleži kada su nastali. Pravna upotreba traži stručno pregledan način izvoza.",
  road_6_title: "iPhone i sat kao sigurnosni signal",
  road_6_body: "iPhone put treba da uključi signale sa Apple Watch-a, redovno javljanje i bezbednosne tokove koje Apple dozvoljava.",
  closing_title: "HEARD nije stvarno o receptima. HEARD je način da pomoć stigne pre nego što bude kasno.",
  closing_cta: "Otvori preuzimanje",
  footer_text: "HEARD / Recepti demo. Za validaciju, partnerstva i razvoj. Nije zamena za hitne službe."
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
