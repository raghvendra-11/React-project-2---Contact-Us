// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import styles from "./App.css"

import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (<div>
<Navigation />
<main className="main_container">
<ContactHeader />
<ContactForm />
</main>
  </div>
  )
}

export default App
