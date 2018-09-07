import * as React from 'react';
import { stateful, div, label, string } from 'widgets-for-react'

let hello_world =
    stateful<string>()(s =>
    div<string>({ className:"form-group" })(
        label<string>("Type text here", { htmlFor:"main-input", label_position: "before" })(
        div<string>({ className:"input-group" })(
            string({ id:"main-input", className:"form-control" })(s)
        )
        )
    )
    )("Hello world!")
  
  class Hello extends React.Component {
    
    public render() {
      return (
        <div>
        {
            hello_world.run(x => console.log("Callback!", x))
        }
        </div>
      )
    }
  }
  
  export default Hello;