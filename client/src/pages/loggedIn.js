import Head from "next/head";
import { useEffect, useState } from "react";
import AdvBanner from "./AdvBanner";
import axios from 'axios';


export default function loggedIn() {

  const [isMetamaskConnected, setIsMetamaskConnected] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [niche, setNiche] = useState(["Life", "Everything"]);
  var customSearchValue;
  var checkRyzen = false;
  var i =0;
  if(searchValue === 'Ryzen'){
    checkRyzen = true;
  }

  var appleLogoUrl =
    "https://media.idownloadblog.com/wp-content/uploads/2019/02/Apple-logo-white-glowing-black-background-full-e1550092333612.png";
  var advUrls = [
    "https://content.hostgator.com/img/ads_logo.png",
    "https://www.saregama.com/blog/wp-content/uploads/2021/04/Yoga-And-Meditation-To-Stay-Mentally.jpg",
    "https://visit.bodleian.ox.ac.uk/sites/default/files/styles/listing_landscape_image/public/bodwhatson/images/media/1920x520artofadvertising2.jpg?itok=3JLvi5IB",
    "https://static.toiimg.com/thumb/msid-74593097,imgsize-133195,width-800,height-600,resizemode-75/74593097.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgg31Tct3USXBhNabDfLsrrIGn3haU0pRChRtCuWMcQ&usqp=CAU&ec=48600112",
    "https://cdn.ceoworld.biz/wp-content/uploads/2021/03/wealthy-photographer.jpg",
    "https://i.ytimg.com/vi/ejNIow5DPUM/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFAoTRCHLfhXMhj7Tyn0rQJCXd_Iq9_x9l2n06zc_JYh55JaBS8YeRbWkH8T7XOuoyKYgFo93CPw&usqp=CAU&ec=48600112",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7T3PMBtvQpGrZO0DqSzlNPRKFiXHNTdZ_PWIV_-Vbug&usqp=CAU&ec=48600112",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iCGlOYq2ff6I-sC6uAWxy8LFbXU9R_jtXoT2X_ZcTQ&usqp=CAU&ec=48600112",
    "https://thumbs.dreamstime.com/b/music-banner-mobile-smartphone-screen-music-application-sound-headphones-audio-voice-radio-beats-black-music-banner-221042724.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/007/286/713/small/afro-girl-enjoying-music-wearing-sunglasses-and-headphone-banner-vector.jpg",
    "https://media.idownloadblog.com/wp-content/uploads/2019/02/Apple-logo-white-glowing-black-background-full-e1550092333612.png",
  ];
  var nicheWeights = {
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
  };
  var imageUrl =
    "https://thumbs.dreamstime.com/b/music-banner-mobile-smartphone-screen-music-application-sound-headphones-audio-voice-radio-beats-black-music-banner-221042724.jpg";

  function selectRandomImageUrl() {
    return advUrls[Math.floor(Math.random() * advUrls.length)];
  }

  // define useEffect
  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    imageUrl = advUrls[Math.floor(Math.random() * advUrls.length)];
  }, [imageUrl]);

  const getUserData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    
    try {
      
      const data = await axios.get("http://localhost:5000/api/getUser", {
        params: {
          account: "0x56521AaC3E2a69d09965EF0c078C4eAE6b39F35B",
        },
      });
      console.log(data);
      nicheWeights = data.data;
      console.log(data);

    } catch (error) {
    console.log(error);
  }
  };

  const updateUserNicheWeights = async () => {
    if (niche.length > 0) {
      niche.forEach((element) => {
        nicheWeights[element] += 1;
      });
    }

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    try {
      const data = await axios.post("http://localhost:5000/api/updateUser", {
        account: "0x56521AaC3E2a69d09965EF0c078C4eAE6b39F35B",
        data: nicheWeights,
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install MetaMask to connect");
    }
  };
  const handleSearchInput = (event) => {
    setSearchValue(event);
  };
  const getNiche = async (e) => {
    i+=1;
    
    e.preventDefault();
    imageUrl = advUrls[Math.floor(Math.random() * advUrls.length)];
    
    console.log(niche);
    console.log(`Calling OpenAI... ${searchValue}`);
    try {
      // axios POST request to "/api/generate" with body: {json.stringify(searchValue)}
      // const data = await axios.post("/api/generate", {
      //   body: searchValue
      // })
      // log in the console the type of searchValue

      console.log(typeof JSON.stringify(searchValue));

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        searchValue: JSON.stringify(searchValue)
      });
      const reply = await response.json();
      console.log("OpenAI replied...", data);
    } catch (error) {
      console.log(error);
    }

    updateUserNicheWeights();
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setIsMetamaskConnected(true);
    } else {
      alert("Connect to metamask");
    }
  }, []);
  return (
    <>
      {!isMetamaskConnected && (
        <button
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          onClick={connectMetamask}
        >
          <svg
            className="mr-2 -ml-1 w-6 h-5"
            viewBox="0 0 2405 2501"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_1512_1323)">
              {" "}
              <path
                d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z"
                fill="#E2761B"
                stroke="#E2761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z"
                fill="#E2761B"
                stroke="#E2761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z"
                fill="#E2761B"
                stroke="#E2761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z"
                fill="#E4751F"
                stroke="#E4751F"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z"
                fill="#233447"
                stroke="#233447"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z"
                fill="#D7C1B3"
                stroke="#D7C1B3"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z"
                fill="#E4761B"
                stroke="#E4761B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z"
                fill="#D7C1B3"
                stroke="#D7C1B3"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z"
                fill="#CD6116"
                stroke="#CD6116"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z"
                fill="#E4751F"
                stroke="#E4751F"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z"
                fill="#233447"
                stroke="#233447"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z"
                fill="#763D16"
                stroke="#763D16"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z"
                fill="#E4751F"
                stroke="#E4751F"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z"
                fill="#E4751F"
                stroke="#E4751F"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z"
                fill="#F6851B"
                stroke="#F6851B"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z"
                fill="#161616"
                stroke="#161616"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z"
                fill="#161616"
                stroke="#161616"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z"
                fill="#161616"
                stroke="#161616"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z"
                fill="#161616"
                stroke="#161616"
                strokeWidth="5.94955"
              ></path>{" "}
              <path
                d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z"
                fill="#161616"
                stroke="#161616"
                strokeWidth="5.94955"
              ></path>{" "}
            </g>{" "}
            <defs>
              {" "}
              <clipPath id="clip0_1512_1323">
                {" "}
                <rect
                  width="2404"
                  height="2500"
                  fill="white"
                  transform="translate(0.519043 0.132812)"
                ></rect>{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
          Connect with MetaMask
        </button>
      )}
      {isMetamaskConnected && (
        <>
          <Head>
            <title>🥷Safe browsing</title>
          </Head>
          <div>
            <div className="min-w-screen min-h-screen bg-gray-800 flex px-5 py-5">
              <div
                className="w-full rounded-xl bg-slate-900 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-8xl"
                x-data="app()"
                x-init="generatePassword()"
              >
                <div className="min-h-screen bg-gray-100 flex flex-col ">
                  <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                    <div className="overflow-hidden z-0 rounded-full relative p-3">
                      <form className="relative flex z-50 bg-slate-900 rounded-full">
                        <input
                          type="text"
                          placeholder="enter your search here"
                          className="rounded-full flex-1 px-6 py-4 bg-slate-900 text-white focus:outline-none"
                          onChange={(e) => handleSearchInput(e.target.value)}
                        />
                        {searchValue && (
                          <button
                            className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                            onClick={(e) => {
                              getNiche(e);
                            }}
                          >
                            Search
                          </button>
                        )}
                      </form>
                    </div>
                    {searchValue === "Ryzen" && (
                      <AdvBanner imageUrl={appleLogoUrl} />
                    )}
                    <AdvBanner imageUrl={selectRandomImageUrl()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
