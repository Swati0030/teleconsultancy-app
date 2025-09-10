export default function DoctorDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Doctor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Today's Consultations</h2>
          <p className="text-gray-600">No scheduled consultations.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Set availability</li>
            <li>Start a consultation</li>
            <li>Review patient notes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

