require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

// 📌 Ana Menü Butonları (About, Help, Yoklamayı Başlat)
const mainMenuKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback("ℹ️ About", "ABOUT")],
  [Markup.button.callback("❓ Help", "HELP")],
  [Markup.button.callback("✅ Yoklamayı Başlat", "START_ATTENDANCE")],
]);

// 📌 Sınıf Seçim Butonları
const classKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback("📍 101", "CLASS_101")],
  [Markup.button.callback("📍 102", "CLASS_102")],
  [Markup.button.callback("📍 103", "CLASS_103")],
  [Markup.button.callback("📍 104", "CLASS_104")],
  [Markup.button.callback("📍 105", "CLASS_105")],
  [Markup.button.callback("📍 106", "CLASS_106")],
  [Markup.button.callback("📍 107", "CLASS_107")],
  [Markup.button.callback("📍 108", "CLASS_108")],
  [Markup.button.callback("📍 109", "CLASS_109")],
  [Markup.button.callback("📍 110", "CLASS_110")],
  [Markup.button.callback("📍 111", "CLASS_111")],
]);

// 📌 Ders Seçim Butonları
const lessonKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback("📘 Analiz I", "LESSON_ANALYSIS_I")],
  [Markup.button.callback("📘 Analiz II", "LESSON_ANALYSIS_II")],
  [Markup.button.callback("📘 Bilgisayara Giriş A", "LESSON_COMPUTER_INTRO_A")],
  [Markup.button.callback("📘 Bilgisayara Giriş B", "LESSON_COMPUTER_INTRO_B")],
  [Markup.button.callback("📘 Kariyer Planlama", "LESSON_CAREER_PLANNING")],
  [
    Markup.button.callback(
      "📘 Matematiksel Programlama",
      "LESSON_MATHEMATICAL_PROGRAMMING"
    ),
  ],
  [Markup.button.callback("📘 Lineer Cebir I", "LESSON_LINEAR_ALGEBRA_I")],
  [Markup.button.callback("📘 Lineer Cebir II", "LESSON_LINEAR_ALGEBRA_II")],
  [Markup.button.callback("📘 Soyut Matematik I", "LESSON_ABSTRACT_MATH_I")],
  [Markup.button.callback("📘 Soyut Matematik II", "LESSON_ABSTRACT_MATH_II")],
  [Markup.button.callback("📘 Fiziğe Giriş I", "LESSON_PHYSICS_INTRO_I")],
  [Markup.button.callback("📘 Analiz III", "LESSON_ANALYSIS_III")],
  [
    Markup.button.callback(
      "📘 Analitik Geometri I",
      "LESSON_ANALYTIC_GEOMETRY_I"
    ),
  ],
  [Markup.button.callback("📘 Fiziğe Giriş II", "LESSON_PHYSICS_INTRO_II")],
  [Markup.button.callback("📘 Analiz IV", "LESSON_ANALYSIS_IV")],
  [
    Markup.button.callback(
      "📘 Analitik Geometri II",
      "LESSON_ANALYTIC_GEOMETRY_II"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Diferansiyel Denklemler I",
      "LESSON_DIFFERENTIAL_EQUATIONS_I"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Diferansiyel Denklemler II",
      "LESSON_DIFFERENTIAL_EQUATIONS_II"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Olasılık Ve İstatistik",
      "LESSON_PROBABILITY_STATISTICS"
    ),
  ],
  [Markup.button.callback("📘 Metrik Uzaylar", "LESSON_METRIC_SPACES")],
  [
    Markup.button.callback(
      "📘 Kompleks Fonksiyonlar Teorisi I",
      "LESSON_COMPLEX_FUNCTIONS_THEORY_I"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Kompleks Fonksiyonlar Teorisi II",
      "LESSON_COMPLEX_FUNCTIONS_THEORY_II"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Diferansiyel Geometri I",
      "LESSON_DIFFERENTIAL_GEOMETRY_I"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Diferansiyel Geometri II",
      "LESSON_DIFFERENTIAL_GEOMETRY_II"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Kısmi Türevli Dif. Denklemler",
      "LESSON_PARTIAL_DIFFERENTIAL_EQUATIONS"
    ),
  ],
  [Markup.button.callback("📘 Sayılar Teorisi", "LESSON_NUMBER_THEORY")],
  [Markup.button.callback("📘 Topoloji", "LESSON_TOPOLOGY")],
  [Markup.button.callback("📘 Soyut Cebir", "LESSON_ABSTRACT_ALGEBRA")],
  [
    Markup.button.callback(
      "📘 Python ile Matematik",
      "LESSON_MATH_WITH_PYTHON"
    ),
  ],
  [Markup.button.callback("📘 Web Tasarım", "LESSON_WEB_DESIGN")],
  [
    Markup.button.callback(
      "📘 Uygulamalı Matematiğin Metodları I",
      "LESSON_APPLIED_MATH_METHODS_I"
    ),
  ],
  [Markup.button.callback("📘 Fourier Analizi", "LESSON_FOURIER_ANALYSIS")],
  [
    Markup.button.callback(
      "📘 Algoritma Geliştirme",
      "LESSON_ALGORITHM_DEVELOPMENT"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Diferansiyel Denklemlerde Sayısal Çözümler",
      "LESSON_NUMERICAL_SOLUTIONS_DIFF_EQUATIONS"
    ),
  ],
  [Markup.button.callback("📘 Cebirsel Topoloji", "LESSON_ALGEBRAIC_TOPOLOGY")],
  [
    Markup.button.callback(
      "📘 Graf Teoriye Giriş",
      "LESSON_INTRO_TO_GRAPH_THEORY"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Uygulamalı Geometriye Giriş",
      "LESSON_INTRO_TO_APPLIED_GEOMETRY"
    ),
  ],
  [
    Markup.button.callback(
      "📘 Fonksiyonel Analize Giriş",
      "LESSON_INTRO_TO_FUNCTIONAL_ANALYSIS"
    ),
  ],
  [
    Markup.button.callback(
      "📘 İntegral Dönüşümler",
      "LESSON_INTEGRAL_TRANSFORMS"
    ),
  ],
  [Markup.button.callback("📘 Eğitime Giriş", "LESSON_INTRO_TO_EDUCATION")],
  [
    Markup.button.callback(
      "📘 Eğitim Psikolojisi",
      "LESSON_EDUCATIONAL_PSYCHOLOGY"
    ),
  ],
  [Markup.button.callback("📘 Sınıf Yönetimi", "LESSON_CLASS_MANAGEMENT")],
]);

// 📌 Konum Gönderme Butonu
const locationKeyboard = Markup.keyboard([
  [Markup.button.locationRequest("📍 Konumumu Gönder")],
])
  .oneTime()
  .resize();

// 📌 Bot Başlangıç Mesajı
bot.start((ctx) => {
  ctx.reply(
    "Uludağ Üniversitesi Matematik Bölümü Dijital Yoklama Sistemine Hoş geldiniz! Yardım almak veya yoklama başlatmak için aşağıdaki butonları kullanabilirsiniz.",
    mainMenuKeyboard
  );
});

// 📌 About Butonu
bot.action("ABOUT", (ctx) => {
  ctx.reply(
    "Bu bot, Uludağ Üniversitesi Matematik Bölümü öğrencilerinin yoklamalarını dijital olarak almayı amaçlayan bir sistemdir. Sınıfınızı ve dersinizi seçerek yoklamaya katılabilirsiniz.",
    mainMenuKeyboard // Ana menüyü tekrar gösteriyoruz
  );
});

// 📌 Help Butonu
bot.action("HELP", (ctx) => {
  ctx.reply(
    "Yoklama almak için sırasıyla: \n1. Sınıfınızı seçin. \n2. Dersinizi seçin. \n3. Konumunuzu gönderin.",
    mainMenuKeyboard // Ana menüyü tekrar gösteriyoruz
  );
});

// 📌 Yoklamayı Başlat Butonu
bot.action("START_ATTENDANCE", (ctx) => {
  ctx.reply("Yoklama başlatılıyor! Lütfen sınıfınızı seçin.");
  ctx.reply("Lütfen sınıfınızı seçin:", classKeyboard);
});

// 📌 Sınıf Seçimi
bot.action(/CLASS_\d+/, (ctx) => {
  ctx.reply("Sınıf seçildi. Şimdi dersinizi seçin:", lessonKeyboard);
});

// 📌 Ders Seçimi
bot.action(/LESSON_.+/, (ctx) => {
  ctx.reply("Ders seçildi! Lütfen konumunuzu gönderin:", locationKeyboard);
});

// 📌 Konum Mesajını Yakalama
bot.on("location", (ctx) => {
  const location = ctx.message.location;
  console.log("📍 Kullanıcı konum gönderdi:", {
    latitude: location.latitude,
    longitude: location.longitude,
  });

  ctx.reply(
    `Teşekkürler! Konumun alındı ✅\nLat: ${location.latitude}, Lon: ${location.longitude}`
  );
});

module.exports = { bot };
