import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  url?: string;
  content: string;
}

const MetaTag = ({ title, url, content }: Props) => {
  return (
    <Helmet>
      {url && <link rel="canonical" href={url} />}
      <title>{title}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
};

export default MetaTag;
