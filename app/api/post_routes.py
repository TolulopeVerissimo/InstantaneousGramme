from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post
from flask_login import  login_required
post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.all()
    print("hit route")
    print('todict;',posts[0].to_dict())
    if posts[0]:
        return jsonify({"posts": [post.to_dict() for post in posts]})
    else:
        return {'posts': []}

