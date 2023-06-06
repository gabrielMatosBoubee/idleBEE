import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './redux'


const router = createBrowserRouter([
  { path: "/",
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
