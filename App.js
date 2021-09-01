import './App.css';
import Box from './box';
import Display from './display';
import Menu from './menu';

function App() {
  return (
    <div className='Main_container'>
     <Menu />
     <Box header='Reviews' number='1,281' />
     <Box header='Average rating' number='4.6' />
     <Box header='Sentiment Analysis' number='960' number2='122' number3='321'/>
     <Display />
    </div>
  );
}

export default App;
