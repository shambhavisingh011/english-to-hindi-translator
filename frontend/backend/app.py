from flask import Flask, request, jsonify
from flask_cors import CORS
from ocr import extract_text
from translate import translate_to_hindi
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/translate', methods=['POST'])
def translate():
    if 'image' in request.files:
        image = request.files['image']
        path = os.path.join(UPLOAD_FOLDER, image.filename)
        image.save(path)
        english_text = extract_text(path)
        hindi_text = translate_to_hindi(english_text)
        return jsonify({"translated": hindi_text})

    elif 'text' in request.form:
        english_text = request.form['text']
        hindi_text = translate_to_hindi(english_text)
        return jsonify({"translated": hindi_text})

    return jsonify({"error": "No input provided"}), 400

if __name__ == '__main__':
    app.run(debug=True)
