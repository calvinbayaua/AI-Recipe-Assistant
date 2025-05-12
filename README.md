# 🍽️ AI Recipe Assistant

AI Recipe Assistant is a React-based web app that helps users discover recipes based on the ingredients they have on hand. By leveraging AI, the app generates creative meal ideas, making cooking easier and more convenient!


## 📖 Learning Journey
This project was built while following [Scrimba's Learn React Course](https://scrimba.com/learn-react-c0e).


## 🛠️ Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript
- **AI Integration:** [Mixtral-8x7B](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1)
- **State Management:** React Hooks (`useState`, `useEffect`, `useRef`)


## 🎯 How It Works
1. Enter the ingredients you have.
2. Click Generate Recipe.
3. AI processes the ingredients and returns a recipe.
4. Follow the instructions to cook your meal!


## 📦 Installation & Setup
1. **Clone the repository:**
  ```sh
  git clone https://github.com/calvinbayaua/AI-Recipe-Assistant.git
  cd AI-Recipe-Assistant
  ```
2. **Install dependencies:**
  ```sh
  npm install
  ```
3. **Create a .env file and add your API key:**
  ```sh
  VITE_HF_API_KEY="your_api_key_here"
  ```
4. **Start the development server:**
  ```sh
  npm run dev
  ```
