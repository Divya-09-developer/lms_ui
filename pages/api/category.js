import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [updateCategory, setUpdateCategory] = useState({ id: '', name: '' });

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories'); // Adjust the endpoint as necessary
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Add a new category
  const handleAddCategory = async () => {
    try {
      const response = await axios.post('/api/categories', { name: newCategory });
      setCategories([...categories, response.data.data]);
      setNewCategory('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  // Update an existing category
  const handleUpdateCategory = async () => {
    try {
      const response = await axios.put('/api/categories', { id: updateCategory.id, name: updateCategory.name });
      setCategories(categories.map(cat => (cat._id === response.data.data._id ? response.data.data : cat)));
      setUpdateCategory({ id: '', name: '' });
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  // Delete a category
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete('/api/categories', { data: { id } });
      setCategories(categories.filter(cat => cat._id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h1>Category Manager</h1>

      <h2>Add New Category</h2>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Category Name"
      />
      <button onClick={handleAddCategory}>Add Category</button>

      <h2>Update Category</h2>
      <input
        type="text"
        value={updateCategory.name}
        onChange={(e) => setUpdateCategory({ ...updateCategory, name: e.target.value })}
        placeholder="New Category Name"
      />
      <button onClick={handleUpdateCategory}>Update Category</button>

      <h2>Categories List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category._id)}>Delete</button>
            <button onClick={() => setUpdateCategory({ id: category._id, name: category.name })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;