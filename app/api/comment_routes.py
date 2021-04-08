from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment
from flask_login import login_required
from app.forms import NewCommentForm
from app.utils import validation_errors_to_error_messages


comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
def comments():
    comments = Comment.query.all()
    if comments[0]:
        return jsonify({"comments":
                       [comment.to_dict() for comment in comments]})
    else:
        return {'comments': []}


@comment_routes.route('/', methods=['POST'])
def new_comment():
    form = NewCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_id = form.data['user_id']
        post_id = form.data['post_id']
        content = form.data['content']
        print(content)
        new_comment = Comment(user_id=user_id, post_id=post_id,
                              content=content)
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    if form.errors:
        return {"errors": validation_errors_to_error_messages(form.errors)}


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
