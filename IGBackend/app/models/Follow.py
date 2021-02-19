from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    followedUserId = db.Column(
        db.Integer, foreign_key=True, unique=True, nullable=False)
    followerId = db.Column(db.Integer, foreign_key=True,
                           unique=True, nullable=False)
