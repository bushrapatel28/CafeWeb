import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  rating?: number;
  title?: string;
  body?: string;
  reviewerName?: string;
  reviewerAvatar?: string;
  date?: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating = 5,
  title = "Review title",
  body = "Review body",
  reviewerName = "Reviewer name",
  reviewerAvatar = "https://storage.googleapis.com/tempo-image-previews/figma-exports%2Fgithub%7C61569309-1750865374624-node-I3311%3A147%3B2236%3A16098%3B2010%3A15576%3B9762%3A1114-1750865374161.png",
  date = "Date",
  className,
}) => {
  return (
    <div
      className={cn(
        "h-[217px] p-6 bg-white rounded-lg border border-[#d9d9d9] flex flex-col justify-start items-start gap-6",
        className,
      )}
    >
      {/* Star Rating */}
      <div className="justify-start items-center gap-1 inline-flex">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-5 h-5 px-[1.67px] pt-[1.67px] pb-[2.48px] justify-center items-center flex overflow-hidden"
          >
            <Star
              className={cn(
                "w-[15.83px] h-[15.02px]",
                index < rating
                  ? "fill-[#FFC107] text-[#FFC107]"
                  : "fill-none text-[#E0E0E0]",
              )}
            />
          </div>
        ))}
      </div>

      {/* Review Content */}
      <div className="self-stretch h-[55px] flex-col justify-start items-start gap-1 flex">
        <div className="h-[29px] justify-start items-start inline-flex">
          <h3 className="text-[#1A1A1A] text-lg font-medium leading-7 font-urbanist">
            {title}
          </h3>
        </div>
        <div className="h-[22px] justify-start items-start inline-flex">
          <p className="text-[#666666] text-sm font-normal leading-5 font-urbanist">
            {body}
          </p>
        </div>
      </div>

      {/* Reviewer Info */}
      <div className="w-[139px] h-[46px] justify-start items-start gap-3 inline-flex">
        <div className="w-10 h-10 rounded-full justify-center items-center inline-flex overflow-hidden">
          <img
            className="w-10 h-10 object-cover"
            src={reviewerAvatar}
            alt={`${reviewerName} avatar`}
          />
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="self-stretch">
            <span className="text-[#1A1A1A] text-sm font-medium leading-5 font-urbanist">
              {reviewerName}
            </span>
          </div>
          <div className="self-stretch">
            <span className="text-[#999999] text-xs font-normal leading-4 font-urbanist">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
