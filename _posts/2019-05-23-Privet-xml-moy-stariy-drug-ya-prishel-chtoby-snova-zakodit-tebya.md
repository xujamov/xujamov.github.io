---
layout: post
title: "Привет, XML, мой старый друг, я пришел, чтобы снова закодить тебя."
tags: [xml, soap, php, useful, blog]
share-img: "/img/blog/xml-soap.jpg"
permalink: privet-xml-moy-stariy-drug-ya-prishel-chtoby-snova-zakodit-tebya/
---

В зависимости от того, как долго вы были разработчиком, XML может быть термином, который звучит совершенно чужим. Для других это могло бы вернуть давно подавленные воспоминания о каких-то темных днях.
<!--more-->

<div style="text-align:center"><img src="/img/blog/xml-conversion.PNG" /></div>

Я уже два месяца не писал посты, и даже забыл что у меня был блог ;) Два дня назад начал подключать одну платёжную систему под названием Paynet, которая существует с 2005 года и очень широко распространена в Узбекистане. Я вначале не думал о трудностях, даже когда слышал что эта платежная система работает с SOAP протоколом (я до этого один раз работал с SOAP, чуть позже расскажу в каком проекте), но когда я взял документацию.... Короче начнём с истории :)

## Когда я использовал SOAP первый раз

> Когда я первый раз слышал слово SOAP, сразу спрашивал - "Чё за мыло?)"

Когда я учился в бакалавре в городе Ургенче, мне предложили работу с зарплатой которая равна моей стипендии. Идея проекта была крутая, и из-за идии я принял предложение, мы разработали программу с называнием [Kakadu Taxipay](https://play.google.com/store/apps/details?id=uz.mykakadu&hl=ru), через которую люди могли оплачивать проезд в такси при помощи пластиковой карты. Я работал андроид программистом(это была моя первая программа на андроиде), помимо этого я помог с северной частью. 

Для оплаты, мы подняли биллинг на основе [UPay](https://upay.uz/), и она в своей очереди состояла из SOAP сервера. Вот тогда мы работали с SOAP прокотолом, наше серверное приложение было написано на Java, на фреймворке Spring и нам тогда не было тяжело работать с SOAP протоколом.

[SOAP](https://ru.wikipedia.org/wiki/SOAP) означает Simple Object Access Protocol(простой протокол доступа к объектам). Это протокол для обмена сообщениями,обмена данными в децентрализованной и распределенной среде. SOAP может работать с любым протоколом прикладного уровня, таким как [HTTP](https://ru.wikipedia.org/wiki/HTTP), [SMTP](https://ru.wikipedia.org/wiki/SMTP), [TCP](https://ru.wikipedia.org/wiki/Transmission_Control_Protocol) или [UDP](https://ru.wikipedia.org/wiki/UDP). Он возвращает данные получателю в формате [XML](https://ru.wikipedia.org/wiki/XML). Безопасность, авторизация и обработка ошибок встроены в протокол и, в отличие от [REST](https://ru.wikipedia.org/wiki/REST), не предполагают прямой связи «точка-точка». Поэтому он хорошо работает в распределенной корпоративной среде. 

SOAP следует формальному и стандартизированному подходу, который определяет, как кодировать файлы XML, возвращаемые API. На самом деле сообщение SOAP - это обычный XML-файл, состоящий из следующих частей:

1. Envelope (обязательный) - Это начальный и конечный теги сообщения.
2. Header (необязательный) - Он содержит необязательные атрибуты сообщения. Это позволяет расширять сообщение SOAP модульным и децентрализованным способом. В загаловке могут быть токены, метадата и т.п.
3. Body (обязательный) - Он содержит данные XML, которые сервер передает получателю.
4. Fault (необязательный) - Он несет информацию об ошибках, возникших при обработке сообщения.

Вот как выглядит обычное SOAP-сообщение. Пример взят из документов [W3C SOAP](https://www.w3.org/TR/soap12/) и содержит конверт SOAP, блок заголовка и тело:

<pre class="EnlighterJSRAW" data-enlighter-language="no-highlight">
&lt;env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"&gt;
 &lt;env:Header&gt;
 &lt;n:alertcontrol xmlns:n="http://example.org/alertcontrol"&gt;
 &lt;n:priority&gt;1&lt;/n:priority&gt;
 &lt;n:expires&gt;2001-06-22T14:00:00-05:00&lt;/n:expires&gt;
 &lt;/n:alertcontrol&gt;
 &lt;/env:Header&gt;
 &lt;env:Body&gt;
 &lt;m:alert xmlns:m="http://example.org/alert"&gt;
 &lt;m:msg&gt;Pick up Mary at school at 2pm&lt;/m:msg&gt;
 &lt;/m:alert&gt;
 &lt;/env:Body&gt;
&lt;/env:Envelope&gt;
</pre>

Обычно SOAP использует заранее подготовленные методы и элементы так называемый WSDL. The Web Services Description Language ([WSDL](https://ru.wikipedia.org/wiki/WSDL)) - это язык описания интерфейса на основе XML, который используется для описания функциональных возможностей, предлагаемых веб-сервисом. Аббревиатура также используется для любого конкретного описания WSDL веб-службы (также называемой файлом WSDL), которая предоставляет машиночитаемое описание того, как можно вызвать службу, какие параметры она ожидает и какие структуры данных она возвращает. , Следовательно, его назначение примерно аналогично назначению сигнатуры типа в языке программирования.

## Какова основная причина использования SOAP?

На сегодняшний день, SOAP, обычно используется для веб-сервисов корпоративного уровня, которые требуют высокой безопасности и сложных транзакций. Но, из-за неудобства работы с устаревшими технологиями XML, такие крупные сервисы которые используют SOAP очень мало. Есть исключении, например, общедоступный API-интерфейс [PayPal](https://www.paypal.com/ru/home), позволяющий принимать платежи через PayPal и кредитные карты, все еще используют этот протокол.

Приведем сравнение SOAP с REST.

### SOAP vs REST

| | SOAP | REST |
|------|-------|-----|
| значения | Simple Object Access Protocol | Representational State Transfer |
| дизайн | Стандартизированный протокол с заранее определенными правилами. | Архитектурный стиль со свободными руководящими принципами и рекомендациями. |
| подход | Функционально управляемый (данные доступны как сервисы, например: «getUser»). | Управляемый данными (данные, доступные как ресурсы, например, «User»). |
| поддержка состояния | По умолчанию без сохранения состояния, но можно сделать API-интерфейс SOAP с сохранением состояния. | Без сохранения состояния (без сеансов на стороне сервера). |
| кэширование | Вызовы API не могут быть кэшированы. | Вызовы API могут быть кэшированы. |
| производительность | Требует большей пропускной способности и вычислительной мощности. | Требует меньше ресурсов. |
| формат сообщения | Только XML. | Простой текст, HTML, XML, JSON, YAML и другие. |
| протокол передачи | HTTP, SMTP, UDP и другие. | Только HTTP. |
| рекомендуется для | Корпоративные приложения, приложения с высоким уровнем безопасности, распределенная среда, финансовые услуги, платежные шлюзы, телекоммуникационные услуги. | Публичные API для веб-сервисов, мобильных сервисов, социальных сетей. |
| преимущества | Высокая безопасность, стандартизированный, расширяемость. | Масштабируемость, лучшая производительность, удобство браузера, гибкость. |
| Недостатки | Низкая производительность, большая сложность, меньшая гибкость. | Меньше безопасности, не подходит для распределенных сред. |

## [UZPAYNET](https://paynet.uz/)

Платёжная система PAYNET - лидер среди платежных систем Узбекистана по количеству производимых ежедневно оплат. Компания «UZPAYNET» действует на рынке Узбекистана с 2005 года. За этот период они имели более 270 поставщиков различных услуг, в их числе и коммунальные службы, услуги которых можно оплатить через мобильное приложение PAYNET.UZ и в любом из 15 000 пунктов приема оплаты по республике.

Приложению Paynet.uz почти никто не использует, но на территории Узбекистана где интернет плохо работает есть пункты Paynet,и также оборот составляет 1 млн сум

## Зачем мне надо было подключить paynet

Недавно мы (я и моя команда) получили заказ и начали разрабатывать мобильное приложение AsaxiyBooks и заказчик хотел чтобы потребители этого приложения могли платить при помощи данной услуги. Четыре дня назад я начал писать сервис для получении транзакции от payneta.

_Здесь был контент, в котором я неправильно написал о сотрудниках Paynet_

<!---

В начале руководитель AsaxiyBooks хотел заключить договор с Paynet, но они отказались и требовали чтобы мы сначала написали сервис для получение транзакции(наверно они знают что не все могут к ним подключиться;) ).Потом уже мы начали ждать документацию, через несколько дней, я позвонил сотруднику paynet и объяснил что мы ждем и попросил его отправить документацию, он согласился но не отправил(;. Через неделю руководитель AsaxiyBooks снова связался с ними и создал группу в телеграме, и они скинули документацию, и бум! Увидев эту документацию понял что [документация гугла по андроиду](https://developer.android.com/) не так плохо написана ;) Как-то сам себе дал мотивацию и начал делать работу и сказал руководителю что сервис будет готов через день.

Когда я начал, я думал что работа с SOAP на PHP такая же легкая, как и на Java (хотя после написания сервиса тоже так и думал), но не совсем то было. Из-за не стоющих причин так много времени ушло на работу (4 дня), но мне кажется сейчас, что эту работу можно было выполнять за один день. Во первых, программисты которых к нам прикрепли, были тормознутые, они даже не знали о чем я спрашиваю (или притворялись чтобы не отвечать и не терять времени). Последные 2 дня мы тестировали мой сервис, они скинули программу для тестирование,которая выдает ошибку, а эту ошибку сами программисты не знают что означает (ох эти магические ошибки...). Они даже не сказали, в каком формате должна быть дата (тестирование в ручном режиме, за это они "типо" написали программу в комплекском тестировании), у меня примерно пол часа времени ушло перебирать разные форматы чтобы найти подходящую (дата была в не стандартном формате). В общем, минусов в программе было довольно много. Например, не понятные ошибки, не понятный интерфейс, разрешение доступа администратора, не работает если на компьютере нет JVM и тому подобные.

-->

В итоге через 2 дня, я сам нашёл ошибку перебирая, а также изменяя весь код в моем сервисе. Мы пишем систему на фреймворке Yii2, и когда я писал `\Yii::$app->response->format=\yii\web\Response::FORMAT_XML`, наша система возврашает ответ с заголовком `Content-Type: Application/xml`, а paynet требует заголовок `Content-type: text/xml` и кроме этого заголовка не будет работать ;) И так, два дня сидел за компьютером чтобы добавить строчку `Yii::$app->response->headers->add('Content-Type', 'text/xml');` 

## Заключение

Я написал этот пост чтобы успокоить свои нервы и не высказать «paynet» возмущения, и чтобы внутри души не хранить никакого гнева. Может этот пост был безполезным для вас, может я не объяснил,как я написал код для работы с SOAP, но, в конце хочу поделить с [репозиторией](https://github.com/xujamov/paynet-uz-php) в которой выложено всё очень понятным кодом, даже с комментариями ;). Если в будущем вам нужно будет написать сервис для Paynetа, и вам поданобится мой шаблон, буду рад!

**PS:** Я прошу извинения, за то что написал о сотрудниках Paynet, я был не прав, и за это я прошу прощения. Я был очень рад с вами сотрудничать, набрался много опыта. Желаю вам удачи в дальнейшей работе!

---