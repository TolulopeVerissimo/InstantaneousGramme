from flask_wtf import FlaskForm
from wtforms import TextAreaField, BooleanField, FileField


class NewPostForm(FlaskForm):
    photo = FileField('photo')
    description = TextAreaField('description')
    private = BooleanField('private')
