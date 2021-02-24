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
    # specificUser = user(id)
    # if userList.has_key(specificUser):
    #     print ("UserFound",specificUser)
    # print("not found")

# @user_routes.route('/<int:id>/profile', methods=['POST'])
# @login_required
# def profilePost(id):
#     userList = users()
#     specificUser = user(id)
#     if userList.has_key(specificUser):
#         print ("UserFound",specificUser)
#     print("not found")



# Follows
@user_routes.route('/<int:id>/follow', methods=['GET'])
# @login_required
def userFollowGET(id):
    user = User.query.get(id)
    return(user.follows)

@user_routes.route('/<int:id>/follow', methods=['POST'])
@login_required
def userFollowPOST(id):
    user = User.query.get(id)
    users = User.query.all()
    req = request.get_json()

    if user in users:
        res = make_response(jsonify({"error": "user already exists"}), 400)
        return res

    users.update({user: req})

    res = make_response(jsonify({"message": "user inserted/created"}), 201)
    return res

@user_routes.route('/<int:id>/follow', methods=['PUT'])
@login_required
def userFollowPUT(id):
    user = User.query.get(id)
    users = User.query.all()
    req = request.get_json()

    if user in users:
        users[user] = req
        res = make_response(jsonify({"updated":"replace"}),200)
        return res
    users[user] = req
    res = make_response(jsonify({"updated":"created"}),201)
    return res
