from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import User, Post, db
from app.forms import FollowForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {user.id: {"id": user.id, "username": user.username, "profilePicture": user.profilePicture}
            for user in users}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/profile', methods=['GET'])
@login_required
def profileGet(id):
    user = User.query.get(id)
    post_count = len(Post.query.filter(Post.userId == id).all())
    follower_count = len(user.followers.all())
    following_count = len(user.follows.all())
    profile = user.to_dict()
    profile['followerCount'] = follower_count
    profile['followingCount'] = following_count
    profile['postCount'] = post_count
    return profile


# Follows

@user_routes.route('/<int:id>/follows', methods=['GET'])
@login_required
def get_user_follows(id):
    user = User.query.filter(User.id == id).first()
    followers = user.followers.all()
    return {user.id: {follower.id:
                      {"id": follower.id, "username": follower.username}
                      for follower in user.followers.all()}}


@user_routes.route('/<int:followed_user_id>/follow', methods=['POST'])
@login_required
def follow_user(followed_user_id):
    followed_user = User.query.filter(User.id == followed_user_id).first()
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        follower_id = form.data['follower_id']
        new_follower = User.query.filter(User.id == follower_id).first()
        followers = followed_user.followers.all()
        if new_follower in followers:
            return 'User Already Follows'
        followed_user.followers.append(new_follower)
        db.session.commit()
        return {follower.id: {"id": follower.id, "username": follower.username}
                for follower in followed_user.followers.all()}


@user_routes.route('/<int:id>/follow', methods=['DELETE'])
@login_required
def unfollow_user(id):
    followed_user = User.query.filter(User.id == id).first()
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        follower_id = form.data['follower_id']
        follower = User.query.filter(User.id == follower_id).first()
        followed_user.followers.remove(follower)
        print(followed_user.followers.all())
        db.session.commit()
        return followed_user.to_dict()
