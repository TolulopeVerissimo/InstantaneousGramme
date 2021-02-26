from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, PostLike


postLike_routes = Blueprint('postLikes', __name__)


@postLike_routes.route('/', methods=['POST'])
@login_required
def new_postLike():
    like = request.get_json()
    userId = like['userId']
    postId = like['postId']
    new_postLike = PostLike(userId=userId, postId=postId)
    db.session.add(new_postLike)
    db.session.commit()
    return(like)
