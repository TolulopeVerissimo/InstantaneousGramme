from app.models import DirectMessage, db
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import DMForm

DM_routes = Blueprint('DM', __name__)

@chat_routes.route("")
@login_required
def get_messages():
    messages = DirectMessage.query.all()
    return {"messages": [message.to_dict() for message in messages]}

@chat_routes.route("", methods=["POST"])
@login_required
def create_message():
    form = CreateChatForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_message = DirectMessage(
            senderId=form.data["senderId"],
            receiverId=form.data["receiverId"],
            message=form.data["message"],
        )
        db.session.add(new_message)
        db.session.commit()
        return new_message.to_dict()
    errors = validation_errors_to_error_messages(form.errors)
    return {"errors": errors}

@chat_routes.route("/<messageId>", methods=["DELETE"])
@login_required
def delete_message(messageId):
    message_to_delete = DirectMessage.query.get(messageId)
    if message_to_delete:
        db.session.delete(message_to_delete)
        db.session.commit()
        return "Deleted"
    else:
        print(f"--------Message Not Found  -------- ")
        return {"errors": "No message exists with that id"}