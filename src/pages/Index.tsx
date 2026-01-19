import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import NewsSection from "@/components/NewsSection";
import AdBanner from "@/components/AdBanner";
import { allNews, getNewsByCategory, getPopularNews, categories } from "@/data/newsData";

const Index = () => {
  // Get news for different sections
  const featuredNews = allNews.slice(0, 10);
  const nationalNews = getNewsByCategory("national").slice(0, 6);
  const politicsNews = getNewsByCategory("politics").slice(0, 4);
  const economyNews = getNewsByCategory("economy").slice(0, 4);
  const internationalNews = getNewsByCategory("international").slice(0, 4);
  const sportsNews = getNewsByCategory("sports").slice(0, 6);
  const entertainmentNews = getNewsByCategory("entertainment").slice(0, 4);
  const technologyNews = getNewsByCategory("technology").slice(0, 4);
  const educationNews = getNewsByCategory("education").slice(0, 4);
  const healthNews = getNewsByCategory("health").slice(0, 4);
  const popularNews = getPopularNews(8);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      <main className="container mx-auto py-6">
        {/* Top Banner Ad */}
        <div className="mb-6 flex justify-center">
          <AdBanner width="970px" height="90px" label="লিডারবোর্ড বিজ্ঞাপন" />
        </div>

        {/* ========== LEAD NEWS / লিড সংবাদ Section ========== */}
        <section className="mb-8">
          <div className="flex items-center justify-between border-b-4 border-primary mb-4">
            <h2 className="font-headline font-bold text-2xl text-news-headline bg-primary text-primary-foreground px-6 py-3">
              🔥 লিড সংবাদ
            </h2>
            <span className="text-news-date text-sm font-headline animate-pulse">
              সর্বশেষ আপডেট: ১৯ জানুয়ারি, ২০২৬
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Main Lead Story - Large Hero */}
            <div className="lg:col-span-7">
              {featuredNews[0] && (
                <Link 
                  to={`/news/${featuredNews[0].id}`}
                  className="block relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={featuredNews[0].image} 
                      alt={featuredNews[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-headline font-semibold px-3 py-1 rounded mb-3">
                      {featuredNews[0].category}
                    </span>
                    <h3 className="font-headline font-bold text-2xl md:text-3xl text-white leading-tight mb-3 group-hover:text-accent transition-colors">
                      {featuredNews[0].title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base line-clamp-2 mb-3">
                      {featuredNews[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-white/70 text-xs">
                      <span>📅 {featuredNews[0].date}</span>
                      <span>👁️ {featuredNews[0].views?.toLocaleString('bn-BD')} বার পঠিত</span>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Secondary Lead Stories */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {featuredNews.slice(1, 3).map((news) => (
                <Link 
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="block relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-accent text-accent-foreground text-xs font-headline font-semibold px-2 py-0.5 rounded mb-2">
                      {news.category}
                    </span>
                    <h4 className="font-headline font-bold text-lg text-white leading-tight group-hover:text-accent transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                    <span className="text-white/70 text-xs">📅 {news.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Lead News Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {featuredNews.slice(3, 7).map((news) => (
              <Link 
                key={news.id}
                to={`/news/${news.id}`}
                className="block group"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-2">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-news-category text-xs font-headline font-semibold">{news.category}</span>
                <h5 className="font-headline font-medium text-sm text-news-headline group-hover:text-primary transition-colors line-clamp-2">
                  {news.title}
                </h5>
              </Link>
            ))}
          </div>
        </section>

        {/* Breaking News Ticker */}
        <div className="bg-primary text-primary-foreground mb-6 rounded overflow-hidden">
          <div className="flex items-center">
            <span className="bg-accent text-accent-foreground px-4 py-2 font-headline font-bold text-sm shrink-0">
              ⚡ ব্রেকিং
            </span>
            <div className="overflow-hidden flex-1">
              <div className="whitespace-nowrap animate-marquee inline-block">
                {allNews.slice(0, 6).map((news, i) => (
                  <Link 
                    key={news.id} 
                    to={`/news/${news.id}`}
                    className="inline-block px-6 hover:underline"
                  >
                    {news.title} {i < 5 && '•'}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout: Left Article + Ad | Middle 3 Articles + Ad | Right Article + Ad */}
        <section className="mb-8">
          <div className="flex items-center justify-between border-b-2 border-primary mb-4">
            <h2 className="font-headline font-bold text-xl text-news-headline bg-primary text-primary-foreground px-4 py-2">
              প্রধান সংবাদ
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Column - 1 Featured Article + Ad */}
            <div className="lg:col-span-3 space-y-4">
              {featuredNews[0] && (
                <NewsCard
                  id={featuredNews[0].id}
                  title={featuredNews[0].title}
                  category={featuredNews[0].category}
                  categorySlug={featuredNews[0].categorySlug}
                  date={featuredNews[0].date}
                  image={featuredNews[0].image}
                  excerpt={featuredNews[0].excerpt}
                  size="featured"
                />
              )}
              <AdBanner width="100%" height="250px" label="বাম বিজ্ঞাপন" className="w-full" />
            </div>

            {/* Middle Column - 3 Articles + Ad */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredNews.slice(1, 4).map((news) => (
                  <NewsCard
                    key={news.id}
                    id={news.id}
                    title={news.title}
                    category={news.category}
                    categorySlug={news.categorySlug}
                    date={news.date}
                    image={news.image}
                    size="medium"
                    showExcerpt={false}
                  />
                ))}
              </div>
              <AdBanner width="100%" height="90px" label="মধ্যম বিজ্ঞাপন" className="w-full" />
              
              {/* Additional news in middle */}
              <div className="grid grid-cols-2 gap-4">
                {nationalNews.slice(0, 4).map((news) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="flex gap-3 group">
                    <div className="w-24 h-20 shrink-0 overflow-hidden rounded bg-muted">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-news-category font-headline text-xs font-semibold">{news.category}</span>
                      <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                        {news.title}
                      </h4>
                      <span className="text-news-date text-xs">{news.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - 1 Featured Article + Ad */}
            <div className="lg:col-span-3 space-y-4">
              {featuredNews[4] && (
                <NewsCard
                  id={featuredNews[4].id}
                  title={featuredNews[4].title}
                  category={featuredNews[4].category}
                  categorySlug={featuredNews[4].categorySlug}
                  date={featuredNews[4].date}
                  image={featuredNews[4].image}
                  excerpt={featuredNews[4].excerpt}
                  size="featured"
                />
              )}
              <AdBanner width="100%" height="250px" label="ডান বিজ্ঞাপন" className="w-full" />
            </div>
          </div>
        </section>

        {/* Inline Ad */}
        <div className="mb-6 flex justify-center">
          <AdBanner width="728px" height="90px" label="ইনলাইন বিজ্ঞাপন" />
        </div>

        {/* Two Column Section: Politics + Economy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <section>
            <div className="flex items-center justify-between border-b-2 border-primary mb-4">
              <h2 className="font-headline font-bold text-lg text-news-headline bg-primary text-primary-foreground px-4 py-2">
                রাজনীতি
              </h2>
              <Link to="/category/politics" className="text-primary text-sm font-headline hover:underline">
                আরও দেখুন →
              </Link>
            </div>
            <div className="space-y-4">
              {politicsNews[0] && (
                <NewsCard
                  id={politicsNews[0].id}
                  title={politicsNews[0].title}
                  category={politicsNews[0].category}
                  categorySlug={politicsNews[0].categorySlug}
                  date={politicsNews[0].date}
                  image={politicsNews[0].image}
                  excerpt={politicsNews[0].excerpt}
                  size="medium"
                />
              )}
              <div className="space-y-3">
                {politicsNews.slice(1, 4).map((news) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="block group border-b border-news-divider pb-3 last:border-0">
                    <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                      {news.title}
                    </h4>
                    <span className="text-news-date text-xs">{news.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between border-b-2 border-primary mb-4">
              <h2 className="font-headline font-bold text-lg text-news-headline bg-primary text-primary-foreground px-4 py-2">
                অর্থনীতি
              </h2>
              <Link to="/category/economy" className="text-primary text-sm font-headline hover:underline">
                আরও দেখুন →
              </Link>
            </div>
            <div className="space-y-4">
              {economyNews[0] && (
                <NewsCard
                  id={economyNews[0].id}
                  title={economyNews[0].title}
                  category={economyNews[0].category}
                  categorySlug={economyNews[0].categorySlug}
                  date={economyNews[0].date}
                  image={economyNews[0].image}
                  excerpt={economyNews[0].excerpt}
                  size="medium"
                />
              )}
              <div className="space-y-3">
                {economyNews.slice(1, 4).map((news) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="block group border-b border-news-divider pb-3 last:border-0">
                    <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                      {news.title}
                    </h4>
                    <span className="text-news-date text-xs">{news.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Ad between sections */}
        <div className="mb-6 flex justify-center">
          <AdBanner width="970px" height="250px" label="বড় আয়তাকার বিজ্ঞাপন" />
        </div>

        {/* Three Column Layout with Sidebar */}
        <div className="flex gap-6 mb-8">
          {/* Left Content - 2/3 width */}
          <div className="flex-1 min-w-0">
            {/* International News */}
            <NewsSection 
              title="আন্তর্জাতিক" 
              categorySlug="international"
              news={internationalNews.map(n => ({
                id: n.id,
                title: n.title,
                category: n.category,
                categorySlug: n.categorySlug,
                date: n.date,
                image: n.image,
                excerpt: n.excerpt
              }))} 
              showAd={true} 
            />

            {/* Sports News */}
            <NewsSection 
              title="খেলাধুলা" 
              categorySlug="sports"
              news={sportsNews.map(n => ({
                id: n.id,
                title: n.title,
                category: n.category,
                categorySlug: n.categorySlug,
                date: n.date,
                image: n.image,
                excerpt: n.excerpt
              }))} 
            />

            {/* Ad */}
            <div className="mb-6 flex justify-center">
              <AdBanner width="728px" height="90px" />
            </div>

            {/* Entertainment News */}
            <NewsSection 
              title="বিনোদন" 
              categorySlug="entertainment"
              news={entertainmentNews.map(n => ({
                id: n.id,
                title: n.title,
                category: n.category,
                categorySlug: n.categorySlug,
                date: n.date,
                image: n.image,
                excerpt: n.excerpt
              }))} 
            />

            {/* Technology News */}
            <NewsSection 
              title="প্রযুক্তি" 
              categorySlug="technology"
              news={technologyNews.map(n => ({
                id: n.id,
                title: n.title,
                category: n.category,
                categorySlug: n.categorySlug,
                date: n.date,
                image: n.image,
                excerpt: n.excerpt
              }))} 
              showAd={true}
            />

            {/* Two Column: Education + Health */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <div className="flex items-center justify-between border-b-2 border-primary mb-4">
                  <h2 className="font-headline font-bold text-lg text-news-headline bg-primary text-primary-foreground px-4 py-2">
                    শিক্ষা
                  </h2>
                  <Link to="/category/education" className="text-primary text-sm font-headline hover:underline">
                    আরও →
                  </Link>
                </div>
                <div className="space-y-3">
                  {educationNews.map((news) => (
                    <Link key={news.id} to={`/news/${news.id}`} className="flex gap-3 group">
                      <div className="w-20 h-16 shrink-0 overflow-hidden rounded bg-muted">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                          {news.title}
                        </h4>
                        <span className="text-news-date text-xs">{news.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between border-b-2 border-primary mb-4">
                  <h2 className="font-headline font-bold text-lg text-news-headline bg-primary text-primary-foreground px-4 py-2">
                    স্বাস্থ্য
                  </h2>
                  <Link to="/category/health" className="text-primary text-sm font-headline hover:underline">
                    আরও →
                  </Link>
                </div>
                <div className="space-y-3">
                  {healthNews.map((news) => (
                    <Link key={news.id} to={`/news/${news.id}`} className="flex gap-3 group">
                      <div className="w-20 h-16 shrink-0 overflow-hidden rounded bg-muted">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                          {news.title}
                        </h4>
                        <span className="text-news-date text-xs">{news.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-[300px] space-y-6">
            <AdBanner width="100%" height="250px" label="সাইডবার বিজ্ঞাপন" className="w-full" />
            
            {/* Popular News */}
            <div className="bg-card border border-news-divider rounded p-4">
              <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
                সর্বাধিক পঠিত
              </h3>
              <div className="space-y-4">
                {popularNews.slice(0, 5).map((news, index) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="flex gap-3 items-start group">
                    <span className="text-primary font-headline font-bold text-2xl leading-none min-w-[24px]">
                      {(index + 1).toLocaleString('bn-BD')}
                    </span>
                    <div>
                      <span className="text-news-category text-xs font-semibold">{news.category}</span>
                      <h4 className="font-headline text-sm font-medium text-news-headline group-hover:text-primary line-clamp-2 transition-colors">
                        {news.title}
                      </h4>
                      <span className="text-news-date text-xs">{news.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <AdBanner width="100%" height="300px" className="w-full" />

            {/* Video Section */}
            <div className="bg-card border border-news-divider rounded p-4">
              <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
                ভিডিও
              </h3>
              <div className="aspect-video bg-muted rounded flex items-center justify-center mb-3">
                <span className="text-muted-foreground text-sm">ভিডিও প্লেয়ার</span>
              </div>
              <h4 className="font-headline text-sm font-medium text-news-headline">
                প্রধানমন্ত্রীর সাক্ষাৎকার
              </h4>
            </div>

            <AdBanner width="100%" height="250px" className="w-full" />

            {/* Categories */}
            <div className="bg-card border border-news-divider rounded p-4">
              <h3 className="font-headline font-bold text-lg text-news-headline border-b-2 border-primary pb-2 mb-4">
                বিভাগসমূহ
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 12).map((cat) => (
                  <Link 
                    key={cat.slug}
                    to={`/category/${cat.slug}`}
                    className="flex items-center gap-2 px-3 py-2 bg-secondary rounded hover:bg-primary hover:text-primary-foreground transition-colors font-headline text-xs"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <AdBanner width="100%" height="600px" label="স্কাইস্ক্র্যাপার বিজ্ঞাপন" className="w-full" />
          </aside>
        </div>

        {/* Bottom Content Ad */}
        <div className="flex justify-center">
          <AdBanner width="970px" height="250px" label="পাতার নিচে বিজ্ঞাপন" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
