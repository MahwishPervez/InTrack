# 🎯 InTrack – Internship & Job Application Tracker

A responsive web application to help students track their internship and job applications in one place. Built using **HTML5, CSS3, and JavaScript** with no external dependencies.

---

## 📌 Features

### 🔐 Authentication
- Secure login system with session management using localStorage
- Role-based access (only logged-in users can access dashboard)

### 📊 Dashboard
- Summary analytics cards — Total Applied, Shortlisted, Interviews, Offers, Rejected
- Recent applications table with status badges

### 📋 Applications
- View all applications in a sortable table
- Live search by company name or role
- Filter by application status
- Inline status update (Applied → Shortlisted → Interview → Offer/Rejected)
- Delete applications

### ➕ Add Application
- Add company name, role, date applied, status, source platform, and notes
- Form validation with error messages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page Structure |
| CSS3 | Styling & Responsive Design |
| JavaScript (Vanilla) | DOM Manipulation, Logic, localStorage |

---

## 📂 Project Structure

```
intrack/
│
├── index.html              # Login Page
├── css/
│   └── style.css           # Shared Stylesheet
├── js/
│   ├── auth.js             # Login / Logout / Session Management
│   └── app.js              # Shared Utility Functions
└── pages/
    ├── dashboard.html      # Dashboard with Stats & Recent Applications
    ├── applications.html   # All Applications with Search & Filter
    └── add.html            # Add New Application Form
```

---

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/MahwishPervez/intrack.git
```

2. Open `index.html` in your browser (no server needed)

3. Login with:
   - **Username:** admin
   - **Password:** admin123

---

## 📸 Pages

- Login Page
- Dashboard with Analytics Cards
- Applications Table with Search & Filter
- Add New Application Form

---

## 🌟 Future Enhancements

- Deadline reminders and email notifications
- Export applications as CSV
- Interview preparation notes
- Dark mode
- REST API + database backend

---

## 👩‍💻 Author

**Mahwish Pervez**
B.Tech Computer Science & Engineering
Maharaja Surajmal Institute of Technology (MSIT), New Delhi

- GitHub: [github.com/MahwishPervez](https://github.com/MahwishPervez)
- LinkedIn: [linkedin.com/in/mahwish-pervez](https://linkedin.com/in/mahwish-pervez)
