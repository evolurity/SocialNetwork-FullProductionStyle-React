import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
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
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at hic impedit itaque ratione sequi soluta? A atque culpa ducimus eius omnis, vero voluptatem. Beatae corporis cum debitis dolorem, dolores explicabo in iure laboriosam molestias nemo obcaecati officia quibusdam quis repellat repellendus sequi tempora voluptas voluptatem! Enim iusto nihil nostrum.\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at hic impedit itaque ratione sequi soluta? A atque culpa ducimus eius omnis, vero voluptatem. Beatae corporis cum debitis dolorem, dolores explicabo in iure laboriosam molestias nemo obcaecati officia quibusdam quis repellat repellendus sequi tempora voluptas voluptatem! Enim iusto nihil nostrum.\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
