import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';

import API from '../APIclient';

export default function Contact() {
  const { addToast } = useToasts();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      avatar: '',
    },
  });

  const onSubmit = async (form) => {
    try {
      await API.post('/reviews', form);
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
    <div className="px-72 h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
        className="flex flex-col"
      >
        <div>
          <label htmlFor="firstname" className="subtitles">
            fistname
          </label>
          <input
            type="text"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="firstname"
            {...register('firstname')}
          />

          <label htmlFor="lastname" className="subtitles">
            Lastname
          </label>
          <input
            type="text"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="lastname"
            {...register('lastname')}
          />
          <label htmlFor="email" className="subtitles">
            Email
          </label>
          <input
            type="email"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="email"
            {...register('email')}
          />

          <label htmlFor="review" className="subtitles">
            Message
          </label>
          <textarea className="w-full h-64" {...register('review')} />
        </div>
        <div className="flex justify-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
