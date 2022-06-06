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
export const warning = Template.bind({});
warning.args={
    ...Default.args,
    bgcolor:'tomato',
}
export const error = Template.bind({});
error.args={
    ...Default.args,
    bgcolor:'red',
}
