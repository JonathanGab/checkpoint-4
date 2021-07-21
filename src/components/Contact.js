import { registerPlugin } from 'axe-core';
import React from 'react';
import { handleSubmit, useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact() {
  const { handleSubmit, register } = useForm();

  const onSubmit = () => {
    axios.get('');
  };

  return (
    <div className="px-72">
      <form onSubmit={handleSubmit} method="POST" action="send">
        <div className="flex flex-col ">
          <label name="name" className="mb-3">
            Name :<input className="w-full" {...register('name')} />
          </label>

          <label name="fistname" className="mb-3">
            Fistname :<input className="w-full" {...register('fistname')} />
          </label>

          <label name="message" className="mb-3">
            Message :<textarea className="w-full" {...register('message')} />
          </label>
        </div>
      </form>
    </div>
  );
}
