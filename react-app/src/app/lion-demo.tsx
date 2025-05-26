import React, { useState } from 'react';
import '@front-lab/locked-selection-list-box';
import '@lion/ui/define/lion-checkbox-group.js';
import '@lion/ui/define/lion-checkbox.js';
import '@lion/ui/define/lion-listbox.js';
import '@lion/ui/define/lion-option.js';
import '@lion/ui/define/lion-input.js';
import { LionInput } from '@lion/ui/input.js';
import { LionListbox } from '@lion/ui/listbox.js';

// Web Component demo using Lion components
const LionDemo = () => {
  const inputRef = React.useRef<LionInput>(null);
  const listboxRef = React.useRef<LionListbox>(null);

  const [listModelValue, setListModelValue] = useState<string[] | string>([
    'option1',
    'option2',
  ]);
  const [inputModelValue, setInputModelValue] = useState<string>('test');

  const handleListboxChange = (event: CustomEvent) => {
    setListModelValue(listboxRef?.current?.modelValue || '');
  };

  const handleInputChange = () => {
    setInputModelValue(inputRef?.current?.modelValue || '');
  };

  return (
    <div className="container p-4">
      <h2 className="text-xl font-bold mb-6">Lion direct import show case</h2>
      <p>
        This is just for testing out the import/usage inner workings of the lion
        components. In your application you will extend this in order to be able
        to style them properly.
      </p>

      <div className="mb-6">
        <br />
        <h3>listbox</h3>
        <br />
        <div>{listModelValue}</div>
        <lion-listbox
          ref={listboxRef}
          multipleChoice={true}
          modelValue={listModelValue}
          onmodel-value-changed={handleListboxChange}
        >
          <lion-option value="option1" choiceValue="option1">
            Option 1
          </lion-option>
          <lion-option value="option2" choiceValue="option2">
            Option 2
          </lion-option>
          <lion-option value="option3" choiceValue="option3">
            Option 3
          </lion-option>
          <lion-option value="option4" choiceValue="option4">
            Option 4
          </lion-option>
        </lion-listbox>
        <br />
        <div>{inputModelValue}</div>
        <br />
        <lion-input
          label="First Name"
          name="firstName"
          ref={inputRef}
          modelValue={inputModelValue}
          onmodel-value-changed={handleInputChange}
        />
      </div>
    </div>
  );
};

export default LionDemo;
