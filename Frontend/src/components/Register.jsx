import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react'

function Register() {
    const [formData, setFormData] = useState({
        felhasznalo_nev: '',
        jelszo: '',
        telefon: '',
        email: '',
        szul_datum: '',
        lakcim: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/felhasznalok`, formData);
            alert('Sikeres regisztráció!');
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data) {
                console.error(error.response.data);
                alert(error.response.data.message || 'Hiba történt a regisztráció során.');
            } else {
                console.error(error);
                alert('Hiba történt a regisztráció során.');
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="felhasznalo_nev" className="mb-3 block text-base font-medium text-[#ffffff]">
                            Teljes név
                        </label>
                        <input
                            type="text"
                            name="felhasznalo_nev"
                            id="felhasznalo_nev"
                            placeholder="Full Name"
                            value={formData.felhasznalo_nev}
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

                    <div className="mb-5">
                        <label htmlFor="telefon" className="mb-3 block text-base font-medium text-[#ffffff]">
                            Telefonszám
                        </label>
                        <input
                            type="text"
                            name="telefon"
                            id="telefon"
                            placeholder="Enter your phone number"
                            value={formData.telefon}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#ffffff]">
                            Email cím
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="szul_datum" className="mb-3 block text-base font-medium text-[#ffffff]">
                            Születési dátum
                        </label>
                        <input
                            type="date"
                            name="szul_datum"
                            id="szul_datum"
                            value={formData.szul_datum}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="lakcim" className="mb-3 block text-base font-medium text-[#ffffff]">
                            Lakcím
                        </label>
                        <input
                            type="text"
                            name="lakcim"
                            id="lakcim"
                            placeholder="Enter your address"
                            value={formData.lakcim}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Regisztrálás
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;