from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import User, db
from app.forms import FollowForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/profile', methods=['GET'])
@login_required
def profileGet(id):
    user = User.query.get(id)
    return user.to_dict()
    # print("not found")
# @user_routes.route('/<int:id>/profile', methods=['POST'])
# @login_required
#     userList = users()
#     specificUser = user(id)
#     if userList.has_key(specificUser):
#         print ("UserFound",specificUser)
#     print("not found")


# Follows

@user_routes.route('/<int:id>/follow', methods=['GET'])
@login_required
def userFollowGET(id):
    user = User.query.get(id)
    # followers = [follower.to_dict() for follower in user.followers]
    # print(followers.username)
    # return({"followers":followers})
    # return["followers":followers]
    # users = User.query.all()
    # # return (user.follows)
    # return (user.followers)
    return(user.follow)

@user_routes.route('/<int:followed_user_id>/follow', methods=['POST'])
# @login_required
def follow_user(followed_user_id):
    followed_user = User.query.filter(User.id == followed_user_id).first()
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        follower_id = form.data['follower_id']
        follower = User.query.filter(User.id == follower_id).first()
        followed_user.followers.append(follower)
        db.session.commit()
        followers = followed_user.followers.all()
        return followed_user.to_dict()

@user_routes.route('/<int:id>/follow', methods=['PUT'])
@login_required
def userFollowPUT(id):
    user = User.query.get(id)
    otherUsers = User.query.filter(User.id != user.id)
    for person in otherUsers:
        if person.id == user.followers.followed_id:
            follows = [filter(otherUsers != person)]
            [people == user.followers.follower_id for people in follows]
            db.session.add()
            db.session.commit()

        user.followers.follower_id.append(person.id)
        db.session.add()
        db.session.commit()
