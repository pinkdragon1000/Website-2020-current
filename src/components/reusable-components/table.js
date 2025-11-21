import React from "react";
import Style from "style-it";

export default function Table({ headers, rows }) {
  const styles = `
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }

    table th,
    table td {
      border: 0.063rem solid var(--med-grey);
      padding: 0.75rem 1rem;
      text-align: left;
      vertical-align: top;
    }

    table th {
      background-color: var(--med-grey);
      font-weight: bold;
    }

    table tbody tr:nth-child(even) {
      background-color: var(--grey);
    }

    table tbody tr:nth-child(odd) {
      background-color: var(--white);
    }
  `;

  return Style.it(
    `${styles}`,
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex}>{row[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
