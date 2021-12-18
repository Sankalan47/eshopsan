import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
