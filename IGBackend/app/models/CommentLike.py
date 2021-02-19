from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class CommentsLike(db.Model):
    __tablename__ = 'commentsLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    commentId = db.Column(db.Integer, db.ForeignKey('comment.id'), nullable=False)

    users = db.Relationship("User", back_populates="commentLikes")
    comments = db.Relationship("Comment", back_populates="commentLikes")