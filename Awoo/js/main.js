//vars
let japaneseLyrics = document.getElementById('japanese');
let romanjiLyrics = document.getElementById('romanji');
let englishLyrics = document.getElementById('english');

let japaneseBtn = document.getElementById('kanji-btn');
let romanjiBtn = document.getElementById('romanji-btn');
let englishBtn = document.getElementById('english-btn');

let meow = document.getElementById('meow');

//Event Listeners
japaneseBtn.addEventListener('click', setToJapanese);
romanjiBtn.addEventListener('click', setToRomanji);
englishBtn.addEventListener('click', setToEnglish);

japaneseLyrics.style.display = 'block';
japaneseBtn.className = 'lang-butt active-button';

function setToJapanese() {
    japaneseLyrics.style.display = 'block';
    romanjiLyrics.style.display = 'none';
    englishLyrics.style.display = 'none';

    japaneseBtn.className = 'lang-butt active-button';
    romanjiBtn.className = 'lang-butt';
    englishBtn.className = 'lang-butt';

}

function setToRomanji() {
    romanjiLyrics.style.display = 'block';
    japaneseLyrics.style.display = 'none';
    englishLyrics.style.display = 'none';

    romanjiBtn.className = 'lang-butt active-button';
    japaneseBtn.className = 'lang-butt';
    englishBtn.className = 'lang-butt';
}

function setToEnglish() {
    englishLyrics.style.display = 'block';
    japaneseLyrics.style.display = 'none';
    romanjiLyrics.style.display = 'none';

    englishBtn.className = 'lang-butt active-button';
    japaneseBtn.className = 'lang-butt';
    romanjiBtn.className = 'lang-butt';
}


