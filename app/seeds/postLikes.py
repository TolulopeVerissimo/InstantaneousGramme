from app.models import db, PostLike

# for(let i=0
#     i < users.length
#     i++){
#     let postLikes = []
#     for(let j=0
#         i < posts.length
#         i++){
#         let u = user[i]
#         let p = post[i+1] // Just add one? How to create more randomness to it?
#         let like = PostLike({
#             userId=u,
#             postId=p
#         })
#         postLikes.push(like)
#     }
#     db.session.commit()
# }


def seed_postLikes():

    likes = [PostLike(
        userId=i,
        postId=i+1,
    ) for i in range(80)]

    for like in likes:
        db.session.add(post)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_postLikes():
    db.session.execute('TRUNCATE postLikes;')
    db.session.commit()
