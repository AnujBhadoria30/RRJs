import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../src/features/categoriesSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories); 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories()); 
    }
  }, [dispatch, status]);
  console.log(categories)

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error || 'Failed to load data!'}</p>; 

  return (
    <div>
      <h1>Contact</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((item) => (
          <div key={item.id} className="p-4 border rounded shadow">
            <img src={item.image} alt={item.name} className="w-full object-cover" /> 
            <h2 className="font-bold text-lg">{item.name}</h2> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
