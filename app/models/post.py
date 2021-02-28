from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(2000))
    private = db.Column(db.Boolean, nullable=False)
    imagePath = db.Column(db.String(255))
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="posts")
    comments = db.relationship("Comment", back_populates="post")
    postLikes = db.relationship("PostLike", back_populates="post")

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    def to_dict(self):
        user = self.user.to_dict()
        username = user["username"]
        profilePicture = user["profilePicture"]

        likesUsers = [like.to_list() for like in self.postLikes]
        year = self.date_created.strftime('%Y')
        month = self.date_created.strftime('%B')
        day = self.date_created.strftime("%d")
        date = f'{month} {day} {year}'

        return {
            'id': self.id,
            'description': self.description,
            'private': self.private,
            'imagePath': self.imagePath,
            'userId': self.userId,
            'username': username,
            'profilePicture': profilePicture,
            'likesUsers': likesUsers,
            'date_created': date
            # 'comments': self.comments,
        }
