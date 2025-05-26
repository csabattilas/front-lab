# Locked Selection List Box

A custom web component extending Lion UI's ListBox with locked selection functionality, designed for quiz-like interactions.

## Features

- **One-way Selection**: Once an option is selected, it cannot be deselected
- **Answer Validation**: Validates selections against a correct answer
- **Visual Feedback**: Provides visual cues for correct/incorrect answers
- **Locked Interaction**: Prevents further interaction after correct answer is found
- **Customizable Styling**: Easily style using CSS classes or custom properties

## Installation

```bash
# If using npm
npm install @front-lab/locked-selection-list-box

# If using yarn
yarn add @front-lab/locked-selection-list-box
```

## Usage

### Basic Usage

```html
<locked-selection-list-box answer="option1">
  <lion-option value="option1" choiceValue="option1">Option 1</lion-option>
  <lion-option value="option2" choiceValue="option2">Option 2</lion-option>
  <lion-option value="option3" choiceValue="option3">Option 3</lion-option>
</locked-selection-list-box>
```

### With React

```jsx
import '@front-lab/locked-selection-list-box';
import { LockedSelectionListBox } from '@front-lab/locked-selection-list-box';

const QuizComponent = () => {
  const listboxRef = useRef(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setResult(listboxRef.current?.modelValue || []);
  };

  return (
    <div>
      <locked-selection-list-box ref={listboxRef} answer="option1" onmodel-value-changed={handleChange} className="quiz-listbox">
        <lion-option value="option1" choiceValue="option1">
          Option 1
        </lion-option>
        <lion-option value="option2" choiceValue="option2">
          Option 2
        </lion-option>
        <lion-option value="option3" choiceValue="option3">
          Option 3
        </lion-option>
      </locked-selection-list-box>

      {result && result[0]?.resolved && <div>Correct answer!</div>}
    </div>
  );
};
```

### With TypeScript

```typescript
// Type declarations for the component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'locked-selection-list-box': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          answer?: string;
          onmodel-value-changed?: (e: CustomEvent) => void;
        },
        HTMLElement
      >;
    }
  }
}
```

## API

### Properties

| Property | Type   | Description                               |
| -------- | ------ | ----------------------------------------- |
| `answer` | String | The correct answer value to match against |

### Methods

| Method       | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `modelValue` | Read-only property that returns an array of objects with `resolved` and `selectedValue` properties |

### Events

| Event                 | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| `model-value-changed` | Fired when the selection changes. The event detail contains the modelValue |

## Styling

### Using CSS Classes

```css
/* Base component styling */
.locked-listbox {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
}

/* Option styling */
.listbox-option {
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
}

/* Disabled/locked state */
lion-option[disabled].listbox-option {
  background-color: #ffebee;
  color: #d32f2f;
}

/* Correct answer */
lion-option[data-expected].listbox-option {
  background-color: #e8f5e9;
  color: #2e7d32;
}
```

### Using SCSS

```scss
$primary-color: #d32f2f;
$success-color: #2e7d32;

.locked-listbox {
  border: 1px solid #e0e0e0;

  .listbox-option {
    padding: 10px;

    &[disabled] {
      color: $primary-color;
    }

    &[data-expected] {
      color: $success-color;
    }
  }
}
```

### Using CSS Custom Properties

The component supports the following CSS custom properties:

| Property                     | Description                   | Default   |
| ---------------------------- | ----------------------------- | --------- |
| `--locked-option-color`      | Color for locked options      | `#d32f2f` |
| `--locked-option-background` | Background for locked options | `#ffebee` |
| `--option-padding`           | Padding for options           | `8px`     |
| `--option-border-radius`     | Border radius for options     | `4px`     |

## Browser Support

This component works in all modern browsers that support Web Components:

- Chrome
- Firefox
- Safari
- Edge

## Dependencies

- Lion UI (`@lion/ui`): 0.11.5 or higher
- Lit: 3.0.0 or higher

## License

MIT
