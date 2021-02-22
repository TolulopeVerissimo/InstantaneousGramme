from .db import db


class CommentsLike(db.Model):
    __tablename__ = 'commentsLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    commentId = db.Column(db.Integer, db.ForeignKey(
        'comment.id'), nullable=False)

    user = db.Relationship("User", back_populates="commentLikes")
    comment = db.Relationship("Comment", back_populates="commentLikes")
