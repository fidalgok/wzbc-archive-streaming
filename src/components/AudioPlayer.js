import React from 'react';
import styled from '@emotion/styled';
import VisuallyHidden from '@reach/visually-hidden';
import { Pause, Play } from './Icons';
import { fancyTimeFormat } from '../dateUtils';

const PlayerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px 20px;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'action title'
    'action bd'
    'prog prog'
    'ft ft';
  border: 1px solid var(--color-neutral-3);
  border-radius: 5px;
  background: var(--color-neutral-1);
  padding: 0.8rem;
`;
const Button = styled.button`
  font-size: inherit;
  display: flex;
  background: none;
  border: 1px solid var(--color-neutral-3);
  outline: none;
  padding: 8px 0;
  border-radius: 5px;
  background: var(--color-neutral-2);

  &:focus {
    outline: none;
  }
`;
const IconPause = styled(Pause)`
  height: 100%;
  cursor: pointer;
  .secondary {
    fill: var(--color-neutral-10);
  }
`;

const IconPlay = styled(Play)`
  height: 100%;
  cursor: pointer;
  .secondary {
    fill: var(--color-neutral-10);
  }
`;
const StreamInfo = styled.div`
  grid-area: bd;
`;
const Progress = styled.div`
  cursor: pointer;
  grid-area: prog;
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
  percentcomplete: '0%',
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
    case 'streamupdate': {
      // when a new stream is selected reset the player status to pause
      return {
        ...state,
        playerstatus: 'pause',
      };
    }
    case 'timeupdate': {
      // do something with the updated time here
      return {
        ...state,
        percentcomplete: isNaN(action.payload.progress)
          ? '0%'
          : `${action.payload.progress}%`,
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

  React.useEffect(() => {
    dispatch({ type: 'streamupdate' });
  }, [stream.url]);

  function playerReady() {
    dispatch({ type: 'canplay' });
  }
  function handlePausePlay() {
    if (!canplay) return;

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
      <div style={{ gridArea: 'title' }}>WZBC Archive</div>
      <StreamInfo>
        {stream ? (
          <div>
            {stream.formattedDate} - {stream.formattedTime}
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
      <div style={{ gridArea: 'ft' }}>
        {playerRef.current &&
          canplay &&
          fancyTimeFormat(
            Math.floor(
              playerRef.current.duration * (+percentcomplete.slice(0, -1) / 100)
            )
          )}{' '}
        /{' '}
        {playerRef.current &&
          canplay &&
          fancyTimeFormat(playerRef.current.duration)}
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
