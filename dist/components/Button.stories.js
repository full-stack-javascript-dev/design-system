import React from 'react';
import { Button } from './Button';
export default {
  title: 'components/Button'
};
export const AllSizes = () => {
  return React.createElement("div", null, React.createElement("p", null, React.createElement(Button, {
    size: "small"
  }, "Hello")), React.createElement("p", null, React.createElement(Button, {
    size: "medium"
  }, "Hello")), React.createElement("p", null, React.createElement(Button, {
    size: "large"
  }, "Hello")), React.createElement("p", null, React.createElement(Button, {
    block: true,
    size: "medium"
  }, "Hello")));
};