import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CreateAssetsButton from './CreateAssetsButton';
import API from '../APIclient';

export default function TableAssets() {
  const [assets, setAssets] = useState([]);

  const notifySucces = () => {
    toast.success('Your assets have been successfully removed 👌');
  };

  const notifyFail = () => {
    toast.error('Error to remove your assets 😭😭');
  };

  useEffect(() => {
    API.get('/assets').then((res) => {
      setAssets(res.data);
    });
  }, []);

  const deleted = (id) => {
    console.log(id);
    API.delete(`/assets/${id}`)
      .then((res) => {
        setAssets(Object.values((assets) => assets.filter((n) => n.id !== id)));
        notifySucces();
      })
      .catch((err) => {
        window.console.error(err);
        notifyFail();
      });
  };

  return (
    <div className="w-screen">
      <div className="flex justify-end items-end w-full p-5">
        <CreateAssetsButton className="animate-jump" />
      </div>
      <div className="flex justify-center">
        <div className="">
          <table className="table-auto border border-black w-full">
            <thead>
              <tr className="border border-black">
                <th className="px-16 py-3 border border-black">Weapon</th>
                <th className="px-16 py-3 border border-black">Price</th>
                <th className="px-16 py-3 border border-black">Image</th>
                <th className="px-16 py-3 border border-black">Quantity</th>
                <th className="px-16 py-3 border border-black">Delete</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => {
                return (
                  <tr key={asset.id} className="">
                    <td className="border border-black">
                      <div>{asset.weapon}</div>
                    </td>
                    <td className="border border-black">
                      <div>{asset.price}</div>
                    </td>
                    <td className="border border-black">
                      <div className="flex justify-center items-center">
                        <img
                          src={asset.weaponImage}
                          alt={asset.weapon}
                          className="rounded-full w-28 h-28"
                        />
                      </div>
                    </td>
                    <td className="border border-black">
                      <div>{asset.quantity}</div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center">
                        <button
                          type="button"
                          className="btn btn-primary btn-primary:hover"
                          onClick={() => deleted(asset.id)}
                        >
                          X
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
