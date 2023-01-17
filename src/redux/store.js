// ** Redux Imports

import rootReduct from './rootReduct'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: rootReduct,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export { store }