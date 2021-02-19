from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Comments(db.Model):
    __tablename__ = 'Comments'


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, foreign_key=True,unique=True,nullable=False)
    postId = db.Column(db.Integer, foreign_key=True,unique=True, nullable=False)
    content = db.Column(db.String(255), foreign_key=True)

