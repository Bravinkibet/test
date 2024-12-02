from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS

db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config.from_object("app.config.Config")

    db.init_app(app)

    with app.app_context():
        from app.routes import api
        app.register_blueprint(api)

        from app.models import User, Product
        db.create_all()

    return app
