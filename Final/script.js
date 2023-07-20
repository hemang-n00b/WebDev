window.addEventListener('load', function () {
    var navbar = document.querySelector('nav.navbar');
    var libraryLink = navbar.querySelector('a[href="#"]');
    libraryLink.setAttribute('href', 'http://127.0.0.1:5000/');
});

const hoverElements = document.querySelectorAll('.navbar a, .menulink a')

hoverElements.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundImage = 'repeating-linear-gradient(45deg, var(--echo-pink), var(--echo-pink) 50px, var(--echo-blue) 100px, var(--echo-blue) 200px)';
        link.style.backgroundClip = 'text';
        link.style.color = 'transparent';
        link.style.transition = 'all 0.3s ease-in-out';
        link.style.backgroundPosition = '100% 100%';
    });

    link.addEventListener('mouseleave', () => {
        link.style.backgroundImage = '';
        link.style.backgroundClip = '';
        link.style.color = '';
        link.style.transition = '';
        link.style.backgroundPosition = '';
    });
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

const searchInput = document.getElementById("search-bar-input");
if (searchInput) {
    const searchText = "Search";
    let index = 0;
    function showSearchText() {
        searchInput.setAttribute("placeholder", searchText.slice(0, index));
        index++;
        if (index > (searchText.length + 1)) {
            index = 0;
            sleep(2000);
        }
    }
}
else {
    console.log("Search bar not found");
}



setInterval(showSearchText, 300);

const form = document.getElementById('search-form');

if (form) {
    const input = form.querySelector('#search-bar-input');
    const searchBtn = form.querySelector('#search-button');
    const explicitDropdown = form.querySelector('#explicit-dropdown');
    const durationInput = form.querySelector('#max-duration-input');
    const results = document.querySelector('.search-results');
    const noResults = document.querySelector('.no-results');

    let previousAudio = null;
    let currentAudio = null;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchTerm = input.value.trim();
        const reqDuration = durationInput.value.trim();
        const explicit = explicitDropdown.value;
        results.innerHTML = "";
        sleep(1000);
        console.log("Search: " + searchTerm);
        console.log("Duration: " + reqDuration);
        console.log("Duration empty? " + (reqDuration == ""));
        console.log("Explicit results? " + explicit);
        if (!searchTerm) return;

        const encodedSearchTerm = encodeURIComponent(searchTerm);
        var url = `https://itunes.apple.com/search?term=${encodedSearchTerm}&entity=song&limit=200`;
        var count_for_ten_tracks = 0;

        console.log(url);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                results.innerHTML = "";
                if (data.resultCount === 0) {
                    noResults.innerHTML = "<p id=\"no-result-found\">No results found</p>";
                } else {
                    data.results.forEach((result) => {
                        if (count_for_ten_tracks < 10) {
                            if (explicit == "Yes" && result.trackExplicitness == "explicit") {
                                if (reqDuration != "" && result.trackTimeMillis < (reqDuration * 60000)) {
                                    console.log("Explicit, with duration");
                                    // console.log("Track count = " + count_for_ten_tracks);
                                    const { trackName, artistName, artworkUrl100, previewUrl } = result;
                                    const item = `
                                    <div id="search-result">
                                    <img src="${artworkUrl100}" alt="Album Artwork" />
                                    <h3>${trackName}</h3>
                                    <p>${artistName}</p>
                                    <audio src="${previewUrl}" controls preload = "auto"></audio>
                                    </div>
                                    `;
                                    results.insertAdjacentHTML("beforeend", item);
                                }
                                if (reqDuration == "") {
                                    console.log("Explicit, no duration");
                                    const { trackName, artistName, artworkUrl100, previewUrl } = result;
                                    const item = `
                                    <div id="search-result">
                                    <img src="${artworkUrl100}" alt="Album Artwork" />
                                    <h3>${trackName}</h3>
                                    <p>${artistName}</p>
                                    <audio src="${previewUrl}" controls preload = "auto"></audio>
                                    </div>
                                    `;
                                    results.insertAdjacentHTML("beforeend", item);
                                }
                                count_for_ten_tracks += 1;
                            }

                            if (explicit == "No" && result.trackExplicitness == "notExplicit") {
                                if (reqDuration != "" && result.trackTimeMillis < (reqDuration * 60000)) {
                                    console.log("Not explicit, with duration");
                                    // console.log("Track count = " + count_for_ten_tracks);
                                    const { trackName, artistName, artworkUrl100, previewUrl } = result;
                                    const item = `
                                    <div id="search-result">
                                    <img src="${artworkUrl100}" alt="Album Artwork" />
                                    <h3>${trackName}</h3>
                                    <p>${artistName}</p>
                                    <audio src="${previewUrl}" controls preload = "auto"></audio>
                                    </div>
                                    `;
                                    results.insertAdjacentHTML("beforeend", item);
                                }
                                if (reqDuration == "") {
                                    console.log("Not explicit, no duration");
                                    const { trackName, artistName, artworkUrl100, previewUrl } = result;
                                    const item = `
                                    <div id="search-result">
                                    <img src="${artworkUrl100}" alt="Album Artwork" />
                                    <h3>${trackName}</h3>
                                    <p>${artistName}</p>
                                    <audio src="${previewUrl}" controls preload = "auto"></audio>
                                    </div>
                                    `;
                                    results.insertAdjacentHTML("beforeend", item);
                                }
                                count_for_ten_tracks += 1;
                            }

                            if (explicit == "All") {
                                if (reqDuration != "" && result.trackTimeMillis < (reqDuration * 60000)) {
                                    console.log("All, with duration");
                                    const { trackName, artistName, artworkUrl100, previewUrl } = result;
                                    const item = `
                                    <div id="search-result">
                                    <img src="${artworkUrl100}" alt="Album Artwork" />
                                    <h3>${trackName}</h3>
                                    <p>${artistName}</p>
                                    <audio src="${previewUrl}" controls preload = "auto"></audio>
                                    </div>
                                    `;
                                    results.insertAdjacentHTML("beforeend", item);
                                }
                                if (reqDuration == "") {
                                    console.log("All, no duration");
                                    const { trackName, artistName, artworkUrl100, previewUrl } = result;
                                    const item = `
                                    <div id="search-result">
                                    <img src="${artworkUrl100}" alt="Album Artwork" />
                                    <h3>${trackName}</h3>
                                    <p>${artistName}</p>
                                    <audio src="${previewUrl}" controls preload = "auto"></audio>
                                    </div>
                                    `;
                                    results.insertAdjacentHTML("beforeend", item);
                                }
                                count_for_ten_tracks += 1;
                            }
                        }
                    });
                    if (results.innerHTML == "") {
                        noResults.innerHTML = "<p id=\"no-result-found\">No results found!</p>";
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                // noResults.innerHTML = "<p id=\"no-result-found\">An error occurred</p>";
            });

    });
}
else {
    console.log("No search form");
}

// Send request to save to playlist
async function request(name, length) {
    var artistName
    if (document.getElementsByClassName("album-artist-name-short")[0] != null) {
        artistNameElement = document.getElementsByClassName("album-artist-name-short");
        var artistName = "";
        for (let i = 0; i < artistNameElement.length; i++) {
            artistName += artistNameElement[i].innerHTML;
            console.log(artistName);
        }
    }
    else if (document.getElementsByClassName("album-artist-name-long")[0] != null) {
        artistName = document.getElementsByClassName("album-artist-name-long")[0].innerHTML;
    }
    else if (document.getElementsByClassName("album-artist-name-very-short")[0] != null) {
        artistName = document.getElementsByClassName("album-artist-name-very-short")[0].innerHTML;
    }
    else if (document.getElementsByClassName("album-artist-name-super-short")[0] != null) {
        artistName = document.getElementsByClassName("album-artist-name-super-short")[0].innerHTML;
    }
    else if (document.getElementsByClassName("album-artist-name")[0] != null) {
        artistName = document.getElementsByClassName("album-artist-name")[0].innerHTML;
    }

    var image_url = document.getElementsByClassName("album-art")[0].src;

    const data = { song_name: name, artist_name: artistName, image_url: image_url, song_length: length };
    console.log(JSON.stringify(data));

    try {
        const response = await fetch("http://127.0.0.1:5000/submit_data", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        });
        console.log(response);
        const responseData = await response.json();
        if (responseData['code'] == '1') {
            console.log("Data sent successfully");
        }
        else if (responseData['code'] == '2') {
            console.log("Song already exists in database!");
        }
    }
    catch (error) {
        console.log(error);
    };
}
