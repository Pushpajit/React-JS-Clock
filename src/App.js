import React from 'react';
import './App.css';
import Dial from './components/Dial';
import Header from './components/Header';

function App() {
  const [date, setDate] = React.useState({hour:0, min:0, sec:0, day:0, date:0, month:0})

    React.useEffect(() => {

        setInterval(() => {
          setDate((prev) => {
            const time = new Date()
              return {
                  hour: time.getHours(),
                  min: time.getMinutes(),
                  sec: time.getSeconds(),
                  day: time.getDay(),
                  date: time.getDate(),
                  month: time.getMonth()
                  
              }
          })
        }, 1000)

    },[])


  return (
    <div className='container'>
      <Header date= {date}/>
      {/* Sending date state as a props */}
      <Dial date= {date}/>
    </div>
  );
}

export default App;
