export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on the blog information provided.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche topic, and provide a reason in a Rich text editor file.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that generates blog content based on the information provided.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4853/4853349.png',
        aiPrompt: 'Generate Blog content based on the topic and outline provided.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topics based on the information provided.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11858/11858216.png',
        aiPrompt: 'Give me information in 5-6 bullet points according to your need and provide a reason in a Rich text editor file.',
        slug: 'generate-blog-ideas',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter topic outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube SEO Titles',
        desc: 'An AI tool that generates YouTube titles based on the video information provided.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
        aiPrompt: 'Give me the best SEO optimized high-ranking 5 titles related to my video topic.',
        slug: 'generate-youtube-title',
        form: [
            {
                label: 'Enter your YouTube video topic keyword',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter YouTube description outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'An AI tool that generates YouTube descriptions based on the video information provided.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/2522/2522673.png',
        aiPrompt: 'Give me the best optimized high-ranking 5 descriptions related to my video topic.',
        slug: 'generate-youtube-description',
        form: [
            {
                label: 'Enter your YouTube video topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Plagiarism Remover',
        desc: 'Use this AI tool to remove plagiarism and rewrite content without any grammar mistakes.',
        category: 'Rewriting Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/17575/17575968.png',
        aiPrompt: 'Rewrite the given article without any plagiarism in a Rich text editor file.',
        slug: 'generate-plagiarism-free-articles',
        form: [
            {
                label: 'Provide your article/blog post or any other content',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Interview Question Generator',
        desc: 'Generates customized interview questions based on job role, industry, and experience level.',
        category: 'Career Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        slug: 'interview-question-generator',
        aiPrompt: 'Create a list of interview questions tailored for a [job role] in the [industry], focusing on [experience level] candidates. Include both technical and behavioral questions.',
        form: [
            {
                label: 'Job Role',
                field: 'input',
                name: 'jobRole',
                required: true
            },
            {
                label: 'Industry',
                field: 'dropdown',
                name: 'industry',
                options: ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Education'],
                required: true
            },
            {
                label: 'Experience Level',
                field: 'dropdown',
                name: 'experienceLevel',
                options: ['Entry-Level', 'Mid-Level', 'Senior-Level'],
                required: true
            }
        ]
    },
    {
        name: 'Code Snippet Generator',
        desc: 'Generates code snippets or functions based on descriptions, supporting multiple programming languages.',
        category: 'Development Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1260/1260775.png',
        slug: 'code-snippet-generator',
        aiPrompt: 'Generate a [language] function that [description]. Ensure the code is optimized and includes comments explaining each step.',
        form: [
            {
                label: 'Programming Language',
                field: 'dropdown',
                name: 'language',
                options: ['Python', 'JavaScript', 'Java', 'C#', 'PHP', 'Ruby', 'Go'],
                required: true
            },
            {
                label: 'Function Description',
                field: 'textarea',
                name: 'functionDescription',
                placeholder: "e.g., 'Sort an array of integers in ascending order using quicksort algorithm.'",
                required: true
            },
            {
                label: 'Additional Requirements',
                field: 'textarea',
                name: 'additionalRequirements',
                required: false
            }
        ]
    },
    {
        name: 'Job Application Cover Letter Generator',
        desc: 'Generates professional and tailored cover letters based on job description and applicant\'s experience.',
        category: 'Career Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        slug: 'cover-letter-generator',
        aiPrompt: 'Write a professional cover letter for the following job description, highlighting the applicant\'s relevant experience and skills.',
        form: [
            {
                label: 'Applicant\'s Name',
                field: 'input',
                name: 'applicantName',
                required: true
            },
            {
                label: 'Position Applying For',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Company Name',
                field: 'input',
                name: 'companyName',
                required: true
            },
            {
                label: 'Job Description/Requirements',
                field: 'textarea',
                name: 'jobDescription',
                required: true
            },
            {
                label: 'Relevant Experience and Skills',
                field: 'textarea',
                name: 'applicantExperience',
                required: true
            }
        ]
    },
    {
        name: 'Language Translator and Tone Adjuster',
        desc: 'Translates text into multiple languages while adjusting the tone to be formal, informal, or professional as needed.',
        category: 'Language Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/2907/2907251.png',
        slug: 'multilingual-translator-tone-adjuster',
        aiPrompt: 'Translate the following text into [selected languages], ensuring the tone is [selected tone]. Provide accurate and context-aware translations.',
        form: [
            {
                label: 'Choose Target Languages',
                field: 'dropdown',
                name: 'targetLanguages',
                options: ['English','Hindi', 'Bengali', 'Odiya', 'Spanish', 'French', 'German', 'Chinese', 'Arabic'],
                required: true
            },
            {
                label: 'Select Desired Tone',
                field: 'dropdown',
                name: 'tone',
                options: ['Formal', 'Informal', 'Professional', 'Friendly'],
                required: true
            },
            {
                label: 'Enter Text to Translate',
                field: 'textarea',
                name: 'inputText',
                required: true
            }
        ]
    }
];
