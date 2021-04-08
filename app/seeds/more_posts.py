from app.models import db, Post
from random import randint
from faker import Faker
from pexels_api import API
import os

fake = Faker()
api = API(os.environ.get('PEXEL_API_KEY'))

api.search('food', page=1, results_per_page=80)
photos = api.get_entries()


def seed_more_posts():
    posts = [Post(
        description=fake.sentence(),
        private=False,
        imagePath=photos[i].large2x,
        userId=randint(1, 15)) for i in range(80)]

    for post in posts:
        db.session.add(post)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_more_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
