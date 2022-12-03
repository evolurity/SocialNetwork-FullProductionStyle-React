import { Story } from '@storybook/react';
// @ts-ignore
import isLokiRunning from '@loki/is-loki-running';
import React from 'react';

export const DisableAnimationsContext = React.createContext(false);

export const DisableAnimationDecorator = (StoryComponent: Story) => (
    <DisableAnimationsContext.Provider value={isLokiRunning()}>
        <StoryComponent />
    </DisableAnimationsContext.Provider>
);
