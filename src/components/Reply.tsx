"use client";
import { ReplyProps } from "@/libs/types";

export default function Reply({ replyImagePath, username, replyText, likenum }:ReplyProps) {
  return <div>
    <div className="d-flex gap-2 my-2 ps-5">
          <img
            src={replyImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{replyText}</span>
            { likenum > 0 &&
              <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span className="text-muted">{likenum} คน</span>
              </div>
            }
          </div>
        </div>
  </div>;
}
