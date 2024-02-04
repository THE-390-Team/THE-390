import React, { useState } from 'react';
import { MdCameraAlt, MdPerson, MdVpnKey, MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Profile = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Implement logic to save edited profile data
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    // Update the edited profile when input fields change
    setEditedProfile({
      ...editedProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    // Handle file selection for profile picture
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='text'>User Profile</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <IconContext.Provider value={{ className: 'react-icons-signup' }}>
            <div className='input-field'>
              <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 10px' }}>
                {selectedFile ? (
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    src={URL.createObjectURL(selectedFile)}
                    alt='Selected'
                  />
                ) : (
                  <>
                    <MdCameraAlt style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem', color: '#fff' }} />
                    <input
                      type='file'
                      accept='image/jpeg'
                      onChange={handleFileChange}
                      disabled={!editMode}
                      style={{ display: 'none' }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className='input-field'>
              <MdPerson />
              <input
                type='text'
                name='username'
                value={editedProfile.username}
                placeholder='Username'
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
            <div className='input-field'>
              <MdEmail />
              <input
                type='email'
                name='email'
                value={editedProfile.email}
                placeholder='Email'
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
            <div className='input-field'>
              <MdVpnKey />
              <input
                type='text'
                name='registrationKey'
                value={editedProfile.registrationKey}
                placeholder='Registration Key'
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
          </IconContext.Provider>
        </div>
        {editMode ? (
          <div className='submit-container'>
            <div className='submit' onClick={handleSaveClick}>
              Save
            </div>
          </div>
        ) : (
          <div className='edit-container'>
            <div className='edit' onClick={handleEditClick}>
              Edit Profile
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;