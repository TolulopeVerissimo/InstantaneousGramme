from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired

class NewCommentForm(FlaskForm):
    postId = IntegerField('postId', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
