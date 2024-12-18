export interface User {
    id: string;
    name: string;
    avatar: string;
    role: string;
    bio: string;
  }
  
  export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    description: string;
  }
  
  export interface Course {
    id: string;
    title: string;
    instructor: string;
    duration: string;
    level: string;
    thumbnail: string;
  }
  
  export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    image: string;
  }