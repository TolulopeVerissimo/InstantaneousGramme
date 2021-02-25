from .db import db


class PostLike(db.Model):
    __tablename__ = 'postLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(),onupdate=db.func.current_timestamp())

    user = db.relationship("User", back_populates="postLikes")
    post = db.relationship("Post", back_populates="postLikes")

    def to_list(self):
        return self.userId
