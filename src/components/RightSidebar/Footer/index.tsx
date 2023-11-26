import GithubIcon from "@/assets/GithubIcon";
import MailIcon from "@/assets/MailIcon";
import VelogIcon from "@/assets/VelogIcon.";
import { FooterBox, IconBox } from "./FoooterStyle";
import { Link } from "react-router-dom";

const Footer = () => {
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

      <p>
        우리는 독서를 즐기는 이들을 위한 공간을 만들었습니다. 독서의 즐거움을
        함께 나누고 지식을 공유하는 공동체입니다.
      </p>
      <p>email: wnstjr6293@naver.com</p>
      <p>blog: https://junseok-blog.vercel.app/</p>
    </FooterBox>
  );
};

export default Footer;
