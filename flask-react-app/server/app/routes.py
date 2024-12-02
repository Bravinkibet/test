from flask import Blueprint, jsonify, request
from app import db, bcrypt
from app.models import User, Product

api = Blueprint("api", __name__)

@api.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    user = User(username=data["username"], email=data["email"], password=hashed_password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"})

@api.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data["email"]).first()
    if user and bcrypt.check_password_hash(user.password, data["password"]):
        return jsonify({"message": "Login successful!", "username": user.username})
    return jsonify({"message": "Invalid credentials"}), 401

@api.route("/api/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    product_list = [{"id": p.id, "name": p.name, "category": p.category, "price": p.price, "image": p.image_file} for p in products]
    return jsonify(product_list)
