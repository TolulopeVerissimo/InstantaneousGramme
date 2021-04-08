from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired


class NewCommentForm(FlaskForm):
    post_id = IntegerField('postId', validators=[DataRequired()])
    user_id = IntegerField('userId', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
