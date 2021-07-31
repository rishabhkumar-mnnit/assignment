import './App.css';
import StripContainer from './components/StripContainer';
import { useState } from 'react';
import { Container,Card } from 'react-bootstrap';

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
    }
  ]
};
function App() {
  
  return (
    <div className="App">
        <Container>
            <Card>
              <Card.Header>Prdouct Deatils</Card.Header>
              <Card.Body>
                  Desktop 
              </Card.Body>
            </Card>
        </Container>
        
        <StripContainer options={ELEMENTS_OPTIONS}/>
    </div>
  );
}

export default App;
