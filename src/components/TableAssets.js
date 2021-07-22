import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { NavLink } from 'react-router-dom';
import API from '../APIclient';

export default function TableAssets() {
  const [assets, setAssets] = useState([]);
  const { addToast } = useToasts();

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
        addToast('Votre compte a bien été supprimé !', {
          appearance: 'success',
        });
      })
      .catch((err) => {
        window.console.error(err);
        addToast(
          'Il u a eu une erreur lors de la supression de votre compte !',
          {
            appearance: 'error',
          }
        );
      });
  };

  return (
    <div>
      <div>
        <NavLink exact to="/add-assets">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <div>Weapon</div>
            </th>
            <th>
              <div>Price</div>
            </th>
            <th>
              <div>Image</div>
            </th>
            <th>
              <div>Quantity</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            return (
              <tr key={asset.id}>
                <td>
                  <div>{asset.weapon}</div>
                </td>
                <td>
                  <div>{asset.price}</div>
                </td>
                <td>
                  <div>
                    <img src={asset.weaponImage} alt={asset.weapon} />
                  </div>
                </td>
                <td>
                  <div>{asset.quantity}</div>
                </td>
                <button type="button" onClick={() => deleted(asset.id)}>
                  X
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
