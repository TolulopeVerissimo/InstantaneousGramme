from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(
        name='Demo',
        email='demo@aa.io',
        phoneNumber=5551234567,
        hashed_password=generate_password_hash('password'),
        username='demoMcdemoson',
        biography="A long time demouser, first time insta user",
        profilePicture='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80',
    )

    gen = User(
        name='Gen',
        email='gen@aa.io',
        hashed_password=generate_password_hash('password'),
        phoneNumber=5551234567,
        username='genagain',
        biography='Hilarious guy, getting by, teaching at a/A',
        profilePicture='https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80',
    )

    ed = User(
        name='Ed',
        email='ed@aa.io',
        hashed_password=generate_password_hash('password'),
        username='edagain',
        phoneNumber=5551234567,
        biography='Teaching code/growing plants',
        profilePicture='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    )

    db.session.add(demo)
    db.session.add(gen)
    db.session.add(ed)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
