import { string, stateful, div, label, Action, IOWidget, checkbox, any, Widget, button } from "widgets-for-react"

export interface FormData {
  name: string
  email: string
  is_human: boolean
}

export type FormAction = Action<FormData>

let set_name = (new_name:string) : FormAction => (form_data:FormData) =>
  ({...form_data, name:new_name })

let set_email = (new_email:string) : FormAction => (form_data:FormData) =>
  ({...form_data, email:new_email })

let set_is_human = (new_is_human:boolean) : FormAction => (form_data:FormData) =>
  ({...form_data, is_human:new_is_human })

  let clear_state = (): FormAction => (form_data:FormData) =>
  ({...form_data, email: '', password: ''})

export let FormField = function(title:string, html_for:string, actual_field:Widget<FormAction>) : Widget<FormAction> {
  return (
    div<FormAction>({ className:"row form-group" })(
      label<FormAction>(title, { htmlFor:html_for, label_position: "before", className: "col-sm-1 col-form-label" })(
        div<FormAction>({ className:"col-sm-3" })(
          actual_field
        )
      )
    )
  )
}

export let FormComponent : IOWidget<FormData, FormAction> = form_data =>
  any<FormAction>()([
    FormField("Name", "name",
      string({ id:"name", className:"form-control" })(form_data.name).map(set_name)),
    FormField("Email", "email",
      string({ id:"email", className:"form-control" })(form_data.email).map(set_email)),
    FormField("Is human", "is-human",
      checkbox<boolean>({ selected_value:true, unselected_value:false, id:"is-human", className:"form-control" })(form_data.is_human).map(set_is_human)),
      button <FormAction>("Clear Widget",{disabled:!form_data.is_human})(clear_state)
      
      
  ])

export const SimpleFormExample =
 stateful<FormData>()(form_data =>
    FormComponent(form_data)
    .map(action => action(form_data))
  )