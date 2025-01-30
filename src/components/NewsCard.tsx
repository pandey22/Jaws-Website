import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, image, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-blue-600 hover:text-orange-700 font-medium transition-colors duration-200" onClick={() => window.open("https://www.instagram.com/j.a.w.s_jharkhand/", "_blank")} >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;