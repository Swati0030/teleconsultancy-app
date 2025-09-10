export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Account</h2>
          <p className="text-gray-600">Update your profile and account details.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-600">Manage email and in-app notifications.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Privacy</h2>
          <p className="text-gray-600">Control recording, transcript sharing and data access.</p>
        </div>
      </div>
    </div>
  )
}

