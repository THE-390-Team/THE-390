import React, { useState } from 'react';
import { MdCameraAlt, MdPerson, MdVpnKey, MdEmail, MdPhone } from 'react-icons/md';
import { IconContext } from 'react-icons';

const UserProfile = ({ profile }) => {
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

  const resetFileInput = () => {
    // Reset file input to clear the selected file
    document.getElementById('profilePictureInput').value = '';
    setSelectedFile(null);
  };

  const profilePictureContainerStyles = {
    position: 'relative',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 10px',
  };

  const selectedPictureStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  };

  const cameraIconStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
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
              <label htmlFor='profilePictureInput' style={profilePictureContainerStyles}>
                {selectedFile ? (
                  <>
                    <img
                      style={selectedPictureStyles}
                      src={URL.createObjectURL(selectedFile)}
                      alt='Selected'
                    />
                    {editMode && (
                      <MdCameraAlt
                        style={cameraIconStyles}
                        onClick={() => resetFileInput()}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <MdCameraAlt
                      style={cameraIconStyles}
                      onClick={() => document.getElementById('profilePictureInput').click()}
                    />
                    <input
                      id='profilePictureInput'
                      type='file'
                      accept='image/jpeg'
                      onChange={handleFileChange}
                      disabled={!editMode}
                      style={{ display: 'none' }}
                    />
                  </>
                )}
              </label>
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
            <div className='input-field'>
              <MdPhone />
              <input
                type='tel'
                name='phoneNumber'
                value={editedProfile.phoneNumber}
                placeholder='Phone Number'
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
            <div className='input-field'>
              <MdVpnKey />
              <input
                type='text'
                name='userID'
                value={editedProfile.userID}
                placeholder='User ID'
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

export default UserProfile;
