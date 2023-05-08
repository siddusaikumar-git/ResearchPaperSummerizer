from flask import Flask, request
from flask.json import jsonify
from flask_cors import CORS

from publications_summary_prompt import text_prompt_input, image_prompt_input

app = Flask(__name__)
CORS(app)


@app.route('/api/v1/summary', methods=['POST'])
def summary():
    data = request.get_json()  
    result = text_prompt_input(data["publication_title"])  
    return result

@app.route('/api/v1/image', methods=['POST'])
def image():
    data = request.get_json()  
    result = image_prompt_input(data["image_prompt"])  
    return result

if __name__ == '__main__':
    app.run(debug=True)

    