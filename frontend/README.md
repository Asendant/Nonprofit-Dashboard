# Nonprofit Dashboard

A lightweight web application designed to help nonprofits manage volunteers and events in one place. The dashboard provides a simple interface for tracking volunteers, scheduling events, and centralizing information that is often spread across spreadsheets or emails.  

## Features
- 🔐 Secure login & signup with Firebase Authentication  
- 👥 Volunteer management (add, view, edit, remove)  
- 📅 Event scheduling (add, view, edit, remove)  
- 📊 Dashboard overview with key stats (volunteers, events)  
- ☁️ Cloud-backed storage with Firebase Firestore  

## Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend/Database:** AWS

## Purpose
Many nonprofits lack the resources to adopt full-featured enterprise software. This project provides a lightweight, open-source alternative that can be adapted for small organizations to streamline volunteer and event management.  

## Getting Started
1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/nonprofit-dashboard.git
   cd nonprofit-dashboard
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Configure Firebase in a `.env` file  
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   ```
4. Run the development server  
   ```bash
   npm start
   ```

## Demo
(Insert screenshots or deployed link here once available)

---
**GitHub Repo Description (short tagline):**  
> Volunteer & Event Management Dashboard for nonprofits. Built with React and Firebase to simplify organizing people, events, and resources.
