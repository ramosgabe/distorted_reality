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
    ("https://www.youtube.com/embed/vtkGtXtDlQA?si=ZRDP9jUog2IcgQi8;",),
    ("https://www.youtube.com/embed/G9FGgwCQ22w?si=WWRsQo3l9pzENQzt;",),
    ("https://www.youtube.com/embed/LZgeIReY04c?si=mJYHX6NnmABIT9dQ;",),
    ("https://yewtu.be/embed/Osqf4oIK0E8?t=7",),
    ("https://www.youtube.com/embed/nyem3gD6XN8?si=pIxGfL1OxiIoWN9p;",),
    ("https://yewtu.be/embed/24zhk_IqfbI?t=4",),
    ("https://yewtu.be/embed/_hI0qMtdfng?t=4",),
    ("https://www.youtube.com/embed/qX6NztnPU-4?si=HUajjICMA0EkCQuv&amp",),
    ("https://www.youtube.com/embed/d2WLAMurMzU?si=qgN5qQcqZcHgj0DX",),
    ("https://www.youtube.com/embed/eOvHZDGK-kY?si=49Ln3LXttR742UY7",),
    ("https://www.youtube.com/embed/JLmOkEEC9SQ?si=fFZLmwiQ10Z4-N2J",),
    ("https://www.youtube.com/embed/hqZoK1bq2hs?si=10NkafRYAtgLcPFo",),
    ("https://www.youtube.com/embed/3AbU_CnkBiE?si=waNX3_qepEQsd6PB",),
    ("https://www.youtube.com/embed/YDXOioU_OKM?si=uuo4AIsgO_Ojp-Vj",),
    ("https://www.youtube.com/embed/oo3qWms05_s?si=YuKu9Rde-RyC9K52",),
    ("https://www.youtube.com/embed/IVGCBkBX2nk?si=6FC23tITsDEfz4Iu",),
    ("https://www.youtube.com/embed/AfgL9Y1O1ko?si=SfhOwITL1u50eZQd",),
    ("https://www.youtube.com/embed/u08E7c-FRbU?si=U9QU3Si4fulGtZnK",)


]

cursor.executemany('INSERT INTO videos (url) VALUES (?)', video_urls)

conn.commit()
conn.close()

print("Database setup is complete and URLs inserted")