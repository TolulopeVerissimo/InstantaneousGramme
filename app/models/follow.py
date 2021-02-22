from flask_sqlalchemy import SQLAlchemy
from .db import db

class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    #users.id for both foreign keys? 
    followedUserId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    followerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="follow")
    
