import React, { useState, useContext, createContext } from "react"
import { Drawer, Button } from "antd"
import 'antd/dist/antd.css';
import { createContainer } from "unstated-next";

function useTestDrawerOpen() {
  const [isOpen, setIsOpen] = useState(false)
  const openDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)
  return { isOpen, openDrawer, closeDrawer }
}

export const RegisteredState = createContainer(useTestDrawerOpen)

const TestButton = () => {
  const state = RegisteredState.useContainer()
  return (
    <Button
      onClick={state.openDrawer}
      type="primary">
      Open
        </Button>
  )
}


function TestDrawer() {
  const state = RegisteredState.useContainer()
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

function TestCard() {
  return (
    <RegisteredState.Provider>
      <TestDrawer />
      <TestButton />
      <TestButton />
      <TestButton />
    </RegisteredState.Provider>
  )
}

export default {
  TestCard: TestCard
}

