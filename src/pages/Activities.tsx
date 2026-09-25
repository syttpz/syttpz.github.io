const activities = [
  {
    title: 'Fine Motor Skills Hackathon',
    label: '3rd place winner · Viam',
  },
  {
    title: 'Mathematical Contest in Modeling',
    label: 'Honorable Mention · 2026',
  },
]

export default function Activities() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen px-5 py-8 sm:px-8 md:px-12 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-10 text-stone-100 ">Activities</h1>
      <ul className="bullet-list max-w-4xl space-y-5">
        {activities.map(item => (
          <li key={item.title} className="text-base leading-relaxed">
            <span className="font-medium">{item.title}</span>
            <span className="text-stone-400"> — {item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
