import random

def guess_number(user_input):
    x = random.randint(1, 10)
    print(user_input)
    if x == user_input:
        return "You Guessed it!"
    elif x > user_input:
        return "Think of a higher number"
    else:
        return "Think of a lower number"
