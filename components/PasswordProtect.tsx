import React, { useState, FormEvent } from 'react';
import { MailIcon } from './Icons';

interface PasswordProtectProps {
  correctPassword: string;
  onSuccess: () => void;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ correctPassword, onSuccess }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState<'password' | 'request' | 'sent'>('password');
  const [requestEmail, setRequestEmail] = useState('');

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      onSuccess();
      setError('');
    } else {
      setError('Incorrect Password. Access Denied.');
      setPasswordInput('');
    }
  };

  const handleRequestSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = "Portfolio Access Request";
    const body = `Hello,\n\nI would like to request access to your portfolio case study.\n\nMy email is: ${requestEmail}\n\nThank you.`;
    const mailtoLink = `mailto:arpit_bhargava@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setView('sent');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-40">
      <div className="max-w-md w-full">
        <div className="bg-white border border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all">
          
          {view === 'password' && (
            <>
              <h2 className="text-sm font-bold font-mono uppercase text-slate-400 mb-4 tracking-widest">Access Restricted</h2>
              <p className="text-slate-600 mb-6 font-light">This case study is password-protected. Please enter the password to continue.</p>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter Password..."
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors font-mono"
                  autoFocus
                />
                {error && <p className="text-red-600 text-xs font-mono mt-2">{error}</p>}
                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-700 transition-all group shadow-[4px_4px_0px_0px_rgba(15,23,42,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Unlock
                </button>
              </form>
              <div className="text-center mt-6">
                <button 
                    onClick={() => setView('request')}
                    className="text-xs font-mono text-slate-400 hover:text-slate-900 hover:underline transition-colors"
                >
                    Request Access
                </button>
              </div>
            </>
          )}

          {view === 'request' && (
             <>
              <h2 className="text-sm font-bold font-mono uppercase text-slate-400 mb-4 tracking-widest">Request Access</h2>
              <p className="text-slate-600 mb-6 font-light">Enter your email address to request the password via email.</p>
              <form onSubmit={handleRequestSubmit}>
                <input
                  type="email"
                  value={requestEmail}
                  onChange={(e) => setRequestEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors font-mono"
                  required
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-700 transition-all group shadow-[4px_4px_0px_0px_rgba(15,23,42,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Send Request
                </button>
              </form>
              <div className="text-center mt-6">
                <button 
                    onClick={() => setView('password')}
                    className="text-xs font-mono text-slate-400 hover:text-slate-900 hover:underline transition-colors"
                >
                    Back to Login
                </button>
              </div>
            </>
          )}

          {view === 'sent' && (
            <div className="text-center">
                <MailIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-lg font-bold font-mono uppercase text-slate-900 mb-4 tracking-widest">Check Your Email Client</h2>
                <p className="text-slate-600 mb-6 font-light">
                    Your default email application should have opened with a pre-filled message. Please send it to complete your request.
                </p>
                <button 
                    onClick={() => setView('password')}
                    className="text-xs font-mono text-slate-400 hover:text-slate-900 hover:underline transition-colors"
                >
                    Back to Login
                </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PasswordProtect;