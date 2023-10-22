import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setToken,setCurrentUser } from '../../state/userSlide';
import { userApi } from '../../Api/userApi';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
export default function Register() {
  const navigate  = useNavigate(); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const dispatch = useDispatch();
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPassword = () => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
try {
  const callRegister = async () => {
    try {
      const response = await userApi.register(data);
      if (response.data !== null) {
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch(setCurrentUser(response.data.user));
        dispatch(setToken(response.data.jwt));
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const validationError = error.response.data.error;
        console.error('Registration failed:', validationError);
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
          toast.error('Registration failed. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      } else {
        console.error('Registration failed:', error);
        toast.error('Registration failed. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    }
  };
  
  callRegister();
  
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
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <span style={{color:'red'}}>{errors.username.message}</span>}
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }} htmlFor="inputEmail">
            Email <sup>*</sup>
          </label>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="text"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
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
            {errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>
            Confirm Password <sup>*</sup>
          </label>
          <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
            <input
              type={passwordConfirmVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
            />
            <i
              className={`fa ${passwordConfirmVisible ? 'fa-eye-slash' : 'fa-eye'}`}
              aria-hidden="true"
              onClick={toggleConfirmPassword}
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
            {errors.confirmPassword && <span style={{color:'red'}}>{errors.confirmPassword.message}</span>}
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
