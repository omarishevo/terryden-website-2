from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.security import check_password_hash
from werkzeug.utils import secure_filename
import jwt, json, datetime, os

app = Flask(__name__, static_folder=None)
CORS(app)

SECRET_KEY = "terryden-demo-secret-change-this"
UPLOAD_FOLDER = "client_uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def load_users():
    with open("users.json") as f:
        return json.load(f)

def verify_token():
    auth_header = request.headers.get('Authorization', '')
    if not auth_header.startswith('Bearer '):
        return None
    token = auth_header.split(' ')[1]
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    except jwt.PyJWTError:
        return None

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    if os.path.exists(path):
        return send_from_directory('.', path)
    return "Not Found", 404

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email', '').lower().strip()
    password = data.get('password', '')
    users = load_users()
    user = users.get(email)
    if not user or not check_password_hash(user['password_hash'], password):
        return jsonify({"error": "Invalid email or password"}), 401
    token = jwt.encode({
        "email": email, "name": user['name'],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=6)
    }, SECRET_KEY, algorithm="HS256")
    return jsonify({"token": token, "name": user['name']})

@app.route('/api/portal/me', methods=['GET'])
def me():
    payload = verify_token()
    if not payload:
        return jsonify({"error": "Unauthorized"}), 401
    return jsonify({"email": payload['email'], "name": payload['name']})

@app.route('/api/portal/projects', methods=['GET'])
def projects():
    payload = verify_token()
    if not payload:
        return jsonify({"error": "Unauthorized"}), 401
    return jsonify({"projects": []})

@app.route('/api/portal/reports', methods=['GET'])
def reports():
    payload = verify_token()
    if not payload:
        return jsonify({"error": "Unauthorized"}), 401
    return jsonify({"reports": []})

@app.route('/api/portal/upload', methods=['POST'])
def upload():
    payload = verify_token()
    if not payload:
        return jsonify({"error": "Unauthorized"}), 401
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400
    filename = secure_filename(f"{payload['email']}_{file.filename}")
    file.save(os.path.join(UPLOAD_FOLDER, filename))
    return jsonify({"message": f"Uploaded {file.filename} successfully"})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8000))
    app.run(host='0.0.0.0', port=port)
