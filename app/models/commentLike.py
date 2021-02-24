from .db import db


class CommentLike(db.Model):
    __tablename__ = 'commentLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    commentId = db.Column(db.Integer, db.ForeignKey(
        'comments.id'), nullable=False)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(),onupdate=db.func.current_timestamp())

    user = db.relationship("User", back_populates="commentLikes")
    comment = db.relationship("Comment", back_populates="commentLikes")
