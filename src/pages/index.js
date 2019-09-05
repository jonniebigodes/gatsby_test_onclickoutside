import React from "react"
import Loadable from "react-loadable"
import "../assets/css/menu.css"
// component to show something to the user while the actual component is loaded on the client side
const loader = () => <div>Loading Menu...</div>
//
const MyMenuLoadable = Loadable({
  loader: () => import("../components/Menu.js"),
  loading: loader,
})
export default () => (
  <div className="App">
    <MyMenuLoadable />
  </div>
)
