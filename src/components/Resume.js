import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/components/Resume.css';
// import Main from '../layouts/Main';
// import styled from 'styled-components';
import CategoryButton from './Resume/Skills/CategoryButton';

import Education from './Resume/Education';
import Experience from './Resume/Experience';
import Skills from './Resume/Skills';
import Courses from './Resume/Courses';
import References from './Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

/* const Styles = styled.div`
  ol {
    list-style: decimal;
    margin: 0 0 _size(element-margin) 0;
    padding-left: 1.25em;

    li {
      padding-left: 0.25em;
    }
  }

  ul {
    list-style: disc;
    margin: 0 0 _size(element-margin) 0;
    padding-left: 1em;

    li {
      padding-left: 0.5em;
    }

    &.alt {
      list-style: none;
      padding-left: 0;

      li {
        border-top: solid 1px _palette(border);
        padding: 0.5em 0;

        &:first-child {
          border-top: 0;
          padding-top: 0;
        }
      }
    }

    &.icons {
      cursor: default;
      list-style: none;
      padding-left: 0;

      li {
        display: inline-block;
        padding: 0 1em 0 0;

        &:last-child {
          padding-right: 0;
        }

        > * {
          @include icon;
          border: 0;

          .label {
            display: none;
          }
        }
      }
    }

    &.actions {
      cursor: default;
      list-style: none;
      padding-left: 0;

      li {
        display: inline-block;
        padding: 0 (_size(element-margin) * 0.75) 0 0;
        vertical-align: middle;

        &:last-child {
          padding-right: 0;
        }
      }

      &.pagination {
        .next {
          @include icon('', after);

          &:after {
            content: '\f054';
          }
        }

        .previous {
          @include icon('', before);

          &:before {
            content: '\f053';
          }
        }

        @include breakpoint(large) {
          text-align: center;

          .next, .previous {
            min-width: 20em;
          }
        }

        @include breakpoint(small) {
          .next, .previous {
            min-width: 18em;
          }
        }
      }

      &.small {
        li {
          padding: 0 (_size(element-margin) * 0.5) 0 0;
        }
      }

      &.vertical {
        li {
          display: block;
          padding: (_size(element-margin) * 0.75) 0 0 0;

          &:first-child {
            padding-top: 0;
          }

          > * {
            margin-bottom: 0;
          }
        }

        &.small {
          li {
            padding: (_size(element-margin) * 0.5) 0 0 0;

            &:first-child {
              padding-top: 0;
            }
          }
        }
      }

      &.fit {
        display: table;
        margin-left: (_size(element-margin) * -0.5);
        padding: 0;
        table-layout: fixed;
        width: calc(100% + #{(_size(element-margin) * 0.5)});

        li {
          display: table-cell;
          padding: 0 0 0 (_size(element-margin) * 0.5);

          > * {
            margin-bottom: 0;
          }
        }

        &.small {
          margin-left: (_size(element-margin) * -0.25);
          width: calc(100% + #{(_size(element-margin) * 0.25)});

          li {
            padding: 0 0 0 (_size(element-margin) * 0.25);
          }
        }
      }

      @include breakpoint(xsmall) {
        margin: 0 0 _size(element-margin) 0;

        li {
          padding: (_size(element-margin) * 0.5) 0 0 0;
          display: block;
          text-align: center;
          width: 100%;

          &:first-child {
            padding-top: 0;
          }

          > * {
            width: 100%;
            margin: 0 !important;

            &.icon {
              &:before {
              }
            }
          }
        }

        &.small {
          li {
            padding: (_size(element-margin) * 0.25) 0 0 0;

            &:first-child {
              padding-top: 0;
            }
          }
        }
      }
    }

    &.posts {
      list-style: none;
      padding: 0;

      li {
        border-top: dotted 1px _palette(border);
        margin: (_size(element-margin) * 0.75) 0 0 0;
        padding: (_size(element-margin) * 0.75) 0 0 0;

        &:first-child {
          border-top: 0;
          margin-top: 0;
          padding-top: 0;
        }
      }

      article {
        @include vendor('display', 'flex');
        @include vendor('align-items', 'flex-start');
        @include vendor('flex-direction', 'row-reverse');

        .image {
          display: block;
          margin-right: 1.5em;
          min-width: 4em;
          width: 4em;

          img {
            width: 100%;
          }
        }

        header {
          @include vendor('flex-grow', '1');
          -ms-flex: 1;

          h3 {
            font-size: 0.7em;
            margin-top: 0.125em;
          }

          .published {
            display: block;
            font-family: _font(family-heading);
            font-size: 0.6em;
            font-weight: _font(weight-heading);
            letter-spacing: _font(kerning-heading);
            margin: -0.625em 0 (_size(element-margin) * 0.85) 0;
            text-transform: uppercase;
          }

          > :last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  dl {
    margin: 0 0 _size(element-margin) 0;

    dt {
      display: block;
      font-weight: _font(weight-bold);
      margin: 0 0 (_size(element-margin) * 0.5) 0;
    }

    dd {
      margin-left: _size(element-margin);
    }
  }

    .blurb {
    h2 {
      font-size: 0.8em;
      margin: 0 0 (_size(element-margin) * 0.75) 0;
    }

    h3 {
      font-size: 0.7em;
    }

    p {
      font-size: 0.9em;
    }
  }

  .box {
    border: solid 1px _palette(border);
    margin-bottom: _size(element-margin);
    padding: 1.5em;

    > :last-child,
    > :last-child > :last-child,
    > :last-child > :last-child > :last-child {
      margin-bottom: 0;
    }

    &.alt {
      border: 0;
      border-radius: 0;
      padding: 0;
    }
  }


  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button,
  .button {
    @include vendor('appearance', 'none');
    @include vendor('transition', (
      'background-color #{_duration(transition)} ease',
      'box-shadow #{_duration(transition)} ease',
      'color #{_duration(transition)} ease'
    ));
    background-color: transparent;
    border: 0;
    box-shadow: inset 0 0 0 1px _palette(border);
    color: _palette(fg-bold) !important;
    cursor: pointer;
    display: inline-block;
    font-family: _font(family-heading);
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
  }

  form {
    margin: 0 0 _size(element-margin) 0;

    &.search {
      @include icon;
      position: relative;

      &:before {
        color: _palette(fg-light);
        content: '\f002';
        display: block;
        height: _size(element-height);
        left: 0;
        line-height: _size(element-height);
        position: absolute;
        text-align: center;
        top: 0;
        width: 2.5em;
      }

      > input:first-child {
        padding-left: 2.5em;
      }
    }
  }

  label {
    color: _palette(fg-bold);
    display: block;
    font-size: 0.9em;
    font-weight: _font(weight-bold);
    margin: 0 0 (_size(element-margin) * 0.5) 0;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="tel"],
  select,
  textarea {
    @include vendor('appearance', 'none');
    background: _palette(border-bg);
    border: none;
    border: solid 1px _palette(border);
    border-radius: 0;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;

    &:invalid {
      box-shadow: none;
    }

    &:focus {
      border-color: _palette(accent);
      box-shadow: inset 0 0 0 1px _palette(accent);
    }
  }

  .select-wrapper {
    @include icon;
    display: block;
    position: relative;

    &:before {
      color: _palette(border);
      content: '\f078';
      display: block;
      height: _size(element-height);
      line-height: _size(element-height);
      pointer-events: none;
      position: absolute;
      right: 0;
      text-align: center;
      top: 0;
      width: _size(element-height);
    }

    select::-ms-expand {
      display: none;
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    height: _size(element-height);
  }

  textarea {
    padding: 0.75em 1em;
  }

  input[type="checkbox"],
  input[type="radio"], {
    @include vendor('appearance', 'none');
    display: block;
    float: left;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;

    & + label {
      @include icon;
      color: _palette(fg);
      cursor: pointer;
      display: inline-block;
      font-size: 1em;
      font-weight: _font(weight);
      padding-left: (_size(element-height) * 0.6) + 0.75em;
      padding-right: 0.75em;
      position: relative;

      &:before {
        background: _palette(border-bg);
        border: solid 1px _palette(border);
        content: '';
        display: inline-block;
        height: (_size(element-height) * 0.6);
        left: 0;
        line-height: (_size(element-height) * 0.575);
        position: absolute;
        text-align: center;
        top: 0;
        width: (_size(element-height) * 0.6);
      }
    }

    &:checked + label {
      &:before {
        background: _palette(fg-bold);
        border-color: _palette(fg-bold);
        color: _palette(bg);
        content: '\f00c';
      }
    }

    &:focus + label {
      &:before {
        border-color: _palette(accent);
        box-shadow: 0 0 0 1px _palette(accent);
      }
    }
  }

  input[type="checkbox"] {
    & + label {
      &:before {
      }
    }
  }

  input[type="radio"] {
    & + label {
      &:before {
        border-radius: 100%;
      }
    }
  }

  ::-webkit-input-placeholder {
    color: _palette(fg-light) !important;
    opacity: 1.0;
  }

  :-moz-placeholder {
    color: _palette(fg-light) !important;
    opacity: 1.0;
  }

  ::-moz-placeholder {
    color: _palette(fg-light) !important;
    opacity: 1.0;
  }

  :-ms-input-placeholder {
    color: _palette(fg-light) !important;
    opacity: 1.0;
  }

  .formerize-placeholder {
    color: _palette(fg-light) !important;
    opacity: 1.0;
  }


  .icon {
    @include icon;
    border-bottom: none;
    position: relative;

    > .label {
      display: none;
    }

    &.prefix {
    }

    &.suffix {
      &:before {
        float: right;
      }
    }
  }


  .image {
    border: 0;
    display: inline-block;
    position: relative;

    img {
      display: block;
    }

    &.left,
    &.right {
      max-width: 40%;

      img {
        width: 100%;
      }
    }

    &.left {
      float: left;
      padding: 0 1.5em 1em 0;
      top: 0.25em;
    }

    &.right {
      float: right;
      padding: 0 0 1em 1.5em;
      top: 0.25em;
    }

    &.fit {
      display: block;
      margin: 0 0 _size(element-margin) 0;
      width: 100%;

      img {
        width: 100%;
      }
    }

    &.featured {
      display: block;
      margin: 0 0 _size(section-spacing) 0;
      width: 100%;

      img {
        width: 100%;
      }

      @include breakpoint(small) {
        margin: 0 0 _size(section-spacing-small) 0;
      }
    }

    &.main {
      display: block;
      margin: 0 0 (_size(element-margin) * 1.5) 0;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
` */

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => {
  return(
    <section id="resume" className="resume-section">
      <div className="resume-container container to-slide up">
        <div>
          <div className="resume-text">
            <h3>Resume </h3>
            <div class="tab-link">
              <a href={`#${"Education".toLowerCase()}`}>Education</a>
              <a href={`#${"Experience".toLowerCase()}`}>Experience</a>
              <a href={`#${"Skills".toLowerCase()}`}>Skills</a>
              <a href={`#${"Courses".toLowerCase()}`}>Courses</a>
              <a href={`#${"References".toLowerCase()}`}>References</a>
            </div>
          </div>
          <Education data={degrees} />
          <Experience data={positions} />
          <Skills skills={skills} categories={categories} />
          <Courses data={courses} />
          <References />
        </div>
      </div>
    </section>
  );
}

export default Resume;
