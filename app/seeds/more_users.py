from app.models import db, User
from werkzeug.security import generate_password_hash
from faker import Faker
from pexels_api import API
import os

fake = Faker()
api = API(os.environ.get('PEXEL_API_KEY'))

api.search('selfie', page=1, results_per_page=20)
photos = api.get_entries()


def seed_more_users():

    users = [User(
        name=fake.name(),
        email=fake.email(),
        username=fake.user_name(),
        hashed_password=generate_password_hash('password'),
        biography=fake.sentence(),
        profilePicture=photos[i].url) for i in range(20)]

    for user in users:
        db.session.add(user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_more_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()


# name='Demo',
#         email='demo@aa.io',
#         phoneNumber=5551234567,
#         hashed_password=generate_password_hash('password'),
#         username='demoMcdemoson',
#         biography="A long time demouser, first time insta user",
#         profilePicture=
