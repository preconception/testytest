import React, { useContext } from "react"
import { Button } from "antd"
import Registered, { State, useTestDrawerOpen } from "./states/registered"

export default () => {

  const state = useTestDrawerOpen()
  return (
    <>
      <State.Provider value={state}>
        <Button
          onClick={state.openDrawer}
          type="primary">
          Open
        </Button>
        <Registered.TestDrawer />
      </State.Provider>
    </>
  )
}