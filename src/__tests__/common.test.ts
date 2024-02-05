import { renderHook } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { memoryRouter } from 'next-router-mock';

describe('router', () => {
  it('should have a pathname', () => {
    memoryRouter.push('/');
    const {
      result: { current },
    } = renderHook(() => usePathname());
    expect(current).toBe('/');
    expect(true).toBe(true);
  });
});
