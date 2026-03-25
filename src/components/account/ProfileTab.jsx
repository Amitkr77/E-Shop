export default function ProfileTab({ user }) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-zen-stone"
        />
        <div>
          <h3 className="text-2xl font-light mb-2">{user.name}</h3>
          <p className="text-zinc-600 mb-1">{user.email}</p>
          <p className="text-zinc-500 text-sm">{user.phone}</p>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-light mb-4">Personal Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Full Name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Phone</label>
            <input
              type="tel"
              defaultValue={user.phone}
              className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:border-zen-moss bg-white/50"
            />
          </div>
        </div>
      </div>

      <button className="px-8 py-4 bg-zen-ink text-zen-paper rounded-full text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors">
        Save Changes
      </button>
    </div>
  );
}