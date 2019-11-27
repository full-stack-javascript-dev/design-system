import React from 'react';
import { Button, ButtonGroup } from './Button';
import { Input } from './Input';
import { FormWrapper, FormControl, FormLabel, FormElement } from "./FormData";
export default {
  title: 'components/FormControl'
};
export const BasicLayoutDemo = () => {
  return React.createElement(FormWrapper, {
    overlay: true,
    emphasis: true
  }, React.createElement(FormControl, null, React.createElement(FormLabel, null, "Label"), React.createElement(FormElement, null, React.createElement(Input, {
    type: "text",
    value: "tests"
  }))), React.createElement(FormControl, null, React.createElement(FormLabel, null), React.createElement(FormElement, null, React.createElement(ButtonGroup, null, React.createElement(Button, {
    onClick: () => {}
  }, "OK"), React.createElement(Button, {
    onClick: () => {}
  }, "Cancel")))));
};