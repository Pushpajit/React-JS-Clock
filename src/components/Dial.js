import React from 'react'

function Dial({date}) {
  
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className='dial'>
      <h3>{`${(date.hour % 12).toString().padStart(2, '0')}:${(date.min).toString().padStart(2, '0')}:${(date.sec).toString().padStart(2, '0')} ${date.hour > 12 && date.hour < 24 ? 'PM' : 'AM'}`}</h3>
      <h5>{date.date} {month[date.month]}, {days[date.day % 7]}</h5>
  
      {date.temp < 20 && <p style={{color: '#2F90FE'}}><i className="fa-solid fa-temperature-three-quarters"></i> {date.temp}°C</p>}
      {date.temp >= 20 && date.temp < 32 && <p style={{color: 'orange'}}><i className="fa-solid fa-temperature-three-quarters"></i> {date.temp}°C</p>}
      {date.temp >= 32 && <p style={{color: 'red'}}><i className="fa-solid fa-temperature-three-quarters"></i> {date.temp}°C</p>}
    </div>
  )
}

export default Dial
