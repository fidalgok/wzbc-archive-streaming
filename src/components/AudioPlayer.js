import React from 'react';
import styled from '@emotion/styled';
import VisuallyHidden from '@reach/visually-hidden';
import { Pause, Play } from './Icons';
import { fancyTimeFormat } from '../dateUtils';

const PlayerContainer = styled.div`
  display: grid;
  height: 100px;
  width: 100%;
  grid-column-gap: 20px;
  grid-template-areas:
    'action title'
    'action bd'
    'ft ft';
  border: 1px solid var(--color-neutral-8);
  padding: 0.8rem;
`;
const Button = styled.button`
  font-size: inherit;
  background: none;
  border: none;
  outline: none;
`;
const IconPause = styled(Pause)`
  height: 100%;
  cursor: pointer;
`;

const IconPlay = styled(Play)`
  height: 100%;
  cursor: pointer;
`;
const StreamInfo = styled.div`
  grid-area: title;
`;
const Progress = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  grid-area: ft;
  background: var(--color-neutral-2);
  .progress-bar {
    height: 8px;
    width: ${({ percentcomplete }) => `${percentcomplete}` || '0%'};
    background: var(--color-primary-5);
  }
`;

const Thumb = styled.div`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
  background: hsl(0, 51%, 46%);
`;

const PlayerControlContainer = styled.div`
  grid-area: action;
`;

const initialState = {
  playerstatus: 'pause',
  canplay: false,
  percentcomplete: 0,
  waiting: false,
  ended: false,
};

const playerReducer = (state, action) => {
  switch (action.type) {
    case 'canplay': {
      return {
        ...state,
        canplay: true,
      };
    }
    case 'pauseplay': {
      // toggle the play state
      return {
        ...state,
        playerstatus: state.playerstatus === 'play' ? 'pause' : 'play',
      };
    }
    case 'timeupdate': {
      // do something with the updated time here
      return {
        ...state,
        percentcomplete: `${
          isNaN(action.payload.progress) ? 0 : action.payload.progress
        }%`,
      };
    }

    default:
      throw new Error(`Player action ${action.type} not recognized`);
  }
};

const Player = ({ stream }) => {
  const [
    { playerstatus, percentcomplete, canplay, ended },
    dispatch,
  ] = React.useReducer(playerReducer, initialState);

  const playerRef = React.useRef(null);
  const progressRef = React.useRef(null);

  function playerReady() {
    console.log('player is ready to play');
    dispatch({ type: 'canplay' });
  }
  function handlePausePlay() {
    if (!canplay) return;
    console.log('changing play state');
    if (playerstatus === 'play') {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
    dispatch({ type: 'pauseplay' });
  }
  function handleTimeUpdate() {
    const percentComplete = parseFloat(
      (playerRef.current.currentTime / playerRef.current.duration) * 100
    );
    dispatch({ type: 'timeupdate', payload: { progress: percentComplete } });
  }
  function handleScrub(e) {
    if (!canplay) return;
    const clickPosition =
      (e.pageX - progressRef.current.offsetLeft) /
      progressRef.current.offsetWidth;
    const clickTime = clickPosition * playerRef.current.duration;
    playerRef.current.currentTime = clickTime;
    handleTimeUpdate();
  }
  return (
    <PlayerContainer>
      <PlayerControlContainer>
        <Button onClick={handlePausePlay}>
          {playerstatus === 'pause' ? (
            <>
              <IconPlay />
              <VisuallyHidden>play</VisuallyHidden>
            </>
          ) : (
            <>
              <IconPause />
              <VisuallyHidden>pause</VisuallyHidden>
            </>
          )}
        </Button>
      </PlayerControlContainer>
      <StreamInfo>
        {stream ? (
          <div>
            streamed on {stream.formattedDate} at {stream.formattedTime}
          </div>
        ) : (
          <div>No Stream selected</div>
        )}
      </StreamInfo>
      <Progress
        onClick={handleScrub}
        percentcomplete={percentcomplete}
        ref={progressRef}
      >
        <div className="progress-bar" />
      </Progress>
      <div>
        {playerRef.current &&
          fancyTimeFormat(
            Math.floor(
              playerRef.current.duration * (+percentcomplete.slice(0, -1) / 100)
            )
          )}{' '}
        / {playerRef.current && fancyTimeFormat(playerRef.current.duration)}
      </div>
      <audio
        ref={playerRef}
        src={stream ? stream.url : ''}
        onCanPlay={playerReady}
        onTimeUpdate={handleTimeUpdate}
      />
    </PlayerContainer>
  );
};

export default Player;
