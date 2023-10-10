// If we user mongoose, then we can write DB schema like this.

// User Model
const userSchema = {
  phone: "",
  email: "",
  password: "",
  role: ["User", "Admin", "SuperAdmin"],
  googleId: "",
  profilePicture: "",

  // Personal Details
  firstName: "",
  lastName: "",
  whatsAppNo: "",
  language: "",
  gender: ["Male", "Female", "Other"],
  country: "",
  division: "",
  city: "",
  address: "",
  zipcode: "",
  dateOfBirth: "",
  createdAt: "",

  // Points Model related information: Keep in separate table
  points: 0,

  // Referral related information: Keep in separate table
  refarrel: [{ id: "", createdAt: "" }],

  // Photo-zone related information: Keep in separate table
  posts: [{ id: "", text: "", photoUrl: "", createdAt: "" }],
  likes: [{ id: "" }],

  // Course related information: Keep in separate table
  course: [{ course: {}, status: "" }],
};

// Role Model --- Need more details or we may just use this as enum only
const roleSchema = {
  name: ["User", "Admin", "SuperAdmin"],
  permissions: [String],
};

// Points Transaction Model
const pointsTransactionSchema = {
  user: "id",
  type: ["Earn", "Withdraw"],
  method: ["bCash", "Nagad"],
  requestTime: "",
  amount: 0,
  status: ["Pending", "Success", "Failed"],
  message: "",
  createdAt: "",
};

// Community Post Model
const photoZoneSchema = {
  author: "id",
  imageUrl: "",
  text: "",
  likes: [{ user: "id" }],
  createdAt: "",
};

// Referral Model
const referralSchema = {
  referrer: "id",
  referredUser: "id",
  pointsEarned: 0,
  createdAt: "",
};
