from flask import Flask, redirect
from .config import Configuration
from flask_migrate import Migrate
from .models import db

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app,db)

'''
For DM's well need Socket.Io
https://www.youtube.com/watch?v=uJC8A_7VZOA&list=PLyb_C2HpOQSBUEDI7tx_W4hAz699B6D7p
'''