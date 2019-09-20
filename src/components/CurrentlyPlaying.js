import React from 'react';
import styled from '@emotion/styled';
import AudioPlayer from './AudioPlayer';

const CurrentlyPlaying = ({ stream }) => <AudioPlayer stream={stream} />;

export default CurrentlyPlaying;
