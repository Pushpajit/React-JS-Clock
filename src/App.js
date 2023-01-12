import React from 'react';
import './App.css';
import Dial from './components/Dial';
import Header from './components/Header';

function App() {
  const [date, setDate] = React.useState({hour:0, min:0, sec:0, day:0, date:0, month:0, temp: 14})
  
  // fetch(API).then(res => res.json()).then(data => console.log(data))


  React.useEffect(() => {

        setInterval(() => {
          setDate((prev) => {
            const time = new Date()
              return {
                  ...prev,
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

  React.useEffect(()=> {
    setInterval(() => {
        console.log("Fetch Ran")
        setDate(prev => {
          return{
            ...prev,
            temp: prev.temp + 1
          }
        })
        
    }, 10000)
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
