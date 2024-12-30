/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../src/features/ApiSlice';

const Body = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.api);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchData());
        }
    }, [dispatch, status]);
    console.log(data)

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Failed to load data!</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
                <div key={item.id} className="p-4 border rounded shadow">
        <img src={item.images[1]} alt={item.title} className="w-full  object-cover" />      
               <h2 className="font-bold text-lg">{item.title}</h2>
                    <p>{item.description}</p>
                    <p className="text-green-600 font-bold">${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Body;
