from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PostLikes(db.Model):
    __tablename__ = 'PostLikes'


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, foreign_key=True,unique=True,nullable=False)
    postId = db.Column(db.Integer, foreign_key=True,unique=True, nullable=False)