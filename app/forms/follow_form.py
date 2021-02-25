from flask_wtf import FlaskForm
from wtforms import HiddenField


class FollowForm(FlaskForm):
    follower_id = HiddenField("follower")
