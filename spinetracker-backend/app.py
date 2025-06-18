from flask import Flask
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = (__name__)
CORS(app)

#simulated in-memory "Database"
users = {}

@app.route('./api/signup', method=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email in users: 
        return jsonify({"message": "User already exists"}), 409
    
    users[email] = generate_password_hash(password)
    return jsonify({"message": "User successfully registered"}), 201

@app.route('/api/login', method=["POST"])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get("password")

    user_hash = user.get(email)
    if not user_hash or not check_password_hash(user_hash, password):
        return jsonify({"message": "Invalid credentials"}), 401
    
    return jsonify({"message": "Login successful"}), 200


if __name__ == '__main__':
    app.run(debug=True)