import '@testing-library/jest-dom/extend-expect'

jest.mock('@/services/firebase', () => ({
  app: jest.fn(),
}))
