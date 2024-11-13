# E-commerce Collection Page:

This project is a responsive, animated product collection page for a simple e-commerce store. The page fetches product data from an API and displays it in a user-friendly, visually appealing format. The layout and animations are inspired by the provided Figma designs, with some optional enhancements to improve usability and interactivity.

# Table of Contents:

Demo
Features
Technologies Used
Project Structure
Setup
Implementation Details
Code Structure and Design Decisions
Future Improvements

# Demo:

https://github.com/rutyak/e-commerce.git

# Features: 

Product Fetching: Retrieves product data from an external API using JavaScript.
Data Rendering: Dynamically displays products on the page, including images, product names, prices, and descriptions.
Staggered Animations: Products animate in a staggered manner upon loading, enhancing the visual appeal.
Responsiveness: Adapts to different screen sizes (desktop and mobile) based on Figma designs.
Error Handling: Displays informative error messages in case of API failures or empty data.
Sorting (Optional Enhancement): Allows users to sort products by price, re-rendering with animations.
Technologies Used
HTML, CSS, JavaScript: For structuring, styling, and scripting the UI.
CSS Animations: Used to achieve staggered product loading effects.
Fetch API: For asynchronous data fetching from the provided endpoint.

# Project Structure:

├── main.html         # HTML structure
├── main.css         # CSS styling and animations
├── main.js          # JavaScript for fetching data, handling UI updates, and sorting logic
└── README.md          # Project documentation Setup

# Clone the repository:

git clone https://github.com/rutyak/e-commerce.git
Open index.html in your browser to view the project.

# Implementation Details:

Data Fetching: The data is fetched from Mocky API with a delay to simulate loading time.
Animations: CSS animations are used to create a staggered fade-in effect for each product. Fine-tuned durations and delays ensure a smooth, professional animation.
Responsiveness: Flexbox and media queries ensure that the layout adapts to different screen sizes, adhering to the Figma design for both desktop and mobile versions.
Error Handling: Informative messages are shown in case of API failure or empty data.

# Code Structure and Design Decisions:

Component Separation: Each main task (data fetching, rendering, sorting, and error handling) is encapsulated within dedicated functions to enhance readability and modularity.
User Experience (UX) Focus: The staggered animation, loading spinner, and error messages ensure that users are always informed and engaged.
Responsiveness: CSS Flexbox and media queries ensure the layout is mobile-friendly, adhering to Figma’s desktop and mobile designs.
Documentation: Key functions and decision points are commented to clarify the purpose and logic of each section, improving readability.