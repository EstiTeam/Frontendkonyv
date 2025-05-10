import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Felhasználói adatok törlése a localStorage-ból
    localStorage.removeItem('user');

    // (Opcionális) Token törlése, ha használsz tokent
    // localStorage.removeItem('token');
    // Átirányítás a főoldalra
    navigate('/');

    // Oldal frissítése
    window.location.reload();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Kijelentkezés folyamatban...</p>
    </div>
  );
}

export default Logout;