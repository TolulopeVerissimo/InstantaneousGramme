from flask_wtf import FlaskForm
from wtforms.fields import (DateField, StringField, IntegerField, SelectField, BooleanField, SubmitField)
from wtforms.validators import DataRequired


class Login(FlaskForm):


    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email',validators=[DataRequired()])
    password = StringField('Password', validators=[DataRequired()])
    submit = SubmitField('Submit')
