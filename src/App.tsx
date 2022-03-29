import React from 'react';
import './App.css';
import Guests from './components/guests';
import GuestState from './adapters/contexts/GuestState';
import { dependenciesLocator } from './adapters/IoC/IocContainer';

function App() {
  return (
    <GuestState ioc={dependenciesLocator}>
      <div className="App">
        <Guests />
      </div>
    </GuestState>
  );
}
export default App;
