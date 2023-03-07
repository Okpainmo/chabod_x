import React, { useState, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const AccountsContext = createContext();

function AccountsContextProvider({ children }) {
  const handleTest = () => {
    alert('hello world');
  };

  const [showAdminResponsePreloader, setShowAdminResponsePreLoader] = useState(false);

  const adminResponsePreloaderShow = () => {
    setShowAdminResponsePreLoader(true);
  };

  const [form, setForm] = useState({
    adminName: '',
    adminBio: '',
    adminNiches: '',
    adminPassword: ''
  });

  const createAdmin = async (e) => {
    e.preventDefault();
    // messageResponsePreloaderShow();

    const { adminName, adminBio, adminNiches, adminPassword } = form;

    try {
      // using axios for post request
      // pass name as form input value in the axios post method

      console.log({ adminName, adminBio, adminNiches, adminPassword });

      if (adminName === '' || adminBio === '' || adminNiches === '' || adminPassword === '') {
        toast.error('Please fill out all form fields', {
          duration: 3000
        });
        return;
      }

      if (adminName !== '' && adminBio !== '' && adminNiches !== '' && adminPassword !== '') {
        adminResponsePreloaderShow();
      }

      const postRequest = await axios.post(
        'https://chabod-x.onrender.com/api/v1/admins/create-admin',
        {
          adminName,
          adminBio,
          adminNiches,
          adminPassword
        }
      );

      console.log(postRequest);

      if (postRequest.status === 201 && postRequest.data.requestStatus === 'success') {
        setShowAdminResponsePreLoader(false);
        toast.success(
          'New admin has been created. Refresh the admin page to see the newly created admin',
          {
            duration: 10000
          }
        );
        setForm({ adminName: '', adminBio: '', adminNiches: '', adminPassword: '' });
      }

      if (postRequest.status !== 201 && postRequest.data.requestStatus !== 'success') {
        setShowAdminResponsePreLoader(false);
        toast.error(
          'Ooops, it seems something went wrong. Please check all inputs, and try sending your request again.',
          {
            duration: 10000
          }
        );
      }
    } catch (error) {
      setShowAdminResponsePreLoader(false);
      //   console.log(error);
      toast.error(
        'Ooops, it seems something went wrong. Please check all inputs, and try sending your request again.',
        {
          duration: 10000
        }
      );
    }
  };

  return (
    <AccountsContext.Provider
      value={{ handleTest, form, setForm, createAdmin, showAdminResponsePreloader }}
    >
      {children}
    </AccountsContext.Provider>
  );
}

export default AccountsContextProvider;
