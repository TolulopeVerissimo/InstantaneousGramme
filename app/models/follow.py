from .db import db


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    followedUserId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    followerId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(
        db.DateTime, default=db.func.current_timestamp(),
        onupdate=db.func.current_timestamp())

    user = db.relationship("User", back_populates="follow")
