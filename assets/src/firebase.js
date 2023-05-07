import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

"headers"; [{
    "source": "**",
    "headers": [
      { "key" : "Content-Security-Policy", "value": "frame-ancestors 'none'"},
      { "key" : "X-Frame-Options", "value" : "deny" },
      { "key" : "X-Content-Type-Options", "value" : "nosniff" },
      { "key" : "X-XSS-Protection", "value" : "1; mode=block" },
      { "key" : "X-Permitted-Cross-Domain-Policies", "value" : "none" },
      { "key" : "Referrer-Policy", "value": "no-referrer" }
    ]
}]

const app = initializeApp(firebaseConfig);

getAnalytics(app);