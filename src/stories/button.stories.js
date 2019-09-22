import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select, radios } from '@storybook/addon-knobs';

import Button from '../components/Button';

storiesOf('Button',module)
    .add('with primary',() => <Button 
        label="Primary Button"
        onClick={action('click')}
     />, {
         notes: 'A simple example of primary button'
     })
    .add('with secondary',() => <Button 
        label="Secondary Button"
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
    .addDecorator(withKnobs)
    .add('knobs with button', () => <Button 
        disabled={boolean('Disabled',false)}
        label="Hello Storybook"
        ></Button>)
    .add('as dynamic variables', () => {
        const name = text('Name', 'Mitesh Kamat');
        const age = number('Age', 29);
        
        const content = `I am ${name} and I'm ${age} years old.`;
        return (<div>{content}</div>);
    })
    .add('with select options',()=> {
        const label = 'Colors';
        const options = {
            Red: 'red',
            Blue: 'blue',
            Yellow: 'yellow',
            Rainbow: ['red', 'orange', 'etc'],
            None: null,
          };
        const defaultValue = 'red';
        return (<div>{select(label, options, defaultValue)}</div>)

    })
    .add('with radio buttons',() => {
        const label = 'Fruits';
        const options = {
            Kiwi: 'kiwi',
            Guava: 'guava',
            Watermelon: 'watermelon',
        };
        const defaultValue = 'kiwi';
        return(<div>{radios(label,options,defaultValue)}</div>)
    })