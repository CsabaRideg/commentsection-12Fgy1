import { useEffect, useState } from "react"
import type { CommentType, UserType } from "./types/MyTypes"
import Comment from "./components/Comment"

const App = () => {

  const [comments, setComments] = useState<CommentType[]>([])
  const [currentUser, setCurrentUser] = useState<UserType>()
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        setComments(data.comments)
        setCurrentUser(data.currentUser)
      })
  }, [])
  return (
    <div className="commentWrapper">
      {comments.map(comment => <Comment{...comment} />)}
    </div>
  )
}

export default App