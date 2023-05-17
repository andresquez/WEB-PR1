import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

import Card from './Card'

describe('Card component', () => {
  it('Renders correctly', () => {
    render(Card)
  })
})
