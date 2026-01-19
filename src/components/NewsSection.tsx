import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import AdBanner from "./AdBanner";

interface NewsSectionProps {
  title: string;
  categorySlug?: string;
  news: Array<{
    id?: string;
    title: string;
    category: string;
    categorySlug?: string;
    date: string;
    image?: string;
    excerpt?: string;
  }>;
  showAd?: boolean;
  layout?: 'grid' | 'list';
}

const NewsSection = ({ title, categorySlug, news, showAd = false, layout = 'grid' }: NewsSectionProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between border-b-2 border-primary mb-4">
        <h2 className="font-headline font-bold text-xl text-news-headline bg-primary text-primary-foreground px-4 py-2">
          {title}
        </h2>
        {categorySlug && (
          <Link to={`/category/${categorySlug}`} className="text-primary text-sm font-headline hover:underline">
            আরও দেখুন →
          </Link>
        )}
      </div>

      {showAd && (
        <div className="mb-4 flex justify-center">
          <AdBanner width="728px" height="90px" label="সেকশন বিজ্ঞাপন" />
        </div>
      )}

      {layout === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard 
              key={item.id || index} 
              id={item.id}
              title={item.title}
              category={item.category}
              categorySlug={item.categorySlug}
              date={item.date}
              image={item.image}
              excerpt={item.excerpt}
              size="medium" 
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {news.map((item, index) => (
            <div key={item.id || index} className="border-b border-news-divider pb-4 last:border-0">
              <NewsCard 
                id={item.id}
                title={item.title}
                category={item.category}
                categorySlug={item.categorySlug}
                date={item.date}
                image={item.image}
                size="small" 
              />
            </div>
          ))}
        </div>
      )}

      {showAd && (
        <div className="mt-4 flex justify-center">
          <AdBanner width="468px" height="60px" />
        </div>
      )}
    </section>
  );
};

export default NewsSection;
