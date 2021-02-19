from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50))
    private = db.Column(db.Boolean, nullable=False)
    imagePath = db.Column(db.String(100))
    userId = db.Column(db.Integer, unique=True, nullable=False, unique=True)
