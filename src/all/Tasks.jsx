import React, { useState } from 'react'

export default function Tasks() {
    const[isHello, setIsHello] = useState(true);
    const toggleText = () => {
        setIsHello(prev => !prev);
    };
    const[num, setNum] = useState(null);
    const generateRandomnum = () => {
        const randomNum = Math.floor(Math.random()*100)+1;            //math.floor le round off(round down) garcha number lai-  math.ceil use garyo bhane round up garcha-  math.round le rounds to nearest integer- usually math.floor is used rather than math.ceil and math.round 
        setNum(randomNum);
        //math.random le 0 to 1 samma num generate gardo raicha tei bhayera jata samma chayeko tya samma multiply gareko
    };

    const[text, addText] = useState('');
    const handleChange = (e) => addText(e.target.value);
    const clearInput = () => addText('');


    const[data, setData] = useState('');
    const generateRandomVal =() => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      let randomval = '';
      let length = 8;

      for(let i=0; i<length; i++) {
        randomval += characters.charAt(Math.floor(Math.random()* characters.length));
      }
      setData (randomval);
    };

    const [color, setColor] = useState("red");
   
    



  return (
    <div className='p-4'>
    <div className='p-4 border-4 border-dotted m-2 border-blue-300'>
      <h1 className='font-bold text-2xl py-3'>Task1</h1>
      <p className='font-medium'>Create a React component called ToggleText.Use useState to store a boolean value (true or false).Show the text "Hello World" if the state is true, otherwise show "Goodbye World".Add a button that toggles the text each time it is clicked.</p>
      <h1 className='py-4'>{isHello ? "Hello World!" : "Goodbye World!"}</h1>
      <button
      className='px-3 py-1 bg-pink-300'
      onClick={toggleText}
      >{isHello ? "Goodbye!" : "Hello!"}</button>
    </div>

    <div className='p-4 border-4 border-dotted m-2 border-blue-300'>
        <h1 className='text-2xl font-bold py-3'>Task 2</h1>
        <p className='font-medium'>Get random numbers from 1 to 100 using useState</p>
        <h1 className='py-4'>{num !== null ? `Random number: ${num}`: "Click to get a number"}</h1>
        <button 
        onClick={generateRandomnum}
        className='px-3 py-1 bg-green-200'
        >Click</button>
    </div>

    <div className='p-4 border-4 border-dotted m-2 border-blue-300'>
        <h1 className='font-bold text-2xl py-3'>Task 3</h1>
        <p className='font-medium'>{` Create a React component called InputSaver.Use useState to store text entered in an <input> field.Display the entered text live below the input in a <p>.Add a button that clears the input when clicked.📌 Bonus: Show a message "Input is empty" when the field has no text.`}</p>
        <input type='text' placeholder='enter here...' value={text} onChange={handleChange} className='w-full p-2 border-2 border-gray-200 my-4'/>
        <button className='p-2' onClick={clearInput}/>
        <p className='font-bold text-[20px]'>{text? `your text is: ${text}` : "Input is empty"}</p>


    </div>
    
    <div className='p-4 border-4 border-dotted m-2 border-blue-300'>
      <h1  className='font-bold text-2xl py-3'>Task 4</h1>
      <p className='font-medium'>Create random data using useState</p>
      <p className=' my-4'>Random String: {data}</p>
      <button
      onClick={generateRandomVal} 
      className=' px-3 py-1 bg-purple-200 text-white'
      >Generate string</button>
    </div>

    <div className='p-4 border-4 border-dotted m-2 border-blue-300'>
      <h1 className='font-bold text-2xl py-3'>Task 5</h1>
      <p className=' font-medium'> Create a React component called `ColorBox`.Use `useState` to store a color value (default `"red"`).Display a square (`div`) with the current color as its background.Add three buttons: `"Red"`, `"Green"`, `"Blue"`. Clicking each button should update the box color.📌 Bonus: Add an input field where the user can type any CSS color name/hex and apply it.</p>
      <input placeholder='Type your favorite color' type='text' className='w-full px-3 py-1.5 my-4 border-1 border-gray-200'
      onChange={(e) => setColor(e.target.value)}
      ></input>
      <div className='h-20 w-20 border-2'
      style={{background:color}}
      ></div>
    </div>
    </div>
  )
}




// // Exercise 1: Show / Hide Box

// 👉 Create a component with a button that toggles a colored box on and off.

// Expected Behavior:

// Button says “Hide Box” when box is visible.

// Button says “Show Box” when box is hidden.

// 💡 Hint: use isVisible as your boolean state.

// 📝 Exercise 2: Enable / Disable Button

// 👉 Have two buttons:

// One button toggles a boolean state.

// The other button is enabled/disabled based on that state.

// Expected Behavior:

// If state is true, the second button is enabled.

// If state is false, the second button is disabled (unclickable, with a grayed-out style).

// 💡 Hint: use disabled={...} property.

// 📝 Exercise 3: Dark Mode Toggle 🌙 / ☀️

// 👉 Make a page that toggles between dark mode and light mode when clicking a button.

// Expected Behavior:

// If isDark is true → Background is black, text is white, button says Light Mode.

// If isDark is false → Background is white, text is black, button says Dark Mode.

// 💡 Hint: Apply conditional classes or inline styles based on the state.


// 1. Counter with Increment/Decrement

// Create a Counter component.

// Display a number starting at 0.

// Add + and - buttons to increase/decrease the number.

// Bonus: Disable the - button if the number is 0.

// 2. Toggle Visibility

// Create a ToggleText component.

// Display a button: Show / Hide.

// Clicking the button shows or hides some text below it.

// 3. Random Quote Generator

// Create a RandomQuote component.

// Store an array of quotes.

// Add a button “Get Random Quote”.

// Clicking shows a random quote from the array.

// 4. Color Picker (like your ColorBox)

// Create buttons for 5 different colors.

// Clicking a button changes the div color.

// Bonus: Add an input to type any CSS color and apply it live.

// 5. Temperature Converter

// Create a TempConverter component.

// Input field for Celsius.

// Show Fahrenheit below it dynamically as you type.

// Formula: F = (C * 9/5) + 32.

// 6. Password Visibility Toggle

// Input for password.

// Add a button Show/Hide that toggles the password type (text / password).

// 7. To-Do List

// Input + Add button.

// Add items to a list displayed below.

// Bonus: Add a delete button for each item.

// 8. Random String Generator

// Like the one you did.

// Input for string length.

// Generate a random string of letters, numbers, or symbols.

// 9. Like Button

// Display a heart icon or “Like” text.

// Clicking toggles between liked / unliked.

// Bonus: Display total likes count.

// 10. Dice Roller

// Display a number (1–6) or dice image.

// Button Roll Dice generates a random number.

// Bonus: Show dice face images instead of numbers.