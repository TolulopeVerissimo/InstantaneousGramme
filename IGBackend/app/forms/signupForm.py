from flask_wtf import FlaskForm
from wtforms.fields import (DateField, StringField, IntegerField, SelectField, BooleanField, SubmitField)
from wtforms.validators import DataRequired


class SignUp(FlaskForm):

    date_bought = DateField('Date Bought', validators=[DataRequired()])
    nickname = StringField('Nickname', validators=[DataRequired()])
    year = IntegerField('Year')
    maker = StringField('Maker')
    type = SelectField('Type', choices=['Other','String','Woodwind','Brass','Percussion'])
    used = BooleanField('Used', validators=[DataRequired()])
    submit = SubmitField('Submit')



