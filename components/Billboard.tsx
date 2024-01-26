import React, { FC } from "react";

interface BillboardProps {
  data: Billboard;
}

const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
        style={{
          backgroundImage: data?.imageUrl ? `url(${data.imageUrl})` : "",
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-start text-center gap-y-8">
          <div className="text-white font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
