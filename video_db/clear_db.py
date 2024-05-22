import sqlite3

def clear_video_database():
    conn = sqlite3.connect('videos.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM videos')
    conn.commit()
    conn.close()
    print("Database cleared.")

if __name__ == '__main__':
    clear_video_database()
