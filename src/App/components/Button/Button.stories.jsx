import React from 'react';
// import {IButtonProps} from './Button.interface'
import Button from './Button'

export default {
    component: Button,
    title: 'my Button'
};

const Template = (args)=><Button {...args}/>;
export const Default = Template.bind({});
Default.args={
    children:'Button value'
}