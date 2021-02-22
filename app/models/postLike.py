from .db import db

class PostLike(db.Model):
    __tablename__ = 'postLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)

    user = db.Relationship("User", back_populates="postLike")
    post = db.Relationship("Post", back_populates="postLike")
