var N = 101

var qtAmount = Array.apply(null, {length: N}).map(Number.call, Number)


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

var ranNums = shuffle([0,1,2,3,4,5,6,7,8,9]);
var question = [
    'Antihypeintro',
    'Двуглавый орёл',
    'Стрип',
    'Дети',
    'Пати',
    'Варанаси',
    'Мальчик в Balenciaga',
    'Победоносцев',
    'Молодой герцен',
    'Grime Vietnam'
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
    'Перед нами текст песни, которая рассказывает о грайме и его исполнителях.'
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
    'В тексте также присутствуют отсылки к другим исполнителям и событиям в мире грайма.'
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
    'Песня содержит припевы и куплеты, которые описывают грайм и его особенности.'
];

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