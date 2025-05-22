import React, { useState, ReactNode } from 'react';

interface SelectableButtonProps {
  value: string;
  selected?: boolean;
  onClick?: (value: string) => void;
  children: ReactNode;
}

export const SelectableButton: React.FC<SelectableButtonProps> = ({
  value,
  selected = false,
  onClick,
  children
}) => {
  return (
    <button
      className={`
        px-4 py-2 border border-gray-300 
        ${selected ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-white text-gray-700'} 
        hover:z-10 hover:border-gray-400
        focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
        first:rounded-l-md last:rounded-r-md
        transition-all duration-200
        relative
        ${selected ? 'hover:bg-indigo-700' : 'hover:bg-gray-50'}
        disabled:opacity-50 disabled:cursor-not-allowed
        -ml-px first:ml-0
      `}
      onClick={() => onClick && onClick(value)}
      aria-pressed={selected}
      data-value={value}
    >
      {children}
    </button>
  );
};

interface SelectableButtonGroupProps {
  mode?: 'exclusive' | 'toggle';
  onChange?: (value: string, selectedValues: string[]) => void;
  children: ReactNode;
  className?: string;
}

export const SelectableButtonGroup: React.FC<SelectableButtonGroupProps> = ({
  mode = 'exclusive',
  onChange,
  children,
  className = ''
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  // Track the last selected value for potential future use
  const [, setLastSelectedValue] = useState<string>('');

  const handleButtonClick = (value: string) => {
    let newSelectedValues: string[];
    
    if (mode === 'exclusive') {
      // In exclusive mode, only one button can be selected
      newSelectedValues = [value];
    } else {
      // In toggle mode, multiple buttons can be selected
      const index = selectedValues.indexOf(value);
      
      if (index === -1) {
        // Add to selection if not already selected
        newSelectedValues = [...selectedValues, value];
      } else {
        // Remove from selection if already selected
        newSelectedValues = selectedValues.filter(v => v !== value);
      }
    }
    
    setSelectedValues(newSelectedValues);
    setLastSelectedValue(value);
    
    if (onChange) {
      onChange(value, newSelectedValues);
    }
  };

  // Clone children and add props
  const buttons = React.Children.map(children, (child) => {
    if (React.isValidElement<SelectableButtonProps>(child) && child.type === SelectableButton) {
      const value = child.props.value;
      return React.cloneElement(child, {
        selected: selectedValues.includes(value),
        onClick: handleButtonClick
      });
    }
    return child;
  });

  return (
    <div 
      className={`inline-flex ${className}`}
      role={mode === 'exclusive' ? 'radiogroup' : 'group'}
    >
      {buttons}
    </div>
  );
};

// Example usage component
export const SelectableButtonDemo: React.FC = () => {
  const [exclusiveValue, setExclusiveValue] = useState<string>('');
  const [toggleValues, setToggleValues] = useState<string[]>([]);

  return (
    <div className="container p-4">
      <h2 className="text-xl font-bold mb-4">Selectable Button Group Demo (React Version)</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Exclusive Mode (like radio buttons)</h3>
        <SelectableButtonGroup 
          mode="exclusive"
          onChange={(value, selectedValues) => {
            setExclusiveValue(value);
          }}
        >
          <SelectableButton value="option1">Option 1</SelectableButton>
          <SelectableButton value="option2">Option 2</SelectableButton>
          <SelectableButton value="option3">Option 3</SelectableButton>
        </SelectableButtonGroup>
        
        <div className="mt-2 p-2 bg-gray-100 rounded">
          Selected: {exclusiveValue || 'none'}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Toggle Mode (like checkboxes)</h3>
        <SelectableButtonGroup 
          mode="toggle"
          onChange={(value, selectedValues) => {
            setToggleValues(selectedValues);
          }}
        >
          <SelectableButton value="bold">Bold</SelectableButton>
          <SelectableButton value="italic">Italic</SelectableButton>
          <SelectableButton value="underline">Underline</SelectableButton>
        </SelectableButtonGroup>
        
        <div className="mt-2 p-2 bg-gray-100 rounded">
          Selected: {toggleValues.length > 0 ? toggleValues.join(', ') : 'none'}
        </div>
      </div>
    </div>
  );
};

export default SelectableButtonDemo;
