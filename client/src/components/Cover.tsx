const Cover = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://live.staticflickr.com/65535/54760310858_6d1999a932_h.jpg)`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </div>
  );
}

export default Cover;