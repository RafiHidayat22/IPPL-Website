import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './AuthForm.css';

const AuthForm = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
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

      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const endpoint = isLogin
      ? 'http://localhost:8080/api/auth/login'
      : 'http://localhost:8080/api/auth/register';

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          name: formData.nama,
          email: formData.email,
          password: formData.password
        };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId); // <- simpan userId juga
        setIsLoggedIn(true);
        onLogin && onLogin();
        navigate('/');
      }
       else {
        alert(data.error || 'Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setFormData({
      nama: '',
      email: '',
      password: '',
      agreeTerms: false
    });
    setIsLogin(true);
    alert('Berhasil logout');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {isLoggedIn ? (
          <div className="logout-box">
            <h2>Anda sudah login</h2>
            <button type="button" className="submit-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : !isLogin ? (
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
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Minimal 6 karakter"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                    />
                    <img
                      src={showPassword ? '/eye.svg' : '/eye-crossed.svg'}
                      alt="toggle visibility"
                      className="toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  {errors.password && <span className="error-msg">{errors.password}</span>}
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

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
                </button>

                <div className="login-link">
                  Sudah punya akun? <button type="button" onClick={toggleForm}>Masuk di sini</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
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
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Masukkan kata sandi Anda"
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                    />
                    <img
                      src={showPassword ? '/eye.svg' : '/eye-crossed.svg'}
                      alt="toggle visibility"
                      className="toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  {errors.password && <span className="error-msg">{errors.password}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Memproses...' : 'Masuk'}
                </button>

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
