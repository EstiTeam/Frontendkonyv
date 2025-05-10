import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    jelszo: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', formData);
      alert('Sikeres bejelentkezés!');
      console.log(response.data);

      // (Opcionális) Token vagy felhasználói adatok mentése
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Átirányítás a főoldalra vagy másik oldalra
          navigate('/');

    // Oldal frissítése
        window.location.reload();
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data);
        alert(error.response.data.message || 'Hiba történt a bejelentkezés során.');
      } else {
        console.error(error);
        alert('Hiba történt a bejelentkezés során.');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-12 bg-gray-950">
      <div className="-mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#ffffff]">
              Email cím
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="jelszo" className="mb-3 block text-base font-medium text-[#ffffff]">
              Jelszó
            </label>
            <input
              type="password"
              name="jelszo"
              id="jelszo"
              placeholder="••••••••"
              value={formData.jelszo}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-white font-medium text-xs text-center">
              <span className="ml-2">
                Nem regisztráltál még?
                <Link to="/register" className="text-xs ml-2 text-blue-500 font-semibold">
                  Regisztrálj most &rarr;
                </Link>
              </span>
            </p>
          </div>
          <br />
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Belépés
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;   

