import React from 'react';
import styled from '@emotion/styled';
import { formatStreams } from '../dateUtils';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DatePicker from '../components/DatePicker';
import CurrentlyPlaying from '../components/CurrentlyPlaying';

// change this up to just automatically create playlists for a day
// that you choose. We already know the format of the mp3 file to stream

const StreamContainer = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 4rem)`};
  width: 100%;
  overflow-x: auto;
  margin-top: 1.2rem;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  scroll-snap-type: x proximity;
  padding: 0.4rem 0.5rem;
`;
const Heading = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0;
  margin: 1.2rem 0 1.2rem 0;
  line-height: 1.2;
  letter-spacing: 1px;
`;

const Stream = styled.button`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  width: 4rem;
  transition: background 0.12s ease;
  background: var(--color-neutral-1);
  border: 1px solid var(--color-neutral-3);
  padding: 4px 0;
  cursor: pointer;
  &:hover {
    background: var(--color-neutral-2);
  }

  &.active {
    background: var(--color-primary-5);
    color: var(--color-neutral-white);
    border: 1px solid var(--color-primary-5);
    &:hover {
      background: var(--color-primary-5);
    }
  }
`;

export const AudioStreamApp = () => {
  const [streams] = React.useState(formatStreams());
  const [streamIdx, setStreamIdx] = React.useState(0);
  const [selectedStream, setSelectedStream] = React.useState(
    streams[streamIdx].streams[0]
  );
  const pickedDateStreams = streams[streamIdx];

  function changeListenDate(id) {
    const idx = streams.findIndex(s => s.id === id);
    setStreamIdx(idx);
  }

  return (
    <>
      <CurrentlyPlaying stream={selectedStream} />
      <DatePicker
        changeListenDate={changeListenDate}
        archive={streams}
        active={pickedDateStreams.id}
      />
      <Heading>Time</Heading>
      <StreamContainer cols={streams[streamIdx].streams.length}>
        {pickedDateStreams.streams.map((stream, i) => (
          <Stream
            key={i}
            onClick={() => setSelectedStream(stream)}
            className={
              stream.formattedTime === selectedStream.formattedTime
                ? 'active'
                : ''
            }
          >
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
              {stream.formattedTime.slice(0, -3)}
            </span>
            <span>{stream.formattedTime.slice(-3)}</span>
          </Stream>
        ))}
      </StreamContainer>
      {/* <iframe src="https://spinitron.com/WZBC/calendar"></iframe> */}
    </>
  );
};

// need to map over the dates and return an object for each date
// will return YYYY-MM-DD-HH-00

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AudioStreamApp />
  </Layout>
);

export default IndexPage;
