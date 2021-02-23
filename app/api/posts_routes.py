from flask import Blueprint, jsonify, request
from app.models import User, db, Post
from app.forms import NewPostForm

posts_routes = Blueprint('posts', __name__)


@posts_routes.route('/', methods=['POST'])
def new_post():

