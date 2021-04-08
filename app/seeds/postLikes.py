from app.models import db, PostLike
from random import randint


def randomUserSet():
    userSet = {2}

    for i in range(10):
        userSet.add(randint(1, 15))
    return userSet


def seed_postLikes():

    likes = []
    for i in range(80):
        users = randomUserSet()
        for user in users:
            likes.append(PostLike(userId=user, postId=(i+1)))

    for like in likes:
        db.session.add(like)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_postLikes():
    db.session.execute('TRUNCATE "postLikes" RESTART IDENTITY;')
    db.session.commit()
