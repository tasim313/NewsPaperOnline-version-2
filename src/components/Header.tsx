import { Search, Menu, Calendar, Clock, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdBanner from "./AdBanner";
import { categories } from "@/data/newsData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const currentDate = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const mainNavItems = categories.slice(0, 10);

  return (
    <header className="w-full">
      {/* Top Ad Banner */}
      <div className="bg-secondary py-2 flex justify-center">
        <AdBanner width="728px" height="90px" label="হেডার বিজ্ঞাপন" />
      </div>

      {/* Main Header */}
      <div className="bg-header-bg text-header-text">
        <div className="container mx-auto">
          {/* Top bar with date */}
          <div className="flex items-center justify-between py-2 border-b border-primary-foreground/20 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {currentDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs">
              <Link to="/" className="hover:underline">ই-পেপার</Link>
              <Link to="/" className="hover:underline">আর্কাইভ</Link>
              <Link to="/" className="hover:underline">English</Link>
            </div>
          </div>

          {/* Logo and Search */}
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="font-headline text-3xl md:text-4xl font-bold tracking-tight hover:opacity-90 transition-opacity">
              দৈনিক সংবাদ
            </Link>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-primary-foreground/10 rounded-full px-4 py-2">
                <input 
                  type="text" 
                  placeholder="অনুসন্ধান করুন..." 
                  className="bg-transparent outline-none text-sm placeholder:text-primary-foreground/60 w-40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-4 h-4" />
              </div>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card border-b border-news-divider shadow-sm">
        <div className="container mx-auto">
          <ul className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex flex-col md:flex-row items-start md:items-center 
            gap-0 md:gap-1 py-2
          `}>
            <li>
              <Link 
                to="/" 
                className="block px-4 py-2 font-headline text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                প্রথম পাতা
              </Link>
            </li>
            {mainNavItems.map((item) => (
              <li key={item.slug}>
                <Link 
                  to={`/category/${item.slug}`}
                  className="block px-4 py-2 font-headline text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Breaking News Ticker */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center">
          <span className="bg-accent text-accent-foreground px-4 py-2 font-headline font-bold text-sm shrink-0">
            সর্বশেষ
          </span>
          <div className="overflow-hidden flex-1">
            <div className="animate-ticker whitespace-nowrap py-2 font-body">
              ব্রেকিং নিউজ: বাংলাদেশের অর্থনৈতিক প্রবৃদ্ধি ৭% ছাড়িয়েছে • রাজধানীতে নতুন মেট্রোরেল লাইনের উদ্বোধন • জাতীয় দলের বিশ্বকাপ প্রস্তুতি শুরু • প্রযুক্তি খাতে বিদেশি বিনিয়োগ বৃদ্ধি • শেয়ার বাজারে রেকর্ড লেনদেন • এইচএসসি ফলাফল প্রকাশ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
