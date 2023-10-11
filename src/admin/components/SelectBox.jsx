import React from 'react';

export default function SelectBox(props) {
  const { name, data, onChange, selectedValue } = props;

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    onChange(name, newValue);
  };

  const options = data.map((dataItem) => (
    <option key={dataItem.value} value={dataItem.value}>
      {dataItem.label}
    </option>
  ));

  return (
    <select name={name} value={selectedValue} onChange={handleSelectChange}>
      {options}
    </select>
  );
}