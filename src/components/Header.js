import React from 'react'

function Header({date}) {
  return (
    <header>
      {(date.hour >= 0 && date.hour < 4) && "Good Night 😪"}
      {(date.hour >= 4 && date.hour < 12) && "Good Morning 🌄🌞✨"}
      {(date.hour >= 12 && date.hour < 18) && "Good Afternoon 🌅🎇🎉"}
      {(date.hour >= 18 && date.hour < 24) && "Good Evening 🌙🎇"}
    </header>
  )
}

export default Header
