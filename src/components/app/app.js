  
import React from 'react';
import Form from '../form';
import './app.sass';

const App = () => {
  
  return (
    <div className="order">
      <h1 className="order__heading">Заказать билеты</h1>
      <Form />
    </div>
  );
}

export default App;