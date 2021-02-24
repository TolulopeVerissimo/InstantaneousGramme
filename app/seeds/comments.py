from app.models import db, Comment


def seed_comments():

    first = Comment(
        userId = 1,
        postId = 1, 
        content = 'Wow that is a nice photo'
    )
    second = Comment(
        userId = 2,
        postId = 1, 
        content = 'Very cool'
    )
    third = Comment(
        userId = 3,
        postId = 1, 
        content = 'Awesome'
    )
    fourth = Comment(
        userId = 3,
        postId = 2, 
        content = 'You go!'
    )
    fifth = Comment(
        userId = 3,
        postId = 2, 
        content = 'Cool!'
    )    
    sixth = Comment(
        userId = 3,
        postId = 1, 
        content = 'awesome'
    )  
    seventh = Comment(
        userId = 2,
        postId = 1, 
        content = 'radical'
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
def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()
