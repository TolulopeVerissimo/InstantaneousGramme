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
    imagePath = data['imagePath']
    userId = data['userId']
    new_post = Post(description=description, private=private,
                    imagePath=imagePath, userId=userId)
    db.session.add(new_post)
    db.session.commit()

    return(data)


@post_routes.route('/<int:id>')
@login_required
def post(id):
    post = Post.query.get(id)
    if post:
        return jsonify(post.to_dict())
    else:
        return {'post': []}


@post_routes.route('/<int:id>')
@login_required
def edit_post(id):
    form = EditPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post.query.get(id)
        post['description'] = form['description']
        post['private'] = form['private']
        print(post)
    return '123'
