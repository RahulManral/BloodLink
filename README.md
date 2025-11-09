# 🩸 BloodLink – Blood Donation Platform

BloodLink is a community-driven web platform that helps connect blood donors and recipients quickly and safely. The project’s mission is to make blood donation more accessible by using real-time technology and a simple user interface to match people who **can give** with those who **need help**.

---

## 🚀 Features

- **Donor & Recipient Matching:** Search and connect based on blood type and location.  
- **User Authentication:** Secure sign-in and registration system powered by Firebase.  
- **Real-time Updates:** Receive instant updates on new blood requests and donors.  
- **Clean UI:** Built with Tailwind CSS for fast and modern styling.  
- **Responsive Design:** Works seamlessly across devices of all sizes.  
- **Community Support:** Build a life-saving network through consistent donor engagement.  

---

## 🧰 Tech Stack

**Frontend:**
- [Vite](https://vitejs.dev/) – Lightning-fast build tool for modern web apps  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- HTML5, CSS3, JavaScript (ES6+)  

**Backend & Database:**
- [Node.js](https://nodejs.org/) – Server-side environment  
- [Firebase](https://firebase.google.com/) – Authentication and Realtime Database  

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/<your-username>/BloodLink.git

# Navigate into the project folder
cd BloodLink

# Install dependencies
npm install

# Start the development server
npm run dev
```

This will start the app on your local server through **Vite** (usually `http://localhost:5173`).

---

## 🔐 Firebase Configuration

1. Create a project on [Firebase Console](https://console.firebase.google.com/).  
2. Enable **Authentication** (Email/Password or other methods as needed).  
3. Set up **Realtime Database** or **Firestore** for storage.  
4. Get your Firebase configuration keys and add them to your environment file:

```bash
# .env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 📸 Screenshots (Optional)

Add your project UI screenshots here to showcase the design and features.

---

## 🤝 Contributing

Contributions are welcome!  
- Fork the repository  
- Create a feature branch (`git checkout -b feature-name`)  
- Commit and push your changes  
- Open a pull request  

---

## 📄 License

This project is licensed under the **MIT License** – you’re free to use, modify, and distribute it.

---

## 💬 About

BloodLink was created to promote **voluntary blood donation** and encourage communities to help save lives with technology.  

> “A drop of your blood can save a life. Let’s make a difference together.”

---

**Made with ❤️ using Vite, Tailwind CSS, Firebase, and Node.js**
