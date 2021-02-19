from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    content = db.Column(db.String(255), nullable=False)

    users = db.relationship("User", back_populates="comments")
    posts = db.relationship("Post", back_populates="comments")
    commentLikes = db.relationship("CommentLike", back_populates="comments")
