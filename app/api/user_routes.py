from flask import Blueprint, jsonify, make_response, request
from flask_login import login_required
from app.models import User

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
    return(user.follows)

@user_routes.route('/<int:id>/follow', methods=['POST'])
@login_required
def userFollowPOST(id):
    user = User.query.get(id)
    otherUsers = User.query.filter_by(id != user.id)


    #if person already follow them remove them from list, otherwise follow them.


    for person in otherUsers:
        if person.id == user.followers.followed_id:
            follows = [filter(otherUsers != person)]
            [people == user.followers.follower_id for people in follows]
            db.session.add()
            db.session.commit()

        user.followers.follower_id.append(person.id)
        db.session.add()
        db.session.commit()


@user_routes.route('/<int:id>/follow', methods=['PUT'])
@login_required
def userFollowPUT(id):
    user = User.query.get(id)
    otherUsers = User.query.filter_by(id != user.id)
    for person in otherUsers:
        if person.id == user.followers.followed_id:
            follows = [filter(otherUsers != person)]
            [people == user.followers.follower_id for people in follows]
            db.session.add()
            db.session.commit()

        user.followers.follower_id.append(person.id)
        db.session.add()
        db.session.commit()
