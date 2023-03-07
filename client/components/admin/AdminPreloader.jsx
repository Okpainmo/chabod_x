import React, { useContext } from 'react';
import { AccountsContext } from '../../context/admin/AccountsContext';
import { BloggerContext } from '../../context/admin/BloggerContext';
import Preloader from '../Preloader';

function AdminPreloader() {
  const { showAdminResponsePreloader } = useContext(AccountsContext);
  const { showPostIntroResponsePreloader, showPostSectionResponsePreloader } =
    useContext(BloggerContext);

  if (showAdminResponsePreloader) {
    return <Preloader>creating admin...</Preloader>;
  }

  if (showPostIntroResponsePreloader) {
    return <Preloader>adding post intro...</Preloader>;
  }

  if (showPostSectionResponsePreloader) {
    return <Preloader>adding post section...</Preloader>;
  }
}

export default AdminPreloader;
