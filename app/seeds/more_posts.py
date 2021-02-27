from app.models import db, Post
from random import randint
# Can


def seed_more_posts():
    posts = [Post(
        description="I am a Post",
        private=False,
        imagePath="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        userId=randint(1, 3)) for i in range(30)]

    for post in posts:
        db.session.add(post)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_more_posts():
    db.session.execute('TRUNCATE posts CASCADE;')
    db.session.commit()
