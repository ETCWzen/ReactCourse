# ReactCourse
using this to understand react structure 
https://youtu.be/SqcY0GlETPk

*The Ultimate React Course Notes Sept 17 2024*

The Project:  Make a website that helps you discover new games 
Prerequisites: HTML CSS JavaScript
TypeScript is a super set of Javascript

React : The browser takes HTML code and creates a tree link structure called a Document Object Model(DOM)
DOM allows JavaScript to change the pages content according to users actions. 
e.g. you can hide an element when a button is pressed (AKA Vanilla JavaScript)

As an application code gets bigger, working with DOM can get complicated, that’s where REACT comes into play. Components help use write reusable, modular and better organized code

EXAMPLE: Game website can hold different sections as components(Navbar, Aside, GameGrid)
React is a tree of components, with the app being the Root. 


*Setting up your Environment for development. Creating react APP*

Node version 16 or higher
Npm create vite@4.1.0 > name project > select react framework > select language (typescript)
Cd into folder
Npm install
Npm run dev to run app in browser 

*Project Structure*

Key files and folders : 
Node_modules : third party library is installed
Public folder: all the public assets are placed e.g. images and video files
Src folder: source code of our app. Currently holding our app component 
Index.html : is a basic html Template. In this file the div with the id of root (the container for the app)
<script type = “module” src=”/src/main.tsx »></script> (this is the entry point to the app)
Package.json: where you can find information about the project 


*Creating a react component(function based)*

(you can make a component using JavaScript Class or a function; functions are more popular due to it being more concise and easier to write)
Create new file in src : 
Message.tsx – create a function and export as a default object. 
App.tsx – go into this component and use Message.tsx component 
-	Import Message.tsx so when you use the app component it can display/use the message component 
-	Export the App as a default component. 

*How React Works*:

The current state : 

Component Tree : >>  App (root/top level component) >> Message (child)

APP (root) – Message(child) 

When React starts, it takes this component tree, and builds a javascript structure called the Virtual DOM – VDOM is a lightweight in memory representation of out component tree. Each node is a representation of a component and it’s properties. When the state or data in a component changes, React updates the corresponding node in the VDOM to reflect the new state, then it compares the current version of the VDOM to the previous version to identify the nodes that should be updated. Then it will update those nodes in the act DOM. 

Updating the DOM is not done by REACT but by a companion library : react-dom

React uses the Virtual DOM to interact with the actual DOM (Different from the browser DOM) 

Library = a tool that provides specific functionality 

Framework = A set of tools and guidelines for building apps

REACT library is a good at creating dynamic and interactive user interfaces 

*REACT ECOSYSTEM:*
React is a JavaScript Library for building user interfaces
Library : A tool that provides specific functionality 
Framework: A set of tools and guidelines for building applications  
Frameworks can offer help with (where React is great with UI):
•	Routing – allowing user to go from page to page
•	HTTP – making HTTP calls
•	Managing Application State – 
•	Internationalization 
•	Form Validation 
•	Animations


*Lesson : List group components*

WHAT YOU WILL LEARN : 
-	Building components 
-	Rendering markup with JSX
-	Managing State
-	Pass input via props
-	Debugging react apps

Using bootstrap to help give your app a modern look and feel  

Bootstrap (CSS Library) gives you a bunch of CSS classes for styling   

*KEY SHORT CUT* : ctrl +  D will select the next named element below the line. 

Install bootstrap : go into terminal

Run npm bootstrap5.2.3

Import into css file 

Get HTML From getbootstrap.com

Ctrl + Shift + P 

Set Default Formatter : use “Prettier Formatter” 

*Lesson: Fragments*
Import Fragments from React
<Fragment> can replace <div> so you don’t have an extra element to make react work properly. 
Short version is <> instead of <Fragments>

*Declaring Constants*
Rendering a list in an array.
Arrays have a method “Map method” where it can take the item and change it into a different type. 
When rendering an array of items, using the MAP method, you should give each item an unique key or ID


*Conditional Render* (in JSX expression)
Using an IF statement to return different mark up 

Curly braces can be used in JSX to write dynamic code(where JSX only allows HTML and REACT components )

Sometimes logic can be too complex and pollute our JSX mark up

We can extract the logic and store it into a variable or a constant

Or you can also create function and move the logic into the function. 

The benefit of using a function is that it has parameters so you can display specific based on the different condition.

In the JSX code you can use && instead of ? for the condition state

If statement is true. && will render the true Boolean, and the value

If the statement is false, only the Boolean false value is displayed and nothing else. 

You can use this to render content dynamically

*Handling Events*
How to handle click events 

Where you are rendering an item, you can add a bootstrap class 
className=’list-group-item” -  to apply the CSS styling

in React each element has a property called onClick
In the property of the code statement, add onClick={() => console.log (“Clicked”)}

In order to capture the item that was clicked, simply replace “Clicked” string to (item) accessing item to be stored. 

Also when using the map method you can add a second parameter (index) 

Which can then be accessed to display the index number for the item that was clicked. 

Const handleClick = (event:MouseEvent) =>console.log(event);




Managing State*
How to add classes dynamically:
 //let selectedIndex = 0;
 // Hook
 //const arr = useState(-1);
 //arr[0]// variable (selectedIndex)
 //arr[1]// updater variable


  const [selectedIndex, setSelectedIndex] = useState(-1);
//const [name, setName] = useState(-1); // example of this functions property input 

//*this is the event handler 
//const handleClick = (event: MouseEvent)=>console.log(event);

*Passing Data via Props*
Props is the inputs to our components 
instead of declaring the items as an array you can declare them as a property so then can be passed as an input to the component (similar to when you call a function and give it an argument )
declare interface property : using type annotation to specify the various properties:
Interface *nameOfComponent*Prop {
    item:string[];
    heading:string;
}
Declare props: Props in the function’s property

Since item is no longer a property set in the function you can destruct the parameter into the prop of items and heading  
In order to have access to the property of items and heading, you can declare it them as a 

*Passing Functions via Props*

ListGroup Component : 

you can define a function in Interface Props 
onSelectItem: (item:string) = > console.log(item);

In the listGroup Component:
put onSelectItem into the function's parameter 
and in the onClick function you can call the onSelectItem function  

in the App.tsx add the onSelectItem's parameter:handlerSelectItem as part of the return's prop. 

*Props vs State*
Props 
- input/arguments passed to a component
- similar to Function arguments  
- immutable( not able to change)  / Read only 	
State 
-	Internal data managed by a component
-	Similar to local Variables inside a function 
-	Mutable (can change data) read and write?

*Passing Children* 
Creating a component that will access children

VSCode extension (ES7)
RAFCE  (React Arrow Function Export component)– input into VSCode and will populate the default code snippet 

Using the Children Prop, we can pass children to a component 

*Inspecting Components with React Dev Tools*
install react developer tools in chrome allows for you to see the COMPONENT TREE and access to other tools
- you can see how it was rendered
- you can also see the component's source code with the dev tool

*GetBootStrap Button Exercise*:
Create a bootstrap Button component :
using getbootstrap.com encapsulate a button into a component 

inside the interface props: 
you can set the color to only accept specific strings that match the classNames for each color in the button component 

*Showing alert Exercise*

using onClose you can set the visibility and re-render the page 

TIME STAMP OF VIDEO 1:05:59
https://youtu.be/SqcY0GlETPk?si=48dSVDEsPLJzsv-j&t=3959

