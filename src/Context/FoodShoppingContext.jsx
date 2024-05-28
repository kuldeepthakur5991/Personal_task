import { createContext, useState } from "react"

const FoodShoppingContext = createContext()

const FoodShoppingContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const data = {
    cart,
    setCart
  }

  return (
    <FoodShoppingContext.Provider value={data}>{children}</FoodShoppingContext.Provider>
  )
}

export { FoodShoppingContext, FoodShoppingContextProvider };
