import { Link } from "react-router-dom";
import { FooterBox, IconBox } from "./Foooter.style";
import MailIcon from "@/assets/MailIcon.svg?react";
import VelogIcon from "@/assets/VelogIcon.svg?react";
import GithubIcon from "@/assets/GithubIcon.svg?react";

const Footer = ({ signUp }: { signUp: boolean }) => {
  return (
    <FooterBox>
      <IconBox>
        <Link to={"https://github.com/leeleeleeleejun"} target="blank">
          <GithubIcon />
        </Link>
        <Link to={"mailto:wnstjr6293@gmail.com"} target="blank">
          <MailIcon />
        </Link>
        <Link to={"https://velog.io/@leeleeleeleejun"} target="blank">
          <VelogIcon />
        </Link>
      </IconBox>
      {signUp ? null : (
        <>
          <div>
            <p>우리는 독서를 즐기는 이들을 위한 공간을 만들었습니다.</p>
            <p>독서의즐거움을 함께 나누고 지식을 공유하는 공동체입니다.</p>
          </div>
          <div>
            <p>email: wnstjr6293@naver.com</p>
            <p>blog: https://junseok-blog.vercel.app/</p>
          </div>
        </>
      )}
    </FooterBox>
  );
};

export default Footer;
