import random
import webbrowser
from flask import Flask, render_template, jsonify, request
from snake.snakegame import run_game
from GuessTheNumber.guessgame import guess_number
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "base"

@app.route("/start-snake", methods=["POST"])
def snake_game():
    run_game()
    return "Game started"

random_number = None

@app.route('/start_game', methods=['POST'])
def start_game():
    global random_number
    start = request.json['start']
    end = request.json['end']
    random_number = random.randint(start, end)
    print(start, end , random_number)
    return jsonify({'status': 'Game started!', 'number': random_number})

@app.route('/check_guess', methods=['POST'])
def check_guess():
    global random_number
    guess = request.json['guess']
    if random_number is None:
        return jsonify({'error': 'Game has not been started'})

    if guess == random_number:
        return jsonify({'status': 'You got it! You guessed the correct number.'})
    elif guess < random_number:
        return jsonify({'status': 'Oops! Your guess is too low. Try a higher number.'})
    else:
        return jsonify({'status': 'Oops! Your guess is too high. Try a lower number.'})


if __name__ == '__main__':
    app.run()
