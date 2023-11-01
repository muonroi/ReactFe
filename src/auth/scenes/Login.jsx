import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setToken, setCurrentUser, setRole } from '../../state/userSlide';
import { userApi } from '../../Api/userApi';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('Public');

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();


  const onSubmit = (data) => {
    try {
      const callLogin = async (data) => {
        try {
          const response = await userApi.login(data);
          if (response.data !== null) {
            localStorage.setItem('token', response.data.jwt);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            dispatch(setCurrentUser(response.data.user));
            dispatch(setToken(response.data.jwt));
            navigate('/');
          }
        } catch (error) {
          if (error.response && error.response.data && error.response.data.error) {
            const validationError = error.response.data.error;
            console.error('Login failed:', validationError);
            if (validationError.details && validationError.details.errors) {
              validationError.details.errors.forEach((errorDetail) => {
                toast.error(errorDetail.message, {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                });
              });
            } else {

              toast.error('Login failed. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
              });
            }
          } else {
            toast.error('Login failed. Please try again.', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
          }
        }
      };
      callLogin(data);
    } catch (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <>
      <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }} htmlFor="inputUsername">
              Username <sup>*</sup>
            </label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <input
                type="text"
                placeholder="Username"
                {...register('identifier', { required: 'Username is required' })}
              />
              {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
            </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>
              Password <sup>*</sup>
            </label>
            <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
              <i
                className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                aria-hidden="true"
                onClick={togglePassword}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  left: '17%',
                  top: '34%',
                  opacity: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              ></i>
              {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
            </div>
          </div>
          <div>
            <div>
              <input
                type="submit"
                name="submitAccount"
                defaultValue="Register"
                className="exclusive shopBtn"
              />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />

    </>

  );
}
