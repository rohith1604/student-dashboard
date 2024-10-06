import { useState } from 'react';
import Login from './components/Login';
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
    </div>
  );
}

export default App;