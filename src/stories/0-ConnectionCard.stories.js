/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../App.css';
import '../modules/Connections/DisplayConnections/components/ConnectionCard/index.css';

import { withKnobs, text } from '@storybook/addon-knobs';

import ConnectionCard from '../modules/Connections/DisplayConnections/components/ConnectionCard';

const stories = storiesOf('Connections', module);

const props = {
  duration: '00d03:58:00',
  transfers: 4,
  departure: '2020-03-09T10:13:00+0100',
  arrival: '2020-03-09T14:11:00+0100',
  sections: 5
};

stories.addDecorator(withKnobs);


stories.add(
  'Connection Card',
  () => (
    <ConnectionCard
      header={text('Duration', props.duration)}
      onClick={() => {}}
      title={text('Transfers', props.transfers)}
      arrival={text('Arrival', props.arrival)}
      departure={text('Departure', props.departure)}
      sections={text('Sections', props.sections)}
    />
  ),
  {
    info: {
      text: `
      You can use this not only for tables but we use it mostly for tables 
      `
    }
  }
);
