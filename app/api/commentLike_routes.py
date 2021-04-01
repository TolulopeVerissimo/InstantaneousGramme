from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, CommentLike


commentLike_routes = Blueprint('commentLikes', __name__)


@commentLike_routes.route('/', methods=['POST'])
@login_required
def commentLike():
    likes = CommentLike.query.all()
    newLike = request.get_json()
    userId = newLike['userId']
    commentId = newLike['commentId']
    for like in likes:
        if int(like.userId) == int(userId) and int(like.commentId) == int(commentId):
            db.session.delete(like)
            db.session.commit()
            return({"userId": like.userId, "commentId": like.commentId})

    new_commentLike = CommentLike(userId=userId, commentId=commentId)
    db.session.add(new_commentLike)
    db.session.commit()
    return(newLike)