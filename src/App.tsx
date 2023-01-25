import React, { useState } from 'react';
// import sections from './sections';
import { Navigation } from './components/Navigation/Navigation';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Timeline } from './components/Timeline/Timeline';
import { Work } from './components/Work/Work';
import { Contact } from './components/Contact/Contact';
import './App.css';

const sections = [
  {
    displayContent: <Home/>,
    name: 'home',
    title: 'home',
  },
  {
    displayContent: <About/>,
    name: 'about',
    title: 'about',
  },
  {
    displayContent: <Timeline/>,
    name: 'timeline',
    title: 'timeline',
  },
  {
    displayContent: <Work/>,
    name: 'work',
    title: 'work',
  },
  {
    displayContent: <Contact/>,
    name: 'contact',
    title: 'contact',
  },
];

const App = () => {
  const [content, setContent] = useState('home');

  return (
    <div className="App">
      <header className="App-header">
        <Navigation
          title={`hi, i'm carolyn.`}
          sections={sections}
          onClick={setContent}
        />
      </header>
      <ContentContainer content={content} sections={sections} />
    </div>
  );
};

export default App;
