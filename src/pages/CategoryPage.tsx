import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import NewsCard from "@/components/NewsCard";
import { getNewsByCategory, categories, getPopularNews } from "@/data/newsData";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryInfo = categories.find(cat => cat.slug === slug);
  const news = getNewsByCategory(slug || "");
  const popularNews = getPopularNews(5);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-background font-body">
        <Header />
        <main className="container mx-auto py-12 text-center">
          <h1 className="font-headline text-2xl text-news-headline">ক্যাটাগরি পাওয়া যায়নি</h1>
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
          <span className="text-news-headline">{categoryInfo.name}</span>
        </nav>

        {/* Category Header */}
        <div className="flex items-center justify-between border-b-2 border-primary mb-6">
          <h1 className="font-headline font-bold text-2xl text-news-headline bg-primary text-primary-foreground px-6 py-3">
            <span className="mr-2">{categoryInfo.icon}</span>
            {categoryInfo.name}
          </h1>
          <span className="text-sm text-muted-foreground font-headline">
            মোট {news.length.toLocaleString('bn-BD')} টি সংবাদ
          </span>
        </div>

        {/* Top Ad */}
        <div className="mb-6 flex justify-center">
          <AdBanner width="728px" height="90px" label="ক্যাটাগরি পাতা বিজ্ঞাপন" />
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {news.length > 0 ? (
              <>
                {/* Featured News */}
                {news[0] && (
                  <Link to={`/news/${news[0].id}`} className="block mb-6">
                    <NewsCard
                      title={news[0].title}
                      category={news[0].category}
                      date={news[0].date}
                      image={news[0].image}
                      excerpt={news[0].excerpt}
                      size="large"
                    />
                  </Link>
                )}

                {/* Ad after featured */}
                <div className="mb-6 flex justify-center">
                  <AdBanner width="468px" height="60px" />
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {news.slice(1).map((item) => (
                    <Link key={item.id} to={`/news/${item.id}`}>
                      <NewsCard
                        title={item.title}
                        category={item.category}
                        date={item.date}
                        image={item.image}
                        excerpt={item.excerpt}
                        size="medium"
                      />
                    </Link>
                  ))}
                </div>

                {/* Bottom Ad */}
                <div className="flex justify-center">
                  <AdBanner width="728px" height="90px" label="পাতার নিচে বিজ্ঞাপন" />
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-headline">এই ক্যাটাগরিতে কোনো সংবাদ নেই</p>
              </div>
            )}
          </div>

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

            {/* Category List */}
            <div className="bg-card border border-news-divider rounded p-4">
              <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
                সকল বিভাগ
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link 
                      to={`/category/${cat.slug}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-colors font-headline text-sm ${
                        cat.slug === slug 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <AdBanner width="100%" height="300px" className="w-full" />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
