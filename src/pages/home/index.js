import React, { useContext } from "react"
import { Button } from "antd"
import Registered from "./states/registered"

export default () => {
  return (
    <div style={{
      height: "100vh",
      width: "100%",
      background: "red",
      display: "grid",
      alignItems: "center",
      justifyItems: "center"
    }}>

      <Registered.TestCard />
    </div>
  )
}