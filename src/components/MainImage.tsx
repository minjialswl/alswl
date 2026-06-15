import { assetPath } from "@/lib/assetPath";

export default function MainImage() {
  return (
    <div className="w-full h-full min-h-0 overflow-hidden flex items-end justify-end">

      <img
        src={assetPath("/main-image.jpg")}
        alt=""
        className="
          pt-[10vh]

          max-w-[56vw]
          max-h-[56vh]

          portrait:max-w-[65%]
          portrait:max-h-[65%]

          w-auto
          h-auto
          
          mr-[2vw]
          mb-[5vh]
          portrait:mr-[0vw]

          object-contain
          block
        "
      />

    </div>
  );
}
