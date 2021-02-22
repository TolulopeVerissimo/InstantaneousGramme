from .db import db


class CommentLike(db.Model):
    __tablename__ = 'commentLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    commentId = db.Column(db.Integer, db.ForeignKey(
        'comments.id'), nullable=False)


    user = db.relationship("User", back_populates="commentLikes")
    comment = db.relationship("Comment", back_populates="commentLikes")
    user = db.Relationship("User", back_populates="commentLike")
    comment = db.Relationship("Comment", back_populates="commentLike")

