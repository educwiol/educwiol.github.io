from flask import Flask, request, send_from_directory, Response
import requests
import os

app = Flask(__name__)

@app.route('/')
def main():
    return open("index.html", "r").read()

@app.route('/<path:path>')
def send_report(path):
    return send_from_directory('./', path)

@app.route('/p')
def fetch_url():
    url = request.args.get('url')

    if not url:
        return 'Please provide a URL using the "url" parameter.'

    try:
        response = requests.get(url)

        if response.status_code != 200:
            return f'Error fetching URL: {response.status_code} - {response.reason}'

        content_type = response.headers.get('content-type')
        return Response(response.content, content_type=content_type)

    except Exception as e:
        return f'Error fetching URL: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True)
