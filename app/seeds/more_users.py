from app.models import db, User
from random import randint
from faker import Faker
import os
import {createClient} from 'pexels'

fake = Faker()

const client = createClient(os.environ.get('PEXEL_API_KEY'))
const query = 'Nature'

client.photos.search({query, per_page: 1}).then(photos= > {...})


def seed_more_users():

    selfies = []
    const images = await fetch()

    users = [User(
        name=fake.name(),
        email=fake.email(),
        username=fake.user_name()
        phoneNumber=fake.phoneNumber(),
        hashed_password=generate_password_hash('password'),
        biography=fake.sentence
        imagePath=,
        userId=randint(1, 3)) for i in range(20)]

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
