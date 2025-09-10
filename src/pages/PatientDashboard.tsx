export default function PatientDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Upcoming Appointments</h2>
          <p className="text-gray-600">No appointments yet.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Book a consultation</li>
            <li>Find a doctor</li>
            <li>View medical records</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

