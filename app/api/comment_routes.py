from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment
from flask_login import login_required
comment_routes = Blueprint('comments', __name__)







@comment_routes.route('/')
def comments():
    comments = Comment.query.all()
    if comments[0]:
        return jsonify({"comments": [comment.to_dict() for comment in comments]})
    else:
        return {'comments': []}






@comment_routes.route('/', methods=['POST'])
def new_comment():
    data = request.get_json() 
    print(data)   

    userId = data['userId']
    postId = data['postId']
    content = data['content']
    new_comment = Comment(userId=userId, postId=postId, content=content)
    db.session.add(new_comment)
    db.session.commit()

    return new_comment.to_dict()

@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return 'Comment Deleted'

@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_comment(id):
    data = request.get_json() 
    comment = Comment.query.get(id)
    comment.content = data['content']
    db.session.commit()

    return comment.to_dict()