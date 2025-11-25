import type { CommentType } from "../types/MyTypes"
import plus from "../assets/icon-plus.svg"
import minus from "../assets/icon-minus.svg"
import reply from "../assets/icon-reply.svg"
import { useState } from "react"

const Comment = (props: CommentType) => {
    const [score, setScore] = useState(props.score)
    return (
        <>
            <section>
                <aside>
                    <button onClick={() => setScore(prev => prev + 1)}><img src={plus} alt="" /></button>
                    <span>{score}</span>
                    <button onClick={() => setScore(prev => prev - 1)}><img src={minus} alt="" /></button>
                </aside>
                <main>
                    <header>
                        <div className="userData">
                            <img src={props.user.image.png} alt="" />
                            <strong>{props.user.username}</strong>
                        </div>
                        <div className="buttonWrapper">
                            <button><img src={reply} alt="" />Reply</button>
                        </div>
                    </header>
                    <div>{props.content}</div>
                </main>
            </section>
            {props.replies && <div className="replies">
                {props.replies.map(reply => <Comment {...reply}/>)}
            </div>}
        </>
    )
}

export default Comment