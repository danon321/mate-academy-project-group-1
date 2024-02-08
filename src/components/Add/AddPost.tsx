import React, { useState } from 'react';
import { z, ZodError } from 'zod';
import { Button, TextField, Box, Alert, Select, FormControl, InputLabel, MenuItem, Chip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Post } from '../../types/post';
import { randomId } from '../../utils/createId';
import { useDispatch } from 'react-redux';
import { postSlice } from '../../app/redux/features/posts/post-slice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AddPost.scss';
import { CloudUpload } from '@mui/icons-material';

const schema = z.object({
  title: z
    .string()
    .min(4, {
      message: 'Title needs to be at least 4 characters',
    })
    .max(30)
    .regex(/^[\w,.?! -]+$/, {
      message:
        'Title can only contain letters, commas, dots, question marks, exclamation marks, hyphens, and spaces',
    }),
  content: z
    .string()
    .refine((value) => value.length >= 40, {
      message: 'Content must be at least 40 characters',
    }),
  tags: z.array(z.string()).refine((value) => value.length <= 6, {
    message: 'You can\'t add more than 6 tags',
  }),
  category: z.string().refine((value) => value.trim() !== '', {
    message: 'Please select a category.',
  }),
});

const AddPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState<string | null>(null);
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [tagsError, setTagsError] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmit = async (data: Post) => {
    try {
      const response = await fetch('http://localhost:3000/posts/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        dispatch(postSlice.actions.addPost(responseData));
        // Czyszczenie stanów po pomyślnym dodaniu postu
        setTitle('');
        setContent('');
        setTags([]);
        setUploadedImage(null);
        setCategory('');
        // Ustawienie błędów na null
        setTitleError(null);
        setContentError(null);
        setTagsError(null);
        setImageError(null);
        setCategoryError(null);
      } else {
        console.error('Failed to add post');
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  

  const validateTitle = (value: string) => {
    try {
      schema.pick({ title: true }).parse({ title: value });
      setTitleError(null);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        setTitleError(err.errors[0].message);
      }
    }
  };

  const validateContent = (value: string) => {
    try {
      schema.pick({ content: true }).parse({ content: value });
      setContentError(null);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        setContentError(err.errors[0].message);
      }
    }
  };

  const validateTags = (value: string[]) => {
    try {
      schema.pick({ tags: true }).parse({ tags: value });
      setTagsError(null);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        setTagsError(err.errors[0].message);
      }
    }
  };

  const validateImage = (value: File | null) => {
    if (!value) {
      setImageError('Please upload an image.');
    } else {
      setImageError(null);
    }
  };

  const validateCategory = (value: string) => {
    try {
      schema.pick({ category: true }).parse({ category: value });
      setCategoryError(null);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        setCategoryError(err.errors[0].message);
      }
    }
  };

  const validateForm = () => {
    validateTitle(title);
    validateContent(content);
    validateTags(tags);
    validateImage(uploadedImage);
    validateCategory(category);
  
    setContentError(null);
  
    let formIsValid = true;
  
    if (!titleError && !tagsError && !imageError) {
      if (!uploadedImage) {
        setImageError('Please upload an image.');
        formIsValid = false;
      }
  
      if (!category) {
        setCategoryError('Please select a category.');
        formIsValid = false;
      }
  
      if (!content || content.trim().length < 40) {
        setContentError('Content must be at least 40 characters.');
        formIsValid = false;
      }
    } else {
      if (content.trim().length < 40) {
        setContentError('Content must be at least 40 characters.');
      }
    }
  
    return formIsValid;
  };
  
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (validateForm()) {
      const newPostId = randomId(10);
      onSubmit({
        title,
        content,
        id: newPostId,
        likes: 0,
        dislikes: 0,
        date: new Date(),
        image: uploadedImage,
        tags,
        category: category,
        user: {
          id: 0,
          name: '',
          surname: '',
          title: '',
          about: null,
        },
      });
  
      setContent('');
      setTitle('');
      setTags([]);
      setUploadedImage(null);
      setCategory('');
      setImageError(null);
      setCategoryError(null);
    }
  };
  
  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      const newTags = [...tags, tagInput.trim()];
  
      validateTags(newTags);
  
      if (!tagsError) {
        if (newTags.length <= 6) {
          setTags(newTags);
          setTagInput('');
        } else {
          setTagsError('You can\'t add more than 6 tags');
        }
      }
  
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
  
    validateTags(newTags);
  
    setTags(newTags);
  };

  return (
    <div className='container form'>
      <form onSubmit={onSubmitForm}>
        <div className='AddTitle'>
          <Box>
            <TextField
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                validateTitle(e.target.value);
              }}
              className={`AddPostTitle ${titleError ? 'error' : ''}`}
              onBlur={(e) => validateTitle(e.target.value)}
            />
            {titleError && (
              <Alert className='title-alert' severity='error'>{titleError}</Alert>
            )}
          </Box>
        </div>
        <div className='AddContent'>
          <Box>
            <ReactQuill
              theme='snow'
              value={content}
              onChange={(value) => {
                setContent(value);
                validateContent(value);
              }}
              className={`AddPostContent ${contentError ? 'error' : ''}`}
            />
            {contentError && (
              <Alert className='content-alert' severity='error'>{contentError}</Alert>
            )}
          </Box>
        </div>
        <div className='AddPostCategoryAndTags'>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as string);
                validateCategory(e.target.value as string);
              }}
              autoWidth
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
              <MenuItem value="Category 3">Category 3</MenuItem>
              <MenuItem value="Category 4 test">Category 4 test</MenuItem>
              <MenuItem value="Category 5 test test">Category 5 test test</MenuItem>
            </Select>
          </FormControl>
          {categoryError && (
            <Alert className='category-alert' severity='error'>{categoryError}</Alert>
          )}
          <div className='TagBox'>
            <TextField
              type="text"
              placeholder="Tags (optional)"
              value={tagInput}
              onChange={handleTagInputChange}
              onKeyPress={handleTagInputKeyPress}
              className={`AddPostTag ${tags.length >= 6 ? 'error' : ''}`}
              autoComplete='off'
            />
            {tagsError && (
              <Alert className='tags-alert' severity='error'>{tagsError}</Alert>
            )}
          </div>
          <Box>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                onDelete={() => handleRemoveTag(index)}
                className='TagChip'
              />
            ))}
          </Box>
        </div>
        <div className='AddPostImage'>
          {uploadedImage ? (
            <div className='UploadedImageView'>
              <img src={URL.createObjectURL(uploadedImage)} alt='Uploaded' />
              <Button
                onClick={() => setUploadedImage(null)}
                variant='contained'
                color='error'
                size='small'
                className='RemoveImageButton'
              >
                Remove
              </Button>
            </div>
          ) : (
            <div className='UploadImage'>
              {imageError ? (
                <Alert className='image-alert' severity='error'>{imageError}</Alert>
              ) : (
                'You must add an image here'
              )}
            </div>
          )}
          <label htmlFor='upload-image' className='UploadImageButton'>
            <input
              type='file'
              id='upload-image'
              accept='image/*'
              onChange={(e) => setUploadedImage(e.target.files?.[0] || null)}
              style={{ display: 'none' }}
            />
            <Button variant='contained' component='span' startIcon={<CloudUpload />}>
              Upload image
            </Button>
          </label>
        </div>
        <div className='AddPostButton'>
          <Button
            type="submit"
            variant='contained' 
            disabled={!!titleError || !!contentError}
            size='large'
            endIcon={<SendIcon />}
          >
            Create Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;