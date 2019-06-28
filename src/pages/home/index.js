import React, { useContext } from "react"
import { Button } from "antd"
import Registered, { State } from "./states/registered"

export default () => {

  return (
    <>
      <State.Provider>
        <Button
          onClick={"setIsOpen"}
          type="primary">
          Open
        </Button>
        <Registered.TestDrawer />
      </State.Provider>
    </>
  )
}