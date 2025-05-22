import React, { useEffect, useState } from 'react';
// We'll import the components dynamically to avoid ESLint errors

// Web Component demo using Lion components
const SelectableButtonDemo = () => {
  const [exclusiveValue, setExclusiveValue] = useState<string>('');
  const [toggleValues, setToggleValues] = useState<string[]>([]);
  const [componentsRegistered, setComponentsRegistered] = useState(false);
  
  // Ensure the components are registered
  useEffect(() => {
    // Check if components are already defined
    if (!customElements.get('selectable-button')) {
      // Use dynamic import to load and register the components
      import('@front-lab/lion-selectable-button-group')
        .then(module => {
          // The components should be registered by the module's side effects
          // But we can explicitly register them if needed
          if (!customElements.get('selectable-button')) {
            try {
              customElements.define('selectable-button', module.SelectableButton);
              customElements.define('selectable-button-group', module.SelectableButtonGroup);
              console.log('Components registered manually after import');
            } catch (err) {
              console.warn('Components may already be registered:', err);
            }
          }
          console.log('Selectable button components loaded successfully');
          setComponentsRegistered(true);
        })
        .catch(error => {
          console.error('Failed to load selectable button components:', error);
        });
    } else {
      console.log('Components already registered');
      setComponentsRegistered(true);
    }
  }, []);

  // Handle exclusive mode selection
  const handleExclusiveChange = (e: Event) => {
    const event = e as CustomEvent;
    const value = event.detail.value;
    setExclusiveValue(value);
  };

  // Handle toggle mode selection
  const handleToggleChange = (e: Event) => {
    const event = e as CustomEvent;
    const selectedValues = event.detail.selectedValues || [];
    setToggleValues(selectedValues);
  };

  return (
    <div className="container p-4">
      <h2 className="text-xl font-bold mb-6">Web Component Demo</h2>
      <div className="border p-4 rounded-lg bg-white">
        {!componentsRegistered ? (
          <div className="flex justify-center items-center h-24">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <span className="ml-2">Loading components...</span>
          </div>
        ) : (
          <>
            {/* Exclusive Mode Example */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">
                Exclusive Mode (like radio buttons)
              </h3>
              <selectable-button-group
                mode="exclusive"
                onSelection-change={handleExclusiveChange}
              >
                <selectable-button choice-value="option1">
                  Option 1
                </selectable-button>
                <selectable-button choice-value="option2">
                  Option 2
                </selectable-button>
                <selectable-button choice-value="option3">
                  Option 3
                </selectable-button>
              </selectable-button-group>
              <div className="mt-4 p-2 bg-gray-100 rounded">
                Selected: {exclusiveValue || 'none'}
              </div>
            </div>

            {/* Toggle Mode Example */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Toggle Mode (like checkboxes)
              </h3>
              <selectable-button-group
                mode="toggle"
                onSelection-change={handleToggleChange}
              >
                <selectable-button choice-value="bold">Bold</selectable-button>
                <selectable-button choice-value="italic">Italic</selectable-button>
                <selectable-button choice-value="underline">
                  Underline
                </selectable-button>
              </selectable-button-group>
              <div className="mt-4 p-2 bg-gray-100 rounded">
                Selected:{' '}
                {toggleValues.length > 0 ? toggleValues.join(', ') : 'none'}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectableButtonDemo;
