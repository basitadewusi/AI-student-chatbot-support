export type Category = {
    id: string;
    title: string;
    description: string;
    accent: string;
    sampleQuestions: string[];
};

export type FAQItem = {
    id: string;
    categoryId: string;
    question: string;
    answer: string;
    keywords: string[];
    related: string[];
    popularity: number;
};

export type ChatMessage = {
    id: string;
    role: "assistant" | "user";
    content: string;
    timestamp: string;
    suggestions?: string[];
};

// export type Testimonial = {
//   name: string;
//   role: string;
//   quote: string;
// };

// export type Insight = {
//   label: string;
//   value: string;
//   detail: string;
// };

export type SupportContact = {
    label: string;
    value: string;
    note: string;
};

