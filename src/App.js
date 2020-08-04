import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  Notification.requestPermission(result => {
    if (result === 'granted') {
      showNotification('So nice to have you here!', 'Hey there!')
    }
  });
  
  const showNotification = (title, message) => {
    console.log("shwNoto");
    
    if ('Notification' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, {
          body: message,
          tag: 'vibration-sample'
        });
      });
    }
  }

  return (
    <div className="App">
      <Header />
      <Main showNotification={showNotification}/>
      <Footer />
    </div>
  );
}

export default App;
