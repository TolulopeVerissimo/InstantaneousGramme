from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(265), nullable=False)
    phoneNumber = db.Column(db.Integer,nullable=False) #is db.Numeric a thing?
    username = db.Column(db.String(30), unique=True, nullable=False)
    biography = db.Column(db.String(200))
