export default function AdminPage() {
  const cards = [
    { title: 'Posts', desc: 'Create and manage blog posts and announcements', href: '/admin/post' },
    { title: 'Registrations', desc: 'View and manage team registrations', href: '/admin/registrations' },
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
        <p className="text-gray-400 mt-1">Use the quick links below to manage content and registrations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <a key={c.title} href={c.href} className="block rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-900 transition p-5">
            <div className="text-lg font-medium text-white">{c.title}</div>
            <div className="text-sm text-gray-400 mt-1">{c.desc}</div>
          </a>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-xl border border-gray-800 bg-gray-900/60 p-5">
          <div className="text-white font-medium mb-3">Getting Started</div>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Use Posts to publish updates to the public site.</li>
            <li>Registrations table supports filtering by program and date.</li>
            <li>Export filtered registrations as CSV for reporting.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
          <div className="text-white font-medium mb-3">Shortcuts</div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/admin/post/add" className="px-3 py-2 rounded border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10">Create Post</a>
            <a href="/admin/registrations/add" className="px-3 py-2 rounded border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10">Add Registration</a>
            <a href="/admin/registrations" className="px-3 py-2 rounded border border-gray-700 text-gray-300 hover:bg-gray-800">View Registrations</a>
          </div>
        </div>
      </div>
    </div>
  )
}
