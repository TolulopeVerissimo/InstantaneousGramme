from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Post
from flask_login import login_required
from app.forms import NewPostForm, EditPostForm
post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.all()
    if posts[0]:
        return jsonify({"posts": [post.to_dict() for post in posts]})
    else:
        return {'posts': []}


@post_routes.route('/', methods=['POST'])
def new_post():
    data = request.get_json()
    description = data['description']
    private = data['isPrivate']
    imagePath = data['url']
    userId = data['userId']
    new_post = Post(description=description, private=private,
                    imagePath=imagePath, userId=userId)
    db.session.add(new_post)
    db.session.commit()
    return(new_post.to_dict())


@post_routes.route('/<int:id>')
@login_required
def post(id):
    post = Post.query.get(id)
    if post:
        return jsonify(post.to_dict())
    else:
        return {'post': []}


@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    data = request.get_json()
    post = Post.query.get(id)
    post.description = data['description']
    post.private = data['isPrivate']
    db.session.commit()
    return post.to_dict()


@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return 'Post Deleted'
