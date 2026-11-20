export type QuoteLocale = "en" | "tr" | "ru";

// Visible text is translated; submitted field values remain stable English API enums.
const dictionary: Record<string, [string, string]> = {
  "Property": [
    "Mülk",
    "Недвижимость"
  ],
  "Services": [
    "Hizmetler",
    "Услуги"
  ],
  "Schedule": [
    "Tarih ve saat",
    "Дата и время"
  ],
  "Contact & review": [
    "İletişim ve onay",
    "Контакты и проверка"
  ],
  "Step": [
    "Adım",
    "Шаг"
  ],
  "of": [
    "/",
    "из"
  ],
  "No payment now": [
    "Şimdi ödeme yok",
    "Сейчас без оплаты"
  ],
  "Your space": [
    "Mülkünüz",
    "Ваш объект"
  ],
  "What are we cleaning?": [
    "Neresi temizlenecek?",
    "Что нужно убрать?"
  ],
  "A few property details help us match the right local team and equipment.": [
    "Mülkünüzü tanımamız, doğru yerel ekibi ve ekipmanı bulmamıza yardımcı olur.",
    "Несколько деталей помогут подобрать подходящую местную команду и оборудование."
  ],
  "Service type": [
    "Hizmet türü",
    "Вид уборки"
  ],
  "Regular Home Cleaning": [
    "Standart ev temizliği",
    "Обычная уборка"
  ],
  "Deep Cleaning": [
    "Detaylı temizlik",
    "Генеральная уборка"
  ],
  "Airbnb Turnover Cleaning": [
    "Airbnb misafir değişimi temizliği",
    "Уборка между гостями Airbnb"
  ],
  "Move In / Move Out Cleaning": [
    "Taşınma temizliği",
    "Уборка при въезде / выезде"
  ],
  "After-party Cleanup": [
    "Etkinlik sonrası temizlik",
    "Уборка после мероприятия"
  ],
  "Property type": [
    "Mülk türü",
    "Тип недвижимости"
  ],
  "Studio": [
    "Stüdyo",
    "Студия"
  ],
  "1 Bedroom Apartment": [
    "1 yatak odalı daire",
    "Квартира с 1 спальней"
  ],
  "2 Bedroom Apartment": [
    "2 yatak odalı daire",
    "Квартира с 2 спальнями"
  ],
  "3 Bedroom Apartment": [
    "3 yatak odalı daire",
    "Квартира с 3 спальнями"
  ],
  "Villa / Large Home": [
    "Villa / büyük ev",
    "Вилла / большой дом"
  ],
  "Holiday Home": [
    "Yazlık ev",
    "Дом для отдыха"
  ],
  "Area in Antalya": [
    "Antalya'da bölge",
    "Район Антальи"
  ],
  "e.g. Muratpaşa, Lara or Konyaaltı": [
    "Örn. Muratpaşa, Lara veya Konyaaltı",
    "Например, Муратпаша, Лара или Коньяалты"
  ],
  "Add optional property details for a more accurate estimate": [
    "Daha doğru tahmin için isteğe bağlı mülk bilgilerini ekle",
    "Добавьте сведения об объекте для более точной оценки"
  ],
  "Bathrooms": [
    "Banyo sayısı",
    "Количество ванных"
  ],
  "Approximate size": [
    "Yaklaşık alan",
    "Примерная площадь"
  ],
  "e.g. 100 m²": [
    "Örn. 100 m²",
    "Например, 100 м²"
  ],
  "Furnished?": [
    "Eşyalı mı?",
    "С мебелью?"
  ],
  "Yes": [
    "Evet",
    "Да"
  ],
  "No": [
    "Hayır",
    "Нет"
  ],
  "Partly": [
    "Kısmen",
    "Частично"
  ],
  "Current condition": [
    "Mevcut durum",
    "Текущее состояние"
  ],
  "Normally maintained": [
    "Normal bakımlı",
    "Обычное состояние"
  ],
  "Needs extra attention": [
    "Ekstra özen gerekiyor",
    "Нужна дополнительная уборка"
  ],
  "Heavily soiled": [
    "Çok kirli",
    "Сильное загрязнение"
  ],
  "Empty / recently renovated": [
    "Boş / yeni tadilat görmüş",
    "Пустое / после ремонта"
  ],
  "Not sure": [
    "Emin değilim",
    "Не уверен(а)"
  ],
  "Floor": [
    "Kat",
    "Этаж"
  ],
  "e.g. 7th floor": [
    "Örn. 7. kat",
    "Например, 7-й этаж"
  ],
  "Elevator available?": [
    "Asansör var mı?",
    "Есть ли лифт?"
  ],
  "Not applicable": [
    "Uygun değil",
    "Не применимо"
  ],
  "Address or nearby landmark (optional)": [
    "Adres veya yakın konum (isteğe bağlı)",
    "Адрес или ориентир (необязательно)"
  ],
  "Street, building or a nearby landmark": [
    "Sokak, bina veya yakın bir nokta",
    "Улица, здание или ориентир"
  ],
  "Build the scope": [
    "Hizmet kapsamı",
    "Объём работ"
  ],
  "Choose everything you need": [
    "İhtiyacınız olanları seçin",
    "Выберите необходимые услуги"
  ],
  "Select as much as you like. Specialist details only appear when relevant.": [
    "İstediğiniz ek hizmetleri seçin. Ayrıntılar yalnızca gerekli olduğunda gösterilir.",
    "Выберите нужные услуги. Дополнительные поля появятся только при необходимости."
  ],
  "Included in Deep Cleaning": [
    "Detaylı temizliğe dahil",
    "Входит в генеральную уборку"
  ],
  "Detailed room cleaning, normal surface cleaning of sofas and armchairs, plus curtain removal, washing and rehanging are included. Machine washing of sofa fabric, armchairs or mattresses is a separate specialist service only when you select it below.": [
    "Oda temizliği, koltukların yüzeysel temizliği ve perdelerin çıkarılıp yıkanarak yeniden takılması dahildir. Koltuk veya yatakların makineyle yıkanması ayrıca seçilmesi gereken uzmanlık hizmetidir.",
    "Включены детальная уборка комнат, поверхностная чистка диванов и кресел, снятие, стирка и повторное навешивание штор. Машинная чистка мягкой мебели и матрасов — отдельная услуга."
  ],
  "Should the team bring all supplies and equipment?": [
    "Ekip malzeme ve ekipman getirsin mi?",
    "Команде привезти средства и оборудование?"
  ],
  "Additional services": [
    "Ek hizmetler",
    "Дополнительные услуги"
  ],
  "Interior windows": [
    "İç camlar",
    "Окна изнутри"
  ],
  "Exterior windows (where safely accessible)": [
    "Dış camlar (güvenli erişilebilen)",
    "Окна снаружи (при безопасном доступе)"
  ],
  "Balcony / terrace": [
    "Balkon / teras",
    "Балкон / терраса"
  ],
  "Inside fridge": [
    "Buzdolabı içi",
    "Холодильник внутри"
  ],
  "Inside oven": [
    "Fırın içi",
    "Духовка внутри"
  ],
  "Inside kitchen cupboards & drawers (empty, clean & replace contents)": [
    "Mutfak dolabı ve çekmece içleri",
    "Внутри кухонных шкафов и ящиков"
  ],
  "Sofa & armchair deep cleaning": [
    "Koltuk ve berjer yıkama",
    "Глубокая чистка дивана и кресел"
  ],
  "Curtain cleaning": [
    "Perde temizliği",
    "Чистка штор"
  ],
  "Mattress deep cleaning": [
    "Yatak yıkama",
    "Глубокая чистка матраса"
  ],
  "Linen change": [
    "Nevresim değiştirme",
    "Смена белья"
  ],
  "Ironing": [
    "Ütü",
    "Глажка"
  ],
  "After-party extra mess": [
    "Etkinlik sonrası yoğun kir",
    "Дополнительная уборка после мероприятия"
  ],
  "Machine sofa & armchair washing — optional specialist extra": [
    "Koltuk ve berjer makineyle yıkama — isteğe bağlı ek hizmet",
    "Машинная чистка дивана и кресел — доп. услуга"
  ],
  "Machine mattress washing — optional specialist extra": [
    "Makineyle yatak yıkama — isteğe bağlı ek hizmet",
    "Машинная чистка матрасов — дополнительная услуга"
  ],
  "Curtain removal, washing & rehanging — included": [
    "Perdelerin sökülmesi, yıkanması ve tekrar asılması — dahil",
    "Снятие, стирка и навешивание штор — включено"
  ],
  "Curtain removal, washing & rehanging": [
    "Perdelerin sökülmesi, yıkanması ve asılması",
    "Снятие, стирка и навешивание штор"
  ],
  "Optional machine sofa & armchair washing": [
    "İsteğe bağlı koltuk / berjer makineyle yıkama",
    "Машинная чистка дивана и кресел (доп.)"
  ],
  "Main sofa type": [
    "Koltuk türü",
    "Тип дивана"
  ],
  "Standard sofa": [
    "Standart koltuk",
    "Обычный диван"
  ],
  "L-shaped / corner sofa": [
    "L / köşe koltuk",
    "Угловой диван"
  ],
  "Sofa bed": [
    "Çekyat",
    "Диван-кровать"
  ],
  "Large modular / sectional": [
    "Büyük modüler koltuk",
    "Большой модульный диван"
  ],
  "Approx. seats": [
    "Yaklaşık oturma yeri",
    "Количество мест"
  ],
  "Armchairs": [
    "Berjerler",
    "Кресла"
  ],
  "Curtain details": [
    "Perde bilgileri",
    "Детали штор"
  ],
  "Number of curtains / rooms": [
    "Perde / oda sayısı",
    "Число штор / комнат"
  ],
  "Sheer, blackout, roller, unknown…": [
    "Tül, karartma, stor, bilmiyorum…",
    "Тюль, блэкаут, рулонные, не знаю…"
  ],
  "Optional machine mattress washing": [
    "İsteğe bağlı makineyle yatak yıkama",
    "Машинная чистка матрасов (доп.)"
  ],
  "Single": [
    "Tek kişilik",
    "Односпальный"
  ],
  "Double": [
    "Çift kişilik",
    "Двуспальный"
  ],
  "King / queen": [
    "King / queen boy",
    "Большой / queen"
  ],
  "Any pets?": [
    "Evcil hayvan var mı?",
    "Есть ли животные?"
  ],
  "Allergies or product restrictions": [
    "Alerji veya ürün kısıtlaması",
    "Аллергии или ограничения по средствам"
  ],
  "None, fragrance-free products…": [
    "Yok, parfümsüz ürünler…",
    "Нет, без ароматизаторов…"
  ],
  "Timing & access": [
    "Zamanlama ve erişim",
    "Время и доступ"
  ],
  "What timing would work for you?": [
    "Hangi tarih ve saat uygun?",
    "Когда вам удобно?"
  ],
  "Choose your first preference and tell us how flexible you are. We will make reasonable efforts to check suitable local availability before offering any booking option.": [
    "Tercih ettiğiniz tarihi ve esnekliğinizi belirtin. Rezervasyon seçeneği sunmadan önce yerel ekiplerin uygunluğunu kontrol edeceğiz.",
    "Укажите предпочтительную дату и гибкость. Перед предложением бронирования мы проверим доступность местных исполнителей."
  ],
  "Your preferred date is not yet a confirmed appointment. If it is unavailable, we may email suitable alternatives for you to accept or decline.": [
    "Seçtiğiniz tarih henüz kesin randevu değildir. Uygun değilse alternatif tarihleri e-postayla paylaşabiliriz.",
    "Выбранная дата ещё не подтверждена. При необходимости предложим альтернативы по электронной почте."
  ],
  "First-choice date (optional)": [
    "Tercih edilen tarih (isteğe bağlı)",
    "Желаемая дата (необязательно)"
  ],
  "Preferred arrival time": [
    "Tercih edilen geliş saati",
    "Желаемое время прибытия"
  ],
  "How flexible are your dates?": [
    "Tarihleriniz ne kadar esnek?",
    "Насколько гибкие даты?"
  ],
  "This date only": [
    "Yalnızca bu tarih",
    "Только эта дата"
  ],
  "Flexible by 1 day": [
    "1 gün esnek",
    "±1 день"
  ],
  "Flexible by 3 days": [
    "3 gün esnek",
    "±3 дня"
  ],
  "Flexible within the same week": [
    "Aynı hafta içinde esnek",
    "В пределах недели"
  ],
  "Please suggest the earliest available option": [
    "En erken uygun tarihi önerin",
    "Предложите ближайшую дату"
  ],
  "I’m fully flexible": [
    "Tamamen esneğim",
    "Полностью гибкий график"
  ],
  "Cleaning frequency": [
    "Temizlik sıklığı",
    "Частота уборки"
  ],
  "One-time": [
    "Tek seferlik",
    "Разовая"
  ],
  "Weekly": [
    "Haftalık",
    "Еженедельно"
  ],
  "Bi-weekly": [
    "İki haftada bir",
    "Раз в две недели"
  ],
  "Monthly": [
    "Aylık",
    "Ежемесячно"
  ],
  "Not sure yet": [
    "Henüz belli değil",
    "Пока не знаю"
  ],
  "Parking nearby?": [
    "Yakında park yeri var mı?",
    "Есть ли парковка?"
  ],
  "Paid parking only": [
    "Yalnızca ücretli park",
    "Только платная парковка"
  ],
  "Access arrangement": [
    "Erişim bilgileri",
    "Как попасть в помещение"
  ],
  "I will be home, key handover, reception…": [
    "Evde olacağım, anahtar teslimi, resepsiyon…",
    "Я буду дома, передача ключей, ресепшен…"
  ],
  "Almost done": [
    "Son adım",
    "Почти готово"
  ],
  "Where should we send the available options?": [
    "Teklifi nereye gönderelim?",
    "Куда отправить варианты?"
  ],
  "We manually review your request, make reasonable efforts to check suitable local provider availability, and email you before any booking or payment.": [
    "Talebinizi inceleyip yerel ekip uygunluğunu kontrol eder, rezervasyon veya ödeme öncesinde size e-posta göndeririz.",
    "Мы изучим запрос, уточним доступность исполнителей и напишем вам до бронирования или оплаты."
  ],
  "Full name": [
    "Ad soyad",
    "Имя и фамилия"
  ],
  "Your full name": [
    "Adınız ve soyadınız",
    "Ваше полное имя"
  ],
  "Email": [
    "E-posta",
    "Эл. почта"
  ],
  "WhatsApp number (optional)": [
    "WhatsApp numarası (isteğe bağlı)",
    "WhatsApp (необязательно)"
  ],
  "Include country code": [
    "Ülke kodu dahil",
    "С кодом страны"
  ],
  "Preferred language": [
    "İletişim dili",
    "Язык общения"
  ],
  "English": [
    "İngilizce",
    "Английский"
  ],
  "Russian": [
    "Rusça",
    "Русский"
  ],
  "Turkish": [
    "Türkçe",
    "Турецкий"
  ],
  "Anything else we should know?": [
    "Eklemek istediğiniz bilgi var mı?",
    "Что ещё нам следует знать?"
  ],
  "Stains, priority areas, guest timings, fragile surfaces or anything else that will help us quote accurately.": [
    "Lekeler, öncelikli alanlar, misafir saatleri, hassas yüzeyler veya teklife yardımcı olacak diğer bilgiler.",
    "Пятна, важные зоны, время гостей, хрупкие поверхности и другие сведения."
  ],
  "Property photos (optional)": [
    "Mülk fotoğrafları (isteğe bağlı)",
    "Фотографии объекта (необязательно)"
  ],
  "Photos improve quote accuracy. Please exclude people, documents, screens and family photographs.": [
    "Fotoğraflar tahmini iyileştirir. Lütfen insan, belge, ekran ve aile fotoğraflarını dahil etmeyin.",
    "Фото помогают оценить объём работ. Не загружайте фото людей, документов, экранов и семейных снимков."
  ],
  "Remove": [
    "Kaldır",
    "Удалить"
  ],
  "Indicative all-in range": [
    "Tahmini toplam fiyat aralığı",
    "Ориентировочная итоговая цена"
  ],
  "Final timing and price follow a manual scope and local availability review. This is the total customer price; CleanNestPro adds no VAT at checkout.": [
    "Kesin tarih ve fiyat, iş kapsamı ve yerel ekip uygunluğu incelendikten sonra bildirilir. Bu müşterinin toplam fiyatıdır; ödeme sırasında ayrıca KDV eklemiyoruz.",
    "Окончательная дата и цена подтверждаются после проверки объёма работ и доступности исполнителей. Это итоговая цена для клиента; при оплате НДС не добавляется."
  ],
  "🔒 No payment is requested now. We first check local availability. If you choose an available date and accept the final quote, we send a secure Stripe payment link and confirm the booking in writing.": [
    "🔒 Şu anda ödeme yapmanız gerekmiyor. Önce uygunluğu kontrol ederiz. Nihai teklifi kabul ederseniz güvenli Stripe ödeme bağlantısı gönderir, rezervasyonu yazılı onaylarız.",
    "🔒 Сейчас платить не нужно. Сначала проверим доступность. После вашего согласия с окончательной ценой отправим защищённую ссылку Stripe и письменно подтвердим бронь."
  ],
  "Terms of Service": [
    "Hizmet Şartları",
    "Условия обслуживания"
  ],
  "Privacy Policy": [
    "Gizlilik Politikası",
    "Политика конфиденциальности"
  ],
  "Back": [
    "Geri",
    "Назад"
  ],
  "Continue": [
    "Devam et",
    "Продолжить"
  ],
  "Preparing photos…": [
    "Fotoğraflar hazırlanıyor…",
    "Подготовка фото…"
  ],
  "Sending…": [
    "Gönderiliyor…",
    "Отправка…"
  ],
  "Check local availability": [
    "Uygunluk ve teklif iste",
    "Проверить доступность"
  ],
  "Your availability and quote request has been sent.": [
    "Teklif talebiniz gönderildi.",
    "Ваш запрос отправлен."
  ],
  "Thank you. We’ll review the scope, check suitable local provider availability, and email you with any suitable option or alternatives we are able to source. Nothing is booked and no payment is due yet.": [
    "Teşekkürler. Kapsamı ve yerel ekiplerin uygunluğunu inceleyerek olası seçenekleri e-postayla paylaşacağız. Henüz rezervasyon yapılmadı ve ödeme gerekmiyor.",
    "Спасибо! Мы проверим объём работ и доступность местных исполнителей, затем отправим варианты по электронной почте. Бронирование и оплата пока не требуются."
  ],
  "Are you a cleaner in Antalya?": [
    "Antalya'da temizlik hizmeti mi veriyorsunuz?",
    "Вы работаете в сфере уборки в Анталье?"
  ],
  "Apply to work with us": [
    "İş ortağımız olun",
    "Стать партнёром"
  ]
};

export function quoteTranslate(locale: QuoteLocale, english: string): string {
  const value = dictionary[english];
  return locale === "tr" ? (value?.[0] ?? english) : locale === "ru" ? (value?.[1] ?? english) : english;
}
