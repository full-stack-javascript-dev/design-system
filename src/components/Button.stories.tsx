
import React from 'react';
import { Button, ButtonGroup } from './Button'
import { Input } from './Input'
import { FormWrapper, FormControl, FormLabel, FormElement } from "./FormData";


export default {
  title:'components/Button'
}

export const AllSizes = () => {
  return (
    <div>
      <p>
      <Button size="small">Hello</Button>
      </p>
      <p>
      <Button size="medium">Hello</Button>
      </p>
      <p>
      <Button size="large">Hello</Button>
      </p>
      <p>
      <Button block size="medium">Hello</Button>
      </p>
    </div>
  )
}