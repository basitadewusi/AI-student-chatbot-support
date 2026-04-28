import { Category, FAQItem, SupportContact } from "../types";

export const adminPasscode = "CSC320-ADMIN";

export const categories: Category[] = [
    {
        id: "registration",
        title: "Course Registration",
        description: "Guidance on portal access, course approvals, add/drop windows, and semester planning.",
        accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
        sampleQuestions: [
            "How do I register my courses?",
            "What should I do if a course is full?",
            "Can I add or drop after submission?",
        ],
    },
    {
        id: "fees",
        title: "School Fees",
        description: "Answers about payments, receipts, penalties, and who to contact for issues.",
        accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
        sampleQuestions: [
            "How do I pay school fees?",
            "What happens if I pay late?",
            "How do I print my payment receipt?",
        ],
    },
    {
        id: "exams",
        title: "Exams & Results",
        description: "Exam cards, venue readiness, conduct rules, and result-checking support.",
        accent: "from-orange-500/20 via-amber-500/10 to-transparent",
        sampleQuestions: [
            "How do I print my exam card?",
            "When are results released?",
            "What are the exam misconduct rules?",
        ],
    },
    {
        id: "clearance",
        title: "Clearance & Records",
        description: "Departmental clearance, transcript requests, and academic record support.",
        accent: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
        sampleQuestions: [
            "What documents are required for clearance?",
            "How do I request a transcript?",
            "Who signs my departmental form?",
        ],
    },
    {
        id: "hostel",
        title: "Hostel & Welfare",
        description: "Accommodation, welfare reporting, emergency contacts, and welfare notices.",
        accent: "from-violet-500/20 via-purple-500/10 to-transparent",
        sampleQuestions: [
            "How do I apply for hostel space?",
            "Where do I report hostel issues?",
            "Can I request room reassignment?",
        ],
    },
    {
        id: "department",
        title: "Department Support",
        description: "Level adviser information, office hours, project guidance, and departmental notices.",
        accent: "from-rose-500/20 via-red-500/10 to-transparent",
        sampleQuestions: [
            "Who is the level adviser for 300 level?",
            "When is the HOD office open?",
            "How do I get project approval guidance?",
        ],
    },
];

export const faqs: FAQItem[] = [
    {
        id: "faq-001",
        categoryId: "registration",
        question: "How do I register my courses?",
        answer:
            "Log in to the student portal, select the active semester, choose your approved courses, submit, and print the confirmation page for your level adviser.",
        keywords: ["register", "course", "courses", "portal", "semester"],
        related: ["How do I fix a portal login problem?", "Can I add or drop a course later?"],
        popularity: 94,
    },
    {
        id: "faq-002",
        categoryId: "registration",
        question: "Can I add or drop a course later?",
        answer:
            "Yes. During the official add/drop window, return to the portal, update your selections, resubmit, and get approval if your department requires manual confirmation.",
        keywords: ["add", "drop", "course", "window", "change"],
        related: ["How do I register my courses?", "What should I do if a course is full?"],
        popularity: 81,
    },
    {
        id: "faq-003",
        categoryId: "registration",
        question: "What should I do if a course is full?",
        answer:
            "Contact your department office or level adviser immediately. Full-course overrides are usually handled by the department when the course is compulsory.",
        keywords: ["full", "course", "compulsory", "override"],
        related: ["Can I add or drop a course later?", "Who is the level adviser for 300 level?"],
        popularity: 73,
    },
    {
        id: "faq-004",
        categoryId: "registration",
        question: "How do I fix a portal login problem?",
        answer:
            "Use the password reset option first. If it fails, take your matric number to ICT support or the portal help desk with a valid ID card.",
        keywords: ["portal", "login", "password", "reset", "ict"],
        related: ["How do I register my courses?", "How do I pay school fees?"],
        popularity: 76,
    },
    {
        id: "faq-005",
        categoryId: "fees",
        question: "How do I pay school fees?",
        answer:
            "Generate your payment invoice on the portal, pay through the approved bank or online channel, then return to the portal to confirm and print your receipt.",
        keywords: ["fees", "pay", "payment", "invoice", "receipt"],
        related: ["How do I print my payment receipt?", "What happens if I pay late?"],
        popularity: 96,
    },
    {
        id: "faq-006",
        categoryId: "fees",
        question: "What happens if I pay late?",
        answer:
            "Late payment may attract penalties or block access to course registration and exams. Always confirm the current deadline from the bursary or portal notice board.",
        keywords: ["late", "payment", "deadline", "penalty"],
        related: ["How do I pay school fees?", "Can I sit for exams without full clearance?"],
        popularity: 68,
    },
    {
        id: "faq-007",
        categoryId: "fees",
        question: "How do I print my payment receipt?",
        answer:
            "After the payment reflects on the portal, open the payments section, select the transaction, and use the print receipt button.",
        keywords: ["receipt", "print", "payment", "transaction"],
        related: ["How do I pay school fees?", "What should I do if payment does not reflect?"],
        popularity: 71,
    },
    {
        id: "faq-008",
        categoryId: "fees",
        question: "What should I do if payment does not reflect?",
        answer:
            "Wait for the processing window shown on the portal, then take your teller or online payment reference to bursary or ICT support if it still does not appear.",
        keywords: ["payment", "reflect", "teller", "reference", "bursary"],
        related: ["How do I print my payment receipt?", "How do I fix a portal login problem?"],
        popularity: 66,
    },
    {
        id: "faq-009",
        categoryId: "exams",
        question: "How do I print my exam card?",
        answer:
            "Ensure fees and registration are complete, then visit the exam section on the portal and download the approved exam card before the examination week.",
        keywords: ["exam", "card", "print", "download"],
        related: ["Can I sit for exams without full clearance?", "What are the exam misconduct rules?"],
        popularity: 88,
    },
    {
        id: "faq-010",
        categoryId: "exams",
        question: "When are results released?",
        answer:
            "Results are usually published after senate or departmental approval. Students should monitor the portal and departmental notice channels for the official release date.",
        keywords: ["results", "release", "portal", "senate"],
        related: ["How do I report an incorrect result?", "How do I print my exam card?"],
        popularity: 84,
    },
    {
        id: "faq-011",
        categoryId: "exams",
        question: "How do I report an incorrect result?",
        answer:
            "File a result complaint through your department with your course code, grade details, and supporting assessment records within the complaint deadline.",
        keywords: ["incorrect", "result", "complaint", "grade", "course code"],
        related: ["When are results released?", "Who is the level adviser for 300 level?"],
        popularity: 63,
    },
    {
        id: "faq-012",
        categoryId: "exams",
        question: "What are the exam misconduct rules?",
        answer:
            "Students must come with valid identification, avoid unauthorized materials, maintain silence, and follow all invigilator instructions. Misconduct can lead to disciplinary action.",
        keywords: ["misconduct", "rules", "exam", "unauthorized"],
        related: ["How do I print my exam card?", "Can I sit for exams without full clearance?"],
        popularity: 72,
    },
    {
        id: "faq-013",
        categoryId: "exams",
        question: "Can I sit for exams without full clearance?",
        answer:
            "Normally no. Most schools require fee clearance and approved registration before exam access is granted. Confirm with your faculty office for exceptions.",
        keywords: ["sit", "exam", "clearance", "fees"],
        related: ["How do I print my exam card?", "What happens if I pay late?"],
        popularity: 77,
    },
    {
        id: "faq-014",
        categoryId: "clearance",
        question: "What documents are required for clearance?",
        answer:
            "Typical clearance requires fee receipts, course registration printout, student ID, passport photographs, clearance form, and any department-specific evidence requested.",
        keywords: ["documents", "clearance", "receipt", "form", "id"],
        related: ["Who signs my departmental clearance form?", "Can I request a transcript online?"],
        popularity: 82,
    },
    {
        id: "faq-015",
        categoryId: "clearance",
        question: "Who signs my departmental clearance form?",
        answer:
            "It is usually signed by the level adviser, departmental officer, and head of department depending on the stage of your clearance process.",
        keywords: ["sign", "departmental", "clearance", "hod", "adviser"],
        related: ["What documents are required for clearance?", "Who is the level adviser for 300 level?"],
        popularity: 61,
    },
    {
        id: "faq-016",
        categoryId: "clearance",
        question: "Can I request a transcript online?",
        answer:
            "If your school provides an online transcript request service, complete the request form and payment process there. Otherwise, visit the academic records unit.",
        keywords: ["transcript", "online", "records", "request"],
        related: ["What documents are required for clearance?", "What should I bring for records verification?"],
        popularity: 58,
    },
    {
        id: "faq-017",
        categoryId: "clearance",
        question: "What should I bring for records verification?",
        answer:
            "Bring your student ID, registration printouts, payment receipts, and any previous correspondence relevant to the record issue you want verified.",
        keywords: ["records", "verification", "id", "receipts", "printout"],
        related: ["Can I request a transcript online?", "How do I report an incorrect result?"],
        popularity: 49,
    },
    {
        id: "faq-018",
        categoryId: "hostel",
        question: "How do I apply for hostel space?",
        answer:
            "Log in to the accommodation portal when hostel applications open, choose available halls, complete payment if required, and print your allocation evidence.",
        keywords: ["hostel", "apply", "space", "hall", "accommodation"],
        related: ["Can I request room reassignment?", "Where do I report hostel issues?"],
        popularity: 80,
    },
    {
        id: "faq-019",
        categoryId: "hostel",
        question: "Where do I report hostel issues?",
        answer:
            "Report urgent welfare or facility issues to the hall administration, student affairs unit, or hostel maintenance contact depending on the problem category.",
        keywords: ["hostel", "report", "issues", "welfare", "maintenance"],
        related: ["How do I apply for hostel space?", "Can I request room reassignment?"],
        popularity: 62,
    },
    {
        id: "faq-020",
        categoryId: "hostel",
        question: "Can I request room reassignment?",
        answer:
            "Yes, but approval depends on available space and your reason. Submit a written request to the hostel administrator or student affairs office.",
        keywords: ["room", "reassignment", "hostel", "request"],
        related: ["How do I apply for hostel space?", "Where do I report hostel issues?"],
        popularity: 57,
    },
    {
        id: "faq-021",
        categoryId: "hostel",
        question: "What items are not allowed in the hostel?",
        answer:
            "Common restricted items include electric cookers, unauthorized heating devices, weapons, and items listed in the hostel handbook. Always check the latest hall rules.",
        keywords: ["items", "allowed", "hostel", "rules", "handbook"],
        related: ["Where do I report hostel issues?", "Can I request room reassignment?"],
        popularity: 41,
    },
    {
        id: "faq-022",
        categoryId: "department",
        question: "Who is the level adviser for 300 level?",
        answer:
            "This varies by department and session. Your department board or official WhatsApp notice is the fastest place to confirm the current adviser assigned to your level.",
        keywords: ["level adviser", "300 level", "adviser", "department"],
        related: ["When is the HOD office open?", "Who signs my departmental clearance form?"],
        popularity: 79,
    },
    {
        id: "faq-023",
        categoryId: "department",
        question: "When is the HOD office open?",
        answer:
            "The HOD office is usually open during working hours on weekdays, but meeting schedules may affect availability. It is best to check with the department secretary first.",
        keywords: ["hod", "office", "open", "hours", "secretary"],
        related: ["Who is the level adviser for 300 level?", "How do I get project approval guidance?"],
        popularity: 64,
    },
    {
        id: "faq-024",
        categoryId: "department",
        question: "How do I get project approval guidance?",
        answer:
            "Prepare your topic idea, problem statement, and objectives, then meet your project coordinator or assigned supervisor for review and approval instructions.",
        keywords: ["project", "approval", "guidance", "supervisor", "topic"],
        related: ["Who is the level adviser for 300 level?", "What documents are required for clearance?"],
        popularity: 69,
    },
    {
        id: "faq-025",
        categoryId: "department",
        question: "Where can I see departmental announcements?",
        answer:
            "Check your department notice board, official student group, portal dashboard, and any communication channels recognized by your department.",
        keywords: ["announcements", "notice board", "department", "group"],
        related: ["When is the HOD office open?", "When are results released?"],
        popularity: 53,
    },
];

// export const insights: Insight[] = [
//     {
//         label: "Average response time",
//         value: "6 sec",
//         detail: "Students get guided answers instantly instead of waiting for office hours.",
//     },
//     {
//         label: "Knowledge base coverage",
//         value: "25 FAQs",
//         detail: "Seeded across registration, fees, exams, welfare, and departmental support.",
//     },
//     {
//         label: "Admin readiness",
//         value: "Live editable",
//         detail: "FAQ records can be created, updated, and removed from the admin dashboard.",
//     },
// ];

// export const testimonials: Testimonial[] = [
//     {
//         name: "Adaeze Paul",
//         role: "300L Computer Science Student",
//         quote:
//             "The guided prompts make this feel like a real campus help desk. It is exactly the kind of tool students would use before bothering lecturers.",
//     },
//     {
//         name: "Daniel Yusuf",
//         role: "Department Rep",
//         quote:
//             "The admin side is strong too. We can update answers without touching the code, which makes it realistic for a school support product.",
//     },
//     {
//         name: "Grace Afolabi",
//         role: "UI/UX Mentor",
//         quote:
//             "This is polished enough to demo confidently. The visual system and the student journey feel much more professional than a typical school project.",
//     },
// ];

export const supportContacts: SupportContact[] = [
    {
        label: "Department Office",
        value: "Mon - Fri, 9:00 AM - 4:00 PM",
        note: "Use this for level adviser and project coordination issues.",
    },
    {
        label: "Portal / ICT Help",
        value: "ictsupport@campus.edu",
        note: "Best for password resets, portal errors, and payment reflection issues.",
    },
    {
        label: "Student Affairs",
        value: "+234 800 000 0320",
        note: "Reach out for accommodation, welfare, or urgent student-support matters.",
    },
];

export const quickPrompts = [
    "How do I register my courses?",
    "How do I pay school fees?",
    "How do I print my exam card?",
    "What documents are required for clearance?",
    "Who is the level adviser for 300 level?",
    "How do I get project approval guidance?",
];

export const weeklyUsage = [
    { day: "Mon", chats: 24 },
    { day: "Tue", chats: 37 },
    { day: "Wed", chats: 31 },
    { day: "Thu", chats: 42 },
    { day: "Fri", chats: 35 },
    { day: "Sat", chats: 18 },
    { day: "Sun", chats: 12 },
];

export const topCategories = [
    { name: "Registration", value: 36 },
    { name: "Fees", value: 24 },
    { name: "Exams", value: 18 },
    { name: "Department", value: 12 },
    { name: "Hostel", value: 10 },
];

