import React, { useState } from 'react';
import { ReadOutlined, SmileOutlined, HeartOutlined } from '@ant-design/icons';
import { ConfigProvider, Tabs } from 'antd';
import './AboutSection1.css';

const { TabPane } = Tabs;

const App = () => {
  const [activeKey, setActiveKey] = useState('1');

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Tabs className="customized-tabs" defaultActiveKey="1" onChange={handleTabChange}>
        <TabPane className='text-mossgreen'
          tab={
            <span className={activeKey === '1' ? 'tab-icon-active' : 'tab-icon'}>
              <SmileOutlined />
              <label className='px-2'>Introduction</label> 
            </span>
          }
          key="1"
        >
          From a young age, I've always been captivated by the world of games and websites. The thrill of adventure in games, the strategic challenges, and the immersive stories have fascinated me, fueling my imagination and creativity. At the same time, the elegance and functionality of well-designed websites have inspired me, showing me the power of technology in connecting people and sharing information. As I grew older, this passion evolved into a dream to one day create my own games and websites, worlds where users could experience the same excitement and joy that I have felt. With a strong foundation in computer science and design, and a rich background in various programming languages and frameworks, I am eager to turn this dream into reality, bringing innovative and engaging digital experiences to life.
        </TabPane>
        <TabPane className='text-mossgreen'
          tab={
            <span className={activeKey === '2' ? 'tab-icon-active' : 'tab-icon'}>
              <ReadOutlined />
              <label className='px-2'>Education</label> 
            </span>
          }
          key="2"
        >
          I am currently pursuing a Bachelor of Engineering in Computer Science and Design at the Singapore University of Technology and Design (SUTD). My education has provided a comprehensive foundation in both theoretical and practical aspects of computer science and design, allowing me to develop a diverse set of technical skills and gain hands-on experience through various projects.
          <br/>
          <br/>
          During my time at SUTD, I have worked on several significant projects that have sharpened my technical abilities. For instance, I developed a full-stack Android application called LeftoverChef using Java and XML to reduce food wastage by suggesting recipes for leftover ingredients. This project involved implementing advanced photo analysis capabilities and ingredient recognition using YoloV5 and TensorFlow, and integrating OpenAI and Google Search APIs to generate recipe suggestions. The backend was powered by Firebase, ensuring real-time data storage and retrieval, and the development was managed with Git for version control and teamwork. This project earned an Honorable Mention and a $1,000 prize at the Singtel Information Systems and Programming Merit Award for innovative use of technology in combating food waste.
          <br/>
          <br/>
          These projects, along with my coursework, have equipped me with proficiency in programming languages such as Python, JavaScript, HTML, CSS, Ruby, Java, and C. I am also skilled in using databases like SQL and MongoDB, and frameworks such as Pandas, NumPy, Rails, ExpressJS, ReactJS, Bootstrap, and TailwindCSS. My experience with tools like Google Cloud, and Git has further enhanced my ability to tackle complex challenges in the tech industry.
        </TabPane>
        <TabPane className='text-mossgreen'
          tab={
            <span className={activeKey === '3' ? 'tab-icon-active' : 'tab-icon'}>
              <HeartOutlined />
              <label className='px-2'>Travel/Interests</label> 
            </span>
          }
          key="3"
        >
          Outside of my academic and professional pursuits, I am passionate about traveling and photography. I love exploring new places, particularly countries renowned for their scenic beauty such as Iceland, New Zealand, Switzerland, and Japan. Capturing the essence of these breathtaking landscapes through my camera lens is a hobby that brings me immense joy and satisfaction.
          <br/>
          <br/>
          Traveling allows me to immerse myself in different cultures, experience diverse environments, and witness the natural wonders of the world. My photography focuses on both the stunning sceneries and candid moments, including self-portraits that reflect my adventures. Whether it’s the dramatic volcanic landscapes of Iceland, the serene lakes and mountains of Switzerland, or the vibrant cities and tranquil temples of Japan, each destination provides unique opportunities for creative expression through photography.
        </TabPane>
      </Tabs>
    </>
  );
};

export default App;
