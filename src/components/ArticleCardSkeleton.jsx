const ArticleCardSkeleton = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} animate-pulse`}
    >
      {/* image */}
      <div className="w-full aspect-video bg-slate-300" />
      <div className="p-5">
        {/* title */}
        <div className="w-56 h-2 mt-4 bg-slate-300 rounded-lg" />
        {/* caption */}
        <div className="w-24 h-2 mt-4 bg-slate-300 rounded-lg" />
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            {/* profile image */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-300" />
            <div className="flex flex-col">
              {/* user's name */}
              <div className="w-24 h-2 bg-slate-300 rounded-lg" />
              {/* verified status */}
              <div className="w-16 h-2 mt-2 bg-slate-300 rounded-lg" />
            </div>
          </div>
          {/* date */}
          <div className="w-10 h-2 mt-4 bg-slate-300 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
