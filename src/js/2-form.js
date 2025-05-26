
const formData = {
    email: "",
    message: "",
  };
  
  const form = document.querySelector('.feedback-form');
  const localStorageKey = "feedback-form-state";
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);

        formData.email = parsedData.email || ""; 
        formData.message = parsedData.message || ""; 
  
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
      } catch (error) {
        console.error("Ошибка при парсинге данных из localStorage:", error);
       
        localStorage.removeItem(localStorageKey);
       
        form.reset();
        formData.email = "";
        formData.message = "";
      }
    }
  });
  
 
  form.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
     
      formData[event.target.name] = event.target.value.trim();
     
      localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
  });
  
 
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
  
    if (formData.email === "" || formData.message === "") {
     
      alert("Fill please all fields"); 
      return; 
    }
  
    console.log("Отправленные данные формы:", formData); 
  
    localStorage.removeItem(localStorageKey);
  
    formData.email = "";
    formData.message = "";
  
    form.reset();
  });