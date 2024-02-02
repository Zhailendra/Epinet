import React, { useState } from 'react';
import styles from '../styles/signup.module.scss';
import { withTheme } from '../styles/Theme';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PocketBase from 'pocketbase';

const SignUpForm = ({ theme }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, setError, clearErrors } = useForm();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_POCKETBASE_API_URL;
  const pb = new PocketBase(url);

  const handleSignUp = async (data) => {
    try {
      setLoading(true);

      // Check if the password and passwordConfirm match
      if (data.password !== data.passwordConfirm) {
        setError('passwordConfirm', { type: 'manual', message: 'Passwords do not match' });
        setLoading(false);
        return;
      }

      // Clear previous password confirmation errors
      clearErrors('passwordConfirm');

      // Example create data
      const userData = {
        "email": data.email,
        "emailVisibility": true,
        "password": data.password,
        "passwordConfirm": data.password,
        "name": "test",
        "adm": false
      };

      // Create user record
      const userRecord = await pb.collection('users').create(userData);

      // (optional) send an email verification request
      await pb.collection('users').requestVerification(data.email);

      // Redirect to a confirmation page or handle as needed
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error appropriately, e.g., display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.signUpForm} style={{ backgroundColor: theme.secondaryColor }}>
      <h2>Sign Up</h2>
      {loading && <div>Loading...</div>}
      {!loading && (
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label style={{ color: theme.primaryColor }}>Email:</label>
          <input style={{ borderColor: theme.tertiaryColor }} type="email" placeholder="email@example.com" {...register('email')} />

          <label style={{ color: theme.primaryColor }}>Password:</label>
          <input style={{ borderColor: theme.tertiaryColor }} type="password" placeholder="Password" {...register('password')} />

          <label style={{ color: theme.primaryColor }}>Confirm Password:</label>
          <input
            style={{ borderColor: theme.tertiaryColor }}
            type="password"
            placeholder="Confirm Password"
            {...register('passwordConfirm')}
          />

          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

const SignUpPage = ({ theme }) => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpFormContainer} style={{ backgroundColor: theme.secondaryColor }}>
        <SignUpForm theme={theme} />
      </div>
    </div>
  );
};

export default withTheme(SignUpPage);
