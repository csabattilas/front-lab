import { Route, Routes, Link, useLocation } from 'react-router-dom';
import LockedChoiceButtonDemo from './custom-lion-demo';
import SelectableButtonWebComponentDemo from './custom-lion-demo';
import LionDemo from './lion-demo';
import CustomLionDemo from './custom-lion-demo';

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
                  className={`hover:text-indigo-200 transition-colors ${
                    location.pathname === '/' ? 'font-bold underline' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/lion"
                  className={`hover:text-indigo-200 transition-colors ${
                    location.pathname === '/lion' ? 'font-bold underline' : ''
                  }`}
                >
                  lion
                </Link>
              </li>
              <li>
                <Link
                  to="/custom-lion"
                  className={`hover:text-indigo-200 transition-colors ${
                    location.pathname === '/custom-lion'
                      ? 'font-bold underline'
                      : ''
                  }`}
                >
                  custom lion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="text-3xl font-bold mb-6">
                  Welcome to Front Lab
                </h1>
                <p className="mb-4">
                  This is a demonstration of our component library built with
                  Nx, featuring:
                </p>
                <ul className="list-disc ml-6 mb-6">
                  <li>Custom components built with Lion Web Components</li>
                  <li>Lion components playground</li>
                </ul>
              </div>
            }
          />
          <Route
            path="/lion"
            element={
              <div>
                <h1 className="text-2xl font-bold mb-6">Lion</h1>
                <LionDemo />
              </div>
            }
          />
          <Route
            path="/custom-lion"
            element={
              <div>
                <h1 className="text-2xl font-bold mb-6">Custom Lion</h1>
                <CustomLionDemo />
              </div>
            }
          />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © 2025 Front Lab - Built with Nx, Lion Web Components, and React
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
