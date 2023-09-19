import React, { useEffect } from 'react';
import { categoryApi } from './Api/categoryApi';

export default function Test() {
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryApi.getAll();
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
        </div>
    );
}
