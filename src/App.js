import React, { useEffect, lazy, Suspense } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import { useDispatch } from "react-redux"
import { auth } from "./utils/firebase"
import { setUser } from "./redux/actions"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Loading from "./components/Loading/Loading"

const Home = lazy(() => import("./pages/Home/Home"))
const Login = lazy(() => import("./pages/Login/Login"))
const Register = lazy(() => import("./pages/Register/Register"))
const Checkout = lazy(() => import("./pages/Checkout/Checkout"))
const Orders = lazy(() => import("./pages/Orders/Orders"))
const Payment = lazy(() => import("./pages/Payment/Payment"))

const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"))

const promise = loadStripe(
  "pk_test_51KOl4OLMyNVG1aVXcHmfPqEq3Y6sfS0TQPQV9JcCA4VrAZVZSiMj2SPFAhSGYZItIAnYPb7v61cS77hkGa6rR49A00FPGkpp1l"
)
function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Header />
                  <Orders />
                </>
              }
            />

            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/products/:id"
              element={
                <>
                  <Header />
                  <SingleProduct />
                </>
              }
            />
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
