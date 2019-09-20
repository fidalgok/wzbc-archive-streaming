import React from 'react';
import styled from '@emotion/styled';

const DateContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Date = styled.button`
  border: none;
  background: none;
  font-size: inherit;
  padding: 0.8rem;
  cursor: pointer;
`;

const DatePicker = ({ archive, changeListenDate }) => {
  const dates = archive
    .filter(el => el.streams.length !== 0)
    .map(el => ({
      id: el.id,
      date: el.streams[0].formattedDate,
    }));

  return (
    <>
      <p style={{ padding: '.8rem' }}>Pick a date to get the archives</p>
      <DateContainer>
        {dates.map(date => (
          <Date key={date.id} onClick={() => changeListenDate(date.id)}>
            {date.date}
          </Date>
        ))}
      </DateContainer>
    </>
  );
};

export default DatePicker;
