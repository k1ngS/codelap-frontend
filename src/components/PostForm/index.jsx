import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useCreatePost } from '../../hooks/usePosts'
import * as S from './styles'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { username } = useUser()
  const createPost = useCreatePost()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) return

    try {
      await createPost.mutateAsync({
        username,
        title: title.trim(),
        content: content.trim()
      })

      setTitle('')
      setContent('')
    } catch (error) {
      console.error('Failed to create post:', error)
    }
  }

  const isDisabled = !title.trim() || !content.trim() || createPost.isLoading

  return (
    <S.Container>
      <S.Title>What's on your mind?</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <S.Label>Title</S.Label>
          <S.Input
            type="text"
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Content</S.Label>
          <S.TextArea
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
        </S.InputGroup>

        <S.ButtonContainer>
          <S.CreateButton
            type="submit"
            disabled={isDisabled}
          >
            {createPost.isLoading ? 'CREATING...' : 'CREATE'}
          </S.CreateButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  )
}

export default PostForm
