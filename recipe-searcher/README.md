# Flavorful: The Ultimate Recipe Searcher 🍲
Welcome to Flavorful, a simple yet robust recipe web application that allows you to search, filter, save, and create delicious recipes. Whether you're looking for a hearty breakfast, a light lunch, or a vegan dessert, Flavorful has got you covered.

![Flavorful](public/Screenshot 2023-10-30 125250.png)

## Features
- **Search** & Filter: Find recipes that fit your needs. Filter by categories like:

- Breakfast
- Lunch
- Dinner
- Vegetarian
- Vegan
- Desserts
- **Save Your Favorites:** Stumbled upon a recipe you love? Save it to your favorites and access it anytime.

- **Create & Share:** Have a secret family recipe or a culinary masterpiece of your own? Add it to Flavorful.

- **Measurement Conversion Calculator:** No more second guessing or endless Googling. Convert your culinary measurements with ease.

## Tech Stack 💻
- **Front-end:** React.js
- **Data Storage:** JSON Server (acts as a mock backend to save recipes and user data)

## Prerequisites
- Node.js
- npm

## Installation
### Clone this repository:
**Using HTTPS:** 
```
git clone https://github.com/jsullivan94/recipe-searcher.git
```
**Using SSH:**
``` 
git clone git@github.com:jsullivan94/recipe-searcher.git
```
### Navigate to the project directory:
```
cd recipe-searcher
```
### Install the required packages:
```
npm install
```
### Start the JSON server:
change template_db.json name to db.json
```
json-server --watch db.json
```
### Start the development server:
```
npm start
```
## Open your browser and visit http://localhost:3000/ to see the magic!