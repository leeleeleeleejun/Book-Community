import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  url?: string;
}

const MetaTag = ({ title, url }: Props) => {
  return (
    <Helmet>
      {url && <link rel="canonical" href={url} />}
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTag;
