from .db import db


class PostLike(db.Model):
    __tablename__ = 'postLikes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)

    user = db.relationship("User", back_populates="postLikes")
    post = db.relationship("Post", back_populates="postLikes")

    def to_dict(self):
        return {
            "postId": self.postId,
            "userId": self.userId,
        }
