interface AdBannerProps {
  width: string;
  height: string;
  label?: string;
  className?: string;
}

const AdBanner = ({ width, height, label = "বিজ্ঞাপন", className = "" }: AdBannerProps) => {
  return (
    <div 
      className={`ad-placeholder border border-ad-border rounded flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="bg-card/90 px-3 py-1.5 rounded text-center">
        <span className="text-ad-label text-xs font-headline">{label}</span>
        <div className="text-muted-foreground text-[10px]">{width} × {height}</div>
      </div>
    </div>
  );
};

export default AdBanner;
