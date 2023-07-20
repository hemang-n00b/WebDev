from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
import sqlite3
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def index():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT song_name, song_length, artist_name, image_url FROM songs")
    songs = c.fetchall()
    conn.close()
    return render_template('library.html', songs=songs)

@app.route('/Final/<path:filename>')
def serve_file(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'Final'), filename)

@app.route('/submit_data', methods=['POST'])
@cross_origin(origin='*')
def submit_data():
    song_name = request.json['song_name']
    artist = request.json['artist_name']
    length = request.json['song_length']
    image = request.json['image_url']
    print(song_name, artist, length, image)
    
    conn=sqlite3.connect('database.db')
    c=conn.cursor()

    c.execute('CREATE TABLE IF NOT EXISTS songs(song_name TEXT PRIMARY KEY, song_length TEXT , artist_name TEXT  ,image_url TEXT)')
    query='SELECT EXISTS(SELECT * FROM songs WHERE song_name=?) LIMIT 1'
    if c.execute(query, (song_name,)).fetchone()[0]:
        conn.close()

        response = jsonify({'code': '2'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    c.execute('INSERT INTO songs (song_name ,artist_name ,song_length ,image_url) VALUES (?,?,?,?)', (song_name, artist, length, image))

    conn.commit()
    conn.close()

    response = jsonify({'code': '1'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/delete_song', methods=['POST'])
def delete_song():
    # get the song ID from the request parameters
    song_name = request.form.get("name")

    # delete the song with the given ID from the database
    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("DELETE FROM songs WHERE song_name = ?", (song_name,))
    conn.commit()
    conn.close()

    # return a JSON response with a "success" property set to True
    return jsonify(success=True)

if __name__=="__main__":
    if not os.path.exists('database.db'):
        open('database.db','w').close()
    app.run(debug=True)


