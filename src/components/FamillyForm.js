import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import API from '../APIclient';
import Avatar from './Avatar';

export default function FamillyForm() {
  const { addToast } = useToasts();
  const { handleSubmit, setValue, register, watch } = useForm();

  const name = watch('name');
  const avatar = watch('avatarUrl');

  const avatarUploadRef = useRef();

  const handleAvatarClick = () => {
    avatarUploadRef.current.click();
  };

  const handleAvatarFileInputChange = (e) => {
    if (e.target.files[0]) {
      setValue('avatar', URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (form) => {
    const updatedForm = {
      ...form,
      avatar: avatarUploadRef.current.files[0],
    };
    const formData = new FormData();
    Object.keys(updatedForm).forEach((prop) => {
      formData.append(prop, updatedForm[prop]);
    });
    try {
      API.post('/royalfamilly', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      addToast('Votre animal a bien été ajouté', {
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
        <div
          className="flex flex-col items-center m-5"
          onClick={handleAvatarClick}
          aria-hidden="true"
        >
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            ref={avatarUploadRef}
            onChange={handleAvatarFileInputChange}
            style={{ display: 'none' }}
            name="avatar"
          />
          <Avatar avatarUrl={avatar} alt={name} />
        </div>
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
          <label htmlFor="description" className="subtitles">
            description
          </label>
          <input
            type="text"
            required
            className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="description"
            {...register('description')}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
