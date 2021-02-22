from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    content = db.Column(db.String(255), nullable=False)

    user = db.relationship("User", back_populates="comment")
    post = db.relationship("Post", back_populates="comment")
    commentLike = db.relationship("CommentLike", back_populates="comment")
