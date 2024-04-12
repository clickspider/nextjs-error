export interface SeoProps {
  metaTitle: string;
  metaDescription: string;
}

export const SEO = ({ metaTitle, metaDescription }: SeoProps) => {
  return (
    <>
      <meta
        content="width=device-width, initial-scale=1.0"
        key="viewport"
        name="viewport"
      />
      <meta content={metaDescription} key="description" name="description" />
      <meta content={metaTitle} key="og:title" property="og:title" />
    </>
  );
};
