import { Link } from "react-router-dom";

interface NewsCardProps {
  id?: string;
  title: string;
  category: string;
  categorySlug?: string;
  date: string;
  image?: string;
  excerpt?: string;
  size?: 'small' | 'medium' | 'large' | 'featured';
  showExcerpt?: boolean;
}

const NewsCard = ({ 
  id, 
  title, 
  category, 
  categorySlug,
  date, 
  image, 
  excerpt, 
  size = 'medium',
  showExcerpt = true 
}: NewsCardProps) => {
  const sizeClasses = {
    small: 'flex gap-3',
    medium: 'flex flex-col',
    large: 'flex flex-col md:flex-row gap-4',
    featured: 'relative h-full min-h-[300px]'
  };

  const imageClasses = {
    small: 'w-24 h-20 shrink-0',
    medium: 'w-full h-48',
    large: 'w-full md:w-1/2 h-64',
    featured: 'absolute inset-0 w-full h-full'
  };

  const titleClasses = {
    small: 'text-sm font-medium line-clamp-2',
    medium: 'text-lg font-semibold line-clamp-2',
    large: 'text-xl md:text-2xl font-bold line-clamp-3',
    featured: 'text-xl md:text-2xl font-bold line-clamp-3 text-white'
  };

  const CardWrapper = id ? Link : 'div';
  const cardProps = id ? { to: `/news/${id}` } : {};

  if (size === 'featured') {
    return (
      <CardWrapper 
        {...cardProps as any}
        className="group cursor-pointer relative h-full min-h-[300px] overflow-hidden rounded-lg block"
      >
        {image && (
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block bg-primary text-primary-foreground px-2 py-1 text-xs font-headline font-semibold mb-2">
            {category}
          </span>
          <h3 className={`font-headline group-hover:text-primary-foreground/80 transition-colors ${titleClasses[size]}`}>
            {title}
          </h3>
          {excerpt && showExcerpt && (
            <p className="text-white/80 text-sm mt-2 line-clamp-2 font-body">
              {excerpt}
            </p>
          )}
          <span className="text-white/60 text-xs mt-2 font-headline block">
            {date}
          </span>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper 
      {...cardProps as any}
      className={`group cursor-pointer ${sizeClasses[size]} block`}
    >
      {image && (
        <div className={`${imageClasses[size]} overflow-hidden rounded bg-muted`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className={`${size === 'large' ? 'md:w-1/2 flex flex-col justify-center' : ''} ${size !== 'small' ? 'mt-3' : ''}`}>
        {categorySlug ? (
          <Link 
            to={`/category/${categorySlug}`}
            className="text-news-category font-headline text-xs font-semibold uppercase tracking-wide hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {category}
          </Link>
        ) : (
          <span className="text-news-category font-headline text-xs font-semibold uppercase tracking-wide">
            {category}
          </span>
        )}
        <h3 className={`font-headline text-news-headline mt-1 group-hover:text-primary transition-colors ${titleClasses[size]}`}>
          {title}
        </h3>
        {excerpt && showExcerpt && size !== 'small' && (
          <p className="font-body text-muted-foreground text-sm mt-2 line-clamp-2">
            {excerpt}
          </p>
        )}
        <span className="text-news-date text-xs mt-2 font-headline">
          {date}
        </span>
      </div>
    </CardWrapper>
  );
};

export default NewsCard;
