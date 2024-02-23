import React, { useState, ChangeEvent } from 'react';
import './settings.scss';
import CategoryList from './CategoryList/CategoryList';
import ProfileSettings from './ProfileSettings/ProfileSettings';

interface FormData {
  username: string;
  email: string;
  password: string;
  notifications: string;
  profileImage: string;
  backgroundImage: string;
  description: string;
}

const Settings: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    notifications: 'email',
    profileImage: '',
    backgroundImage: '',
    description: '',
  });

  const [activeCategory, setActiveCategory] = useState<string>('Profil');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = () => {
    alert('Zmiany zostały zapisane!');
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const categories = [
    'Profil',
    'Dane użytkownika',
    'Bezpieczeństwo',
    'Powiadomienia',
  ];

  return (
    <div className="container settings__container">
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="settings__content">
        <h1>{activeCategory}</h1>
        <form>
          {activeCategory === 'Profil' && (
            <ProfileSettings formData={formData} onChange={handleChange} />
          )}

          {activeCategory === 'Dane użytkownika' && (
            <div>
              <label htmlFor="email">Nowy adres e-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          )}

          <button className="button" type="button" onClick={handleSubmit}>
            Zapisz zmiany
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
