import { useState } from 'react';
import TabNavigation from '../ui/TabNavigation';
import ProfileTab from './ProfileTab';
import OrdersTab from './OrdersTab';
import WishlistTab from './WishlistTab';
import AddressesTab from './AddressesTab';
import { mockUser, mockOrders, mockWishlist, mockAddresses } from '../../data/mockUserData';

const tabs = [
  { id: 'profile', label: 'Profile' },
  { id: 'orders', label: 'Orders' },
  { id: 'wishlist', label: 'Wishlist' },
  { id: 'addresses', label: 'Addresses' },
];

export default function AccountDashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  // In real app: fetch from auth context / API on mount
  const user = mockUser;
  const orders = mockOrders;
  const wishlist = mockWishlist;
  const addresses = mockAddresses;

  return (
    <div className="min-h-screen bg-zen-paper py-12 md:py-16 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-3 italic">
            Welcome back, {user.name}
          </h1>
          <p className="text-zinc-500 text-sm">
            Member since {user.joined} • {user.email}
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-zinc-100 rounded-2xl p-6 md:p-10 shadow-sm">
          <TabNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={tabs}
          />

          <div className="mt-8">
            {activeTab === 'profile' && <ProfileTab user={user} />}
            {activeTab === 'orders' && <OrdersTab orders={orders} />}
            {activeTab === 'wishlist' && <WishlistTab items={wishlist} />}
            {activeTab === 'addresses' && <AddressesTab addresses={addresses} />}
          </div>
        </div>
      </div>
    </div>
  );
}