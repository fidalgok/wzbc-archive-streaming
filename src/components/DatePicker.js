import React from 'react';
import styled from '@emotion/styled';

const DateContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  scroll-snap-type: x proximity;
`;
const Heading = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0;
  margin: 1.2rem 0 1.2rem 0;
  line-height: 1.2;
  letter-spacing: 1px;
`;
const Date = styled.button`
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  margin: 0.4rem 0.4rem;
  padding: 0;

  div {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 4rem;
    transition: background 0.12s ease;
    background: var(--color-neutral-1);
    border: 1px solid var(--color-neutral-3);
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
      dayOfWeek: el.streams[0].dayOfWeek,
    }));

  return (
    <>
      <Heading className="heading">Archive Dates</Heading>
      <DateContainer>
        {dates.map(date => (
          <Date key={date.id} onClick={() => changeListenDate(date.id)}>
            <div className={active === date.id ? `active` : ''}>
              <span>{date.dayOfWeek}</span>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                {date.date.slice(4)}
              </span>
              <span>{date.date.slice(0, 3)}</span>
            </div>
          </Date>
        ))}
      </DateContainer>
    </>
  );
};

export default DatePicker;
