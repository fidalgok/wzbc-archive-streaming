import React from 'react'

import { subDays, format, isToday } from 'date-fns'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'

// change this up to just automatically create playlists for a day
// that you choose. We already know the format of the mp3 file to stream

function getDateStreams(date = new Date()) {
  const formattedDate = format(date, 'yyyy-MM-dd')
  const baseUrl = `http://zbconline.com/wzbc-${formattedDate}`
  const currentHour = date.getHours()

  const streams = []
  for (let i = 0; i <= currentHour; i++) {
    streams.push(
      baseUrl.concat(`${i >= 10 ? `-${i}-00.mp3` : '-0'.concat(`${i}-00.mp3`)}`)
    )
  }
  return streams
}

const Form = styled.form`
  display: flex;
  align-items: flex-end;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.2rem;

  input {
    border: 1px solid hsl(0, 0%, 55%);
    padding: 1.2rem 4px;
    font-size: inherit;
    font-family: inherit;
  }
`

const StreamContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: 1fr;
`

const Stream = styled.div`
  padding: 24px 0px;
`

export const AudioStreamApp = props => {
  const [streams, setStreams] = React.useState(getDateStreams())
  const [year, setYear] = React.useState(new Date().getFullYear().toString())
  const [month, setMonth] = React.useState(
    (new Date().getMonth() + 1).toString().padStart(2, '0')
  )
  const [day, setDay] = React.useState(
    new Date()
      .getDate()
      .toString()
      .padStart(2, '0')
  )

  function handleChange(e) {
    switch (e.target.name) {
      case 'year':
        return setYear(e.target.value)
      case 'month':
        return setMonth(e.target.value)
      case 'day':
        return setDay(e.target.value)
      default:
        break
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    const date = new Date(
      Number.parseFloat(year),
      Number.parseFloat(month) - 1,
      Number.parseFloat(day)
    )

    // check to see if date is today
    if (isToday(date)) {
      date.setHours(new Date().getHours())
    } else {
      date.setHours(23)
    }
    setStreams(getDateStreams(date))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="month">Month</label>
          <input
            type="text"
            id="month"
            name="month"
            value={month}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="day">Day</label>
          <input
            type="text"
            id="day"
            name="day"
            value={day}
            onChange={handleChange}
          />
        </InputGroup>
        <button type="submit">Grab the streams</button>
      </Form>
      <StreamContainer>
        {streams.map((stream, i) => (
          <Stream key={i}>
            <p>
              Streamed on {month} / {day} at {formatAmPm(stream.slice(-9, -7))}
            </p>
            <audio controls src={stream} />
          </Stream>
        ))}
      </StreamContainer>
      {/* <iframe src="https://spinitron.com/WZBC/calendar"></iframe> */}
    </>
  )
}
function formatAmPm(hour) {
  const hourAsNumber = parseFloat(hour)
  if (hour === '00') return '12 a.m.'
  if (parseFloat(hour) < 12) {
    return `${hour} a.m.`
  }
  return `${hourAsNumber === 12 ? hourAsNumber : hourAsNumber - 12} p.m.`
}
function getPrevDays(numDays) {
  // returns a function that will give an array of dates starting from today
  // and going back the number of days specified in the functions argument
  return () => {
    const dates = []
    for (let i = numDays; i >= 0; i--) {
      dates.push(subDays(new Date(), i))
    }
    return dates
  }
}

// need to map over the dates and return an object for each date
// will return YYYY-MM-DD-HH-00

const getPrev10Days = getPrevDays(10)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AudioStreamApp />
  </Layout>
)

export default IndexPage
