
import * as React from "react"
import { stateful, mk_widget } from "widgets-for-react"

export const hello_world2 =
  stateful<string>()(s =>
    mk_widget({
      run: onDone =>
        <div className="form-group">
          <label htmlFor="main-input">Type text here</label>
          <div className="input-group">
            {/* {string({ id: "main-input", className: "form-control" })(s).run(o => onDone(o))} */}
            <input id="main-input" className="form-control" value={s} onChange={e=> onDone(e.currentTarget.value)} />
          </div>
        </div>
    })
  )