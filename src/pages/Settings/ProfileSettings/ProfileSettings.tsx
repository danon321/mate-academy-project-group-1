import React, { ChangeEvent } from 'react';
import './profileSettings.scss';

interface ProfileSettingsProps {
  formData: {
    username: string;
    profileImage: string;
    backgroundImage: string;
    description: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  formData,
  onChange,
}) => {
  return (
    <div className="body">
      <label htmlFor="username">Zmiana nazwy użytkownika:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={onChange}
      />

      <label htmlFor="profileImage">Zmiana zdjęcia profilowego:</label>
      <input
        type="file"
        id="profileImage"
        name="profileImage"
        onChange={onChange}
        accept="image/*"
      />

      <label htmlFor="backgroundImage">Zmiana tła:</label>
      <input
        type="file"
        id="backgroundImage"
        name="backgroundImage"
        onChange={onChange}
        accept="image/*"
      />

      <label htmlFor="description">Zmiana opisu:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={onChange}
      />
    </div>
  );
};

export default ProfileSettings;