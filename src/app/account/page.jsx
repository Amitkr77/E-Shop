"use client";

import { useState } from "react";
import TabNavigation from "@/components/ui/custom/TabNavigation";
import SettingsTab from "@/components/account/SettingsTab";
import OverviewTab from "@/components/account/OverviewTab";
import ProfileTab from "@/components/account/ProfileTab";
import OrdersTab from "@/components/account/OrderTab";
import WishlistTab from "@/components/account/WishlistTab";
import AddressesTab from "@/components/account/AddressesTab";
import OrderDetailModal from "@/components/account/OrderDetailModal";
import {
  mockUser,
  mockOrders,
  mockWishlist,
  mockAddresses,
} from "../../data/mockUserData";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "orders", label: "Orders" },
  { id: "wishlist", label: "Wishlist" },
  { id: "addresses", label: "Addresses" },
  { id: "settings", label: "Settings" },
];

export default function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // In real app: fetch from auth context / API on mount
  const user = mockUser;
  const orders = mockOrders;
  const wishlist = mockWishlist;
  const addresses = mockAddresses;

  const openOrderDetail = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen bg-zen-paper py-12 md:py-20 px-6 sm:px-8 md:px-12 lg:px-24">
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
            {activeTab === "overview" && (
              <OverviewTab
                user={user}
                orders={orders}
                wishlistCount={wishlist.length}
              />
            )}
            {activeTab === "orders" && (
              <OrdersTab orders={orders} onViewDetail={openOrderDetail} />
            )}
            {activeTab === "wishlist" && <WishlistTab items={wishlist} />}
            {activeTab === "addresses" && (
              <AddressesTab addresses={addresses} />
            )}
            {activeTab === "settings" && <SettingsTab user={user} />}
          </div>
        </div>
        {/* Order Detail Modal */}
        <OrderDetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          order={selectedOrder}
        />
      </div>
    </div>
  );
}
