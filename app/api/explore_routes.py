from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Post
from flask_login import login_required
explore_routes = Blueprint('explore', __name__)

@explore_routes.route('/')
@login_required
def explore():
    users = User.query.all()
    posts = Post.query.all()
    print (users)
    return jsonify({"posts": [post.to_dict() for post in posts]},{"users": [user.to_dict() for user in users]})
   
