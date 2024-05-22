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
    ("https://www.youtube.com/embed/vtkGtXtDlQA?si=ZRDP9jUog2IcgQi8;controls=1&autoplay=1",),
    ("https://www.youtube.com/embed/G9FGgwCQ22w?si=WWRsQo3l9pzENQzt;controls=1&autoplay=1",),
    ("https://www.youtube.com/embed/LZgeIReY04c?si=mJYHX6NnmABIT9dQ;controls=1&autoplay=1",),
    ("https://yewtu.be/embed/Osqf4oIK0E8?t=7",),
    ("https://www.youtube.com/embed/nyem3gD6XN8?si=pIxGfL1OxiIoWN9p&amp;controls=0&autoplay=1",),
    ("https://yewtu.be/embed/24zhk_IqfbI?t=4",),
    ("https://yewtu.be/embed/_hI0qMtdfng?t=4",),
    ("https://www.youtube.com/embed/qX6NztnPU-4?si=HUajjICMA0EkCQuv&amp;controls=1&autoplay=1",),
    ("https://www.youtube.com/embed/d2WLAMurMzU?si=qgN5qQcqZcHgj0DX",),
    ("https://www.youtube.com/embed/eOvHZDGK-kY?si=49Ln3LXttR742UY7",),
    ("https://www.youtube.com/embed/JLmOkEEC9SQ?si=fFZLmwiQ10Z4-N2J",),
    ("https://www.youtube.com/embed/hqZoK1bq2hs?si=10NkafRYAtgLcPFo",),
    ("https://www.youtube.com/embed/3AbU_CnkBiE?si=waNX3_qepEQsd6PB",),
    ("https://www.youtube.com/embed/YDXOioU_OKM?si=uuo4AIsgO_Ojp-Vj",),
    ("https://www.youtube.com/embed/BpaRouocBes?si=wBvCQbE2IzudlYsU",),
    ("https://www.youtube.com/embed/unq_79-WoH4?si=k-yLoS6d1RtrJ2br",),
    ("https://www.youtube.com/embed/oo3qWms05_s?si=YuKu9Rde-RyC9K52",),
    ("https://www.youtube.com/embed/IVGCBkBX2nk?si=6FC23tITsDEfz4Iu",),
    ("https://www.youtube.com/embed/AfgL9Y1O1ko?si=SfhOwITL1u50eZQd",),
    ("https://www.youtube.com/embed/DrTac3iOH1I?si=i6vPqRwloNblBnNI",),
    ("https://www.youtube.com/embed/u08E7c-FRbU?si=U9QU3Si4fulGtZnK",)


]

cursor.executemany('INSERT INTO videos (url) VALUES (?)', video_urls)

conn.commit()
conn.close()

print("Database setup is complete and URLs inserted")