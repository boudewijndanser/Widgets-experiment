import * as React from 'react';
import './styling/app.css';
import { hello_world2 } from './components/hello_world2'
import { SimpleFormExample, FormData } from "./components/SimpleForm"
import { Conditional } from './components/conditional'



class App extends React.Component<{}, {sForm:FormData, sHello:{hello:string}}> {
  constructor(props:any, context:any){
    super(props, context)
    this.state = {
      sForm:{ name: "",
          email: "",
        is_human: false },
      sHello:{hello:""}
    }
  }
  render() {

    return (
      <div>
        {
          hello_world2(this.state.sHello.hello).run(x => console.log("HelloWorld: ", x) || this.setState({...this.state, sHello:{...this.state.sHello, hello:x}}))
        }
        {
          SimpleFormExample(this.state.sForm).run(x => console.log("SimpleForm: ", x) || this.setState({...this.state, sForm:x}))
        }
        {
          Conditional(this.state.sForm.is_human).run(x => console.log("conditional: ", x))
        }
      </div>
    )
  }
}

export default App
