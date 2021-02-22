from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50))
    private = db.Column(db.Boolean, nullable=False)
    imagePath = db.Column(db.String(100))
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="posts")
    comments = db.relationship("Comment", back_populates="post")
    postLikes = db.relationship("PostLike", back_populates="post")
