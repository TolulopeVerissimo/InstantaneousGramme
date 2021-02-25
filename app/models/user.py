from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    # add a validator for phone number
    phoneNumber = db.Column(db.String(20))
    username = db.Column(db.String(30), unique=True, nullable=False)
    biography = db.Column(db.String(200))
    profilePicture = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(),onupdate=db.func.current_timestamp())


    posts = db.relationship("Post", back_populates="user")
    postLikes = db.relationship("PostLike", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")
    commentLikes = db.relationship("CommentLike", back_populates="user")
    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref("follows", lazy="dynamic"),
        lazy="dynamic"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "profilePicture": self.profilePicture,
            "biography":self.biography,
        }


# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()


# class User(db.Model):
#     __tablename__ = 'Users'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     email = db.Column(db.String(265), nullable=False)
#     phoneNumber = db.Column(db.Integer, nullable=False)
#     username = db.Column(db.String(30), unique=True, nullable=False)
#     biography = db.Column(db.String(200))
#     # will need to adjust to skeleton
#     hashedPassword = db.Column(db.String(60), nullable=False)

#     post = db.relationship("Post", back_populates="user")
#     follow = db.relationship("Follow", back_populates="user")
#     comment = db.relationship("Comment", back_populates="user")
