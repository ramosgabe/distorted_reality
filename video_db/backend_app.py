from flask import Flask, jsonify, render_template
from flask_cors import CORS
import sqlite3
import random

app = Flask(__name__)
CORS(app)

target_pages = ["shuffle1.html", "shuffle2.html", "shuffle3.html"]
current_index = 0

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
    global current_index

    url = get_random_video_url()
    # Append autoplay and sound parameters to the URL
    url_with_params = f"{url}&autoplay=1&mute=0"
    target_page = target_pages[current_index]

    current_index = (current_index + 1) % len(target_pages)
    
    return jsonify({'url': url_with_params, 'page': target_page})

if __name__ == '__main__':
    app.run(debug=True)
