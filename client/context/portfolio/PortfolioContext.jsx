import React, { useState, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
// import Emoji from '../components/Emoji';

export const PortfolioContext = createContext();

function PortfolioContextProvider({ children }) {
  /* 
=======================
contacts section logic
=======================
*/
  const [showMessageResponsePreloader, setShowMessageResponsePreLoader] = useState(false);
  //   const [showNewsletterResponsePreloader, setShowNewsletterResponsePreLoader] = useState(false);

  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const messageResponsePreloaderShow = () => {
    setShowMessageResponsePreLoader(true);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    // messageResponsePreloaderShow();

    const { name, email, message } = messageForm;

    try {
      // using axios for post request
      // pass name as form input value in the axios post method

      console.log({ name, email, message });

      if (name === '' || email === '' || message === '') {
        toast.error('Please fill out all form fields', {
          duration: 3000
        });
        return;
      }

      if (name !== '' && email !== '' && message !== '') {
        messageResponsePreloaderShow();
      }

      const postRequest = await axios.post(
        'https://chabod-x.onrender.com/api/v1/messages/send-message',
        {
          name,
          email,
          message
        }
      );

      console.log(postRequest);

      if (postRequest.status === 201 && postRequest.data.requestStatus === 'success') {
        setShowMessageResponsePreLoader(false);
        toast.success(
          'Thanks a lot for contacting me, your message has been recieved. I will send a reply ASAP.',
          {
            duration: 10000
          }
        );
        setMessageForm({ name: '', email: '', message: '' });
      }

      if (postRequest.status !== 201 && postRequest.data.requestStatus !== 'success') {
        setShowMessageResponsePreLoader(false);
        toast.error(
          'Ooops, it seems something went wrong. Please check your inputs, ensure your email is valid, and try sending your message again.',
          {
            duration: 10000
          }
        );
      }
    } catch (error) {
      setShowMessageResponsePreLoader(false);
      //   console.log(error);
      toast.error(
        'Ooops, it seems something went wrong. Please check your inputs, ensure your email is valid, and try sending your message again.',
        {
          duration: 10000
        }
      );
    }
  };

  /* 
=========================
newsletter section logic
=========================
*/
  const [showNewsletterResponsePreloader, setShowNewsletterResponsePreLoader] = useState(false);

  const [newsletterForm, setNewsletterForm] = useState({
    email: ''
  });

  const newsletterResponsePreloaderShow = () => {
    setShowNewsletterResponsePreLoader(true);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const { email } = newsletterForm;

    try {
      // using axios for post request
      // pass name as form input value in the axios post method

      console.log({ email });

      if (email === '') {
        toast.error('Please add a valid email address', {
          duration: 3000
        });
        return;
      }

      if (email !== '') {
        newsletterResponsePreloaderShow();
      }

      const postRequest = await axios.post(
        'https://chabod-x.onrender.com/api/v1/newsletter/create-subscriber',
        {
          email
        }
      );

      console.log(postRequest);

      if (postRequest.status === 201 && postRequest.data.requestStatus === 'success') {
        setShowNewsletterResponsePreLoader(false);
        toast.success(
          //   <Emoji symbol="👋" label="waving-hand" />,
          'Hurray!!! welcome on board. Thanks a lot for joining in. Anticipate your first newsletter soon.',
          {
            duration: 10000
          }
        );
        setNewsletterForm({ email: '' });
      }

      if (postRequest.status !== 201 && postRequest.data.requestStatus !== 'success') {
        setShowNewsletterResponsePreLoader(false);
        toast.error(
          'Ooops, it seems something went wrong. Please try sending your request again.',
          {
            duration: 10000
          }
        );
      }
    } catch (error) {
      setShowNewsletterResponsePreLoader(false);
      console.log(error);
      toast.error('Ooops, it seems something went wrong. Please try sending your request again.', {
        duration: 10000
      });
    }
  };

  /* 
============================
context test function
============================
*/

  const handleTest = () => {
    alert('hello world');
  };

  return (
    <PortfolioContext.Provider
      value={{
        handleTest,
        messageForm,
        setMessageForm,
        showMessageResponsePreloader,
        handleMessageSubmit,
        newsletterForm,
        setNewsletterForm,
        showNewsletterResponsePreloader,
        handleNewsletterSubmit
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContextProvider;
