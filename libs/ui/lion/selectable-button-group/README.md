# Selectable Button Group

A customizable button group component that supports both exclusive (radio-like) and toggle (checkbox-like) selection modes. Built with Lion Web Components and Lit.

## Features

- **Two Selection Modes**:
  - `exclusive`: Only one button can be selected at a time (like radio buttons)
  - `toggle`: Multiple buttons can be selected (like checkboxes)
- **Event-driven**: Emits selection events with detailed information
- **Accessible**: Built with proper ARIA attributes for accessibility
- **Customizable**: Easily style and extend the components

## Installation

```bash
npm install @front-lab/lion-selectable-button-group
```

## Usage

### Basic Usage

```html
<!-- Exclusive mode (radio-like) -->
<selectable-button-group mode="exclusive">
  <selectable-button value="option1">Option 1</selectable-button>
  <selectable-button value="option2">Option 2</selectable-button>
  <selectable-button value="option3">Option 3</selectable-button>
</selectable-button-group>

<!-- Toggle mode (checkbox-like) -->
<selectable-button-group mode="toggle">
  <selectable-button value="bold">Bold</selectable-button>
  <selectable-button value="italic">Italic</selectable-button>
  <selectable-button value="underline">Underline</selectable-button>
</selectable-button-group>
```

### Event Handling

```javascript
const buttonGroup = document.querySelector('selectable-button-group');

// Listen for selection changes
buttonGroup.addEventListener('selection-change', (e) => {
  const { value, selectedValues } = e.detail;
  console.log('Selected value:', value);
  console.log('All selected values:', selectedValues);
});
```

## API Reference

### SelectableButtonGroup

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mode` | `'exclusive'\|'toggle'` | `'exclusive'` | Selection mode of the button group |

#### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `selection-change` | `{ value: string, selectedValues: string[] }` | Fired when selection changes |

### SelectableButton

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `''` | Value of the button |
| `selected` | `boolean` | `false` | Whether the button is selected |

## Building

Run `nx build ui-lion-selectable-button-group` to build the library.

## Running unit tests

Run `nx test ui-lion-selectable-button-group` to execute the unit tests via [Vitest](https://vitest.dev/).
