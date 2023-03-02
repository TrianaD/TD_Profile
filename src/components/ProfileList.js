import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import Profile from './Profile';

function ProfileList() {
  const [Profile, setProfile] = useState([]);

  // Function to add a Profile list item
  const addProfileItem = (item) => {
    console.log(
      '🚀 ~ file: ProfileList.js ~ line 10 ~ addProfileItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new Profile list item to the existing array of objects
    const newProfile = [item, ...Profile];
    console.log(newProfile);

    // Call setProfile to update state with our new set of Profile list items
    setProfile(newProfile);
  };

  // Function to mark Profile list item as complete
  const completeProfileItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedProfile = Profile.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedProfile);
    setProfile(updatedProfile);
  };

  // Function to remove Profile list item and update state
  const removeProfileItem = (id) => {
    const updatedProfile = [...Profile].filter((item) => item.id !== id);

    setProfile(updatedProfile);
  };

  // Function to edit the Profile list item
  const editProfileItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setProfile((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your Profile list?</h1>
      <ProfileForm onSubmit={addProfileItem} />
      <Profile
        Profile={Profile}
        completeProfileItem={completeProfileItem}
        removeProfileItem={removeProfileItem}
        editProfileItem={editProfileItem}
      ></Profile>
    </div>
  );
}

export default ProfileList;