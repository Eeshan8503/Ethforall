import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `i will give you a list of preferences ( they are a set of niches) and along with it i will give you a string. I want you to analyse the string and return me a list of niches that it falls under. The response needs to be only a list of niches and not a single word more. The list can be of minimum 1 items and maximum of 10 length:

Preference list:
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
    "Cryptocurrency",
    "Psychology",
    "Money",
    "Business",
    "Python",
    "Health",
    "Science",
    "Mental Health",
    "Life",
    "Software Development",
    "Startup",
    "Design",
    "Java Script",
    "Artificial Intelligence",
    "Culture",
    "Software Engineering",
    "Blockchain",
    "Coding",
    "Entrepreneurship",
    "React",
    "UX",
    "Education",
    "History",
    "Humor",
    "Web Development",
    "Work",
    "Lifestyle",
    "Society",
    "Deep Learning",
    "Marketing",
    "Books",
    "Nft",
    "Social Media",
    "Leadership",
    "Android",
    "Apple",
    "Women",
    "Mindfulness",
    "Sexuality",
    "Fitness",
    "AWS",
    "Flutter",
    "UX Design",
    "Spirituality",
    "Creativity",
    "Nodejs",
    "UI",
    "Defi",
    "This Happened To Me",
    "Philosophy",
    "NLP",
    "Economics",
    "World",
    "Dev Ops",
    "Ethereum",
    "Product Management",
    "Data Visualization",
    "Feminism",
    "Equality",
    "Freelancing",
    "Climate Change",
    "Bitcoin",
    "OS",
    "Future",
    "Cybersecurity",
    "Nonfiction",
    "True Crime",
    "Web 3",
    "Java",
    "Religion",
    "Art",
    "Family",
    "Fiction",
    "Kubernetes",
    "Parenting",
    "Travel",
    "Venture Capital",
    "Poetry",
    "Food",
    "Typescript",
    "Language",
    "Gaming",
    "Space",
    "Sports",
    "Media",
    "Docker",
    "Race",
    "Math",
    "Photography",
    "Music",
    "Justice",
    "Data Engineering",
    "Film",
    "Angular"

Input String:
`;

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.searchValue}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.searchValue}`,
    temperature: 0.8,
    max_tokens: 100,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();
  console.log(basePromptOutput.text);

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
