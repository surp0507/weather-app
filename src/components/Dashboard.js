import React from 'react'
import {Form,Button} from 'react-bootstrap'

export default function Dashboard() {
    return (
      <>
       <Form>
          <input type="text" name="weather" />
          <input type="text" name="city" />
          <Button variant="primary" type="submit">
            search
          </Button>
        </Form>
       </>
    )
}
