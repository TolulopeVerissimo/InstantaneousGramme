from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Post
from flask_login import login_required
post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.all()
    if posts[0]:
        print("**************************", posts[0].postLikes)
        return jsonify({"posts": [post.to_dict() for post in posts]})
    else:
        return {'posts': []}


@post_routes.route('/', methods=['POST'])
def new_post():
    data = request.get_json()
    print(data)
    description = data['description']
    private = data['isPrivate']
    imagePath = data['imagePath']
    userId = data['userId']
    new_post = Post(description=description, private=private,
                    imagePath=imagePath, userId=userId)
    db.session.add(new_post)
    db.session.commit()

    return(data)
