---
layout: post
title: "Linux terminalida profi ishlaymiz: foydali komandalar to'plami (2-qism)"
tags: [linux, terminal, blog]
share-img: "/img/blog/linux-terminal-2.jpg"
permalink: linux-terminalida-profi-ishlaymiz-foydali-komandalar-toplami-2-qism/
---

Terminalda samarali ishlaydigan Linux Pro-foydalanuvchilarni ko'rganmisiz? Siz ham xohlaysizmi? Savol emas: bu maqolada biz vaqtni tejashga va samaradorlikni oshirishga yordam beradigan ba'zi foydali buyruqlarning davomini (2-qismini) ko'rib chiqamiz. Maqolaning birinchi qismi bilan [bu havolaga](/linux-terminalida-profi-ishlaymiz-foydali-komandalar-toplami-1-qism/) o'tib tanishib chiqishingiz mumkin.
<!--more-->
## Ko'chirilgan kodni terminalga joylashtiramiz (copy-paste)

Bu yerda hammasi bir xil emas, Linux distributivlari va uning terminallari orasida farq mavjud. Lekin umumiy holda matnni quyidagi usullardan birida terminalga joylashtirish mumkin:

*   Matnni nusxalash va joylashtirish uchun sichqonchani o'ng tugmasini bosing (Putty va boshqa Windows SSH mijozlarida ishlaydi);
*   Matnni nusxalash va joylashtirish uchun o'rta sichqoncha tugmasini (g'ildirakni) bosing;
*   Nusxalash uchun Ctrl + Shift + C va joylashtirish uchun Ctrl + Shift + V;
*   Ba'zi terminalda emulyatorlarida tanish Ctrl + V kombinatsiyasi ishlaydi.

## Ishlaydigan jarayon/buyruqni to'xtatish (process/command)

Ehtimol buni ko'pchilik bilishi mumkin. Agar siz bajarishni xohlagan buyruqni bajarayotgan bo'lsangiz, faqatgina Ctrl + C tugmalarini bosib, buyruqqa chiqib ketish signali (SIGINT) yuboriladi. Agar siz terminalni tezda tark etishni istasangiz, Ctrl + D tugmalarini bosib, bash va boshqa interaktiv dasturlarga to'xtatish buyrug'ini berishingiz mumkin bo'ladi.

## Interaktiv javobga (yes) muhtoj bo'lgan skriptlar yoki buyruqlar uchun buyruq

`yes` buyrug'i ba'zi script/buyruqlar foydalanuvchidan har safar Y bosishni talab qilgan vaqtda cheksiz unga Y buyruqlarini berish uchun qo'llaniladi.

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">yes &#60;buyruq yoki skript></pre>

## Faylni o'chirmasdan uni tozalash

Agar siz faqat fayl ichini (uning ichidagi ma'lumotni) tozalashingiz kerak va uni o'chirib tashlamasangiz zarur holatlarda, uni quyidagicha qilishingiz mumkin:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">> fayl_nomi</pre>

## Muayyan matnli fayl mavjudligini aniqlang

Linux terminalida siz turli xil usulda fayl kontentidagi matnni qidirishingiz mumkin. Agar muayyan matnli fayl yoki fayllar mavjudligini bilishingiz kerak bo'lsa, ushbu buyruqni ishlatishingiz mumkin:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">grep -Pri &#60;qidirish_matni> &#60;qaysi_papkadan_qidirish_yoli></pre>

## Har bir buyruq haqida ma'lumot olish

Deyarli barcha buyruqlar o'z yo'riqnomalariga ega. U haqida ma'lumot olish uchun quyidagi buyruqni ishlating:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">&#60;buyruq> --help</pre>

Bundan tashqari, ba'zida siz `man <buyruq> `yordamida buyruq haqida batafsil ma'lumot olishingiz mumkin.

## Oldin ishlatilgan buyruqlar ro'yxati

Qachondir ishga tushirilgan barcha buyruqlarni ko'rishni istasangiz, `history` buyrug'idan foydalaning. Agar sizga to'liq ro'yxatga kerak bo'lmasa, faqat oxirgi bir nechta buyruqlarni ko'rmoqchi bo'lsangiz,`fc-l` buyrug'ini ishlating.

## Oldin kiritilgan buyruqni tezda ishga tushirish

Yuqoridagi usullardan birida buyruqlar olganda, har bir komandaning yonida tarixdagi uning soni ko'rsatilgan bo'ladi. Ushbu ro'yxatdan buyruqni tezkor ishga tushirish uchun faqatgina `!<buyruq nomeri>` ni kiritsangiz bas.

## Buyruqni saqlamasdan bajarish

Agarda siz ishlatmoqchi bo'lgan buyrug'ingiz oldin ishlatilgan buyruqlar ro'yxatida ko'rinishini istamasangiz, shunchaki uning oldidan bitta probel qo'yishingiz yetarli.

## Oddiy HTTP serverini ko'taramiz

Server ko'tarish va hozirgi direktoriyani http://localhost:8000/ manzili orqali ko'rinishini istasangiz `python3 -m SimpleHTTPServer` buyrug'ini terish kifoya.

## Qulaylik bilan uzun buyruqlarni yozamiz

Agar Ctrl tugmasini bosib, keyin navbat bilan X va E tugmalarini bossangiz, unda sizga boshqa matn muharrini ochiladi, siz u yordamida bemalol uzun buyruqlarni yozishingiz va chiqish paytida uni bajartirishingiz mumkin bo'ladi.

## Fayl tizimi ma'lumotlari

Mavjud o'rnatilgan fayl tizimlari haqida ma'lumotlarni ustunlar yordamida qulay tarzda ko'rish uchun `mount | column -t` buyrug'ini kiriting. Bundan tashqari, tushunarli daraxt shaklidagi ma'lumotlarni ko'rsatadigan va ustunlarni o'zi formatlaydigan`findmnt` buyrug'idan foydalanishingiz va kerakli fayl tizimini topishingiz mumkin:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ findmnt
TARGET                                SOURCE      FSTYPE  OPTIONS
/                                     /dev/sda4   ext4    rw,relatime,seclabel
├─/sys                                sysfs       sysfs   rw,nosuid,nodev,noexec,rela
│ ├─/sys/kernel/security              securityfs  securit rw,nosuid,nodev,noexec,rela
│ ├─/sys/fs/cgroup                    tmpfs       tmpfs   ro,nosuid,nodev,noexec,secl
│ │ ├─/sys/fs/cgroup/unified          cgroup2     cgroup2 rw,nosuid,nodev,noexec,rela
│ │ ├─/sys/fs/cgroup/pids             cgroup      cgroup  rw,nosuid,nodev,noexec,rela
│ │ └─/sys/fs/cgroup/devices          cgroup      cgroup  rw,nosuid,nodev,noexec,rela
│ ├─/sys/fs/pstore                    pstore      pstore  rw,nosuid,nodev,noexec,rela
│ ├─/sys/firmware/efi/efivars         efivarfs    efivarf rw,nosuid,nodev,noexec,rela
│ ├─/sys/kernel/config                configfs    configf rw,relatime
│ └─/sys/fs/fuse/connections          fusectl     fusectl rw,relatime
├─/proc                               proc        proc    rw,nosuid,nodev,noexec,rela
│ └─/proc/sys/fs/binfmt_misc          systemd-1   autofs  rw,relatime,fd=30,pgrp=1,ti
│   └─/proc/sys/fs/binfmt_misc        binfmt_misc binfmt_ rw,relatime
├─/home                               /dev/sda6   ext4    rw,relatime,seclabel
└─/var/lib/nfs/rpc_pipefs             sunrpc      rpc_pip rw,relatime</pre>

## Buyruqlar daraxti

Chiroyli buyruqlar daraxtlarini chizish mumkin bo'lgan `pstree` buyrug'i mavjud. U quyidagicha natija ko'rsatadi:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ pstree 1721
gnome-shell─┬─Xwayland───5*[{Xwayland}]
            ├─gnome-system-mo───3*[{gnome-system-mo}]
            ├─ibus-daemon─┬─ibus-dconf───3*[{ibus-dconf}]
            │             ├─ibus-engine-sim───2*[{ibus-engine-sim}]
            │             ├─ibus-extension-───3*[{ibus-extension-}]
            │             └─2*[{ibus-daemon}]
            ├─telegram-deskto───14*[{telegram-deskto}]
            └─13*[{gnome-shell}]
</pre>

## Supershell

Superuser(root) nomidan terminalni ishlatish uchun `sudo -s` komandasidan foydalanishingiz mumkin. Ko'p manbalarda, qo'shimcha usulni borligi sababli, `sudo su` buyrug'ini topishingiz mumkin.

## Fayllarni qidiramiz

Agarda sizga biron faylni qidirish zarur bo'lsa, lekin siz uning qayerda joylashganini bilmasangiz sizga `find` buyrug'i yordam beradi.

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ find /usr/include -name gtk.h
/usr/include/gtk-3.0/gtk/gtk.h
</pre>

## Kalendar

`cal` buyrug'i sizga hozirgi oyning kalendarini chizib berishi (hattoki bugungi kunni belgilab berishi) yoki boshqa biron oraliqni ko'rsatishi mumkin:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ cal
   October 2018   
Mo Tu We Th Fr Sa Su
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30

$ cal 2019
                               2019                               

       January               February                 March       
Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su
    1  2  3  4  5  6                1  2  3                1  2  3
 7  8  9 10 11 12 13    4  5  6  7  8  9 10    4  5  6  7  8  9 10
14 15 16 17 18 19 20   11 12 13 14 15 16 17   11 12 13 14 15 16 17
21 22 23 24 25 26 27   18 19 20 21 22 23 24   18 19 20 21 22 23 24
28 29 30 31            25 26 27 28            25 26 27 28 29 30 31

        April                   May                   June        
Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su
 1  2  3  4  5  6  7          1  2  3  4  5                   1  2
 8  9 10 11 12 13 14    6  7  8  9 10 11 12    3  4  5  6  7  8  9
15 16 17 18 19 20 21   13 14 15 16 17 18 19   10 11 12 13 14 15 16
22 23 24 25 26 27 28   20 21 22 23 24 25 26   17 18 19 20 21 22 23
29 30                  27 28 29 30 31         24 25 26 27 28 29 30

        July                  August                September     
Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su
 1  2  3  4  5  6  7             1  2  3  4                      1
 8  9 10 11 12 13 14    5  6  7  8  9 10 11    2  3  4  5  6  7  8
15 16 17 18 19 20 21   12 13 14 15 16 17 18    9 10 11 12 13 14 15
22 23 24 25 26 27 28   19 20 21 22 23 24 25   16 17 18 19 20 21 22
29 30 31               26 27 28 29 30 31      23 24 25 26 27 28 29
                                              30                  
       October               November               December      
Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su   Mo Tu We Th Fr Sa Su
    1  2  3  4  5  6                1  2  3                      1
 7  8  9 10 11 12 13    4  5  6  7  8  9 10    2  3  4  5  6  7  8
14 15 16 17 18 19 20   11 12 13 14 15 16 17    9 10 11 12 13 14 15
21 22 23 24 25 26 27   18 19 20 21 22 23 24   16 17 18 19 20 21 22
28 29 30 31            25 26 27 28 29 30      23 24 25 26 27 28 29
                                              30 31</pre>

## Ob-havo ma'lumotlari

``curl wttr.in/<zarur shahar nomi>``buyrug'ini kiriting va siz chiroyli jadval ko'rinishida ob-havo ma'lumotlarini ko'rishingiz mumkin (curl o'rnatilgan bo'lishi lozim):

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ curl wttr.in/Tashkent
Weather report: Tashkent, Uzbekistan

               Smoke
      .--.     2-3 °C         
   .-(    ).   ↙ 4 km/h       
  (___.__)__)  4 km           
               0.0 mm         
                                                       ┌─────────────┐                                                       
┌──────────────────────────────┬───────────────────────┤  Sat 17 Nov ├───────────────────────┬──────────────────────────────┐
│            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│               Overcast       │               Overcast       │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
│      .--.     7-8 °C         │      .--.     12-13 °C       │  _ /"".-.     11 °C          │  _ /"".-.     10 °C          │
│   .-(    ).   ↖ 7-13 km/h    │   .-(    ).   ↘ 5-6 km/h     │    \_(   ).   ↗ 5-8 km/h     │    \_(   ).   ← 3-6 km/h     │
│  (___.__)__)  20 km          │  (___.__)__)  20 km          │    /(___(__)  20 km          │    /(___(__)  20 km          │
│               0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
                                                       ┌─────────────┐                                                       
┌──────────────────────────────┬───────────────────────┤  Sun 18 Nov ├───────────────────────┬──────────────────────────────┐
│            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
│  _ /"".-.     9 °C           │  _ /"".-.     12-13 °C       │  _ /"".-.     11 °C          │  _ /"".-.     10 °C          │
│    \_(   ).   ↖ 5-8 km/h     │    \_(   ).   ↑ 7-8 km/h     │    \_(   ).   ↑ 5-8 km/h     │    \_(   ).   ↙ 4-8 km/h     │
│    /(___(__)  20 km          │    /(___(__)  20 km          │    /(___(__)  20 km          │    /(___(__)  20 km          │
│               0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
                                                       ┌─────────────┐                                                       
┌──────────────────────────────┬───────────────────────┤  Mon 19 Nov ├───────────────────────┬──────────────────────────────┐
│            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
│  _ /"".-.     10 °C          │  _ /"".-.     15 °C          │  _ /"".-.     13 °C          │  _ /"".-.     12 °C          │
│    \_(   ).   ↖ 5-10 km/h    │    \_(   ).   ↘ 5 km/h       │    \_(   ).   ↗ 8-12 km/h    │    \_(   ).   ↙ 5-8 km/h     │
│    /(___(__)  20 km          │    /(___(__)  20 km          │    /(___(__)  20 km          │    /(___(__)  20 km          │
│               0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘</pre>

## ASCII jadvali

ASCII jadvalini ko'rish uchun shunchaki `man ascii` buyrug'ini kiriting.

## Oddiy kalkulyator

Katta bo'lmagan hisob-kitoblarni terminalning o'zida amalga oshirish mumkin. Buning uchun `echo <ifoda> | bc` yoki `echo $((<ifoda>))` buyruqlaridan foydalanilishi mumkin.

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ echo 35+42 | bc
77
$ echo $((35+42))
77</pre>

## Dastur bajarilishi uchun qaysi kutubxonalar kerakligini aniqlab olamiz

Dastur ishga tushishi uchun qaysi dinamik kutubxonalar zarurligi va ularga qanday ruxsatlar berilganligini bilish uchun `lld` buyrug'idan foydalaniladi:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ ldd /usr/lib/systemd/systemd
    linux-vdso.so.1 (0x00007fff7e7c6000)
    libsystemd-shared-239.so => /usr/lib/systemd/libsystemd-shared-239.so (0x00007f265acbd000)
    librt.so.1 => /lib64/librt.so.1 (0x00007f265ac7e000)
    libseccomp.so.2 => /lib64/libseccomp.so.2 (0x00007f265ac3a000)
    libselinux.so.1 => /lib64/libselinux.so.1 (0x00007f265ac0e000)
    ...
    libunistring.so.2 => /lib64/libunistring.so.2 (0x00007f265a076000)
    libsepol.so.1 => /lib64/libsepol.so.1 (0x00007f2659fc1000)
    libudev.so.1 => /lib64/libudev.so.1 (0x00007f2659f99000)
    libm.so.6 => /lib64/libm.so.6 (0x00007f2659e15000)</pre>

## Fayl ichida nima borligini bilib olamiz

Fayl ichida qaysi turdagi ma'lumot borligini bilish uchun `file` buyrug'idan foydalanamiz:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">$ file Pictures/wayland-screenshot.png 
Pictures/wayland-screenshot.png: PNG image data, 1920 x 1080, 8-bit/color RGBA, non-interlaced
$ file dev/gnome-builder/src/main.c 
dev/gnome-builder/src/main.c: C source, UTF-8 Unicode text</pre>

## Tunnel o'tkazamiz

`ssh -N -L 2001:localhost:80 biron_mashina` buyrug'i orqali 80 portdan biron_mashina masofaviy mashinasiga tunnel yaratish mumkin.

* * *

Maqolada ko'rsatib o'tmoqchi bo'lgan foydali buyruqlarimiz shulardan iborat edi. Xo'sh, siz qanday foydali linux buyruqlarini bilasiz? O'z variantlaringizni izohlarda qoldiring.

---