import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Page } from '../Page'

describe('Page', () => {
  it('should render', () => {
    const { getByTestId } = render(<Page />)

    expect(getByTestId('page')).toBeTruthy()
  })
})
