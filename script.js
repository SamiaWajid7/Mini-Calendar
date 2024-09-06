document.addEventListener('DOMContentLoaded', () => {
    // Create a new Date object to get the current date
    const now = new Date();
    
    // Get the date elements
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    
    // Define an array with day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Define an array with month names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Get the current date values
    const dayOfWeek = days[now.getDay()];
    const dayOfMonth = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Update the HTML elements with the current date values
    dateElement.textContent = dayOfMonth;
    dayElement.textContent = dayOfWeek;
    monthElement.textContent = monthName;
    yearElement.textContent = year;
  });
  