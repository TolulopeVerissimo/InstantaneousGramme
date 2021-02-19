from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class CommentsLikes(db.Model):
    __tablename__ = 'CommentsLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, foreign_key=True,unique=True,nullable=False)
    commentId = db.Column(db.Integer, foreign_key=True,unique=True, nullable=False)

