from flask import Flask, redirect
from ..config import Configuration
from .models import db, Users, Posts, PostLikes, Follows, Comments, CommentLikes
from ..forms import loginForm
from .app import app

app = Flask(__name__)

app.config.from_object(Configuration)

db.init_app(app)

#User not signed-in
app.route('/')

#Signed In
app.route('/')

#NavBar in order

#Search Bar
#app.route('/')

#Home Button
#app.route('/')

# Direct Messages
# app.route('/direct/inbox')

# Explore Page
#app.route('/explore')

# Account Activity
#app.route('/accounts/activity')

#Profile Picture Icon
# app.route('/p') #/userName
# app.route('/p/saved')
# app.route('/accounts/edit')
# app.route('/logout')