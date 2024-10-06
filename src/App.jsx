import { useState } from 'react';
import Login from './components/Login';
import { Analytics } from "@vercel/analytics/react"
import StudentDashboard from './components/StudentDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLoggedIn ? (
        <StudentDashboard />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
      <Analytics/>
    </div>
  );
}

export default App;