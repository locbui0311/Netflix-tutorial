import React, { useState } from 'react';
import styles from '../styles/LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  if (!isOpen) return null;

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignUp(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setShowSignUp(false);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!showForgotPassword && !showSignUp ? (
          <>
            <h2 className={styles.title}>Sign In</h2>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Sign In
              </button>
            </form>
            <div className={styles.modalFooter}>
              <button onClick={handleForgotPassword} className={styles.linkButton}>
                Forgot Password?
              </button>
              <p className={styles.signUpText}>
              If you don’t have an account yet,{' '}
                <button onClick={handleSignUp} className={styles.linkButton}>
                register now.
                </button>
              </p>
            </div>
          </>
        ) : showForgotPassword ? (
          <>
            <h2 className={styles.title}>Forgot Password</h2>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Reset Password
              </button>
            </form>
            <div className={styles.modalFooter}>
              <button onClick={handleBackToLogin} className={styles.linkButton}>
                Back to Sign In
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Sign Up</h2>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
            </form>
            <div className={styles.modalFooter}>
              <button onClick={handleBackToLogin} className={styles.linkButton}>
                Back to Sign In
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal; 