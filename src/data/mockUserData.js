export const mockUser = {
  name: "Amit",
  email: "amit@example.com",
  phone: "+91 98765 43210",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  joined: "January 2025",
};

export const mockOrders = [
  {
    id: "KOKORO-20260315-456",
    date: "March 15, 2026",
    status: "Delivered",
    total: 78,
    items: ["Bonsai Bamboo Vessel", "Sumi Cork Journal"],
  },
  {
    id: "KOKORO-20260210-123",
    date: "February 10, 2026",
    status: "Delivered",
    total: 55,
    items: ["Origami Storage Box"],
  },
];

export const mockWishlist = [
  { id: 5, name: "Kyoto Bamboo Cutlery", price: 24, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Origami Storage Box", price: 55, img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=400&q=80" },
];

export const mockAddresses = [
  {
    id: 1,
    type: "Home",
    name: "Amit",
    address: "House No. 42, Gandhi Maidan Road",
    city: "Patna",
    state: "Bihar",
    pin: "800004",
    phone: "+91 98765 43210",
    isDefault: true,
  },
  {
    id: 2,
    type: "Work",
    name: "Amit",
    address: "Near Dak Bungalow Crossing",
    city: "Patna",
    state: "Bihar",
    pin: "800001",
    phone: "+91 98765 43210",
    isDefault: false,
  },
];