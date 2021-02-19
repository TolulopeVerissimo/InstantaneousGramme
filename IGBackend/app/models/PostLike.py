from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class PostLike(db.Model):
    __tablename__ = 'postLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, foreign_key=True,
                       unique=True, nullable=False)
    postId = db.Column(db.Integer, foreign_key=True,
                       unique=True, nullable=False)
