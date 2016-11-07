import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../index';
import TweetEmbed from './TweetEmbed';
import InstagramEmbed from './InstaEmbed';

storiesOf('Instagram', module)
  .add('insta', () => (
    <InstagramEmbed url='https://instagr.am/p/BMhHJVnjFyu/'> </InstagramEmbed>
  ))

storiesOf('Twitter', module)
  .add('tweet', () => (
    <TweetEmbed id='789107094247051264'> </TweetEmbed>
  ))
