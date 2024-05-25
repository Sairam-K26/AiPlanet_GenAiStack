# GenAI Chatbot Application

## Table of Contents
1. [Introduction]
2. [Setup Instructions]
   - [Backend Setup]
   - [Frontend Setup]
3. [API Documentation]
4. [Architecture]
   - [High-Level Design (HLD)]
   - [Low-Level Design (LLD)]
5. [Frontend Components]
   - [Chat Component]
   - [ModalForm Component]
   - [Modal Component]
   - [Navbar Component]
6. [Backend Components]
7. [Deployment Guide]
   - [Backend Deployment]
   - [Frontend Deployment]


## Introduction
The GenAI Chatbot application is a simple chatbot built using a React frontend and a Flask backend, leveraging the GPT-2 model from Hugging Face to generate responses. The application allows users to input messages and receive responses from the bot.

## Setup Instructions

### Backend Setup
1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/genai-chatbot.git
    cd genai-chatbot/backend
    ```

2. **Create a virtual environment and activate it**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Flask server**
    ```bash
    python app.py
    ```
   The backend server will start on `http://127.0.0.1:5000`.

### Frontend Setup
1. **Navigate to the frontend directory**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the React application**
    ```bash
    npm start
    ```
   The frontend application will start on `http://localhost:3000`.

## API Documentation

### POST /create_bot
- **Description:** Sends a user message to the bot and returns the bot's response.
- **Request Body:**
  ```json
  {
    "role": "user",
    "content": "Hello, how are you?"
  }
- **Response Body:**
  ```json
  {
    "response": "I am good, thank you!"
    }

## Architecture
### High-Level Design (HLD)


- ### Frontend: A React application providing the user interface for interacting with the chatbot.
- ### Backend: A Flask application that handles API requests and processes user messages using a GPT-2 model.
- ### Model: The GPT-2 model from Hugging Face, loaded in the backend to generate responses.

### Low-Level Design (LLD)

### Frontend Components:
- Chat.jsx: Manages the chat interface and handles user input.
- ModalForm.jsx: Manages the form for creating a new bot with a specified role.
- Modal.jsx: Handles the modal for creating a new stack with name and description.
- Navbar.jsx: Displays the navigation bar.
### Backend Components:
- app.py: Main Flask application that processes API requests and uses the GPT-2 model to generate responses.

## Frontend Components
### Chat Component (Chat.jsx)
This component manages the chat interface and handles user input.

### State:

- messages: Array of message objects containing user and bot messages.
- input: The current input text from the user.
### Functions:

- handleSendMessage: Sends the user message to the backend and handles the bot's response.
### Render:

Displays the chat messages.
Contains an input field and a send button for user input.
### ModalForm Component (ModalForm.jsx)
This component handles the form for creating a new bot with a specified role.

### State:

- role: The role of the bot.
### Functions:

Handles form submission and navigation to the chat page.
### Render:

Displays a form with input fields for the bot role and submit button.
### Modal Component (Modal.jsx)
This component handles the modal for creating a new stack with name and description.

### State:

- name: The name of the stack.
- description: The description of the stack.
### Functions:

Handles form submission and navigation to the dashboard.
### Render:

Displays a form with input fields for the stack name and description, and submit button.
### Navbar Component (Navbar.jsx)
This component displays the navigation bar.

### Render:
Displays the application logo and title.
## Backend Components
### Flask Application (app.py)
This is the main backend application built with Flask.

- Imports:

Flask and related modules.
Pydantic for request validation.
Hugging Face's transformers for the GPT-2 model.
torch for PyTorch support.
- Endpoints:

/create_bot: Handles POST requests to process user messages and generate bot responses.
- Functions:

- load_model_and_tokenizer: Loads the GPT-2 model and tokenizer.
- create_bot: Handles incoming POST requests, validates the request body, generates a response using GPT-2, and returns the response.

## Deployment Guide
### Backend Deployment
- Build and push Docker image
  ```
  docker build -t my-flask-app .
  docker push my-flask-app
  ```
- Deploy using Docker Compose or a similar orchestration tool
  ```
  version: '3'
  services:
    app:
      image: my-flask-app
      ports:
        - "5000:5000"
  ```
### Frontend Deployment
- Build the React application
  ```
  npm run build
  
  ```
- Deploy the build directory to a static file server or a cloud provider like Netlify or Vercel

## Demo

To see a  screencast of the application in action, you can check this [link](#https://drive.google.com/file/d/1zMkLaCtJzfC9Rj75ROjGnOMmjVzDoYyo/view?usp=sharing).




