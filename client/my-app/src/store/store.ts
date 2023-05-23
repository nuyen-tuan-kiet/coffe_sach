import { configureStore } from '@reduxjs/toolkit'
import admin_info from '../store/auth_sign_reducer'

export const store = configureStore({
  reducer: {
   admin_info: admin_info
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch