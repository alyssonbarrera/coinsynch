import '@testing-library/jest-dom/extend-expect'

jest.mock('@/services/firebase', () => ({
  app: jest.fn(),
}))

jest.mock('@/hooks/useModal', () => ({
  useModal: () => ({
    isModalOpen: jest.fn(),
  }),
}))
