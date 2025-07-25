import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { postsAPI } from "../services/api"

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: postsAPI.getPosts,
    select: (data) => {
      const posts = data.data.results || []
      return posts.sort((a, b) =>
        new Date(b.created_datetime) - new Date(a.created_datetime)
      )
    },
    staleTime: 30000 // 30 seconds
  })
}

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postsAPI.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (error) => {
      console.error("Error creating post:", error.response?.data || error.message)
    }
  })
}

export const useUpdatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }) => postsAPI.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (error) => {
      console.error("Error updating post:", error.response?.data || error.message)
    }
  })
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postsAPI.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (error) => {
      console.error("Error deleting post:", error.response?.data || error.message)
    }
  })
}