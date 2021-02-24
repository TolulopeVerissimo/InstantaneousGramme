from app.models import db, PostLike


def seed_postLikes():

    first = PostLike(
        userId = 1,
        postId = 1
    )
    second = PostLike(
        userId = 1,
        postId = 2
    )
    third = PostLike(
        userId = 3,
        postId = 1
    )
    fourth = PostLike(
        userId = 1,
        postId = 2
    )
    fifth = PostLike(
        userId = 2,
        postId = 2
    )
    sixth = PostLike(
        userId = 1,
        postId = 1
    )    
    seventh = PostLike(
        userId = 1,
        postId = 3
    )                   
    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(sixth)
    db.session.add(seventh)               
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_postLikes():
    db.session.execute('TRUNCATE postLikes;')
    db.session.commit()
