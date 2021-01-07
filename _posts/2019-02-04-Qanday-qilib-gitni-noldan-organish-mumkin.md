---
layout: post
title: "Qanday qilib Git ni noldan o'rganish mumkin?"
tags: [git, vcs]
share-img: "/img/blog/git.jpg"
permalink: qanday-qilib-gitni-noldan-organish-mumkin/
---

## Qanday qilib Git ni noldan o'rganish mumkin?
<br>
Maqolamizda versiyalar boshqaruv tizimi Git ni nima uchun ishlatishimiz zarurligini va uni "nol"dan qanday qilib o'rganish mumkinligi haqida ma'lumot beramiz. 
<!--more-->

### Git ning o'zi nima va u boshqa versiyalar boshqaruv tizimlaridan nimasi bilan farq qiladi?

#### Git haqida qisqacha ma'lumot

Versiyalarni boshqarish tizimi (ingliz tilidan -_Version control system, VCS_ yoki _Revision Control System_) - o'zgaruvchan axborot bilan ishlashni osonlashtirish uchun dasturiy ta'minot. Versiyalarni boshqarish tizimi bir xil hujjatning bir nechta versiyasini saqlab qo'yishga imkon beradi, agar kerak bo'lsa, avvalgi versiyalarga qaytish, kimni va qachon o'zgartirish kiritilganligini aniqlash va boshqalarga ko'maklashadi.

Ushbu tizimlar dasturiy mahsulot ishlab chiqish jarayonida dastur kodlarini va ularning o'zgarishlar tarixini saqlash uchun qo'llaniladi. Biroq, ular doimiy ravishda o'zgaruvchan elektron hujjatlarni qayta ishlaydigan boshqa sohalarda ham muvaffaqiyatli qo'llanilishi mumkin. Xususan, versiya boshqaruv tizimlari CAD (_Computer-aided designed_)da, odatda mahsulotni boshqarish (PDM - _Product data managment_) tizimlarining bir qismi sifatida ishlatiladi.

#### Ma'lumotlarni saqlash

CVS, Subversion, Perforce va boshqa markazlashgan platformalar ma'lumotlarni fayllar uchun o'zgarishlar ro'yxati sifatida saqlaydi. Git ning ulardan farqi, u ma'lumotlarni kichik fayllar tizimining umumiy yig'indisi deb hisoblaydi.
<div class="row" style="text-align: center; font-size: 12px;">
    <div class="col-md-6">
        <img style="width:100%" src="/img/blog/git1.png" alt="Git ning fayllarni saqlash prinsipi" />
        <p style="font-size:16px">Git ning fayllarni saqlash prinsipi</p>
    </div>
    <div class="col-md-6">
        <img style="width:100%" alt="Git ning fayllarni saqlash prinsipi" src="/img/blog/git2.png" />
        <p style="font-size:16px">Boshqa tizimlarning fayllarni saqlash prinsipi</p>
    </div>
</div>
&nbsp;

Boshqa funksiyalari orasida quyidagilarni sanash mumkin:

*   markazlashtirilgan tizimlardan farqli o'laroq, Git ko'pgina operatsiyalar uchun mahalliy(lokal) fayllar va resurslardan foydalanadi, bu esa tarmoqqa kirish imkonisiz offlayn ishlash imkonini beradi;
*   faylni saqlamasdan oldin, Git SHA1 xesh usulidan foydalangan holda kontrol summasini(checksum) hisoblab chiqadi va uning indeksiga aylanadi.

### Qanday qo'llaymiz?

Dastlab biz Git ni [yuklab olishimiz](https://git-scm.com/downloads) zarur bo'ladi, undan keyin uning asosiy sozlanmalarini ko'rsatamiz. Bular quyidagilardir:

*   Foydalanuvchi nomi (username):
`$ git config --global user.name doniyor_xujamov`
*   Elektron pochta manzili (email):
`$ git config --global user.email doniyor_xujamov@boostin.uz`
*   Ishlash uchun matn muharriri. Misol uchun, standart muharrir sizni qoniqtirmasa va Emacs ni tanlasangiz:
`$ git config --global core.editor emacs`
*   O'rnatilgan taqqoslash([_file comparison tools_](https://en.wikipedia.org/wiki/Comparison_of_file_comparison_tools)) vositasi. Misol uchun, agar siz _vimdiff_ dan foydalanishni xohlasangiz:
`$ git config --global merge.tool vimdiff`

Keyin, hozirgi sozlanmalarni tekshirib ko'ring:

`$ git config --list`

### Kodlar bilan qanday ishlaymiz?

Proyektlaringizni saqlashda hosting va hamkorlikda ishlash uchun imkoniyatlari mavjud  xizmatlardan foydalaning. Ularda odatda foydalanishni boshqarish (access control), xatoliklarni ko'rish (bugtracking), vazifa menejmenti (task managment), har bir loyiha uchun vikilar (wiki) va boshqa funksionallar mavjud bo'ladi.

Eng mashhur platformalar orasida:

*   [GitHub](https://github.com/);
*   [Gitlab](https://about.gitlab.com/);
*   [Bitbucket](https://bitbucket.org/);
*   [Gogs](https://gogs.io/);
*   [SourceForge](https://sourceforge.net/).

### Bulardan keyin nimalarni o'rganish zarur?

*   Repozitoriyalar bilan ishlash: [yaratish](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Git-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F), [o'zgarishlarni yozish](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9), [kommitlar tarixini ko'rish](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%9F%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2), [o'zgarishlarni orqasiga qaytarish](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%9E%D1%82%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9), [repozitoriyalar bilan masofiy ishlash](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%D0%BC%D0%B8) va hokazo.
*   [Tugunlar (node, branch) bilan ishlash va ularni birlashtirish (merge](https://git-scm.com/book/ru/v2/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D1%8F)[)](https://git-scm.com/book/ru/v2/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D1%8F).
*   Git serverda: [sozlashlar](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5), [protokollar bilan ishlash](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%D1%8B), [ochiq SSH-kalitlarni generatsiya qilish](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B3%D0%BE-SSH-%D0%BA%D0%BB%D1%8E%D1%87%D0%B0), [GitWeb](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-GitWeb), [Gitosis](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-Gitosis), [Gitolite](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-Gitolite), [Git-demon](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-Git-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD), [Git-hosting](https://git-scm.com/book/ru/v2/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5-Git-%D1%85%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B3).
*   [Git instrumentlari](https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git).

### Qayerdan o'qish kerak?

*   [Git dokumentatsiyalari](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git);
*   [Git How To](https://githowto.com/);
*   [Geekbrains](https://geekbrains.ru/courses/66);
*   [Hexlet](https://ru.hexlet.io/courses/intro_to_git);
*   [LoftBlog](https://www.youtube.com/watch?list=PLY4rE9dstrJyTdVJpv7FibSaXB4BHPInb&amp;v=PEKN8NtBDQ0);
*   [interaktiv onlayn qo'llanma](https://learngitbranching.js.org/);
*   [Devcolibri;](https://tproger.ru/video/git-for-beginners-3/)
Biroz interaktiv usulda:

*   Ixtiyoriy shell komandalarni qidirish uchun [sayt](https://explainshell.com/). Git komandalar ham mavjud;
*   [Learn Git Branching](https://learngitbranching.js.org/) — Git ni o'yin stilida o'rgatuvchi onlayn qo'llanma;
*   [Try Git](https://try.github.io/levels/1/challenges/1) - virtual repozitoriyalarda tajriba (experiment) qilish uchun.

### Hammasini o'rgandim, undan keyin-chi?

Siz barcha asosiy bilimlarni egallab bo'lganingizdan keyin:

*   [Testlardan](https://wall.itsquiz.com/activations/595107bb7b08ad4107a315a7/%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9-%D1%82%D0%B5%D1%81%D1%82-%D0%BF%D0%BE-git) o'ting;
*   [Git bo'yicha mashg'ulotlar](http://www.vikingcodeschool.com/web-development-basics/git-calisthenics) saytida o'z bilimlaringizni yanada oshiring;
*   [Git ](https://git.wiki.kernel.org/index.php/Main_Page)[entsiklopediyasini o'rganing](https://git.wiki.kernel.org/index.php/Main_Page)[ ](https://git.wiki.kernel.org/index.php/Main_Page): bu yerda qo'llanmalar, shpargalkalar va savollaringiz bo'lsa sizga javob berish uchun jamoa bor.
&nbsp;

---