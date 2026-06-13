// Mock DOM elements for testing
const mockElement = {
  classList: {
    toggle: jest.fn(),
    contains: jest.fn(),
    add: jest.fn(),
    remove: jest.fn()
  },
  innerHTML: '',
  title: '',
  value: ''
};

const mockDocument = {
  body: mockElement,
  getElementById: jest.fn(id => {
    if (id === 'theme-toggle') {
      return {
        innerHTML: '',
        title: '',
        classList: {
          toggle: jest.fn(),
          contains: jest.fn(),
          add: jest.fn(),
          remove: jest.fn()
        }
      };
    }
    return null;
  })
};

const mockWindow = {
  addEventListener: jest.fn()
};

Object.defineProperty(global, 'document', {
  value: mockDocument,
  writable: true
});

Object.defineProperty(global, 'window', {
  value: mockWindow,
  writable: true
});

Object.defineProperty(global, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn()
  },
  writable: true
});