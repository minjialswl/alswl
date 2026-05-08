type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;

  return (
   <div className="relative h-[calc(100vh-120px)]">
      <div className="absolute right-24 bottom-24 w-[600px]">
        <img
          src="/main-image.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}