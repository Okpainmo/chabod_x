import React, { useState, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const BloggerContext = createContext();

function BloggerContextProvider({ children }) {
  const [hidePostIntroForm, setHidePostIntroForm] = useState(false);
  const [showPostIntroResponsePreloader, setShowPostIntroResponsePreLoader] = useState(false);
  const [showPostSectionResponsePreloader, setShowPostSectionResponsePreLoader] = useState(false);

  const [postId, setPostId] = useState('no post id');

  const adminName = 'to be programmatically obtained';

  const [postIntroForm, setPostIntroForm] = useState({
    postTags: '',
    postTitle: '',
    postSlug: '',
    postAuthor: '',
    postDate: '',
    postCategory: '',
    postBrief: '',
    // to be added programmatically. the value will be "admin + NAME OF CURRENTLY LOGGED IN ADMIN"
    createdBy: adminName
  });

  const [postBodyForm, setPostBodyForm] = useState({
    sectionTitle: '',
    sectionBody: ''
  });

  const resetPostIntroForm = () => {
    setPostIntroForm({
      postTags: '',
      postTitle: '',
      postSlug: '',
      postAuthor: '',
      postDate: '',
      postCategory: '',
      postBrief: '',
      createdBy: adminName
    });
  };

  const resetPostBodyForm = () => {
    setPostBodyForm({
      sectionTitle: '',
      sectionBody: ''
    });
  };

  const PostIntroResponsePreloaderShow = () => {
    setShowPostIntroResponsePreLoader(true);
  };

  const PostSectionResponsePreloaderShow = () => {
    setShowPostSectionResponsePreLoader(true);
  };

  const createPostIntro = async (e) => {
    e.preventDefault();

    if (postId !== 'no post id') {
      toast.error('Please proceed to add post sections - post intro has already been added', {
        duration: 3000
      });
    }

    const {
      postTags,
      postTitle,
      postSlug,
      postAuthor,
      postDate,
      postCategory,
      postBrief,
      createdBy
    } = postIntroForm;

    try {
      // using axios for post request

      console.log(postIntroForm);

      if (
        postTags === '' ||
        postTitle === '' ||
        postSlug === '' ||
        postAuthor === '' ||
        postDate === '' ||
        postBrief === '' ||
        postCategory === '' ||
        createdBy === ''
      ) {
        toast.error('Please fill out all form fields', {
          duration: 3000
        });
        return;
      }

      if (
        postTags !== '' &&
        postTitle !== '' &&
        postSlug !== '' &&
        postAuthor !== '' &&
        postDate !== '' &&
        postBrief !== '' &&
        postCategory !== '' &&
        createdBy !== ''
      ) {
        PostIntroResponsePreloaderShow();
      }

      const postRequest = await axios.post(
        'https://chabod-x.onrender.com/api/v1/posts/create-post',
        {
          postTags,
          postTitle,
          postSlug,
          postAuthor,
          postDate,
          postCategory,
          postBrief,
          createdBy
        }
      );

      console.log(postRequest);

      if (postRequest.status === 201 && postRequest.data.requestStatus === 'success') {
        setShowPostIntroResponsePreLoader(false);
        toast.success('Post details added successfully - proceed to add post sections', {
          duration: 10000
        });

        //   save the post id for adding sections
        setPostId(postRequest.data.post._id);
      }

      if (postRequest.status !== 201 && postRequest.data.requestStatus !== 'success') {
        setShowPostIntroResponsePreLoader(false);
        toast.error(
          'Ooops, it seems something went wrong. Please ensure all form fields are completed and that you are connected to the internet, then try sending your request again.',
          {
            duration: 10000
          }
        );
      }
    } catch (error) {
      setShowPostIntroResponsePreLoader(false);
      console.log(error);
      toast.error(
        'Ooops, it seems something went wrong. Please ensure all form fields are completed and that you are connected to the internet, then try sending your request again.',
        {
          duration: 10000
        }
      );
    }
  };

  const handleHidePostIntroForm = () => {
    setHidePostIntroForm(true);
  };

  const handleShowPostIntroForm = () => {
    setHidePostIntroForm(false);
  };

  const addPostSection = async (e) => {
    e.preventDefault();

    if (postId === 'no post id') {
      toast.error('The post intro must be added first. Please return and add it.', {
        duration: 3000
      });
      return;
    }

    const { sectionTitle, sectionBody } = postBodyForm;

    if (sectionTitle === '' || sectionBody === '') {
      toast.error('Please fill out all form fields', {
        duration: 3000
      });
      return;
    }

    if (sectionTitle !== '' && sectionBody !== '') {
      PostSectionResponsePreloaderShow();
    }

    const id = postId;
    console.log(`postId: ${id}`);

    try {
      // first: get post
      const post = await axios.get(`https://chabod-x.onrender.com/api/v1/posts/${id}`);

      console.log(postBodyForm);

      console.log(post);

      // then manipulate, and update post
      const currentPost = post;

      const currentData = postIntroForm;

      const currentPostBodySections = currentPost.data.post.postBody;
      console.log(currentPostBodySections);

      const newSection = postBodyForm;

      // updated post
      const newPost = await axios.patch(`https://chabod-x.onrender.com/api/v1/posts/${id}`, {
        ...currentData,
        postBody: [...currentPostBodySections, newSection]
      });

      console.log(newPost);

      if (newPost.status === 201 && newPost.data.requestStatus === 'success') {
        setShowPostSectionResponsePreLoader(false);

        toast.success(
          'Post section added successfully. Proceed to add more sections or click finish to end post creation',
          {
            duration: 10000
          }
        );

        setPostBodyForm({
          sectionTitle: '',
          sectionBody: ''
        });
      }

      if (newPost.status !== 201 && newPost.data.requestStatus !== 'success') {
        setShowPostSectionResponsePreLoader(false);
        toast.error(
          'Ooops, it seems something went wrong. Please ensure all form fields are completed and that you are connected to the internet, then try sending your request again.',
          {
            duration: 10000
          }
        );
      }
    } catch (error) {
      setShowPostSectionResponsePreLoader(false);
      console.log(error);
      toast.error(
        'Ooops, it seems something went wrong. Please ensure all form fields are completed and that you are connected to the internet, then try sending your request again.',
        {
          duration: 10000
        }
      );
    }
  };

  const finishPost = () => {
    resetPostIntroForm();

    resetPostBodyForm();

    setPostId('no post id');

    handleShowPostIntroForm();
  };

  return (
    <BloggerContext.Provider
      value={{
        // handleSubmit,
        hidePostIntroForm,
        handleHidePostIntroForm,
        handleShowPostIntroForm,
        showPostIntroResponsePreloader,
        showPostSectionResponsePreloader,
        postIntroForm,
        setPostIntroForm,
        postBodyForm,
        setPostBodyForm,
        createPostIntro,
        addPostSection,
        finishPost
      }}
    >
      {children}
    </BloggerContext.Provider>
  );
}

export default BloggerContextProvider;
