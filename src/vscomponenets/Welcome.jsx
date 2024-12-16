function Welcome() {
    return (
      <div className="h-full flex items-center justify-center text-[#cccccc]">
        <div className="max-w-2xl p-8">
          <h1 className="text-4xl mb-6">Welcome to Portfolio IDE</h1>
          <div className="space-y-4">
            <section>
              <h2 className="text-xl mb-2 text-[#007acc]">Get Started</h2>
              <ul className="space-y-2">
                <li>• Click on the Explorer icon to view project files</li>
                <li>• Use Search to find content across files</li>
                <li>• Connect your GitHub account in Source Control</li>
                <li>• Try the interactive demo in Debug view</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl mb-2 text-[#007acc]">Quick Links</h2>
              <ul className="space-y-2">
                <li>• Open Bio (⌘/Ctrl+P then type 'bio')</li>
                <li>• View Resume</li>
                <li>• Check out Projects</li>
                <li>• Get in Touch</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  export default Welcome