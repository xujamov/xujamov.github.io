---
layout: post
title: "Linux terminalida profi ishlaymiz: foydali komandalar to'plami (1-qism)"
tags: [linux, terminal, blog]
share-img: "/img/blog/linux-terminal-1.jpg"
permalink: linux-terminalida-profi-ishlaymiz-foydali-komandalar-toplami-1-qism/
---

Terminalda samarali ishlaydigan Linux Pro-foydalanuvchilarni ko'rganmisiz? Siz ham xohlaysizmi? Savol emas: bu maqolada biz vaqtni tejashga va samaradorlikni oshirishga yordam beradigan ba'zi foydali buyruqlar ko'rib chiqamiz.
<!--more-->
### Avtomatik tugatish uchun tabni ishlating

Terminalda biror narsa yozishni boshlaganingizda, Tab tugmasini bosishingiz mumkin va siz kiritgan qatordan boshlangan mumkin davomiy variantlar taklif etiladi. Misol uchun, `file1.txt` nomli faylni nusxalashni istasangiz, faqat `cp f` ni kiritishingiz mumkin, Tab tugmasini bosib, variantlarni ko'rasiz.

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ cp f
file1.txt  file2.txt  file3.txt  file4.txt
$ cp f</pre>

Avtomatik yakunlash buyruqlar uchun Tab-ni ham foydalanishingiz mumkin.

### Oxirgi ishchi katalogiga(papkasiga) qaytish

Papkada ierarxiyasida chuqur tushgan va keyin butunlay boshqa joyda joylashgan papkaga ko'chgan vaziyatni tasavvur qiling va keyin qaytib borishingiz kerakligini tushunib qoldingiz. Bunday holda, faqat quyidagi buyruqni kiritishingiz kerak: `cd -` Sizni oxirgi ishchi katalogiga qaytarib beradi va siz uzoq yo'lni qo'l bilan kiritishingiz shart bo'lmaydi.

> Oxirgi ishchi katalog `OLDPWD `o'zgaruvchida saqlanadi; bu o'zgaruvchini o'zingiz uchun ishlatishingiz mumkin (`echo $ OLDPWD`ni sinab ko'ring) yoki hatto `cd -`buyrug'ini boshqa yo'lga (`OLDPWD = / usr / bin disk -`) berishingiz ham mumkin.

### Bosh katalogga qaytish (home).

Juda tushunarli. Istalgan joydan uy katalogiga qaytish uchun quyidagi buyruqni ishlatishingiz mumkin: `cd ~` Umumiy holda, yuqorida ko'rsatilgandek `cd ~` buyrug'ini ham cheklab qo'yish va boshqa bir xil natijani oladigan qilishingiz ham mumkin. Ko'pgina zamonaviy Linux tizimlarda bu buyruq ishlashi kerak.

### Katalog tarkibi

Siz katalogning tarkibini ko'rsatish uchun qanday buyruq kerakligini taxmin qilishingiz mumkin. Buning uchun `ls -l` dan foydalanishingiz mumkin bo'lgan, buni har bir kishi bilsa kerak. Biroq, hamma ham buni `ll` buyrug'i bilan qilish mumkinligini bilmaydi. Albatta, har bir narsa operatsion tizimga bog'liq, lekin ko'p hollarda bu komandadan foydalanishingiz mumkin (ko'plab distributivlarda).

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ ll
total 44
-rw-r--r--.  1 root root  720 May 31  2016 boostin.conf
-rw-r--r--.  1 root root  615 Jun 22 14:11 coredump.conf
-rw-r--r--.  1 root root    0 Apr 20 16:56 dont-synthesize-nobody
-rw-r--r--.  1 root root 1027 Jun 22 14:11 journald.conf
-rw-r--r--.  1 root root 1042 Jul 18 19:03 logind.conf
drwxr-xr-x.  2 root root 4096 Jul 18 19:05 network
-rw-r--r--.  1 root root  688 Jul 18 19:03 resolved.conf
drwxr-xr-x. 16 root root 4096 Sep 15 13:29 hacking.log
-rw-r--r--.  1 root root 1682 Jul 18 19:03 system.conf
-rw-r--r--.  1 root root  677 Jul 18 19:03 timesyncd.conf
drwxr-xr-x.  2 root root 4096 Jul 18 19:05 readme.md
-rw-r--r--.  1 root root 1130 Jun 22 14:11 shift.js</pre>

> Aslida, `ll` - alohida buyruq emas, balki `ls -l` uchun taxallus.

### Bir vaqtning o'zida bir nechta buyruqni ishga tushiring

Aytaylik, bir nechta buyruqlar bir-biridan keyin bajarilishi kerak. Nima qilmoqchisiz? Birinchi buyruq tugashini kutib turing va keyingi birini ishga tushiring. Buning o'rniga, siz vergul `;` dan foydalanishingiz mumkin. Shunday usulda, bir xil satrda bir nechta buyruqni ishlatishingiz mumkin. Buyruqlardan birini keyingi ishni bajarish uchun o'z ishini yakunlashni kutish shart emas. `buyruq_1; buyruq_2; buyruq_3`

> Buyruqlarni shu tarzda ishga tushirganingizda ular parallel ravishda bajarilmaydi, ketma-ketlikda bajariladi. Agar siz birinchi variant kerak bo'lsa,  `(buyruq_1 &) ; (buyruq_2 &)` kabi ko'rinishda yozing.

### Avvalgi buyruqlar muvaffaqiyatli bajarilgan bo'lishi sharti bilan bir vaqtning o'zida bir nechta buyruqni ishga tushiring

Bir vaqtning o'zida bir nechta buyruqlarni qanday ishlatishni bilasiz. Buyruqlarning bajarilmasligiga ishonch hosil qilish uchun nima qilish kerak? Aytaylik, siz kodingizni yig'moqchisiz (build) va yig'ish muvaffaqiyatli bo'lsa, uni ishga tushirishni xohlaysiz. Bunday holda, agar siz avvalgi buyrug'i muvaffaqiyatli bajarilsa, quyidagi buyruqni ishlatadigan `&&` delimitatoridan foydalanishingiz mumkin. `buyruq_1 && buyruq_2` Mmisol sifatida, `sudo apt update && sudo upgrade` buyrug'ini keltirishimiz mumkin. Bu buyruq sistemaning yangilanishini ta'minlaydi (upgrade).

### O'ldirish vaqti keldi

Dasturni(protsessni) "o'ldirish" ning bir necha yo'li mavjud. `killall` buyrug'i buni nomidan amalga oshiradi, `kill` buyrug'i esa o'ldirish jarayonida raqamini(id) talab qiladi. Misol uchun, `killall shift` barcha shift nomli ishlayotgan dasturlar jarayonlarini o'ldiradi.

### To'xtatish vaqti (pauza)

Ishlayotgan komandani to'xtatib turish uchun Ctrl + Z tugmalarini bosing va davom ettirish uchun - `%`.

### Oddiy qidirish va oldingi yozilgan buyruqlardan foydalanish

Keling, bir necha soat oldin bir necha buyruq ishlatganingiz va uni qayta ishlatishni xohlayotganingizni tasavvur qilaylik, lekin ismini eslay olmayapsiz. Bu yerda teskari qidirish yordam beradi. Uning yordami bilan oldin yozilgan buyruqlar orasidan belgilangan shartlarga ko'ra o'z buyrug'ingizni topishingiz mumkin. Faqat Ctrl + R tugmalarini bosing va buyruqning bir qismini kiriting. Keyinchalik, ko'rsatilgan shartlarga javob beradigan tarixdan(history) buyruqlar namoyish etiladi. `Ctrl+R <kalit so'z>` Odatiy holda faqat bitta natija ko'rsatiladi. Ko'proq natijalarni ko'rish uchun Ctrl + R tugmalarini qayta bosish zarur. Qidirishni to'xtatish uchun Ctrl + C tugmalarini bosing.

### Ctrl + S tugmachasidan so'ng konsolni "qutqaramiz"

Ko'p odamlar saqlash uchun Ctrl + S kombinatsiyasidan foydalanar edi. Biroq terminalda ishlatilgandan so'ng, ko'pincha kompyuter qotib qoladi. Uni normal holatiga qaytarish uchun Ctrl + Q tugmalarini bosing.

### Satrning boshiga yoki oxiriga o'tish

Masalan, uzun buyruqni yozib, birdaniga nimanidir buyruq boshida o'zgartirish kerakligini anglab yetdingiz. Buyruqning boshiga yoki oxiriga o'tish uchun chap / o'ng o'q tugmachasini yoki Home / End tugmachasini bir necha marta bosishingiz mumkin. Ctrl + A yoki Ctrl + E tugmalarini aynan boshiga yoki oxiriga o'tish vazifasini bajaradi.

### Jurnal fayllarni(log) real vaqtda o'qish

Ilova ishlayotganda jurnalni tahlil qilish kerak bo'lgan holatlarda `tail` buyrug'ini `-f` flagi bilan ishlatishingiz mumkin. `tail -f <log faylga yo'l>` Siz faqatgina kerakli qatorlarni chop qilish uchun `grep` ni ishlatishingiz mumkin: `tail -f <log faylga yo'l> | grep <ifoda>` Bunga qo'shimcha ravishda, log fayl o'chirib yuborilgan bo'lsa ham, `tail` ishlab turishini ta'minlash uchun `-F` flagidan foydalanishingiz mumkin. Bu holatda, kundalik fayli qayta yaratiladi va `tail` faylni o'qishda davom etadi. Agarda siz tizim jurnalini(loglarini) real vaqt rejimida ko'rishni istasangiz, `journalctl` buyrug'ining `-f` bilan ishlating:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">journalctl -f</pre>

### Siqilgan jurnallarni(compressed) ularni yoymasdan(extract) turib o'qish

Server jurnali odatda diskda saqlash uchun gzip bilan siqiladi. Ushbu jurnallarni tahlil qiluvchi dasturchi yoki tizim administratori uchun muammo yuzaga keladi. Arxivni boshqa joyga nusxalashingiz va keyin uni yoyishingiz (extract) mumkin, lekin har doim ham jurnalni yoyib ko'rish huquqi bo'lavermaydi. Yaxshiyamki, bunday vaziyatlarda z-komandalar doimo yordam beradi. Ular`less`, `cat`, `grep` kabi jurnallar bilan ishlash uchun ishlatiladigan odatiy buyruqlarga muqobildir. `zless`, `zcat`, `zgrep` va hokazo buyruqlarni hatto jurnallarni yoymasdan ham foydalanishingiz mumkin.

### Fayllarni o'qish uchun less dan foydalaning

`cat` buyrug'i doimo faylni o'qishning eng yaxshi usuli emas. Uning kamchiligi shundaki katta kattalikdagi faylni bir vaqtning o'zida chop qiladi, bu esa o'z o'rnida kompyuterning qotib qolishiga olib keladi. Siz Vi, Vim yoki boshqa terminalda matn tahrirlovchisini foydalanishingiz mumkin, lekin faqat faylni o'qishingiz kerak bo'lsa, `less` buyrug'i juda yaxshi ishlaydi. `less <fayl yo'li>` `less`orqali matnda qidirish mumkin, sahifalar bo'ylab harakatlanasiz (pagination), satr raqamiga o'ta olishingiz va boshqa imkoniyatlar mavjud. Bundan tashqari, faqat matnli hujjatlarni emas, balki arxivlarni va boshqa fayllarni ham o'qiy olasiz.

### Oldingi buyruqlar argumentini !$ bilan ishlatish

Avvalgi buyruqning argumentini ishlatish ko'p hollarda foydali bo'lishi mumkin. Misol uchun, siz bir katalog yaratdingiz va unga to'g'ridan-to'g'ri borishingiz kerak.

    $ ls /
    bin  boot  cdrom  dev  etc  home  sys  tmp  usr  var  vmlinuz  vmlinuz.old
    $ cd !$
    cd /

`Alt + .` dan foydalanish ham juda yaxshi usul. Agar nuqta bir necha marta bosilsa, oldingi buyruqlar biridan argumentni tanlash imkonini beradi.

### Oldingi buyruqni !! yordamida hozirgi yozilayotgan buyruqda ishlatish

`!!` yordamida barcha oldingi buyruqni ham chaqirishingiz mumkin. Bu ayniqsa buyruqni bajarish uchun root-privilegiyalar zarur bo'lgan hollarda foydalidir. `sudo !!` buyrug'i ham bir oz vaqtni tejash imkonini beradi.

### Yozuvlarni tuzatish uchun alias dan foydalanish

Ehtimol, `alias` komandasi nima uchun kerakligini allaqachon bilib oldingiz. Yozuvlarni tuzatish uchun moslash mumkin. Tasavvur qilingki, `grep` o'rniga ko'pincha `gerp` yozasiz. Quyidagi kabi taxallusni tanlasangiz, siz yana buyruqni qayta yozishingiz shart emas:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">alias gerp = grep</pre>

Aytgancha, so'zlarni(buyruqlarni) tuzatish uchun yolg'onchilarni ishlatishning hojati yo'q - ["The Fuck"](https://github.com/nvbn/thefuck) dasturi avvalgi buyruqni o'zi to'g'rilaydi.

### Qayta ishga tushamiz (restart)

Kompyuterni terminaldan o'chirish uchun `poweroff` buyrug'i, uni qayta ishga tushirish uchun esa `reboot` buyrug'ini yozish talab etiladi.

---

PS: maqolaning 2-qismini [bu yerdan](/linux-terminalida-profi-ishlaymiz-foydali-komandalar-toplami-2-qism/) o'qishingiz mumkin.

---