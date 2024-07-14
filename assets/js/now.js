const username = "vagozino";

function setNowPlaying() {

    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=1f633977acf0e2d0630ec11dbc350d3e&format=json`)
        .then(response => response.json())
        .then(data => {
            const track = data.recenttracks.track[0];

            if (track['@attr'] == undefined || track['@attr'].nowplaying !== 'true') {
                return;
            }

            const artist = track.artist['#text'];
            const name = track.name;
            const url = track.url;

            document.getElementById('current-track').innerHTML = `Listening to: <a href="${url}">${artist} - ${name}</a>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function setNowDoing() {

    fetch('https://raw.githubusercontent.com/vagos/_now/main/now')
        .then(response => response.text())
        .then(data => {
            let nowElement = document.getElementById('whatnow');
            if (data.length == 0) {
                nowElement.style.display = 'none';
                return;
            }
            nowElement.style.display = 'block';
            document.getElementById('current-task').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });

}

function setSnippet() {

    function rnd(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    // Modified snippet from the "The sweetest bread" tale
    const text = "From now on, work hard and your appetite will never again be a problem."

    let snippet = text.slice(0, rnd(10, text.length)).trim();

    const errorMessages = [
        "Segmentation fault (core dumped)",
        "Go meet someone",
        "Error 505",
        "Internal compiler error",
        "Connection lost"
    ]
    const chars = "&^%$*"
    const errorMessage = errorMessages[rnd(0, errorMessages.length - 1)];
    let errorChars = ['.', '.'].map((_) => chars.charAt(rnd(0, chars.length - 1))).join('');

    snippet = `${snippet}${errorChars} [${errorMessage}]`

    const snippetElement = document.getElementById('snippet');
    snippetElement.innerText = snippet;
}

setSnippet();

setNowPlaying();
setNowDoing();
