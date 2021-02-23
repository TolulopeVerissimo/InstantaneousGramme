from flask import Blueprint, jsonify, request
from app.models import User, db, Post
from app.forms import NewPostForm
import json

posts_routes = Blueprint('posts', __name__)


@posts_routes.route('/', methods=['POST'])
def new_post():
    data = request.get_json()
    description = data['description']
    private = data['isPrivate']
    imagePath = data['imagePath']
    userId = data['userId']
    new_post = Post(description=description, private=private, imagePath=imagePath, userId=userId)
    db.session.add(new_post)
    db.session.commit()

    return(data)
