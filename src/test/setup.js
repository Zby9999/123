import '@testing-library/jest-dom';

// Mock IntersectionObserver for scroll animation tests
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;
