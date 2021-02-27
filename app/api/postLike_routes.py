from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, PostLike


postLike_routes = Blueprint('postLikes', __name__)


@postLike_routes.route('/', methods=['POST'])
@login_required
def postLike():
    likes = PostLike.query.all()
    newLike = request.get_json()
    userId = newLike['userId']
    postId = newLike['postId']
    for like in likes:
        if int(like.userId) == int(userId) and int(like.postId) == int(postId):
            db.session.delete(like)
            db.session.commit()
            return({"userId": like.userId, "postId": like.postId})

    new_postLike = PostLike(userId=userId, postId=postId)
    db.session.add(new_postLike)
    db.session.commit()
    return(newLike)
