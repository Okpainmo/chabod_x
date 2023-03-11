import React, { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const AdminHomeContext = createContext();

function AdminHomeContextProvider({ children }) {
  const [createCategoriesForm, setCreateCategoriesForm] = useState({
    categoryName: ''
  });

  const [showCreateCategoryResponsePreloader, setShowCategoryResponsePreloader] = useState(false);

  const createCategoryResponsePreloaderShow = () => {
    setShowCategoryResponsePreloader(true);
  };

  const createCategoryResponsePreloaderHide = () => {
    setShowCategoryResponsePreloader(false);
  };

  const createCategory = async (e) => {
    e.preventDefault();
    console.log(createCategoriesForm);

    const { categoryName } = createCategoriesForm;

    if (categoryName === '') {
      toast.error('Please add a category name first', {
        duration: 3000
      });
      return;
    }

    if (categoryName !== '') {
      createCategoryResponsePreloaderShow(true);
    }

    try {
      const newCategory = await axios.post(
        'https://chabod-x.onrender.com/api/v1/categories/create-category',
        {
          categoryName
        }
      );

      console.log(newCategory);

      if (newCategory.status === 201 && newCategory.data.requestStatus === 'success') {
        setShowCategoryResponsePreloader(false);
        toast.success('category created successfully', {
          duration: 10000
        });

        setCreateCategoriesForm({ categoryName: '' });
      }

      if (newCategory.status !== 201 && newCategory.data.requestStatus !== 'success') {
        setShowCategoryResponsePreloader(false);
        toast.error(
          'Ooops, it seems something went wrong. Please ensure to add a category name, and that you are connected to the internet, then try sending your request again.',
          {
            duration: 10000
          }
        );
      }
    } catch (error) {
      setShowCategoryResponsePreloader(false);
      console.log(error);
      toast.error(
        'Ooops, it seems something went wrong. Please ensure to add a category name, and that you are connected to the internet, then try sending your request again.',
        {
          duration: 10000
        }
      );
    }
  };

  return (
    <AdminHomeContext.Provider
      value={{
        createCategoriesForm,
        setCreateCategoriesForm,
        createCategory,
        showCreateCategoryResponsePreloader,
        createCategoryResponsePreloaderHide,
        createCategoryResponsePreloaderShow
      }}
    >
      {children}
    </AdminHomeContext.Provider>
  );
}

export default AdminHomeContextProvider;
