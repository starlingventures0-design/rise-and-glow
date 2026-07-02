export interface User {
  id: string;
  firstName: string;
  goals: string[];
  joinedAt: string;
  plantPoints: number;
  points: number;
  tasksCompletedToday: string[];
  lastTaskDate: string;
  screenshot?: string;
  avatarUrl?: string;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  category: string;
  createdAt: string;
  likes: number;
  likedBy?: string[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  room: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  category: string;
}
