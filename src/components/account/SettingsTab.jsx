import { useState } from 'react';

export default function SettingsTab({ user }) {
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };

  const handleSavePassword = () => {
    if (passwordForm.new === passwordForm.confirm) {
      alert("Password updated successfully! (Demo)");
      setPasswordForm({ current: '', new: '', confirm: '' });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="space-y-16 flex justify-between">
      {/* Profile Section */}
      <div>
        <h3 className="text-xl font-light mb-8">Profile Information</h3>
        <div className="w-full space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zen-moss bg-white"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zen-moss bg-white"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Phone</label>
            <input
              type="tel"
              defaultValue={user.phone}
              className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zen-moss bg-white"
            />
          </div>
          <button className="mt-4 px-8 py-4 bg-zen-ink text-white rounded-full text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all">
            Save Profile
          </button>
        </div>
      </div>

      {/* Password Change Section */}
      <div>
        <h3 className="text-xl font-light mb-8">Change Password</h3>
        <div className="max-w-md space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Current Password</label>
            <input
              type="password"
              name="current"
              value={passwordForm.current}
              onChange={handlePasswordChange}
              className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zen-moss bg-white"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">New Password</label>
            <input
              type="password"
              name="new"
              value={passwordForm.new}
              onChange={handlePasswordChange}
              className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zen-moss bg-white"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Confirm New Password</label>
            <input
              type="password"
              name="confirm"
              value={passwordForm.confirm}
              onChange={handlePasswordChange}
              className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-zen-moss bg-white"
            />
          </div>

          <button
            onClick={handleSavePassword}
            className="mt-4 px-8 py-4 bg-zen-ink text-white rounded-full text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}