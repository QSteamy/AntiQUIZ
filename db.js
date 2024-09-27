var N = 30;

var qtAmount = Array.apply(null, {length: N}).map(Number.call, Number);


function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle(qtAmount);
var question = [
    '1. Antihypeintro',
    '2. Двуглавый орёл',
    '3. Стрип',
    '4. Дети',
    '5. Пати',
    '6. Варанаси',
    '7. Мальчик в Balenciaga',
    '8. Победоносцев',
    '9. Молодой Герцен',
    '10. Grime Vietnam',
    '11. Калимба',
    '12. Сель',
    '13. Ангел Утешения',
    '14. Мы работаем на Кремль',
    '15. Дикпик',
    '16. Нахапало',
    '17. Legends of Cringe',
    '18. Дискотека Овсянкин',
    '19. Нарцисс',
    '20. Jeep',
    '21. Окно Овертона',
    '22. Мельтешение жизни',
    '23. Все мои Ш',
    '24. Убили гендер',
    '25. На свидании с другой',
    '26. Флекс и флейм',
    '27. Подкрадули',
    '28. Жить в кайф',
    '29. Губы',
    '30. ГДР Music'
];

var crit1 = [
    'Перед нами текст песни, которая рассказывает о жизни и творчестве рэперов Славы КПСС и Замая.',
    'Перед нами текст песни, которая рассказывает о двух рэперах, Замае и Славе КПСС.',
    'В тексте упоминаются известные личности, такие как Слава КПСС, Замай и Глеб Жеглов.',
    'В тексте есть отсылки к Санкт-Петербургу и его Неве.',
    'Перед нами текст песни, которая рассказывает о жизни Славы КПСС и его группы Кисмэн.',
    'В тексте также упоминаются убийцы и знакомые автора.',
    'Мальчик гуляет по Москве, снимает фильмы и наслаждается весенним теплом.',
    'В тексте также упоминаются внутренние проблемы и борьба с ними.',
    'Песня содержит элементы БДСМ и элементы ОКР.',
    'Перед нами текст песни, которая рассказывает о грайме и его исполнителях.',
    'Перед нами текст песни, которая рассказывает о жизни и творчестве музыкантов.',
    'Перед нами текст песни, которая рассказывает о жизни и творчестве рэперов Замая и Славы КПСС.',
    'Главный герой не обращает внимания на слухи и мнение окружающих о девушке.',
    'В тексте также есть упоминания других известных личностей, таких как Саша Конь, Маш Милаш и Понасенков.',
    'В тексте песни представлены два куплета от Славы КПСС и Замая.',
    'Песня состоит из двух куплетов и двух припевов, в которых упоминаются разные персонажи и их эмоции.',
    'Песня содержит много рифм и панчей, связанных с троллингом и кринжем.',
    'В тексте упоминаются различные персонажи, такие как Замай, Слава КПСС и другие.',
    'В тексте песни есть отсылки к другим музыкантам, таким как Джизус, Бутусов, Цой и Немцов.',
    'Песня содержит много рифм и смешивает разные жанры, такие как рэп, хип-хоп и рок.',
    'Песня начинается с вступления Замая, который читает о своем интересе к различным темам и стилям.',
    'В тексте упоминаются друзья, любовь, воспоминания и различные аспекты жизни.',
    'В тексте также есть упоминания о грязюке, боевом хряке, поросятах Бэйб, простреле беруш, и других аспектах.',
    'В песне есть отсылки к Карен Шаинян, Карен Шахназарову, Петру Первому и другим историческим личностям.',
    'Песня содержит много отсылок к поп-культуре и стереотипам.',
    'Песня содержит элементы антихайпа, репа и романтики.',
    'Замай и Слава КПСС противопоставляют свои взгляды на жизнь и любовь.',
    'Перед нами текст песни, которая рассказывает о жизни и творчестве Славы КПСС и Замая.',
    'Автор песни, Слава КПСС, выражает свое разочарование и критику в адрес девушки.',
    'В тексте упоминаются Пушкин и Катя Лель, которые сравниваются с КНДР.'
];

var crit2 = [
    'В тексте много отсылок к другим исполнителям, событиям и явлениям.',
    'Песня начинается с интро, в котором они приветствуют друг друга и желают друг другу хорошего дня.',
    'В песне также присутствуют отсылки к GTA: Vice City и другим культурным феноменам.',
    'В песне также упоминаются разные персонажи, такие как Сталин и Снуп Догг.',
    'Слава КПСС и группа Кисмэн - группа, которая не будет крутиться по радио.',
    'В конце текста упоминаются знакомые сеттинги и костёр.',
    'Он ценит дружбу и человеческие отношения, но также интересуется стихами и идеями.',
    'В тексте также есть отсылка к игре <b>дурак</b> и гроссмейстеру О.И. Бендеру.',
    'Любовь - оружие, критика - не лучшее, что существует на планете.',
    'В тексте также присутствуют отсылки к другим исполнителям и событиям в мире грайма.',
    'В тексте также есть элементы философии и практики.',
    'Песня содержит много противоречий и абсурдных моментов, связанных с сексом и русским рэпом.',
    'В тексте песни упоминаются различные аспекты жизни девушки, включая ее прошлое и отношения с другими мужчинами.',
    'В тексте также есть критика против либералов и республиканцев.',
    'В песне также присутствует припев, который повторяется несколько раз.',
    'В тексте песни есть отсылки к наркотикам и диабету, а также к социальным сетям и диетическим напиткам.',
    'Песня представляет собой микстейп, состоящий из двух куплетов и припева.',
    'В тексте также упоминаются события, связанные с политикой и социальными проблемами.',
    'В песне также присутствуют элементы самоиронии и самовосхваления.',
    'Песня заканчивается призывом к геноциду и использованию синтезированного звука Моргенштерна.',
    'Затем вступает Слава КПСС, который также говорит о своем интересе к литературе и политике.',
    'Автор выражает свою благодарность и уважение к людям, которые помогли ему в жизни.',
    'В тексте есть упоминание о Хан Замай, который является старым добрым злым волком.',
    'В тексте также есть отсылки к музыке, таким как SODA LUV и Меладзе.',
    'В тексте есть критика и ирония, связанные с отношениями и изменами.',
    'В тексте песни есть отсылки к другим исполнителям, таким как Спайк Ли, Чиф Киф и Лил Дёрк.',
    'Замай выражает свою ненависть к Питеру и его городу, а также критикует музыку и общество.',
    'В тексте песни присутствует много отсылок к другим исполнителям и событиям в мире музыки.',
    'В тексте песни также присутствует второй исполнитель, Замай, который также выражает свое недовольство и критику.',
    'Замай и Слава КПСС являются братьями Диаз в шестиугольной клетке.'
];

var crit3 = [
    'Песня представляет собой смесь рэпа, бигбойз и иронии, и не подходит для выполнения задачи по выделению тезисов.',
    'В конце текста есть пожелание счастья и успехов одному из исполнителей.',
    'Текст песни содержит много нецензурной лексики и не подходит для пересказа в формате тезисов.',
    "В конце текста есть отсылка к блокбастеру <b>Дети-дебилы</b>.",
    'В тексте также есть упоминание о русском рэпе и его талантах.',
    'В тексте упоминаются Дон-Кихот, Ортега-и-Гассет и трамваи-тарантасы.',
    'В песне также присутствует куплет от Замая, который также является участником группы.',
    'Перед нами текст песни, которая рассказывает о тяжелой жизни и победе, которая только снится.',
    'Время лечит, время старит, время убивает.',
    'Песня содержит припевы и куплеты, которые описывают грайм и его особенности.',
    'В тексте есть отсылки к другим исполнителям и событиям.',
    'Замай хочет трахать всратых тёлок и не иметь денег, но также хочет жить в хуевом гетто и срать на русский рэп.',
    'В конце песни главный герой становится "пиздатым зятем" и упоминает, что он прописал всех батыров в квартире.',
    'В тексте есть упоминания о том, как Кремль платит, а Навальный нет, и о том, как Любовь Соболь тупая.',
    'В куплете Замая также присутствует дикпик, но с более пошлым содержанием.',
    'В конце песни звучит аутро, в котором автор говорит, что нахапал так много, что не видит глаз обоих героев.',
    'Песня имеет антихайповый характер и содержит много кринжовых шуток.',
    'Песня имеет несколько куплетов и припевов, которые описывают различные аспекты жизни и культуры.',
    'Автор песни - Слава КПСС, а также в песне присутствуют куплеты от Замая.',
    'В тексте также есть отсылки к событиям и людям, связанным с Россией и Хабаровском.',
    'Песня заканчивается припевом, в котором исполнители говорят о своем интересе к лайкам, политике и пространстве голых жоп.',
    'В конце песни автор выражает уважение к своим друзьям и призывает не жалеть его.',
    'В тексте песни есть упоминания города Х, Кубяка, химка, ацетон, татуха, как у Гуфа, и другие детали.',
    'В тексте также есть критика женщин, которые играют на синтах и используют образ мужчины-отца.',
    'В конце песни автор предупреждает о возможных последствиях своих действий.',
    'Песня также содержит элементы антихайпа и грабежа.',
    'Слава КПСС рассказывает о своей жизни и поэзии, а также о своих отношениях с девушкой.',
    'В целом, текст песни представляет собой набор стихов и рифм, которые отражают отношение к жизни и творчеству Славы КПСС и Замая.',
    'В конце песни, Слава КПСС и Замай выражают свое недовольство и критику, а также называют цену девушке - один рубль.',
    'В тексте есть отсылки к граффити на Берлинской стене и к пакету Яровой.'
];

/*---------------------------------Database---------------------------------*/

var qt0 = question[ranNums[0]];
var qt1 = question[ranNums[1]];
var qt2 = question[ranNums[2]];
var qt3 = question[ranNums[3]];
var qt4 = question[ranNums[4]];
var qt5 = question[ranNums[5]];
var qt6 = question[ranNums[6]];
var qt7 = question[ranNums[7]];
var qt8 = question[ranNums[8]];
var qt9 = question[ranNums[9]];
var qt10 = question[ranNums[10]];
var qt11 = question[ranNums[11]];
var qt12 = question[ranNums[12]];
var qt13 = question[ranNums[13]];
var qt14 = question[ranNums[14]];
var qt15 = question[ranNums[15]];
var qt16 = question[ranNums[16]];
var qt17 = question[ranNums[17]];
var qt18 = question[ranNums[18]];
var qt19 = question[ranNums[19]];
var qt20 = question[ranNums[20]];
var qt21 = question[ranNums[21]];
var qt22 = question[ranNums[22]];
var qt23 = question[ranNums[23]];
var qt24 = question[ranNums[24]];
var qt25 = question[ranNums[25]];
var qt26 = question[ranNums[26]];
var qt27 = question[ranNums[27]];
var qt28 = question[ranNums[28]];
var qt29 = question[ranNums[29]];

document.getElementById("question0").innerHTML = qt0;
document.getElementById("question1").innerHTML = qt1;
document.getElementById("question2").innerHTML = qt2;
document.getElementById("question3").innerHTML = qt3;
document.getElementById("question4").innerHTML = qt4;
document.getElementById("question5").innerHTML = qt5;
document.getElementById("question6").innerHTML = qt6;
document.getElementById("question7").innerHTML = qt7;
document.getElementById("question8").innerHTML = qt8;
document.getElementById("question9").innerHTML = qt9;
document.getElementById("question10").innerHTML = qt10;
document.getElementById("question11").innerHTML = qt11;
document.getElementById("question12").innerHTML = qt12;
document.getElementById("question13").innerHTML = qt13;
document.getElementById("question14").innerHTML = qt14;
document.getElementById("question15").innerHTML = qt15;
document.getElementById("question16").innerHTML = qt16;
document.getElementById("question17").innerHTML = qt17;
document.getElementById("question18").innerHTML = qt18;
document.getElementById("question19").innerHTML = qt19;
document.getElementById("question20").innerHTML = qt20;
document.getElementById("question21").innerHTML = qt21;
document.getElementById("question22").innerHTML = qt22;
document.getElementById("question23").innerHTML = qt23;
document.getElementById("question24").innerHTML = qt24;
document.getElementById("question25").innerHTML = qt25;
document.getElementById("question26").innerHTML = qt26;
document.getElementById("question27").innerHTML = qt27;
document.getElementById("question28").innerHTML = qt28;
document.getElementById("question29").innerHTML = qt29;


var cr01 = crit1[ranNums[0]];
var cr11 = crit1[ranNums[1]];
var cr21 = crit1[ranNums[2]];
var cr31 = crit1[ranNums[3]];
var cr41 = crit1[ranNums[4]];
var cr51 = crit1[ranNums[5]];
var cr61 = crit1[ranNums[6]];
var cr71 = crit1[ranNums[7]];
var cr81 = crit1[ranNums[8]];
var cr91 = crit1[ranNums[9]];
var cr101 = crit1[ranNums[10]];
var cr111 = crit1[ranNums[11]];
var cr121 = crit1[ranNums[12]];
var cr131 = crit1[ranNums[13]];
var cr141 = crit1[ranNums[14]];
var cr151 = crit1[ranNums[15]];
var cr161 = crit1[ranNums[16]];
var cr171 = crit1[ranNums[17]];
var cr181 = crit1[ranNums[18]];
var cr191 = crit1[ranNums[19]];
var cr201 = crit1[ranNums[20]];
var cr211 = crit1[ranNums[21]];
var cr221 = crit1[ranNums[22]];
var cr231 = crit1[ranNums[23]];
var cr241 = crit1[ranNums[24]];
var cr251 = crit1[ranNums[25]];
var cr261 = crit1[ranNums[26]];
var cr271 = crit1[ranNums[27]];
var cr281 = crit1[ranNums[28]];
var cr291 = crit1[ranNums[29]];

document.getElementById("crit01").innerHTML = cr01;
document.getElementById("crit11").innerHTML = cr11;
document.getElementById("crit21").innerHTML = cr21;
document.getElementById("crit31").innerHTML = cr31;
document.getElementById("crit41").innerHTML = cr41;
document.getElementById("crit51").innerHTML = cr51;
document.getElementById("crit61").innerHTML = cr61;
document.getElementById("crit71").innerHTML = cr71;
document.getElementById("crit81").innerHTML = cr81;
document.getElementById("crit91").innerHTML = cr91;
document.getElementById("crit101").innerHTML = cr101;
document.getElementById("crit111").innerHTML = cr111;
document.getElementById("crit121").innerHTML = cr121;
document.getElementById("crit131").innerHTML = cr131;
document.getElementById("crit141").innerHTML = cr141;
document.getElementById("crit151").innerHTML = cr151;
document.getElementById("crit161").innerHTML = cr161;
document.getElementById("crit171").innerHTML = cr171;
document.getElementById("crit181").innerHTML = cr181;
document.getElementById("crit191").innerHTML = cr191;
document.getElementById("crit201").innerHTML = cr201;
document.getElementById("crit211").innerHTML = cr211;
document.getElementById("crit221").innerHTML = cr221;
document.getElementById("crit231").innerHTML = cr231;
document.getElementById("crit241").innerHTML = cr241;
document.getElementById("crit251").innerHTML = cr251;
document.getElementById("crit261").innerHTML = cr261;
document.getElementById("crit271").innerHTML = cr271;
document.getElementById("crit281").innerHTML = cr281;
document.getElementById("crit291").innerHTML = cr291;

var cr02 = crit2[ranNums[0]];
var cr12 = crit2[ranNums[1]];
var cr22 = crit2[ranNums[2]];
var cr32 = crit2[ranNums[3]];
var cr42 = crit2[ranNums[4]];
var cr52 = crit2[ranNums[5]];
var cr62 = crit2[ranNums[6]];
var cr72 = crit2[ranNums[7]];
var cr82 = crit2[ranNums[8]];
var cr92 = crit2[ranNums[9]];
var cr102 = crit2[ranNums[10]];
var cr112 = crit2[ranNums[11]];
var cr122 = crit2[ranNums[12]];
var cr132 = crit2[ranNums[13]];
var cr142 = crit2[ranNums[14]];
var cr152 = crit2[ranNums[15]];
var cr162 = crit2[ranNums[16]];
var cr172 = crit2[ranNums[17]];
var cr182 = crit2[ranNums[18]];
var cr192 = crit2[ranNums[19]];
var cr202 = crit2[ranNums[20]];
var cr212 = crit2[ranNums[21]];
var cr222 = crit2[ranNums[22]];
var cr232 = crit2[ranNums[23]];
var cr242 = crit2[ranNums[24]];
var cr252 = crit2[ranNums[25]];
var cr262 = crit2[ranNums[26]];
var cr272 = crit2[ranNums[27]];
var cr282 = crit2[ranNums[28]];
var cr292 = crit2[ranNums[29]];

document.getElementById("crit02").innerHTML = cr02;
document.getElementById("crit12").innerHTML = cr12;
document.getElementById("crit22").innerHTML = cr22;
document.getElementById("crit32").innerHTML = cr32;
document.getElementById("crit42").innerHTML = cr42;
document.getElementById("crit52").innerHTML = cr52;
document.getElementById("crit62").innerHTML = cr62;
document.getElementById("crit72").innerHTML = cr72;
document.getElementById("crit82").innerHTML = cr82;
document.getElementById("crit92").innerHTML = cr92;
document.getElementById("crit102").innerHTML = cr102;
document.getElementById("crit112").innerHTML = cr112;
document.getElementById("crit122").innerHTML = cr122;
document.getElementById("crit132").innerHTML = cr132;
document.getElementById("crit142").innerHTML = cr142;
document.getElementById("crit152").innerHTML = cr152;
document.getElementById("crit162").innerHTML = cr162;
document.getElementById("crit172").innerHTML = cr172;
document.getElementById("crit182").innerHTML = cr182;
document.getElementById("crit192").innerHTML = cr192;
document.getElementById("crit202").innerHTML = cr202;
document.getElementById("crit212").innerHTML = cr212;
document.getElementById("crit222").innerHTML = cr222;
document.getElementById("crit232").innerHTML = cr232;
document.getElementById("crit242").innerHTML = cr242;
document.getElementById("crit252").innerHTML = cr252;
document.getElementById("crit262").innerHTML = cr262;
document.getElementById("crit272").innerHTML = cr272;
document.getElementById("crit282").innerHTML = cr282;
document.getElementById("crit292").innerHTML = cr292;

var cr03 = crit3[ranNums[0]];
var cr13 = crit3[ranNums[1]];
var cr23 = crit3[ranNums[2]];
var cr33 = crit3[ranNums[3]];
var cr43 = crit3[ranNums[4]];
var cr53 = crit3[ranNums[5]];
var cr63 = crit3[ranNums[6]];
var cr73 = crit3[ranNums[7]];
var cr83 = crit3[ranNums[8]];
var cr93 = crit3[ranNums[9]];
var cr103 = crit3[ranNums[10]];
var cr113 = crit3[ranNums[11]];
var cr123 = crit3[ranNums[12]];
var cr133 = crit3[ranNums[13]];
var cr143 = crit3[ranNums[14]];
var cr153 = crit3[ranNums[15]];
var cr163 = crit3[ranNums[16]];
var cr173 = crit3[ranNums[17]];
var cr183 = crit3[ranNums[18]];
var cr193 = crit3[ranNums[19]];
var cr203 = crit3[ranNums[20]];
var cr213 = crit3[ranNums[21]];
var cr223 = crit3[ranNums[22]];
var cr233 = crit3[ranNums[23]];
var cr243 = crit3[ranNums[24]];
var cr253 = crit3[ranNums[25]];
var cr263 = crit3[ranNums[26]];
var cr273 = crit3[ranNums[27]];
var cr283 = crit3[ranNums[28]];
var cr293 = crit3[ranNums[29]];

document.getElementById("crit03").innerHTML = cr03;
document.getElementById("crit13").innerHTML = cr13;
document.getElementById("crit23").innerHTML = cr23;
document.getElementById("crit33").innerHTML = cr33;
document.getElementById("crit43").innerHTML = cr43;
document.getElementById("crit53").innerHTML = cr53;
document.getElementById("crit63").innerHTML = cr63;
document.getElementById("crit73").innerHTML = cr73;
document.getElementById("crit83").innerHTML = cr83;
document.getElementById("crit93").innerHTML = cr93;
document.getElementById("crit103").innerHTML = cr103;
document.getElementById("crit113").innerHTML = cr113;
document.getElementById("crit123").innerHTML = cr123;
document.getElementById("crit133").innerHTML = cr133;
document.getElementById("crit143").innerHTML = cr143;
document.getElementById("crit153").innerHTML = cr153;
document.getElementById("crit163").innerHTML = cr163;
document.getElementById("crit173").innerHTML = cr173;
document.getElementById("crit183").innerHTML = cr183;
document.getElementById("crit193").innerHTML = cr193;
document.getElementById("crit203").innerHTML = cr203;
document.getElementById("crit213").innerHTML = cr213;
document.getElementById("crit223").innerHTML = cr223;
document.getElementById("crit233").innerHTML = cr233;
document.getElementById("crit243").innerHTML = cr243;
document.getElementById("crit253").innerHTML = cr253;
document.getElementById("crit263").innerHTML = cr263;
document.getElementById("crit273").innerHTML = cr273;
document.getElementById("crit283").innerHTML = cr283;
document.getElementById("crit293").innerHTML = cr293;