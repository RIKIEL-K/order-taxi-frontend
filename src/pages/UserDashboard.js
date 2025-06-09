import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function UserDashboard() {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [sidebarToggled, setSidebarToggled] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8082/api/transactions/user/${id}`)
      .then(res => setTransactions(res.data))
      .catch(err => console.error("Erreur : ", err));
  }, [id]);

  const toggleSidebar = () => {
    setSidebarToggled(!sidebarToggled);
    document.body.classList.toggle('sb-sidenav-toggled');
  };

  return (
    <div className={`sb-nav-fixed ${sidebarToggled ? 'sb-sidenav-toggled' : ''}`}>
      {/* Top Navigation */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="/">Autodrive</a>
        <button className="btn btn-link btn-sm me-4 me-lg-0" onClick={toggleSidebar}><i className="fas fa-bars"></i></button>
        <ul className="navbar-nav ms-auto me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Activity Log</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Layout Sidenav */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark bg-dark">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <a className="nav-link" href={`/dashboard/${id}`}>
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Dashboard
                </a>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a className="nav-link" href={`/account-settings/${id}`}>Mon profil</a>
                <a className="nav-link" href={`/comments/${id}`}>Commentaires</a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              User ID: {id}
            </div>
          </nav>
        </div>

        {/* Layout Content */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Votre activité</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>

              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Devenir chauffeur</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href={`/driver-request/${id}`}>Visiter</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Liste des transactions
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Départ</th>
                        <th>Destination</th>
                        <th>Distance</th>
                        <th>Tarif</th>
                        <th>Prix</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.length > 0 ? (
                        transactions.map((t, index) => (
                          <tr key={index}>
                            <td>{t.depart}</td>
                            <td>{t.destination}</td>
                            <td>{t.distance}</td>
                            <td>{t.tarif}</td>
                            <td>{t.prix}</td>
                            <td>{new Date(t.date).toLocaleDateString()}</td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="6" className="text-center">Aucune transaction</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>

          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">© Autodrive 2025</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
