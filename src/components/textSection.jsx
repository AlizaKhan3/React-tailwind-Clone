const TextSection = ({title, description, boldDescription}) => {
  return (
    <div className="flex flex-col items-center justify-center pr-4 pl-10 gap-8">
      <h1 className="text-3xl font-medium">
        {title}
      </h1>
      <p className="text-p-color text-base">
        {description}
      </p>
      <p className="text-p-color text-base font-semibold">
        {boldDescription}
      </p>
    </div>
  );
};

export default TextSection;
