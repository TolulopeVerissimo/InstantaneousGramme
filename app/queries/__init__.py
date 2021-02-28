import pprint

from flask.cli import AppGroup
from app.models import db, Comment, CommentLike, User

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
query_commands = AppGroup('query')

@query_commands.command('comments')
def query_comments():

    y = db.session.query.query(CommentLike) 
    # for c, u, l in db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment):
    x = db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment.content, CommentLike)    
    print(str(x))
    
@query_commands.command('count')
def query_comments():

    
    # for c, u, l in db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment):
    x = db.session.query(Comment, User, CommentLike).filter(Comment.id == CommentLike.commentId, User.id == Comment.userId ).with_entities(User.name, Comment.content, CommentLike)    
    print(str(x))
        
    
    
    