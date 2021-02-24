from app.models import db, CommentLike


def seed_commentLikes():

    first = CommentLike(
        userId = 1,
        commentId = 1
    )
    second = CommentLike(
        userId = 1,
        commentId = 2
    )
    third = CommentLike(
        userId = 3,
        commentId = 1
    )
    fourth = CommentLike(
        userId = 1,
        commentId = 2
    )
    fifth = CommentLike(
        userId = 2,
        commentId = 2
    )
    sixth = CommentLike(
        userId = 1,
        commentId = 1
    )    
    seventh = CommentLike(
        userId = 1,
        commentId = 3
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
def undo_commentLikes():
    db.session.execute('TRUNCATE commentLikes;')
    db.session.commit()
