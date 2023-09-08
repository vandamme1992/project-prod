import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                Aliquid aperiam architecto,\n'
        + '                assumenda corporis culpa cum doloribus eaque\n'
        + '                hic magnam nisi nulla omnis perspiciatis quae similique\n'
        + '                soluta veniam veritatis, vero voluptas.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                Aliquid aperiam architecto,\n'
        + '                assumenda corporis culpa cum doloribus eaque\n'
        + '                hic magnam nisi nulla omnis perspiciatis quae similique\n'
        + '                soluta veniam veritatis, vero voluptas.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
