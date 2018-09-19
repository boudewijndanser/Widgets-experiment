
// import * as React from "react"
import { string, onlyIf } from "widgets-for-react"

export const Conditional = (b: boolean) => onlyIf<boolean>(
    b,
    string({ className: "form-control", readonly: true, readonly_element: 'p' })("You are a human").never()
)

//   { s && <p>You are a human</p> }