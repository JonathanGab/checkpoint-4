import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import API from '../APIclient';

export default function AddAssets() {
  const { handleSubmit, register } = useForm();

  const notifySucces = () => {
    toast.success('Your assets have been successfully added 🎉🎉');
  };

  const notifyFail = () => {
    toast.error('Error to add your assets 😭😭');
  };

  const onSubmit = async (form) => {
    try {
      await API.post('/assets', form);
      notifySucces();
    } catch (err) {
      if (err) {
        notifyFail();
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" action="send">
        <div>
          <label htmlFor="weapon" className="subtitles">
            Weapon
          </label>
          <input
            type="text"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="weapon"
            {...register('weapon')}
          />
          <label htmlFor="weaponImage" className="subtitles">
            Weapon Url
          </label>
          <input
            type="text"
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="weaponImage"
            {...register('weaponImage')}
          />

          <label htmlFor="price" className="subtitles">
            Price
          </label>
          <input
            type="number"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="price"
            {...register('price')}
          />
          <label htmlFor="quantity" className="subtitles">
            Quantity
          </label>
          <input
            type="number"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="quantity"
            {...register('quantity')}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
