from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")
    commentLikes = db.relationship("CommentLike", cascade="all, delete-orphan", back_populates="comment")

    def to_dict(self):
            username = self.user.username
            year = self.date_created.strftime('%Y')
            month = self.date_created.strftime('%B')
            day = self.date_created.strftime("%d")
            date = f'{month} {day} {year}'
            return {
                'id': self.id,
                'userId': self.user_id,
                'postId': self.post_id,
                'content': self.content,
                'date_created': date,
                'username': username,
            }
