import React from 'react'
import { addParameters, configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme";
import { GlobalStyle } from "../src/components/GlobalStyle";


const StoryBookHostDecorator = storyFn => (<ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <div style={{ padding:'20px'}}>{storyFn()}</div>
  </ThemeProvider>);
addDecorator(StoryBookHostDecorator);

addParameters({
  options:{
    panelPosition: 'right',
  },
})
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(tsx)$/), module);

