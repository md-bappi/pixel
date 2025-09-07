type TitleProps = {
  title: string;
  count?: number;
  des?: string;
};

const Title = ({ title, count, des }: TitleProps) => {
  return (
    <div className="mb-4 py-4">
      {/* Title Row */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 capitalize">
          {title}
        </h2>
        {count !== undefined && (
          <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </div>

      {/* Description */}
      {des && <p className="text-gray-400  text-sm mt-3">{des}</p>}
    </div>
  );
};

export default Title;
