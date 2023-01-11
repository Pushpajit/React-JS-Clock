import React from 'react'

function Dial() {
    const [date, setDate] = React.useState({hour:0, min:0, sec:0, day:0, date:0, month:0})

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    // console.log(time.get)
    
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
    <div className='dial'>
      <h3>{`${(date.hour % 12).toString().padStart(2, '0')}:${(date.min).toString().padStart(2, '0')}:${(date.sec).toString().padStart(2, '0')} ${date.hour > 12 && date.hour < 24 ? 'PM' : 'AM'}`}</h3>
      <h5>{date.date} {month[date.month]}, {days[date.day]}</h5>
    </div>
  )
}

export default Dial
