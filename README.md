# 🎨 Etch-a-Sketch

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://myself-meen.github.io/etch-a-sketch/)
[![GitHub](https://img.shields.io/badge/github-repo-blue)](https://github.com/myself-meen/etch-a-sketch)

A browser-based interactive drawing application inspired by the classic Etch-a-Sketch toy. Create pixel art by hovering over a grid with your mouse or tapping on mobile devices!

## ✨ Features

- **Dynamic Grid Sizing**: Customize grid size from 1x1 to 100x100 squares
- **Dual Color Modes**: 
  - **Black Mode**: Classic monochrome drawing
  - **Random Color Mode**: Each square changes to a random RGB color
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Controls**: Easy-to-use buttons for resizing and color switching
- **Smooth Experience**: Optimized hover effects for fluid drawing

## 🚀 Demo

**Live Demo**: [https://myself-meen.github.io/etch-a-sketch/](https://myself-meen.github.io/etch-a-sketch/)

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Dynamic grid generation and interactivity
- **GitHub Pages** - Deployment

## 📖 How to Use

1. **Draw**: Hover your mouse over the grid squares (or tap on mobile) to color them
2. **Change Colors**: Click the "Switch to Random Color" button to toggle between black and multi-color modes
3. **Reset Grid**: Click "reset grid" to clear the canvas and set a new grid size (1-100)
4. **Create Art**: Experiment with different grid sizes and color modes to create unique pixel art!

## 💻 Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/myself-meen/etch-a-sketch.git
   ```

2. Navigate to the project directory:
   ```bash
   cd etch-a-sketch
   ```

3. Open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

## 🎯 Key Learnings

This project was built as part of [The Odin Project](https://www.theodinproject.com/)'s curriculum and helped me develop:

- DOM manipulation and event handling in JavaScript
- Dynamic element creation and styling
- CSS Grid and Flexbox layouts
- Responsive design principles
- User input validation and error handling
- Git workflow and version control

## 📂 Project Structure

```
etch-a-sketch/
├── index.html          # Main HTML structure
├── styles.css          # Styling and layout
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🔧 Core Functionality

### Grid Generation
- Dynamically creates square divs based on user input
- Calculates and applies appropriate dimensions (960px total grid size)
- Supports grids from 1x1 up to 100x100

### Color Modes
- **Black Mode**: Applies solid black color on hover
- **Random Color Mode**: Generates random RGB values for each interaction

### Event Handling
- Mouseover events for desktop drawing
- Touch-friendly for mobile devices
- Click events for control buttons

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/myself-meen/etch-a-sketch/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the project inspiration and curriculum
- The classic Etch-a-Sketch toy for the concept

## 👤 Author

**Meenal**
- GitHub: [@myself-meen](https://github.com/myself-meen)

---

⭐ If you found this project helpful, please consider giving it a star!
