import { BookOpen, Users, Bike, Newspaper, MessageSquare, Image } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learning Center',
      description: 'Access expert-led courses and tutorials to advance your skills',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded professionals and expand your network',
    },
    {
      icon: Bike,
      title: 'Bike Sharing',
      description: 'Sustainable transportation solution for urban commuters',
    },
    {
      icon: Newspaper,
      title: 'Tech News',
      description: 'Stay updated with the latest trends and innovations',
    },
    {
      icon: MessageSquare,
      title: 'Real-time Chat',
      description: 'Communicate instantly with community members',
    },
    {
      icon: Image,
      title: 'Content Sharing',
      description: 'Share and discover inspiring content with the community',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600">
            Discover all the tools and features designed to help you grow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;