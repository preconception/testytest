import React, { useState, useContext, createContext } from "react"
import { Drawer } from "antd"
import 'antd/dist/antd.css';
import { createContainer } from "unstated-next";

export function useTestDrawerOpen() {
  const [isOpen, setIsOpen] = useState(true)
  const openDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)
  return { isOpen, openDrawer, closeDrawer }
}

export const State = createContainer(useTestDrawerOpen)

function TestDrawer() {
  const state = State.useContainer()
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      closable={true}
      onClose={state.closeDrawer}
      visible={state.isOpen}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default {
  TestDrawer: TestDrawer
}