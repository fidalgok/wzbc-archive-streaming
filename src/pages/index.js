import React from 'react';
import styled from '@emotion/styled';
import { formatStreams } from '../dateUtils';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DatePicker from '../components/DatePicker';

// change this up to just automatically create playlists for a day
// that you choose. We already know the format of the mp3 file to stream

const StreamContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: 1fr;
`;

const Stream = styled.div`
  padding: 24px 0px;
`;

export const AudioStreamApp = props => {
  const [streams, setStreams] = React.useState(formatStreams());
  const [streamIdx, setStreamIdx] = React.useState(0);

  const currentStream = streams[streamIdx];

  function changeListenDate(id) {
    const idx = streams.findIndex(s => s.id === id);
    setStreamIdx(idx);
  }

  return (
    <>
      <DatePicker changeListenDate={changeListenDate} archive={streams} />
      <StreamContainer>
        {currentStream.streams.map((stream, i) => (
          <Stream key={i}>
            <p>
              Streamed on {stream.formattedDate} at {stream.formattedTime}
            </p>
            <audio controls src={stream.stream} style={{ width: '100%' }} />
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
