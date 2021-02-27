from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .more_posts import seed_more_posts, undo_more_posts
from .more_users import seed_more_users, undo_more_users
from .comments import seed_comments, undo_comments
from .commentLikes import seed_commentLikes, undo_commentLikes
from .postLikes import seed_postLikes, undo_postLikes


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


@seed_commands.command('users')
def seed_users_seeds():
    seed_users()

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_posts()
    seed_more_posts()
    seed_comments()
    seed_commentLikes()
    seed_more_users()
    seed_postLikes()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_postLikes()
    undo_posts()
    undo_commentLikes()
    undo_comments()
    undo_more_users()
    undo_more_posts()
    # Add other undo functions here


@seed_commands.command('data')
def seed_data():
    seed_posts()
    seed_comments()
    seed_commentLikes()
    seed_postLikes()


@seed_commands.command('more_posts')
def more_posts():
    seed_more_posts()


@seed_commands.command('more_users')
def more_users():
    seed_more_users()


@seed_commands.command('undo_more_users')
def undo_more_users():
    undo_more_users()
