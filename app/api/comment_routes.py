from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment,CommentLike, Post 
from flask_login import login_required
comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/<int:id>')
def comments(id):
    print('request', request)
    comments = Comment.query.all()
    print(comments)

# {user.id: {follower.id: {"id": follower.id, "username": follower.username}
            # for follower in user.followers.all()}}

    if comments[0]:
        return jsonify({"comments": [comment.to_dict() for comment in comments]})

    # sonify({"comments": [comment for comment in comments]})
    else:
        return {'comments': []}


@comment_routes.route('/', methods=['POST'])
@login_required
def new_comment():
    data = request.get_json()
    print('************************************************************')
    print(data)
    # description = data['description']
    # private = data['isPrivate']
    # imagePath = data['imagePath']
    # userId = data['userId']
    # new_post = Post(description=description, private=private,
    #                 imagePath=imagePath, userId=userId)
    # db.session.add(new_post)
    # db.session.commit()

    return(data)
