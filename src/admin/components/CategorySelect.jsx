// CategorySelect.js
import React, { useEffect, useState } from 'react';
import SelectBox from './SelectBox';
import { categoryApi } from '../../Api/categoryApi';

export default function CategorySelect({ onChange, oldValue }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await categoryApi.getAll();
        const temp = response.data.data;
        setCategories(
          temp.map((category) => {
            return {
              label: category.attributes.categoryName,
              value: category.id,
            };
          })
        );
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();

    const delay = 1000;
    const timerId = setTimeout(() => {
      if (oldValue && oldValue !== 'null' && oldValue !== 'undefined') {
        setSelectedCategory(oldValue);
      }
    }, delay);

    return () => clearTimeout(timerId);

  }, [oldValue]); 
  const handleChangeCategory = (name, value) => {
    setSelectedCategory(value);
    onChange(name, value);
  };

  const myView =
    loading ? (
      <select>
        <option>Loading categories...</option>
      </select>
    ) : (
      <SelectBox
        name="category"
        selectedValue={selectedCategory}
        data={categories}
        onChange={handleChangeCategory}
      />
    );

  return <>{myView}</>;
}
