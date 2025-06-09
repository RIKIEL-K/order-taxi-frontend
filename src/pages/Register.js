import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "../components/Loading";
import AuthService from "../services/Authservice";

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role");

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    profilePhoto: "",
    dateNaissance: "",
    role: role
  });

  useEffect(() => {
    // Redirige si l'utilisateur est déjà connecté
    if (AuthService.isAuthenticated()) {
      navigate(`/index/${AuthService.getUserId()}`);
      return;
    }

    // Vérifie si le rôle est valide
    if (role !== "USER" && role !== "DRIVER") {
      alert("Rôle invalide !");
      navigate("/");
    }
  }, [role, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8082/api/auth/register", user);
      const userId = res.data;
      setTimeout(() => {
        navigate(`/index/${userId}`);
      }, 1500);
    } catch (err) {
      alert("Erreur : " + (err.response?.data || err.message));
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card card-style p-4 shadow" style={{ maxWidth: 400, width: "100%", borderRadius: 15 }}>
        <ul className="nav nav-pills nav-justified mb-4">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <span className="nav-link active">Register</span>
          </li>
        </ul>

        <div className="text-center mb-3">
          <p className="mb-2">Sign up with:</p>
          <span className="social-btn"><i className="fab fa-google"></i></span>
        </div>

        <p className="text-center mt-3 mb-2">or:</p>

        <form onSubmit={handleSubmit}>
          <input name="firstname" className="form-control mb-2" placeholder="Name" onChange={handleChange} required />
          <input name="lastname" className="form-control mb-2" placeholder="Username" onChange={handleChange} required />
          <input name="email" type="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} required />
          <input name="address" className="form-control mb-2" placeholder="Adresse" onChange={handleChange} required />
          <input name="phoneNumber" className="form-control mb-2" placeholder="Téléphone" onChange={handleChange} required />
          <input name="dateNaissance" type="date" className="form-control mb-2" onChange={handleChange} />
          <input name="password" type="password" className="form-control mb-2" placeholder="Mot de passe" onChange={handleChange} required />

          <div className="form-check d-flex justify-content-start mb-3">
            <input className="form-check-input me-2" type="checkbox" id="termsCheck" required />
            <label className="form-check-label text-small" htmlFor="termsCheck">
              I have read and agree to the terms
            </label>
          </div>

          <button type="submit" className="btn btn-register w-100 text-white mb-3" style={{ backgroundColor: '#3b6efb' }}>
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
