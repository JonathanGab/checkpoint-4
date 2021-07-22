import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import API from '../APIclient';

export default function AddAssets() {
  const { addToast } = useToasts();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (form) => {
    try {
      await API.post('/assets', form);
      addToast('Votre avis à bien été pris en compte', {
        appearance: 'success',
      });
    } catch (err) {
      if (err) {
        addToast("Il y a un problème lors de l'envoi de votre avis", {
          appearance: 'error',
        });
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
