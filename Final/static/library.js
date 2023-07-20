function removeSong(songName) {
    console.log("Removing song: " + songName);
    $.ajax({
        url: "/delete_song",
        method: "POST",
        data: { name: songName },
        success: function (data) {
            if (data.success) {
                location.reload();
            }
        }
    });
}
