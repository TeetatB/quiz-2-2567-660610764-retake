// You can define interfaces for all React components here.
// Do not forget to export properly.
interface PostOwnerProps{
    userImagePath: string;
    username: string;
    postText: string;
    likeNum: number;
}
export type {PostOwnerProps};

interface CommentProps{
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];
}
export type {CommentProps};


interface ReplyProps {
    username: string;
    replyImagePath: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };
