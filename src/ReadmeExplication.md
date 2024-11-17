## Product Card Grid in React

### Description

This project showcases a responsive product card grid built using React. Each card dynamically displays product details such as image, SKU, size, category, type, and brand, based on a JSON dataset.

### Features

Dynamic Rendering: Each product is displayed in a separate card using React's map() function.
Responsive Design: The layout adjusts to fit different screen sizes.
Custom Styling: Inline styles are used for design elements like borders, spacing, and image overflow handling.
Setup

Clone the repository.
Ensure Node.js and npm are installed.
Run the following commands :

- npm install
- npm install react-scripts
- npm start

### How It Works

- The product data is defined in a JSON array (```mockData```), where each item represents a product.
- The main component (```App```) renders the title and the grid of cards.
- The ```RenderCardGrid ```component dynamically maps over the product data to create styled cards.

### Styling Details

- Grid Layout:
```display```: 'flex' with flexWrap: 'wrap' ensures a responsive grid.
```gap```: '16px' creates spacing between cards.
- Card Design:
```border```: '1px solid #ccc' gives a light gray border.
```overflow```: 'hidden' ensures images stay within the card boundaries.
- Image Styling:
```objectFit```: 'cover' ensures images retain their proportions without stretching.

### Usage

- Update the mockData array to include your product data.
- Add corresponding images to the /imgs directory or adjust paths.
- Customize the styles or extend functionality as needed.
