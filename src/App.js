import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  Notification.requestPermission(result => {
    if (result === 'granted') {
      showNotification('Thirsty kids!?!?', 'How bout a Drink')
    }
  });
  
  const showNotificationReq = (title, message) => {
    if ('Notification' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification( title, {
          body: message,
          requireInteraction: true,
          tag: 'require-interaction'
        });
      }).catch(err => console.log("err in notification: ", err)
        )
    }
  }

  const showNotification = (title, message) => {
    if ('Notification' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification( title, {
          body: message,
          tag: 'no-require-interaction'
        });
      }).catch(err => console.log("err in notification: ", err)
        )
    }
  }

  return (
    <div className="App">
      <Header />
      <Main showNotification={showNotificationReq}/>
      <Footer />
    </div>
  );
}

export default App;
