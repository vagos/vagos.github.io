const username = "vagozino";

function makeNowElementVisible() {
    let whatNowElement = document.getElementById('whatnow');
    let nowElement = document.getElementById('now');
    nowElement.style.display = 'block';
    whatNowElement.style.display = 'block';
}

function setNowPlaying() {

    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=1f633977acf0e2d0630ec11dbc350d3e&format=json`)
        .then(response => response.json())
        .then(data => {
            const track = data.recenttracks.track[0];

            if (track['@attr'] == undefined || track['@attr'].nowplaying !== 'true') {
                return;
            }
            makeNowElementVisible();

            const artist = track.artist['#text'];
            const name = track.name;
            const url = track.url;

            let currentTrack = document.getElementById('current-track');
            currentTrack.innerHTML = `Listening to: <a href="${url}">${artist} - ${name}</a>`;
            currentTrack.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function setNowDoing() {

    fetch('https://raw.githubusercontent.com/vagos/_now/main/now')
        .then(response => response.text())
        .then(data => {
            if (data.trim().length === 0) {
                return;
            }
            makeNowElementVisible();
            let currentTask = document.getElementById('current-task');
            currentTask.innerText = data;
            currentTask.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });

}

setNowPlaying();
setNowDoing();
