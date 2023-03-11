import React, { useContext } from 'react';
import { AccountsContext } from '../../context/admin/AccountsContext';
import { BloggerContext } from '../../context/admin/BloggerContext';
import Preloader from '../Preloader';
import { AdminHomeContext } from '../../context/admin/AdminHomeContext';

function AdminPreloader() {
  const { showAdminResponsePreloader } = useContext(AccountsContext);
  const { showPostIntroResponsePreloader, showPostSectionResponsePreloader } =
    useContext(BloggerContext);
  const { showCreateCategoryResponsePreloader } = useContext(AdminHomeContext);

  if (showAdminResponsePreloader) {
    return <Preloader>creating admin...</Preloader>;
  }

  if (showPostIntroResponsePreloader) {
    return <Preloader>adding post intro...</Preloader>;
  }

  if (showPostSectionResponsePreloader) {
    return <Preloader>adding post section...</Preloader>;
  }

  if (showCreateCategoryResponsePreloader) {
    return <Preloader>creating category...</Preloader>;
  }
}

export default AdminPreloader;
