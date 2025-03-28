# 🚀 **TaskFlow - Task Management Application**

### 📑 **Overview**
TaskFlow is a simple and efficient task management application built with **React.js**, **Redux**, and **Material-UI**. It allows users to create, edit, delete, and mark tasks as complete. The app features drag-and-drop functionality, filtering, sorting, and local storage persistence.

---

### 🛠️ **Tech Stack**
- ⚛️ **React.js** – Frontend framework  
- 🔥 **Redux** – State management  
- 🎨 **Material-UI** – UI components  
- 🌐 **Tailwind CSS** – Styling and responsiveness  
- 📦 **LocalStorage** – Data persistence  

---

### 🚀 **Features**
✅ Create, edit, and delete tasks  
✅ Mark tasks as complete or incomplete  
✅ Filter and sort tasks by **status, date, and priority**  
✅ Drag and drop functionality for reordering tasks  
✅ Store tasks in **localStorage** to retain data after page refresh  
✅ Responsive design for **mobile** and **desktop**  

---

### 📂 **Folder Structure**
```
/task-flow
 ├── /public
 │     ├── index.html                   # HTML Template
 │     └── favicon.ico                  # Favicon  
 │
 ├── /src
 │     ├── /components                  # Reusable Components
 │     │       ├── Header.jsx            # Navbar Component  
 │     │       ├── Footer.jsx            # Footer Component  
 │     │       ├── TaskList.jsx          # Displays task items  
 │     │       ├── TaskForm.jsx          # Form to add tasks  
 │     │       ├── FilterSort.jsx        # Filtering and sorting tasks  
 │     │       └── DragDrop.jsx          # Drag and drop functionality  
 │     │
 │     ├── /features                     # Redux Slices
 │     │       ├── taskSlice.js          # Redux slice for task management  
 │     │
 │     ├── /pages                        # Page Components
 │     │       ├── Home.jsx              # Main page  
 │     │       └── NotFound.jsx          # 404 page  
 │     │
 │     ├── /app                          # Store Configuration
 │     │       └── store.js              # Redux store setup  
 │     │
 │     ├── App.jsx                        # Main App Component  
 │     ├── index.js                       # Entry point  
 │     ├── tailwind.config.js             # Tailwind configuration  
 │     ├── postcss.config.js              # PostCSS configuration  
 │     └── index.css                      # Global CSS  
 │
 ├── package.json                         # Dependencies  
 ├── README.md                            # Documentation  
 └── .gitignore                           # Git ignore  
```

---

### ⚙️ **Installation and Setup**

1. **Clone the Repository**
```bash
git clone <your-repo-link>
cd task-flow
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the Application**
```bash
npm run dev
```

---

### 💡 **Usage**
- **Add New Tasks:** Use the form to create new tasks.  
- **Edit/Delete Tasks:** Edit task details or remove them.  
- **Mark as Complete:** Toggle task status.  
- **Filter and Sort:** Filter tasks by **status, date, and priority**.  
- **Drag and Drop:** Rearrange tasks using drag-and-drop.  
- **Data Persistence:** Tasks are saved in **localStorage**.  
