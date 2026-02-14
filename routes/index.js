var express = require('express');
var router = express.Router();

const axios = require("axios");
const surahMap = {
  "fatihah": [1,7],
  "al-fatihah": [1,7],
  "baqarah": [2,286],
  "al-baqarah": [2,286],
  "imran": [3,200],
  "al-imran": [3,200],
  "nisa": [4,176],
  "al-nisa": [4,176],
  "maidah": [5,120],
  "al-maidah": [5,120],
  "anam": [6,165],
  "al-anam": [6,165],
  "araf": [7,206],
  "al-araf": [7,206],
  "anfal": [8,75],
  "tawbah": [9,129],
  "yunus": [10,109],
  "hud": [11,123],
  "yusuf": [12,111],
  "rad": [13,43],
  "ibrahim": [14,52],
  "hijr": [15,99],
  "nahl": [16,128],
  "isra": [17,111],
  "kahf": [18,110],
  "maryam": [19,98],
  "taha": [20,135],
  "anbiya": [21,112],
  "hajj": [22,78],
  "muminun": [23,118],
  "noor": [24,64],
  "furqan": [25,77],
  "shuara": [26,227],
  "naml": [27,93],
  "qasas": [28,88],
  "ankabut": [29,69],
  "rum": [30,60],
  "luqman": [31,34],
  "sajdah": [32,30],
  "ahzab": [33,73],
  "saba": [34,54],
  "fatir": [35,45],
  "yasin": [36,83],
  "saffat": [37,182],
  "sad": [38,88],
  "zumar": [39,75],
  "ghafir": [40,85],
  "fussilat": [41,54],
  "shura": [42,53],
  "zukhruf": [43,89],
  "dukhan": [44,59],
  "jathiyah": [45,37],
  "ahqaf": [46,35],
  "muhammad": [47,38],
  "fath": [48,29],
  "hujurat": [49,18],
  "qaf": [50,45],
  "dhariyat": [51,60],
  "tur": [52,49],
  "najm": [53,62],
  "qamar": [54,55],
  "rahman": [55,78],
  "waqiah": [56,96],
  "hadid": [57,29],
  "mujadila": [58,22],
  "hashr": [59,24],
  "mumtahanah": [60,13],
  "saff": [61,14],
  "jumuah": [62,11],
  "munafiqun": [63,11],
  "taghabun": [64,18],
  "talaq": [65,12],
  "tahrim": [66,12],
  "mulk": [67,30],
  "qalam": [68,52],
  "haqqah": [69,52],
  "maarij": [70,44],
  "nuh": [71,28],
  "jinn": [72,28],
  "muzzammil": [73,20],
  "muddathir": [74,56],
  "qiyamah": [75,40],
  "insan": [76,31],
  "mursalat": [77,50],
  "naba": [78,40],
  "naziat": [79,46],
  "abasa": [80,42],
  "takwir": [81,29],
  "infitar": [82,19],
  "mutaffifin": [83,36],
  "inshiqaq": [84,25],
  "buruj": [85,22],
  "tariq": [86,17],
  "ala": [87,19],
  "ghashiyah": [88,26],
  "fajr": [89,30],
  "balad": [90,20],
  "shams": [91,15],
  "layl": [92,21],
  "duha": [93,11],
  "sharh": [94,8],
  "tin": [95,8],
  "alaq": [96,19],
  "qadr": [97,5],
  "bayyinah": [98,8],
  "zalzalah": [99,8],
  "adiyat": [100,11],
  "qariah": [101,11],
  "takathur": [102,8],
  "asr": [103,3],
  "humazah": [104,9],
  "fil": [105,5],
  "quraysh": [106,4],
  "maun": [107,7],
  "kawthar": [108,3],
  "kafirun": [109,6],
  "nasr": [110,3],
  "masad": [111,5],
  "ikhlas": [112,4],
  "falaq": [113,5],
  "nas": [114,6]
};



router.get("/", function(req, res){
  res.render('index', {
    error: null,
    ayah: null,
    surah: null,
    ayahNumber: null
  });
});
router.get('/random-ayah', async function(req, res, next) {
  const randomAyah= Math.floor((Math.random()*6236)+1)
   const response = await axios.get(
      `https://api.alquran.cloud/v1/ayah/${randomAyah}/editions/quran-uthmani,en.sahih`
    );
    const data=response.data.data
    const arabic=data[0]
    const english=data[1]

    res.json({
      surah: arabic.surah.englishName,
      surahArabic: arabic.surah.name,
      ayahNumber: arabic.numberInSurah,
      arabicText: arabic.text,
      englishText: english.text,
    })

 
});

router.get('/surah', function(req, res) {
  res.render('surah', {
    result:null,
    ayah: null,
    surah: null,
    ayahNumber: null,
    error: null
  });
});



router.get("/surah-ayah", async (req, res) => {
  const input = req.query.surah
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^a-z-]/g, "");

  const surahData = surahMap[input];

  if (!surahData) {
    return res.render("surah", {
      error: "Surah not found. Try: baqarah, yasin, ikhlas, etc.",
      ayah: null,
      surah: null,
      ayahNumber: null
    });
  }

  const surahNumber = surahData[0];
  const maxAyahs = surahData[1];

  const randomAyah =
    Math.floor(Math.random() * maxAyahs) + 1;

  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/ayah/${surahNumber}:${randomAyah}/editions/quran-uthmani,en.sahih`
    );

    const data = response.data.data;
    const arabic = data[0];
    const english = data[1];

    res.render("surah", {
      error: null,
      surah: arabic.surah.englishName,
      ayahNumber: arabic.numberInSurah,
      ayah: `${arabic.text}\n\n${english.text}`
    });

  } catch (err) {
    console.error(err);
    res.render("surah", {
      error: "API error. Try again.",
      ayah: null,
      surah: null,
      ayahNumber: null
    });
  }
});






module.exports = router;




