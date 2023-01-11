import React from 'react'

function Dial({date}) {
  
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className='dial'>
      <h3>{`${(date.hour % 12).toString().padStart(2, '0')}:${(date.min).toString().padStart(2, '0')}:${(date.sec).toString().padStart(2, '0')} ${date.hour > 12 && date.hour < 24 ? 'PM' : 'AM'}`}</h3>
      <h5>{date.date} {month[date.month]}, {days[date.day % 7]}</h5>
    </div>
  )
}

export default Dial
