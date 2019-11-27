import React from 'react';
import { Button } from './Button'
import { Input } from './Input'
import { FormInline } from './FormData'

export default {
  title:'components/Inline Form'
}

export const InlineFormElements = () => {
  return (
    <FormInline>
      <Input type="text" placeholder="test" />
      <Button>Test</Button>
    </FormInline>
  )
}