import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import StoreSelector from './components/StoreSelector';
import PriceUpdater from './components/PriceUpdater';
import LoginForm from './components/LoginForm';
import ModifyStrips from './components/ModifyStrips';
import QuienesSomos from './components/QuienesSomos';
import StoreAdminDashboard from './components/StoreAdminDashboard';
import ITOperationsDashboard from './components/ITOperationsDashboard';
import StripEditor from './components/StripEditor';
import StripView from './components/StripView';
import SelectGondola from './components/SelectGondola';
import LastUpdateSummary from './components/LastUpdateSummary'; // Nuevo import
import PublicityView from './components/PublicityView';

const AppContent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogin = (role, store = null) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setSelectedStore(store);
    setShowLoginForm(false);
    
    if (role === 'store_admin') {
      navigate('/store-admin-dashboard');
    } else if (role === 'it_operator') {
      navigate('/it-operations-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      position: 'relative'
    }}>
      <Navbar 
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        selectedStore={selectedStore}
        onLogout={() => {
          setIsLoggedIn(false);
          setUserRole(null);
          setSelectedStore(null);
          navigate('/');
        }}
      />
      {showLoginForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <LoginForm 
            onClose={() => setShowLoginForm(false)}
            onLogin={handleLogin}
          />
        </div>
      )}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '100vw', // Updated to adapt to full screen width
        margin: '80px auto 0',
        padding: '20px', // Padding can be adjusted based on screen size
        position: 'relative',
        overflow: 'auto',
        height: 'calc(100vh - 80px)'
      }}>
        <Routes>
          <Route path="/" element={<Home onLoginClick={handleLoginClick} />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard userRole={userRole} /> : <Navigate to="/" />}
          />
          <Route
            path="/store-selector"
            element={isLoggedIn ? <StoreSelector /> : <Navigate to="/" />}
          />
          <Route
            path="/price-updater"
            element={isLoggedIn ? <PriceUpdater /> : <Navigate to="/" />}
          />
          <Route
            path="/modify-strips"
            element={isLoggedIn ? <ModifyStrips /> : <Navigate to="/" />}
          />
          <Route
            path="/strip-editor/:category"
            element={isLoggedIn ? <StripEditor /> : <Navigate to="/" />}
          />
          <Route
            path="/strip-view"
            element={isLoggedIn ? <StripView /> : <Navigate to="/" />}
          />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route
            path="/store-admin-dashboard"
            element={
              isLoggedIn && userRole === 'store_admin' ? (
                <StoreAdminDashboard userRole={userRole} selectedStore={selectedStore} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/it-operations-dashboard"
            element={
              isLoggedIn && userRole === 'it_operator' ? (
                <ITOperationsDashboard userRole={userRole} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/select-gondola" element={<SelectGondola />} /> 
          <Route
            path="/last-update-summary"
            element={
              isLoggedIn && userRole === 'store_admin' ? (
                <LastUpdateSummary />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/publicity-view"
            element={
              isLoggedIn ? (
                <PublicityView />
              ) : (
                <Navigate to="/" />
              )
            }
          />   
                
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
