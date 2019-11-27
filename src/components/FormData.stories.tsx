
import React from 'react';
import { Button, ButtonGroup } from './Button'
import { Input } from './Input'
import { FormWrapper, FormControl, FormLabel, FormElement } from "./FormData";


export default {
  title:'components/FormControl'
}

export const BasicLayoutDemo = () => {
  return (
    <FormWrapper overlay emphasis>
    <FormControl>
      <FormLabel>Label</FormLabel>
      <FormElement>
        <Input type="text" value={"tests"} />
      </FormElement>
    </FormControl>
      <FormControl>
        <FormLabel></FormLabel>
        <FormElement>
          <ButtonGroup>
            <Button onClick={() => {}}>OK</Button>
            <Button onClick={() => {}}>Cancel</Button>
          </ButtonGroup>
        </FormElement>
      </FormControl>
    </FormWrapper>
  )
}