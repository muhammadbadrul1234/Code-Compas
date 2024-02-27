import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './components/Courses/context/sidebar_context';
import { CoursesProvider } from "./components/Courses/context/course_context";
import { CartProvider } from "./components/Courses/context/cart_context";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        
          <App />
        
      </CartProvider>
    </CoursesProvider>
    </SidebarProvider>
    
);
