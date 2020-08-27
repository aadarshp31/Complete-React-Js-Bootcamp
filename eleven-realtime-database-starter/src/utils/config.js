// firebase config
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

//image configuration
export const imageConfig = {
  quality: 0.2,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true
};
