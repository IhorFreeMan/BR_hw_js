var playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];

// Знайти елемент, куди будемо додавати список
const container = document.getElementById('playlist-container');


playList.forEach(item => {

    const listItem = document.createElement('li');

    // Додати текст у форматі "Автор: Пісня"
    listItem.textContent = `${item.author}: "${item.song}"`;

    // Додати елемент <li> до контейнера <ol>
    container.appendChild(listItem);
});