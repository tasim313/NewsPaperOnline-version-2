import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import NewsCard from "@/components/NewsCard";
import { getNewsById, getRelatedNews, getPopularNews } from "@/data/newsData";
import { Clock, User, Eye, Share2, Facebook, Twitter, Printer } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const news = getNewsById(id || "");
  const relatedNews = news ? getRelatedNews(news.id, news.categorySlug, 4) : [];
  const popularNews = getPopularNews(5);

  if (!news) {
    return (
      <div className="min-h-screen bg-background font-body">
        <Header />
        <main className="container mx-auto py-12 text-center">
          <h1 className="font-headline text-2xl text-news-headline">সংবাদটি পাওয়া যায়নি</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            প্রথম পাতায় ফিরে যান
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      
      <main className="container mx-auto py-6">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm font-headline">
          <Link to="/" className="text-muted-foreground hover:text-primary">প্রথম পাতা</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to={`/category/${news.categorySlug}`} className="text-muted-foreground hover:text-primary">
            {news.category}
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-news-headline">{news.title.slice(0, 30)}...</span>
        </nav>

        {/* Top Ad */}
        <div className="mb-6 flex justify-center">
          <AdBanner width="728px" height="90px" label="বিস্তারিত পাতা বিজ্ঞাপন" />
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Category Badge */}
            <Link 
              to={`/category/${news.categorySlug}`}
              className="inline-block bg-primary text-primary-foreground px-3 py-1 text-sm font-headline font-semibold mb-3"
            >
              {news.category}
            </Link>

            {/* Title */}
            <h1 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-news-headline leading-tight mb-4">
              {news.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-news-divider">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {news.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {news.date}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {news.views.toLocaleString('bn-BD')} বার পড়া হয়েছে
              </span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-headline text-muted-foreground">শেয়ার করুন:</span>
              <button className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-sky-500 text-white rounded flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-muted text-muted-foreground rounded flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-muted text-muted-foreground rounded flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Printer className="w-4 h-4" />
              </button>
            </div>

            {/* Featured Image */}
            <div className="mb-6">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center font-headline">
                ছবি: প্রতীকী
              </p>
            </div>

            {/* Ad after image */}
            <div className="mb-6 flex justify-center">
              <AdBanner width="468px" height="60px" label="কন্টেন্ট বিজ্ঞাপন" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="font-body text-lg text-foreground leading-relaxed mb-4 font-medium">
                {news.excerpt}
              </p>
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="font-body text-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ad after content */}
            <div className="mb-8 flex justify-center">
              <AdBanner width="728px" height="90px" label="কন্টেন্টের পরে বিজ্ঞাপন" />
            </div>

            {/* Tags */}
            <div className="mb-8 pb-4 border-b border-news-divider">
              <span className="font-headline font-semibold text-sm text-news-headline mr-3">ট্যাগ:</span>
              <div className="inline-flex flex-wrap gap-2">
                <span className="bg-secondary px-3 py-1 text-sm font-headline rounded hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                  {news.category}
                </span>
                <span className="bg-secondary px-3 py-1 text-sm font-headline rounded hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                  বাংলাদেশ
                </span>
                <span className="bg-secondary px-3 py-1 text-sm font-headline rounded hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                  সংবাদ
                </span>
              </div>
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <section className="mb-8">
                <h2 className="font-headline font-bold text-xl text-news-headline border-b-2 border-primary pb-2 mb-4">
                  সম্পর্কিত সংবাদ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedNews.map((item) => (
                    <Link key={item.id} to={`/news/${item.id}`}>
                      <NewsCard
                        title={item.title}
                        category={item.category}
                        date={item.date}
                        image={item.image}
                        size="medium"
                      />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-[300px] space-y-6">
            <AdBanner width="100%" height="250px" label="সাইডবার বিজ্ঞাপন" className="w-full" />
            
            {/* Popular News */}
            <div className="bg-card border border-news-divider rounded p-4">
              <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
                জনপ্রিয় সংবাদ
              </h3>
              <div className="space-y-4">
                {popularNews.map((item, index) => (
                  <Link key={item.id} to={`/news/${item.id}`} className="flex gap-3 items-start group">
                    <span className="text-primary font-headline font-bold text-2xl leading-none">
                      {(index + 1).toLocaleString('bn-BD')}
                    </span>
                    <div>
                      <span className="text-news-category text-xs font-semibold">{item.category}</span>
                      <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-news-date text-xs">{item.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <AdBanner width="100%" height="300px" className="w-full" />
            <AdBanner width="100%" height="250px" label="নিচের বিজ্ঞাপন" className="w-full" />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
