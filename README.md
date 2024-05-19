# Project04_digitalDivination
Assignment Brief: https://advanced-critical-computation-2024.glitch.me/p4.html


Game Finder Description:
Game Finder is a web application that allows users to find video games released in their birth year. The application fetches data from the Giant Bomb API and displays a list of games based on the user-provided birth year.

Features:
User inputs their birth year to find games released in that year.
Fetches game data from the Giant Bomb API.
Displays game names, release dates, and images.
Installation
To run this project locally, follow these steps:

BEFORE RUNNING::::::::

1. Clone the repository:
git clone https://github.com/your-username/game-finder.git
cd game-finder

3. Install dependencies:
npm install

5. Start the development server:
npm start


Usage:
Open your browser and navigate to http://localhost:3000.
Enter your birth year in the input field.
Click the "Find Games" button to fetch and display games released in that year.

NOTE::::::::

Local Fixes:
This project includes some fixes in script.js that are commented out for the sake of troubleshooting (remote) client-side issues. These are intended to help debug and resolve potential problems when running the application locally versus remotely.

If you encounter issues, you may need to uncomment these fixes or adjust them based on your environment (SEE SERVER URL IN SCRIPT.JS FILE).

Node Modules:
The node_modules directory is not included in this repository due to its large size. After cloning the repository, ensure you run npm install to install all necessary dependencies.

File Structure:
index.html: The main HTML file.
script.js: Contains the client-side JavaScript for fetching and displaying game data.
server.js: Contains the server-side code for handling API requests and serving the application.

Troubleshooting:
If you encounter issues related to CORS or fetching data, ensure that:

Your server is running and accessible.
The API key used in server.js is valid.
The CORS headers are correctly set in the server response.
For further debugging, check the commented sections in script.js which may contain additional fixes.

:)
