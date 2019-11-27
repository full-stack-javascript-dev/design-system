import React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { FormInline } from './FormData';
export default {
  title: 'components/Inline Form'
};
export const InlineFormElements = () => {
  return React.createElement(FormInline, null, React.createElement(Input, {
    type: "text",
    placeholder: "test"
  }), React.createElement(Button, null, "Test"));
};