import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/*
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank',
  },
  children: 'click me to visit google',
}
*/

const anotherElement = (  
    <a href='https://www.google.com' target='_blank'>visit google</a>
)

const anotherUser = "Hey! Kirri"

const reactElement = React.createElement(
  'a', //tag
  {href: 'https://google.com', target: '_blank'}, //object //attributes
  'click me to visit google', //text
  anotherUser        // variables
)

createRoot(document.getElementById('root')).render(

    // anotherElement
    reactElement
    // <App/>

)
