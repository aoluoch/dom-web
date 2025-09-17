interface CoverProps {
  title: string;
  subtitle?: string;
}

const Cover = ({ title, subtitle }: CoverProps) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://live.staticflickr.com/65535/54760310858_6d1999a932_h.jpg)`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cover;
