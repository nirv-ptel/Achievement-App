import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Ready!");
});

app.get("/api/me", (req, res) => {
  const me = [
    {
      email: "yash.radicalloop@gmail.com",
      password: 123456,
      first_name: "Yash P",
      last_name: "Marakana",
      phone: "9909286298",
      role: "admin",
    },
  ];
  res.send(me);
});

app.get("/api/admin-login", (req, res) => {
  const admin = [
    {
      username: "YashMarakana",
      email: "yash.radicalloop@gmail.com",
      password: "12345678",
      id: 1,
    },
  ];
  res.send(admin);
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      email: "john.doe@mail.com",
      password: "abc123456",
      id: "1a2b3c4d-5678-90ab-cdef-1234567890ab",
      name: "John Doe",
      number: "001",
      role: "user",
      address: "123 Elm Street, Springfield",
    },
    {
      email: "jane.smith@mail.com",
      password: "def789012",
      id: "2b3c4d5e-6789-01ab-cdef-2345678901bc",
      name: "Jane Smith",
      number: "002",
      role: "user",
      address: "456 Oak Avenue, Springfield",
    },
    {
      email: "michael.jordan@mail.com",
      password: "ghi345678",
      id: "3c4d5e6f-7890-12ab-cdef-3456789012cd",
      name: "Michael Jordan",
      number: "023",
      role: "user",
      address: "789 Pine Lane, Springfield",
    },
    {
      email: "elizabeth.windsor@mail.com",
      password: "jkl901234",
      id: "4d5e6f7g-8901-23ab-cdef-4567890123de",
      name: "Elizabeth Windsor",
      number: "004",
      role: "user",
      address: "123 Royal Road, Buckingham",
    },
    {
      email: "will.smith@mail.com",
      password: "mno567890",
      id: "5e6f7g8h-9012-34ab-cdef-5678901234ef",
      name: "Will Smith",
      number: "005",
      role: "user",
      address: "789 Hollywood Blvd, Los Angeles",
    },
    {
      email: "steve.jobs@mail.com",
      password: "pqr123456",
      id: "6f7g8h9i-0123-45ab-cdef-6789012345fg",
      name: "Steve Jobs",
      number: "006",
      role: "user",
      address: "123 Apple Lane, Cupertino",
    },
  ];
  res.send(users);
});

const port = 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
