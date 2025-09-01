# AttendTelegram-

Telegram üzerinden yoklama takibi yapmak için geliştirilmiş bir Node.js / Express projesidir. Bu bot sayesinde öğrencilerin derslere katılımı kolayca takip edilebilir ve yoklama kayıtları veritabanında saklanır.

## Özellikler

- Öğrenci kayıt, güncelleme ve silme işlemleri
- Ders kaydı ve öğrenciyi derse ekleme
- Öğrencinin kayıtlı olduğu dersleri listeleme
- Toplam ders sayısı ve yoklama geçmişi görüntüleme
- Yoklama yüzdesi hesaplama
- Telegram bot üzerinden anlık bildirimler

## Teknolojiler

- Node.js & Express
- MongoDb (veritabanı)
- Telegram Bot API


## Kurulum

1. Depoyu klonlayın:  
```bash
git clone <repo-url>
cd AttendTelegram-
```

2. Gerekli paketleri yükleyin:  
```bash
npm install
```

3. `.env` dosyasını oluşturun ve gerekli bilgileri ekleyin:  
```env
TELEGRAM_BOT_TOKEN=<bot_token>
DATABASE_URL=<postgres_connection_string>
```

4. Veritabanını çalıştırın ve tabloları oluşturun (Sequelize/TypeORM kullanıyorsanız migration çalıştırın):  
```bash
npm run db:migrate
```

5. Botu başlatın:  
```bash
npm start
```

## Kullanım

- Bot, Telegram üzerinden öğrenci ve ders yönetimi işlemlerini yapabilir.
- Öğrenciler derse giriş yaptığında yoklama kaydı otomatik oluşturulur.
- Öğretmenler öğrenci yoklama yüzdesini ve geçmişini sorgulayabilir.

## Gelecek Geliştirmeler

- Öğrencilerin yoklama geçmişini grafiksel olarak raporlama
- Dersler arası toplu yoklama analizi
- Öğrenciye özel bildirim ve hatırlatmalar
