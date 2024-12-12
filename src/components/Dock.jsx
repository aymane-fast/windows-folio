function Dock({ apps, onAppClick }) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
        <div className="flex gap-4 justify-center">
          {apps.map(app => (
            <button
              key={app.id}
              className="p-3 hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => onAppClick(app)}
            >
              {app.icon}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  export default Dock