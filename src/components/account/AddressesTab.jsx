export default function AddressesTab({ addresses }) {
  return (
    <div className="space-y-8">
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className={`border rounded-xl p-6 ${addr.isDefault ? 'border-zen-moss bg-zen-stone/30' : 'border-zinc-100'}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-medium">{addr.type} Address</p>
              <p className="text-sm text-zinc-600 mt-1">{addr.name}</p>
            </div>
            {addr.isDefault && (
              <span className="px-3 py-1 bg-zen-moss/20 text-zen-moss text-xs rounded-full uppercase tracking-widest">
                Default
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-600 mb-1">{addr.address}</p>
          <p className="text-sm text-zinc-600">
            {addr.city}, {addr.state} {addr.pin}
          </p>
          <p className="text-sm text-zinc-500 mt-2">{addr.phone}</p>

          <div className="mt-6 flex gap-4">
            <button className="text-xs uppercase tracking-widest text-zen-moss hover:underline">
              Edit
            </button>
            {!addr.isDefault && (
              <button className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-700">
                Set as Default
              </button>
            )}
          </div>
        </div>
      ))}

      <button className="w-full md:w-auto px-8 py-4 border border-zen-ink rounded-full text-xs uppercase tracking-[0.3em] hover:bg-zen-ink hover:text-zen-paper transition-colors">
        Add New Address
      </button>
    </div>
  );
}