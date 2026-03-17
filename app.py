from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/barbearia')
def barbearia():
    return render_template('barbearia.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

app = app

if __name__ == '__main__':
    app.run(debug=True)