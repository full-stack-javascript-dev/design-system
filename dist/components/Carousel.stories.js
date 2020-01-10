function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { CarouselPromo } from './Carousel';
import { useCarousel } from "../utils/useCarousel";
export default {
  title: 'components/Carousel'
};

const Carousel = ({
  children,
  interval = 5000
}) => {
  const slides = children;
  const length = slides.length;
  const [active, setActive, handlers, style] = useCarousel(length, interval);
  return React.createElement("div", {
    className: "carousel"
  }, React.createElement("ol", {
    className: "carousel-indicators"
  }, slides.map((_, index) => React.createElement("li", {
    onClick: () => setActive(index),
    key: index,
    className: `${active === index ? "active" : ""}`
  }))), React.createElement("div", _extends({
    className: "carousel-content"
  }, handlers, {
    style: style
  }), React.createElement("div", {
    className: "carousel-item"
  }, slides[slides.length - 1]), slides.map((slide, index) => React.createElement("div", {
    className: "carousel-item",
    key: index
  }, slide)), React.createElement("div", {
    className: "carousel-item"
  }, slides[0])));
};

export const Basic = () => {
  return React.createElement(CarouselPromo, {
    style: {
      backgroundColor: 'black',
      color: 'white',
      width: "400px",
      border: "solid 1px red"
    }
  }, React.createElement(Carousel, {
    interval: 3000
  }, React.createElement("div", null, "one"), React.createElement("div", null, "two")));
};