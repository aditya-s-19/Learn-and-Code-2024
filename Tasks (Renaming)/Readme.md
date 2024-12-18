## Assignment 1: Roll The Dice

```
import random

def generateRandomNumber(higherLimit):
    randomNumber=random.randint(1, higherLimit)
    return randomNumber

def main():
    highestDiceValuePossible=6
    isUserWishToRoll=True
    while isUserWishToRoll:
        userInput=input("Ready to roll? Enter Q to Quit")
        if userInput.lower() !="q":
            diceResult=generateRandomNumber(highestDiceValuePossible)
            print("You have rolled a",diceResult);
        else:
            isUserWishToRoll=False
```

## Assignment 2: Guess Correct Number

```
def isValidValue(value):
    if value.isdigit() and 1<= int(value) <=100:
        return True
    else:
        return False

def main():
    randomCorrectValue=random.randint(1,100)
    hasUserGuessedCorrectValue=False
    userInput=input("Guess a number between 1 and 100:")
    numberOfGuesses=0
    while not hasUserGuessedCorrectValue:
        if not isValidValue(userInput):
            userInput=input("I wont count this one Please enter a number between 1 to 100")
            continue
        else:
            numberOfGuesses+=1
            userInput=int(userInput)

        if userInput<randomCorrectValue:
            userInput=input("Too low. Guess again")
        elif userInput>randomCorrectValue:
            userInput=input("Too High. Guess again")
        else:
            print("You guessed it in",numberOfGuesses,"guesses!")
            hasUserGuessedCorrectValue=True
```

## Assignment 3: Check Armstrong Number

```

def applyArmstrongEquation(givenValue):
    # Initializing Sum and Number of Digits
    sum = 0
    noOfDigits = 0

    # Calculating Number of individual digits
    temp = givenValue
    while temp > 0:
        noOfDigits = noOfDigits + 1
        temp = temp // 10

    # Finding Armstrong Number
    temp = givenValue
    for n in range(1, temp + 1):
        Reminder = temp % 10
        sum = sum + (Reminder ** noOfDigits)
        temp //= 10
    return sum


# End of Function

# User Input
userInput = int(input("\nPlease Enter the Number to Check for Armstrong: "))

if (userInput == applyArmstrongEquation(userInput)):
    print("\n %d is Armstrong Number.\n" % userInput)
else:
    print("\n %d is Not a Armstrong Number.\n" % userInput)
```
