import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios';

function PreferenceSection() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [nicheWeights, setNicheWeights] = useState({
    Programming: 0,
    Data_Science: 0,
    Technology: 0,
    Self_Improvement: 0,
    Writing: 0,
    Relationships: 0,
    Machine_Learning: 0,
    Productivity: 0,
    Politics: 0,
    Cryptocurrency: 0,
    Psychology: 0,
    Money: 0,
    Business: 0,
    Python: 0,
    Health: 0,
    Science: 0,
    Mental_Health: 0,
    Life: 0,
    Software_Development: 0,
    Startup: 0,
    Design: 0,
    Java_Script: 0,
    Artificial_Intelligence: 0,
    Culture: 0,
    Software_Engineering: 0,
    Blockchain: 0,
    Coding: 0,
    Entrepreneurship: 0,
    React: 0,
    UX: 0,
    Education: 0,
    History: 0,
    Humor: 0,
    Web_Development: 0,
    Work: 0,
    Lifestyle: 0,
    Society: 0,
    Deep_Learning: 0,
    Marketing: 0,
    Books: 0,
    Nft: 0,
    Social_Media: 0,
    Leadership: 0,
    Android: 0,
    Apple: 0,
    Women: 0,
    Mindfulness: 0,
    Sexuality: 0,
    Fitness: 0,
    AWS: 0,
    Flutter: 0,
    UX_Design: 0,
    Spirituality: 0,
    Creativity: 0,
    Nodejs: 0,
    UI: 0,
    Defi: 0,
    This_Happened_To_Me: 0,
    Philosophy: 0,
    NLP: 0,
    Economics: 0,
    World: 0,
    Dev_Ops: 0,
    Ethereum: 0,
    Product_Management: 0,
    Data_Visualization: 0,
    Feminism: 0,
    Equality: 0,
    Freelancing: 0,
    Climate_Change: 0,
    Bitcoin: 0,
    OS: 0,
    Future: 0,
    Cybersecurity: 0,
    Nonfiction: 0,
    True_Crime: 0,
    Web_3: 0,
    Java: 0,
    Religion: 0,
    Art: 0,
    Family: 0,
    Fiction: 0,
    Kubernetes: 0,
    Parenting: 0,
    Travel: 0,
    Venture_Capital: 0,
    Poetry: 0,
    Food: 0,
    Typescript: 0,
    Language: 0,
    Gaming: 0,
    Space: 0,
    Sports: 0,
    Media: 0,
    Docker: 0,
    Race: 0,
    Math: 0,
    Photography: 0,
    Music: 0,
    Justice: 0,
    Data_Engineering: 0,
    Film: 0,
    Angular: 0,
  });

  const updateNiches = () => {
    // traverse through selectedTopics and increment nicheWeights[selectedTopic]+1
    selectedTopics.forEach((topic) => {
      nicheWeights[topic] +=1;
    }
    );
    console.log(nicheWeights);
  };

  const userInit = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please install MetaMask to connect");
    }

    updateNiches();

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    try {
      const data = await axios.post("http://localhost:5000/api/initUser", {
        account: "0x56521AaC3E2a69d09965EF0c078C4eAE6b39F35B",
        data: nicheWeights,
      });
    } catch (error) {
      console.log("error");
    }
    window.location.href = "http://localhost:3000/loggedIn";
  };

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
    <div className="bg-gray-100 rounded-lg px-8 py-6">
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
          <div className="flex items-center justify-center">
            {selectedTopics.length > 0 && (
              <div className="m-3">
                <button
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  onClick={userInit}
                >
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
            )}
          </div>
        </>
      </div>
    </div>
  );
}

export default PreferenceSection;
