/**
 * UserDetails Component
 *
 * Displays a user profile page with:
 * - Avatar upload section
 * - Editable user information fields
 * - Notification preferences
 */

export default function UserDetails() {
  return (
    <div className="p-6 max-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        {/* Avatar Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src="/default-avatar.png" 
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">Your Avatar</h2>
              <p className="text-sm text-gray-500">
                Profile picture size: 400px x 400px
              </p>
            </div>
          </div>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
            Upload new avatar
          </button>
        </div>

        {/* User Details Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Firstname
            </label>
            <input
              type="text"
              placeholder="Firstname"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lastname
            </label>
            <input
              type="text"
              placeholder="Lastname"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Verification purposes only"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              placeholder="(+27)734567890"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mb-8">
          <button className="bg-[#4bc0c0] text-white px-4 py-2 rounded-full hover:bg-[#1faaaa] mt-2">
            Save changes
          </button>
        </div>

        {/* Notifications Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <div className="divide-y divide-gray-200 rounded-lg bg-gray-50 p-4 shadow">
            <div className="flex items-center justify-between py-4">
              <div>
                <h4 className="font-medium text-gray-700">Announcements</h4>
                <p className="text-sm text-gray-500">
                  Occasional announcements of new features
                </p>
              </div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-purple-500"
                  defaultChecked
                />
              </label>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <h4 className="font-medium text-gray-700">
                  Feedback requests
                </h4>
                <p className="text-sm text-gray-500">
                  Occasional requests for feedback
                </p>
              </div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-purple-500"
                  defaultChecked
                />
              </label>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <h4 className="font-medium text-gray-700">
                  Billing and account
                </h4>
                <p className="text-sm text-gray-500">
                  Transactional emails and account notifications
                </p>
              </div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-purple-500"
                  disabled
                  defaultChecked
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
