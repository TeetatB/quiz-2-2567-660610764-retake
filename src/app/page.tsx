import Image from "next/image";
import styles from "./page.module.css";
import { CommentProps, PostOwnerProps } from "@/libs/types";
import PostOwnner from "@/components/PostOwnner";
import { comments } from "@/libs/comments";
import Comment from "@/components/Comment";


export default function Home() {
  const postowner: PostOwnerProps = {userImagePath:"/profileImages/me.jpg",
       username:"Teetat Boontham 660610764", 
       postText:"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207",
       likeNum: 100 
      }
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner {...postowner}/>
        
        {comments.map((comment:CommentProps) => (<Comment key = {comment.username} {...com}/>))}
      </div>
    </div>
  );
}
