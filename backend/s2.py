from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
from pydantic import BaseModel, ValidationError
from flask_cors import CORS
import torch

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define the ChatMessage data model
class ChatMessage(BaseModel):
    role: str
    content: str

# Load the LLaMA model and tokenizer from Hugging Face
def load_model_and_tokenizer(model_name="openai-community/gpt2-large"):
    print("Loading model and tokenizer from Hugging Face...")
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)
    print("Model and tokenizer loaded successfully.")
    return tokenizer, model

# Load model and tokenizer on startup
tokenizer, model = load_model_and_tokenizer()

@app.route('/create_bot', methods=['POST'])
def create_bot():
    data = request.json
    try:
        message = ChatMessage(**data)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    # Construct the input prompt for the model
    inputs = tokenizer(message.content, return_tensors="pt")
    
    try:
        # Generate response from the model
        outputs = model.generate(**inputs, num_beams=2,max_length=40, early_stopping=True)  
        # Decode the response
        response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
