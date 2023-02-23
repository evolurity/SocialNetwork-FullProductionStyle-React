import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;
const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'test1',
            user: {
                username: 'user',
                id: '1',
            },
        },
        {
            id: '2',
            text: 'khe-khe',
            user: {
                username: 'punya',
                id: '1',
            },
        },

    ],

};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
