import json
import random

with open("intents.json", "r") as file:
    data = json.load(file)

def get_response(user_input):
    user_input = user_input.lower()

    for intent in data["intents"]:
        for pattern in intent["patterns"]:
            if pattern in user_input:
                return random.choice(intent["responses"])

    return "Sorry, I could not understand your question. I will forward this to a support agent."

print("AI Customer Support Chatbot")
print("Type 'exit' to stop.")

while True:
    message = input("Customer: ")

    if message.lower() == "exit":
        print("Chatbot: Thank you. Goodbye!")
        break

    print("Chatbot:", get_response(message))
