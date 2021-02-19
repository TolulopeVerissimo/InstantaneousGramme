from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(265), nullable=False)
    phoneNumber = db.Column(db.Integer, nullable=False)
    username = db.Column(db.String(30), unique=True, nullable=False)
    biography = db.Column(db.String(200))
    # will need to adjust to skeleton
    hashedPassword = db.Column(db.String(60), nullable=False)

    posts = db.relationship("Post", back_populates="users")
    follows = db.relationship("Follow", back_populates="users")
    comments = db.relationship("Comment", back_populates="users")
