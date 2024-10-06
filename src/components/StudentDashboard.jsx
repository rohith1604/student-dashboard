import { useState, useEffect } from 'react';

const timetable = [
  { day: 'MONDAY', time: '9:00-10:00', subject: 'BCT', faculty: 'Dr. Rashmi HC' },
  { day: 'MONDAY', time: '10:00-11:00', subject: 'CNS', faculty: 'Dr. Rashmi HC' },
  { day: 'MONDAY', time: '11:15-12:15', subject: 'MAD', faculty: 'MAD Lab B1, L4 (MG + PNS)' },
  { day: 'MONDAY', time: '12:15-13:15', subject: 'MAD', faculty: 'MAD Lab B1, L4 (MG + PNS)' },
  { day: 'MONDAY', time: '14:15-15:15', subject: 'CNS', faculty: 'CNS Lab B1, L1 (ANS)' },
  { day: 'MONDAY', time: '15:15-16:15', subject: 'CNS', faculty: 'CNS Lab B1, L1 (ANS)' },
  
  { day: 'TUESDAY', time: '9:00-10:00', subject: 'BCT', faculty: 'PES' },
  { day: 'TUESDAY', time: '10:00-11:00', subject: 'CNS', faculty: 'PES' },
  { day: 'TUESDAY', time: '11:15-12:15', subject: 'MAD', faculty: 'MAD' },
  { day: 'TUESDAY', time: '12:15-13:15', subject: 'PES', faculty: 'BCT' },
  { day: 'TUESDAY', time: '14:15-15:15', subject: 'MAD', faculty: 'MAD' },
  { day: 'TUESDAY', time: '15:15-16:15', subject: 'BCT', faculty: 'CNS' },
  
  { day: 'WEDNESDAY', time: '9:00-10:00', subject: 'PES', faculty: 'MAD Lab B2, L4 (MG + PNS)' },
  { day: 'WEDNESDAY', time: '10:00-11:00', subject: 'MAD', faculty: 'MAD Lab B2, L4 (MG + PNS)' },
  { day: 'WEDNESDAY', time: '11:15-12:15', subject: 'BCT', faculty: 'BCT' },
  { day: 'WEDNESDAY', time: '12:15-13:15', subject: 'CNS', faculty: 'CNS' },
  
  { day: 'THURSDAY', time: '9:00-10:00', subject: 'BCT', faculty: 'PES' },
  { day: 'THURSDAY', time: '10:00-11:00', subject: 'CNS', faculty: 'PES' },
  { day: 'THURSDAY', time: '11:15-12:15', subject: 'MAD', faculty: 'MAD' },
  { day: 'THURSDAY', time: '12:15-13:15', subject: 'PES', faculty: 'BCT' },
  { day: 'THURSDAY', time: '14:15-15:15', subject: 'CNS Lab B2, L1 (ANS)', faculty: 'CNS' },
  { day: 'THURSDAY', time: '15:15-16:15', subject: 'CNS Lab B2, L1 (ANS)', faculty: 'CNS' },
  
  { day: 'FRIDAY', time: '9:00-10:00', subject: 'MAD', faculty: 'PES' },
  { day: 'FRIDAY', time: '10:00-11:00', subject: 'PES', faculty: 'CNS' },
  { day: 'FRIDAY', time: '11:15-12:15', subject: 'BCT', faculty: 'BCT' },
  { day: 'FRIDAY', time: '12:15-13:15', subject: 'CNS', faculty: 'MAD' },
  
  { day: 'SATURDAY', time: '9:00-10:00', subject: 'MAD', faculty: 'PES' },
  { day: 'SATURDAY', time: '10:00-11:00', subject: 'PES', faculty: 'CNS' },
  { day: 'SATURDAY', time: '11:15-12:15', subject: 'BCT', faculty: 'BCT' },
  { day: 'SATURDAY', time: '12:15-13:15', subject: 'CNS', faculty: 'MAD' },
];

export default function StudentDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextClass, setNextClass] = useState(null);
  const [note, setNote] = useState('');
  const [assignment, setAssignment] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      updateNextClass();
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const updateNextClass = () => {
    const now = new Date();
    const day = now.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const upcomingClass = timetable.find(entry => 
      entry.day === day && entry.time.split('-')[0] > time
    );

    setNextClass(upcomingClass || null);
  };

  const handleAddNote = () => {
    console.log('Note added:', note);
    setNote('');
  };

  const handleAddAssignment = () => {
    console.log('Assignment added:', assignment);
    setAssignment('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
      <p className="text-gray-600 mb-4">Current time: {currentTime.toLocaleTimeString()}</p>
      {nextClass ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Next Class: {nextClass.subject}</h3>
          <p>Time: {nextClass.time}</p>
          <p>Faculty: {nextClass.faculty}</p>
          
          <div className="space-y-2">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">Add a note for this class:</label>
            <textarea 
              id="note" 
              value={note} 
              onChange={(e) => setNote(e.target.value)} 
              placeholder="Enter your note here..."
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
            />
            <button 
              onClick={handleAddNote}
              className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Note
            </button>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="assignment" className="block text-sm font-medium text-gray-700">Add an assignment:</label>
            <input 
              id="assignment" 
              value={assignment} 
              onChange={(e) => setAssignment(e.target.value)} 
              placeholder="Enter assignment details..."
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button 
              onClick={handleAddAssignment}
              className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Assignment
            </button>
          </div>
        </div>
      ) : (
        <p>No upcoming classes for today.</p>
      )}
      <p className="mt-6 text-sm text-gray-500">Last updated: {currentTime.toLocaleString()}</p>
    </div>
  );
}