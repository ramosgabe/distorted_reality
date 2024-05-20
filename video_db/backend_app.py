from flask import Flask, jsonify, render_template
import sqlite3
import random

app = Flask(__name__)

def get_random_video_url():
    conn = sqlite3.connect('videos.db')
    cursor = conn.cursor()
    cursor.execute('SELECT url FROM videos')
    urls = cursor.fetchall()
    conn.close()
    return random.choice(urls)[0]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/shuffle')
def shuffle():
    url = get_random_video_url()
    # Append autoplay and sound parameters to the URL
    url_with_params = f"{url}?autoplay=1&mute=0"
    return jsonify({'url': url_with_params})

if __name__ == '__main__':
    app.run(debug=True)
