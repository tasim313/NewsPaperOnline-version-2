import AdBanner from "./AdBanner";
import NewsCard from "./NewsCard";

interface SidebarProps {
  position: 'left' | 'right';
}

const popularNews = [
  { title: "সরকারের নতুন অর্থনৈতিক নীতি ঘোষণা", category: "অর্থনীতি", date: "১ ঘণ্টা আগে" },
  { title: "ক্রিকেট বিশ্বকাপে বাংলাদেশের প্রত্যাশা", category: "খেলা", date: "২ ঘণ্টা আগে" },
  { title: "ঢাকায় নতুন আবহাওয়া সতর্কতা", category: "জাতীয়", date: "৩ ঘণ্টা আগে" },
  { title: "প্রযুক্তি খাতে নতুন স্টার্টআপ নীতি", category: "প্রযুক্তি", date: "৪ ঘণ্টা আগে" },
];

const Sidebar = ({ position }: SidebarProps) => {
  if (position === 'left') {
    return (
      <aside className="hidden lg:block w-[160px] space-y-6">
        <AdBanner width="160px" height="600px" label="সাইডবার বিজ্ঞাপন" />
        <AdBanner width="160px" height="300px" />
      </aside>
    );
  }

  return (
    <aside className="w-full lg:w-[300px] space-y-6">
      {/* Top Right Ad */}
      <AdBanner width="100%" height="250px" label="ডান পাশের বিজ্ঞাপন" className="w-full" />
      
      {/* Popular News Section */}
      <div className="bg-card border border-news-divider rounded p-4">
        <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
          জনপ্রিয় সংবাদ
        </h3>
        <div className="space-y-4">
          {popularNews.map((news, index) => (
            <div key={index} className="flex gap-3 items-start">
              <span className="text-primary font-headline font-bold text-2xl leading-none">
                {(index + 1).toLocaleString('bn-BD')}
              </span>
              <div>
                <span className="text-news-category text-xs font-semibold">{news.category}</span>
                <h4 className="font-headline text-sm font-medium text-news-headline hover:text-primary cursor-pointer line-clamp-2">
                  {news.title}
                </h4>
                <span className="text-news-date text-xs">{news.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Right Ad */}
      <AdBanner width="100%" height="300px" className="w-full" />

      {/* Video Section */}
      <div className="bg-card border border-news-divider rounded p-4">
        <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
          ভিডিও
        </h3>
        <div className="aspect-video bg-muted rounded flex items-center justify-center">
          <span className="text-muted-foreground text-sm">ভিডিও প্লেয়ার</span>
        </div>
        <h4 className="font-headline text-sm font-medium mt-3 text-news-headline">
          প্রধানমন্ত্রীর সাক্ষাৎকার
        </h4>
      </div>

      {/* Bottom Right Ad */}
      <AdBanner width="100%" height="250px" label="নিচের বিজ্ঞাপন" className="w-full" />
    </aside>
  );
};

export default Sidebar;
