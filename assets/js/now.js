const username = "vagozino";

function setNowPlaying() {

    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=1f633977acf0e2d0630ec11dbc350d3e&format=json`)
        .then(response => response.json())
        .then(data => {
            const track = data.recenttracks.track[0];

            if (track['@attr'] == undefined || track['@attr'].nowplaying !== 'true') {
                document.getElementById('current-track').innerHTML = "Nothing.";
                return;
            }
            
            const artist = track.artist['#text'];
            const name = track.name;
            const url = track.url; 
            
            document.getElementById('current-track').innerHTML = `<a href="${url}">${artist} - ${name}</a>`;
            
            if (track.image && track.image[2]['#text']) {
                const image = track.image[2]['#text'];
                document.getElementById('current-track').innerHTML = `<a href="${url}"><img src="${image}" alt="${artist} - ${name}"></a>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
    });
}

function setNowDoing() {

    fetch('https://raw.githubusercontent.com/vagos/_now/main/now')
        .then(response => response.text())
        .then(data => {
            document.getElementById('current-task').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
    });

}

setNowPlaying();
setNowDoing();
