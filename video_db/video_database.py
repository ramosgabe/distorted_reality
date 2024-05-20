import sqlite3

conn = sqlite3.connect('videos.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY,
    url TEXT NOT NULL
)
''')

video_urls = [
    ("https://www.youtube.com/embed/vtkGtXtDlQA?si=ZRDP9jUog2IcgQi8",),
    ("https://www.youtube.com/embed/G9FGgwCQ22w?si=WWRsQo3l9pzENQzt",),
    ("https://www.youtube.com/embed/LZgeIReY04c?si=mJYHX6NnmABIT9dQ",)

]

cursor.executemany('INSERT INTO videos (url) VALUES (?)', video_urls)

conn.commit()
conn.close()

print("Database setup is complete and URLs inserted")