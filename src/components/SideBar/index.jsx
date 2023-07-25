import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { SmallPrompt } from "../Prompts";
import Comment from "../Comments";
import comments from "../../data/comments";
import emptyheart from "../../assets/images/emptyheart.png";
import redheart from "../../assets/images/redheart.png";
import { likePrompt, getSecureUser } from "../../api/api";
import { useState, useEffect } from "react";
import { getCookie } from "../../utils/cookie";

export const HomeSideBar = ({ user, prompt }) => {
  // console.log(user);
  // console.log(user[0].username);

  return (
    <div className="flex flex-col space-y-4 align-middle items-center">
      <Link
        to="/promptmake"
        className="button-b w-11/12 flex flex-col items-center"
      >
        내 프롬프트 만들기
      </Link>
      <div>
        <HiUserCircle size="150" />
        {user.id ? (
          <div className="font-semibold">{user.username}님 반갑습니다!</div>
        ) : (
          <div className="font-semibold">로그인이 필요합니다</div>
        )}
      </div>
      <div className="w-52 bg-slate-100 rounded-3xl border-solid border-slate-300 border-2 text-black p-3 space-y-2">
        <div className="rounded-xl p-3.5 mb-3 text-center font-bold text-lg text-white bg-gpt-blue">
          오늘의 프롬프트
        </div>
        {/* <SmallPrompt rank="🥇" prompt={prompt[0]} />
        <SmallPrompt rank="🥈" prompt={prompt[1]} />
        <SmallPrompt rank="🥉" prompt={prompt[2]} />
        <SmallPrompt rank="4" prompt={prompt[3]} />
        <SmallPrompt rank="5" prompt={prompt[4]} /> */}
      </div>
    </div>
  );
};

export const PromptSideBar = ({ prompt }) => {
  console.log("PROMPT INFO", prompt);
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const onClickLike = async () => {
    try {
      const response = await likePrompt(prompt.id);
      setLikeCount(response.like_users.length);
      setIsLike(!isLike);
    } catch (error) {
      console.log("[ERROR] failed to like prompt");
    }
  };

  return (
    <div className="h-full flex flex-col space-y-5 bg-white text-black rounded-tr-3xl p-5">
      <Link
        to="/:promptmake"
        className="w-full button-b flex flex-col items-center"
      >
        내 프롬프트 만들기
      </Link>
      <div>
        <HiUserCircle size="150" className="self-center" />
        <div className="font-semibold">
          {prompt.author.username}님에 의해 생성된 프롬프트
        </div>
      </div>
      <div>
        <div>프롬프트 정보</div>
        <div>👀 {prompt.view}</div>
        <div>
          {isLike ? (
            <div className="w-5 h-5">
              <img src={redheart} onClick={onClickLike}></img>
            </div>
          ) : (
            <div className="w-5 h-5">
              <img
                src={emptyheart}
                onClick={onClickLike}
                className="cursor-pointer"
              ></img>
            </div>
          )}
        </div>
      </div>
      <div>
        <Comment promptId={prompt.id} />
      </div>
    </div>
  );
};
