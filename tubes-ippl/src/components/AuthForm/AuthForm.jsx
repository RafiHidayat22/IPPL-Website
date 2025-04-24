import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.nama) {
        newErrors.nama = 'Full name is required';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (isLogin) {
      console.log('Login submitted:', { email: formData.email, password: formData.password });
    } else {
      console.log('Register submitted:', {
        nama: formData.nama,
        email: formData.email,
        password: formData.password
      });
      setIsLogin(true);
      setFormData({
        nama: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {!isLogin && (
          <div className="register-box">
            <div className="form-wrapper">
              <h2>Registrasi</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input
                    type="text"
                    id="nama"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.nama}
                    onChange={handleChange}
                    className={errors.nama ? 'error' : ''}
                  />
                  {errors.nama && <span className="error-msg">{errors.nama}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="contoh@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Kata Sandi</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Minimal 6 karakter"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                    />
                    <img
                      src={showPassword ? "/eye.svg" : "/eye-crossed.svg"}
                      alt="toggle visibility"
                      className="toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  {errors.password && <span className="error-msg">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Ketik ulang kata sandi"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={errors.confirmPassword ? 'error' : ''}
                    />
                    <img
                      src={showConfirmPassword ? "/eye.svg" : "/eye-crossed.svg"}
                      alt="toggle visibility"
                      className="toggle-icon"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                  </div>
                  {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
                </div>

                <div className="terms-group">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className={errors.agreeTerms ? 'error' : ''}
                  />
                  <label htmlFor="agreeTerms">
                    Saya menyetujui <a href="/terms">Syarat dan Ketentuan</a>
                  </label>
                  {errors.agreeTerms && <span className="error-msg">{errors.agreeTerms}</span>}
                </div>

                <button type="submit" className="submit-btn">Daftar Sekarang</button>

                <div className="login-link">
                  Sudah punya akun? <button type="button" onClick={toggleForm}>Masuk di sini</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isLogin && (
          <div className="login-box">
            <div className="form-wrapper">
              <h2>Masuk ke Akun Anda</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="contoh@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Kata Sandi</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Masukkan kata sandi Anda"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                    />
                    <img
                      src={showPassword ? "/eye.svg" : "/eye-crossed.svg"}
                      alt="toggle visibility"
                      className="toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  {errors.password && <span className="error-msg">{errors.password}</span>}
                </div>

                <button type="submit" className="submit-btn">Masuk</button>

                <div className="register-link">
                  Belum punya akun? <button type="button" onClick={toggleForm}>Daftar di sini</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;