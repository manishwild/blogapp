import React, { createContext, useReducer, useState } from 'react'
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'
// import { NavigationContext } from '@react-navigation/native'
// export const BlogContext = createContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogPost':
      return action.payload
    case 'delete_blogPost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case 'edit_blogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    default:
      return state
  }
}

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    // response.data === []
    dispatch({ type: 'get_blogPost', payload: response.data })
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })
    // dispatch({ type: 'add_blogPost', payload: { title, content } })
    if (callback) {
      callback()
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content })
    dispatch({
      type: 'edit_blogPost',
      payload: { id, title, content },
    })
    if (callback) {
      callback()
    }
  }
}

// export default BloxContext = ({ children }) => {
//   // const [blogPosts, setBlogPosts] = useState([])
//   const [blogPosts, dispatch] = useReducer(blogReducer, [])

//   const addBlogPost = () => {
//     dispatch({ type: 'add_blogPost' })
//   }
//   const editBlogPost = () => {
//     dispatch({ type: 'edit_blogPost' })
//   }
//   const deleteBlogPost = () => {
//     dispatch({ type: 'delete_blogPost' })
//   }
//   const addBlogPost = () => {
//     setBlogPosts([
//       ...blogPosts,
//       { title: `Blog Post #${blogPosts.length + 1}` },
//     ])
//   }
//   const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }]
//   return (
//     <BlogContext.Provider
//       value={{ data: blogPosts, addBlogPost, editBlogPost, deleteBlogPost }}
//     >
//       {children}
//     </BlogContext.Provider>
//   )
// }

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
)
