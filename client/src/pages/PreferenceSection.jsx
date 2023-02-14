import React, { useState } from "react";

function PreferenceSection() {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicSelection = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const topics = [
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
    "Angular",
  ];

  return (
    <>
      <div className="flex flex-col">
        <h2 className="mb-20">Select topics of interest:</h2>
        <div className="flex flex-wrap">
          {topics.map((topic) => (
            <button
              key={topic}
              style={{
                margin: "5px",
                padding: "10px 10px 10px 30px",
                borderRadius: "20px",
                backgroundColor: selectedTopics.includes(topic)
                  ? "blue"
                  : "white",
                color: selectedTopics.includes(topic) ? "white" : "black",
                border: "2px solid blue",
                position: "relative",
              }}
              onClick={() => handleTopicSelection(topic)}
            >
              {topic}
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                {selectedTopics.includes(topic) ? "✓ " : "+ "}
              </span>
            </button>
          ))}
        </div>
        <>
          <div
            className="flex items-center justify-center"
            onClick={() => console.log(selectedTopics)}
          >
            <div className="m-3">
              <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">Create Account!</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default PreferenceSection;
