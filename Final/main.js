
let container = document.getElementsByClassName("album-container")
let image = container[0].getElementsByClassName("album-art")[0].src
// console.log(image)
// console.log(container[0])
// console.log(container[0].classList)
// // console.log(container)

// let artist_name=container[0].getElementsByClassName("album-artist-name-short")[0].innerHTML
// // console.log(artist_name)
var artist_name;
if (document.querySelector(".album-artist-name-short") != null) {
    artist_name = document.getElementsByClassName("album-artist-name-short")[0].innerHTML
    // console.log(artist_name)


}
else if (document.querySelector(".album-artist-name-long") != null) {
    artist_name = document.getElementsByClassName("album-artist-name-long")[0].innerHTML
    // console.log(artist_name)


}
else if (document.querySelector(".album-artist-name-very-short") != null) {
    artist_name = document.getElementsByClassName("album-artist-name-very-short")[0].innerHTML
    // console.log(artist_name)


}
else if (document.querySelector(".album-artist-name-super-short") != null) {
    artist_name = document.getElementsByClassName("album-artist-name-very-short")[0].innerHTML
    // console.log(artist_name)

}
else if (document.querySelector(".album-artist-name") != null) {
    artist_name = document.getElementsByClassName("album-artist-name")[0].innerHTML
    // console.log(artist_name)

}
// console.log(artist_name)
let table = document.getElementsByClassName("songs-table")[0]
let rows = table.getElementsByTagName('tr')
// console.log(rows)
let footer = document.getElementById("footery")


for (let i = 1; i < rows.length; i++) {
    let playbutton = rows[i].getElementsByClassName("play-button")[0].getElementsByTagName("path")
    // console.log(playbutton)
    playbutton[0].addEventListener("click", function () {

        let name_song = rows[i].getElementsByClassName("song-title")[0].innerHTML
        // console.log(name_song)
        let time_song = rows[i].getElementsByClassName("song-length")[0].innerHTML
        // console.log(time_song)
        // // console.log(footer.getElementById("music-icon").img.src)
        let image_change = document.getElementById("extract")
        // console.log(image_change)
        image_change.src = image
        let song_change_name = document.getElementById("song_change_name")
        song_change_name.innerHTML = name_song + "&nbsp;&nbsp;"
        let song_change_artist = document.getElementById("music-player-title-artist")
        song_change_artist.innerHTML = artist_name
        let song_change_time = document.getElementById("end-time")
        song_change_time.innerHTML = time_song
        // image_change.attr("src",image)
        footer.classList.remove("footer");
        footer.classList.add("footer-1");

    });
}