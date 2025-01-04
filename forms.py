from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired
from wsgiref.validate import validator

class Login(FlaskForm):
    username = StringField('', validators=[InputRequired()],
    render_kw={'autofocus':True, 'placeholder':'Username'})
    password = PasswordField('', validators=[InputRequired()],
    render_kw={'autofocus':True, 'placeholder':'Password'})