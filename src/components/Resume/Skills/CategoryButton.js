import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import '../../../css/components/Button.css';

/* const Button = styled.button`
  @include vendor('appearance', 'none');
  @include vendor('transition', (
    'background-color #{_duration(transition)} ease',
    'box-shadow #{_duration(transition)} ease',
    'color #{_duration(transition)} ease'
  ));
  background-color: transparent;
  border: 0;
  box-shadow: inset 0 0 0 1px _palette(border);
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Space Mono', 'Consolas', 'Menlo', 'Droid Sans Mono', monospace;
  font-size: 0.6em;
  font-weight: _font(weight-heading-bold);
  height: _size(element-height) * 1.75;
  letter-spacing: _font(kerning-heading);
  line-height: _size(element-height) * 1.75;
  padding: 0 2.5em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    box-shadow: inset 0 0 0 1px _palette(accent);
    color: _palette(accent) !important;

    &:active {
      background-color: transparentize(_palette(accent), 0.95);
    }
  }

  &:before, &:after {
    color: _palette(fg-light);
    position: relative;
  }

  &:before {
    left: -1em;
    padding: 0 0 0 0.75em;
  }

  &:after {
    left: 1em;
    padding: 0 0.75em 0 0;
  }

  &.fit {
    display: block;
    margin: 0 0 (_size(element-margin) * 0.5) 0;
    width: 100%;
  }

  &.big {
    font-size: 0.7em;
    padding: 0 3em;
  }

  &.small {
    font-size: 0.5em;
  }

  &.disabled,
  &:disabled {
    @include vendor('pointer-events', 'none');
    color: _palette(border) !important;

    &:before {
      color: _palette(border) !important;
    }
  }
` */

const CategoryButton = ({ handleClick, active, label }) => (
  <button
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

export default CategoryButton;
