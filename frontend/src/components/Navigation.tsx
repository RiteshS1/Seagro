import { Menu, Home, Users, Briefcase, BookOpen, Users2, Bike, Newspaper, MessageSquare, Image, CheckSquare } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Users, label: 'Profiles' },
    { icon: Briefcase, label: 'Jobs' },
    { icon: BookOpen, label: 'Learning' },
    { icon: Users2, label: 'Community' },
    { icon: Bike, label: 'Bike Sharing' },
    { icon: Newspaper, label: 'Tech News' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Image, label: 'Content' },
    { icon: CheckSquare, label: 'Tasks' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Menu className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">SeaGro</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;