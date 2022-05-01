import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TableRow from './TableRow';

const Styles = styled.div`
  .table-wrapper {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
  }

  table {
    margin: 0 0 _size(element-margin) 0;
    width: 100%;

    tbody {
      tr {
        border: solid 1px _palette(border);
        border-left: 0;
        border-right: 0;

        &:nth-child(2n + 1) {
          background-color: _palette(border-bg);
        }
      }
    }

    td {
      padding: 0.75em 0.75em;
    }

    th {
      color: _palette(fg-bold);
      font-size: 0.9em;
      font-weight: _font(weight-bold);
      padding: 0 0.75em 0.75em 0.75em;
      text-align: left;
    }

    thead {
      border-bottom: solid 2px _palette(border);
    }

    tfoot {
      border-top: solid 2px _palette(border);
    }

    &.alt {
      border-collapse: separate;

      tbody {
        tr {
          td {
            border: solid 1px _palette(border);
            border-left-width: 0;
            border-top-width: 0;

            &:first-child {
              border-left-width: 1px;
            }
          }

          &:first-child {
            td {
              border-top-width: 1px;
            }
          }
        }
      }

      thead {
        border-bottom: 0;
      }

      tfoot {
        border-top: 0;
      }
    }
  }
`

const Table = ({ data }) => (
  <Styles>  
    <table>
      <tbody>
        {data.map((pair) => (
          <TableRow
            format={pair.format}
            key={pair.label}
            label={pair.label}
            link={pair.link}
            value={pair.value}
          />
        ))}
      </tbody>
    </table>
  </Styles>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.func,
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
};

export default Table;
