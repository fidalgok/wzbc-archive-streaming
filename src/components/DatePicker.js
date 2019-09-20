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
  margin: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    transition: all 0.2s ease;
    &:hover {
      background: var(--color-neutral-2);
    }
  }
  & .active {
    background: var(--color-primary-5);
    color: var(--color-neutral-white);

    &:hover {
      background: var(--color-primary-5);
    }
  }
`;

const DatePicker = ({ archive, changeListenDate, active }) => {
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
            <span className={active === date.id ? `active` : ''}>
              {date.date}
            </span>
          </Date>
        ))}
      </DateContainer>
    </>
  );
};

export default DatePicker;
