import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Select value',
    options: [
        { value: '123', content: 'first option' },
        { value: '124', content: 'second option' },
    ],
};
