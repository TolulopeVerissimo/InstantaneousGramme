from flask import Flask, redirect
from ..config import Configuration
from .models import db, Users, Posts, PostLikes, Follows, Comments, CommentLikes
from .app import app

app = Flask(__name__)

app.config.from_object(Configuration)

db.init_app(app)

#User not signed-in
app.route('/')

#Signed In
app.route('/')

app.route('/')
app.route('/')
app.route('/')
app.route('/')
app.route('/')
app.route('/')
app.route('/')
app.route('/')