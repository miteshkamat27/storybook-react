import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

storiesOf('Button',module)
    .add('with primary',() => <Button 
        label="Primary Button"
        onClick={action('click')}
     />)
    .add('with outline', () => <Button 
        label="Outline Button"
        onClick={action('click')}
        style={{ background: '#ccc', border: '3px solid #fecd43' }}
    />)
    .add('with rounded corners', () => <Button 
        label="Rounded Button"
        onClick={action('click')}
        style={{ borderRadius: '15px' }}
    />)
    .add('disabled',() => <Button disabled
        label="Disabled Button"
        onClick={action('click')}
        style={{ background: '#ccc' , border: '2px solid gray', cursor: 'not-allowed' }}
    />)