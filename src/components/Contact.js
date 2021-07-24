import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import API from '../APIclient';

export default function Contact() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      avatar: '',
    },
  });

  const notifySucces = () => {
    toast.success('Your message has been send 👍');
  };

  const notifyFail = () => {
    toast.error('Error while sending your message 😞');
  };

  const onSubmit = async (form) => {
    try {
      await API.post('/reviews', form);
      notifySucces();
    } catch (err) {
      if (err) {
        notifyFail();
      }
    }
  };
  return (
    <div className="px-10 items-center justify-center md:px-72 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
        className="flex flex-col"
      >
        <div>
          <div className="py-3">
            <label htmlFor="firstname" className="subtitles">
              fistname
            </label>
            <input
              type="text"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 focus:border-black sm:text-sm"
              placeholder="firstname"
              {...register('firstname')}
            />
          </div>

          <div className="py-3">
            <label htmlFor="email" className="my-5">
              Email
            </label>
            <input
              type="email"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 focus:border-black sm:text-sm"
              placeholder="email"
              {...register('email')}
            />
          </div>
          <div className="py-3">
            <label htmlFor="review" className="subtitles">
              Message
            </label>
            <textarea
              className="w-full h-64"
              required
              placeholder="your message"
              {...register('review')}
            />
          </div>
        </div>
        <div className=" flex justify-end py-3">
          <button type="submit" className="btn btn-primary btn-primary:hover">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
