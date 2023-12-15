import React, { useState } from 'react';
import { z, ZodError } from 'zod';
import { Button, TextField, Box } from '@mui/material';

const schema = z.object({
  title: z
    .string()
    .min(4, {
      message: 'Title needs to be at least 4 characters',
    })
    .max(30)
    .regex(/^[\w,.?! -]+$/, {
      message:
        'Title can only contain letters, commas, dots, question marks, exclamation marks, hyphens and spaces',
    }),
  content: z
    .string()
    .max(500, {
      message: 'Content must not exceed 500 characters',
    })
    .min(40, {
      message: 'Content needs to be at least 40 characters',
    }),
});

export type FormData = {
  title: string;
  content: string;
};

type AddProps = {
  onSubmit: (data: FormData) => void;
};

export const Add: React.FC<AddProps> = ({ onSubmit }: AddProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

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

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateTitle(title);
    validateContent(content);

    if (!titleError && !contentError) {
      onSubmit({ title, content });
    }
  };

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={onSubmitForm}>
        <div>
          <Box>
            <TextField
              type="text"
              placeholder="Title"
              value={title}
              error={Boolean(titleError)}
              helperText={titleError}
              onChange={(e) => {
                setTitle(e.target.value);
                validateTitle(e.target.value);
              }}
              onBlur={(e) => validateTitle(e.target.value)}
            />
          </Box>
        </div>
        <div>
          <Box>
            <TextField
              multiline
              rows={4}
              placeholder="Content"
              value={content}
              error={Boolean(contentError)}
              helperText={contentError}
              onChange={(e) => {
                setContent(e.target.value);
                validateContent(e.target.value);
              }}
              onBlur={(e) => validateContent(e.target.value)}
            />
          </Box>
        </div>
        <div>
          <Button type="submit">Create Post</Button>
        </div>
      </form>
    </div>
  );
};
