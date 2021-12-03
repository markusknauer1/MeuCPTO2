import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { render } from 'react-dom'
import 'react-calendar/dist/Calendar.css'

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date())
  const onChange = (date: React.SetStateAction<Date>) => {
    setDate(date)
  }

  return (
    <div className="calendar">
      <Calendar onChange={onChange} value={date} />{' '}
    </div>
  )
}

render(<ReactCalendar />, document.querySelector('#root'))

export default Calendar
