import { useState } from 'react'

import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout";
import {Dashboard} from "./pages/Dashboard";
import {Staff} from "./pages/Staff";
import {Field} from "./pages/Field";
import {MonitoringLog} from "./pages/Monitoringlog";
import {Vehicle} from "./pages/Vehicle";
import {Crop} from "./pages/Crop";
import {Equipment} from "./pages/Equipment";
import {User} from "./pages/User";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/staff', element : <Staff/>},
                { path : '/field', element : <Field/>},
                { path : '/monitoringLog', element : <MonitoringLog/>},
                { path : '/vehicle', element : <Vehicle/>},
                { path : '/crop', element : <Crop/>},
                { path : '/equipment', element : <Equipment/>},
                { path : '/user', element : <User/>},
            ]
        },
    ])

  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
