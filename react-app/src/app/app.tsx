import { Route, Routes, Link, useLocation } from 'react-router-dom';
import SelectableButtonDemo from './react-selectable-button-group';
import SelectableButtonWebComponentDemo from './selectable-button-demo';

export function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Front Lab</div>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-indigo-200 transition-colors ${location.pathname === '/' ? 'font-bold underline' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/react-component" 
                  className={`hover:text-indigo-200 transition-colors ${location.pathname === '/react-component' ? 'font-bold underline' : ''}`}
                >
                  React Component
                </Link>
              </li>
              <li>
                <Link 
                  to="/web-component" 
                  className={`hover:text-indigo-200 transition-colors ${location.pathname === '/web-component' ? 'font-bold underline' : ''}`}
                >
                  Web Component
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={
            <div>
              <h1 className="text-3xl font-bold mb-6">Welcome to Front Lab</h1>
              <p className="mb-4">This is a demonstration of our component library built with Nx, featuring:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Selectable Button Group components built with Lion Web Components</li>
                <li>React implementation of the same components</li>
                <li>Integration between Web Components and React</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold mb-3">React Implementation</h2>
                  <p className="mb-4">Pure React implementation of the selectable button group component.</p>
                  <Link to="/react-component" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    View Demo
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold mb-3">Web Component</h2>
                  <p className="mb-4">Lion-based Web Component implementation with React integration.</p>
                  <Link to="/web-component" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          } />
          <Route path="/react-component" element={
            <div>
              <h1 className="text-2xl font-bold mb-6">React Component</h1>
              <SelectableButtonDemo />
            </div>
          } />
          <Route path="/web-component" element={
            <div>
              <h1 className="text-2xl font-bold mb-6">Web Component</h1>
              <SelectableButtonWebComponentDemo />
            </div>
          } />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 Front Lab - Built with Nx, Lion Web Components, and React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
