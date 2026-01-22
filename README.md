# Interactive Card Menu Animations

A React application showcasing an interactive card menu with smooth, multi-stage animations and an elegant user interface.

## 🌐 Demo

**[🚀 Live Demo](https://creativetravelist.github.io/interactive-card-menu-animations/)**

## ✨ Features

- 🌸 **Floral-Themed Design**  
  Four beautifully designed floral icon cards representing *Purity*, *Beginnings*, *Luck*, and *Uniqueness*.

- 🎯 **Interactive Card Selection**  
  Clicking a card triggers a rich, immersive animation sequence.

- 🎨 **Smooth Animations**  
  Carefully crafted multi-phase animation transitions for a polished experience.

- 📱 **Responsive Layout**  
  Optimized for different screen sizes and devices.

- 🎭 **Dropdown Menu Interaction**  
  Contextual options are revealed through animated dropdown menus after card selection.

## 🎬 Animation Flow

1. **Card Selection Phase**
   - The selected card is highlighted
   - Other cards gradually fade out (opacity → 0)
   - The selected card moves to the center of the screen

2. **Scene Transition Phase**
   - The card container fades out and is hidden
   - A detailed view of the selected card appears

3. **Menu Expansion Phase**
   - The dropdown menu expands with a scale animation
   - Related options are displayed

4. **Option Selection Phase**
   - Selecting an option triggers a collapse animation
   - The text container closes with animated transitions

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Start the Development Server

```bash
npm start
# or
yarn start
```

The app will run in development mode.
Open http://localhost:3000
 in your browser to view it.


### Build for Production

```bash
npm run build
# or
yarn build
```

### Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Global styles
├── index.js            # Application entry point
├── assets/             # Static assets
├── configs/
│   └── index.js        # Card and dropdown menu configuration
└── utils/
    └── getOffset.js    # Utility for calculating element offsets

```

## 🛠️ Implementation Details

### Animation Timing Control

Animation sequences are precisely orchestrated using `setTimeout` to ensure smooth transitions between stages:

- **0.8s** – The selected card moves to the center of the screen  
- **4.5s** – The card container begins to fade out  
- **5.5s** – The view transitions to the selected card’s detailed layout  
- **7.2s** – The dropdown menu expands and becomes visible  

### Position Calculation

The `getOffset.js` utility function calculates the required offset to accurately move the selected card to the center of the viewport.

### Adjusting Animation Timing

You can fine-tune the animation flow by modifying the `setTimeout` delay values in `App.js`.

### Custom Styling

Edit `App.css` to customize visual styles, color schemes, and animation parameters.



 
