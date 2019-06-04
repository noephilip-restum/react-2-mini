import React from 'react';

export default function ColorChanger(props) {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.update(e.target.value)}
      disabled={props.allowEdit === 'false'}
    >
      <option value="12px"> 12 </option>
      <option value="13px"> 13 </option>
      <option value="14px"> 14 </option>
    </select>
  );
}
