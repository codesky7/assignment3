function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    
    return daysOfWeek[dayOfWeek];
  }
  

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0]; 
  const dayOfWeek = getDayOfWeek(formattedDate);
  document.write(dayOfWeek);