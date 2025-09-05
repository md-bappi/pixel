type TitleProps = {
  title: string;
  count?: number;
  des?: string;
};

const Title = ({ title, count, des }: TitleProps) => {
  return (
    <div className="mb-4">
      {/* Title Row */}
      <div className="flex items-center gap-3">
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
      {des && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{des}</p>
      )}
    </div>
  );
};

export default Title;
