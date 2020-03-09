/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../App.css';
import '../modules/Connections/DisplayPath/components/PathBox/index.css';

import { withKnobs, text } from '@storybook/addon-knobs';

import PathBox from '../modules/Connections/DisplayPath/components/PathBox';

const stories = storiesOf('Connections2', module);

const props = {
  walk: null,
  journey: {
    name: 'R 332',
    category: 'R',
    passList: []
  },
  departure: {
    arrival: null,
    departure: '2020-03-09T10:13:00+0100',
    station: 'Zermatt'
  },
  arrival: {
    station: 'Visp',
    arrival: '2020-03-09T11:22:00+0100'
  }
};

stories.addDecorator(withKnobs);

stories.add(
  'Path Box',
  () => (
    <PathBox
      key={props.arrival.station}
      data={props}
      sectionIndex={0}
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
