// You can define interfaces for all React components here.
// Do not forget to export properly.
interface PostOwnerProps{
    userImagePath: string;
    username: string;
    postText: string;
    likenum: number;

}
export type {PostOwnerProps};

interface CommentProps{
userImagePath: string;
username: string;
commentText: string;
likenum: number;
replies: ReplyProps[];
}
export type {CommentProps};


interface ReplyProps {
replyImagePath: string;
username: string;
replyText: string;
likenum: number;
}
export type { ReplyProps };
