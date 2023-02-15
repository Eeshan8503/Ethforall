import React from "react";

function AboutSection() {
  return (
    <div className="bg-gray-100 rounded-lg px-8 py-6">
      <p className="text-lg leading-7 font-medium mb-6">
        Welcome to Enigma, the{" "}
        <strong className="font-bold">next generation</strong> of personalized
        ads and recommendations!
      </p>
      <p className="text-lg leading-7 mb-6">
        At Enigma, we believe that <em className="italic">privacy</em> is a
        fundamental human right. That's why we've built a platform that uses{" "}
        <strong className="font-bold">blockchain technology</strong> to maintain
        the privacy of our users. With Enigma, you don't have to worry about
        your personal data being sold or shared with third parties. Instead, you
        can enjoy a{" "}
        <strong className="font-bold">personalized browsing experience</strong>{" "}
        without sacrificing your privacy.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg leading-7 mb-1">
          When you use Enigma, you are denoted by a{" "}
          <em className="italic">hash</em> of your metamask public key. This
          means that your identity is protected and your browsing activity is{" "}
          <strong className="font-bold">anonymous</strong>.
        </li>
        <li className="text-lg leading-7">
          Based on your browsing activity, Enigma generates{" "}
          <strong className="font-bold">
            personalized ads and recommendations
          </strong>{" "}
          just for you. This means you'll see ads and content that are relevant
          to your interests, without compromising your privacy.
        </li>
      </ul>
      <p className="text-lg leading-7">
        Enigma is the perfect solution for anyone who wants a personalized
        browsing experience without sacrificing their privacy. Whether you're a{" "}
        <em className="italic">casual internet user</em> or a{" "}
        <em className="italic">seasoned pro</em>, Enigma has everything you need
        to take your browsing experience to the next level.
      </p>
      <p className="text-lg leading-7">
        So why wait? Try Enigma today and see the{" "}
        <strong className="font-bold">difference</strong> for yourself!
      </p>
    </div>
  );
}

export default AboutSection;
