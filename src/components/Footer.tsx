import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AdBanner from "./AdBanner";
import { categories } from "@/data/newsData";

const Footer = () => {
  const footerCategories = categories.slice(0, 8);

  const footerLinks = [
    {
      title: "আমাদের সম্পর্কে",
      links: [
        { name: "সম্পাদকীয়", url: "/" },
        { name: "বিজ্ঞাপন", url: "/" },
        { name: "যোগাযোগ", url: "/" },
        { name: "গোপনীয়তা নীতি", url: "/" },
        { name: "শর্তাবলী", url: "/" },
      ]
    },
    {
      title: "অন্যান্য",
      links: [
        { name: "ই-পেপার", url: "/" },
        { name: "আর্কাইভ", url: "/" },
        { name: "সংবাদদাতা", url: "/" },
        { name: "কর্মী নিয়োগ", url: "/" },
        { name: "মোবাইল অ্যাপ", url: "/" },
      ]
    }
  ];

  return (
    <footer className="mt-8">
      {/* Footer Ad */}
      <div className="bg-secondary py-4 flex justify-center">
        <AdBanner width="970px" height="90px" label="ফুটার বিজ্ঞাপন" />
      </div>

      {/* Main Footer */}
      <div className="bg-footer-bg text-footer-text">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and About */}
            <div className="lg:col-span-2">
              <Link to="/" className="font-headline text-2xl font-bold text-primary-foreground mb-4 block">
              <img 
                src="/logo.jpeg" alt="logo" 
                className="h-10 w-auto"
              />
              </Link>
              <p className="text-sm font-body opacity-80 mb-4">
                বাংলাদেশের সবচেয়ে বিশ্বস্ত সংবাদ মাধ্যম। আমরা সত্য ও নিরপেক্ষ সংবাদ পরিবেশনে প্রতিশ্রুতিবদ্ধ। 
                দেশ-বিদেশের সর্বশেষ খবর, বিশ্লেষণ এবং মতামত পেতে আমাদের সাথে থাকুন।
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm opacity-80 mb-4">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  ঢাকা, বাংলাদেশ
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +880-2-1234567
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@dainikshongbad.com
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-headline font-bold text-primary-foreground mb-4">
                বিভাগসমূহ
              </h3>
              <ul className="space-y-2">
                {footerCategories.map((cat) => (
                  <li key={cat.slug}>
                    <Link 
                      to={`/category/${cat.slug}`} 
                      className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-headline font-bold text-primary-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.url} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-headline font-bold text-primary-foreground">নিউজলেটার সাবস্ক্রাইব করুন</h4>
                <p className="text-sm opacity-60">সর্বশেষ সংবাদ সরাসরি আপনার ইমেইলে পান</p>
              </div>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল"
                  className="px-4 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary text-sm w-64"
                />
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded font-headline font-semibold text-sm hover:bg-primary/90 transition-colors">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Ad */}
        <div className="border-t border-primary-foreground/10 py-4 flex justify-center">
          <AdBanner width="728px" height="90px" label="বটম বিজ্ঞাপন" />
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 py-4">
          <div className="container mx-auto text-center text-sm opacity-60">
            {/* <p>© ২০২৬ দৈনিক সংবাদ। সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="mt-1">সম্পাদক: মোহাম্মদ আলী</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
