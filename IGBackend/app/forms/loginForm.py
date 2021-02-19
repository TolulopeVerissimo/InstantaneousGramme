from flask_wtf import FlaskForm
from wtforms.fields import (DateField, StringField, IntegerField, SelectField, BooleanField, SubmitField)
from wtforms.validators import DataRequired


class Login(FlaskForm):
    