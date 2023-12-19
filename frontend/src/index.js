import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          student: 'Student',
          register:'Register',
          teacher:'Teacher',
          organization:'Organization',
          Bridging : "Bridging Gaps, Fostering Dreams: A Journey to Inclusive Education",
          platform : "This platform unites students, institutions, teachers, and government ministries,an Edu-ecosystem that empowers, informs, and transforms lives.",
          Login:'Login',
          Register:'New? Register Now!',
          Features:'Explore Our Features!',
          Empowering:'Empowering Students!! Inclusive Education is Here.Happy Learning!!',
          unlock:'Unlock your learning journey',
          accessible:'Accessible course materials',
          adapt:'Adaptive learning tools',
          service:'Support services',
          peer:'Peer support',
          huddle:'Decrease the Huddles and Overcome It!',
          Comprehensive:'Comprehensive Curriculum',
          professional:'Professional Development',
          Collaboration:'Collaboration and Advocacy',
          data:'Data and Reporting',
          jump:'Jump In ! To Train and help Our Special Kids',
          IEP:'Individualized Education Plans (IEPs)',
          assistive:'Assistive technology resources',
          tools:'Collaboration tools',
          Ministry:'Ministry',
For:'For the People!',

Schemes:'Schemes and Scholarship',

Certificates:'Certificates and Services',

Education:'Education and Employment Resources',

Awareness:'Awareness Campaigns',

Toll:'Toll -Free Help line numbers',

Loan :'Loan & Skill Guidance',

Aids:'Aids and assistive devices',

National:'National Institute Helpline',

Mental :'Mental Health, Special Education, Occupational therapy,Counseling,Speech and Physiotherapy',

Learn: 'Learn More About Our Work And Activities Here!',

Welcome: 'Welcome to our transformative platform dedicated to inclusive education.At the heart of our mission is the empowerment of special children with disabilities,offering a seamless registration process and access to mainstream education. We connect students with local education centers and enrich their learning experience through a gamified educational platform. Educational institutions benefit from proactive notifications,keeping them informed about potential enrollees and government schemes. For teachers,we provide not just job opportunities but a collaborative space to share resources and enhance their impact. Government ministries find a secure gateway to manage requests,upload schemes, and contribute to the collective advancement of inclusive education.Join us in building a future where every child, regardless of ability,has access to quality education and limitless possibilities',


Read:'Read more',

Unlock:'Unlock Learning!!',

Makes:'Makes learning easy by giving students personal profiles, real-time updates, and clear communication for parents. Its secure and lets everyone work together with shared resources, online meetings, and a helpful library. You can give feedback to make it better and ensure a complete learning experience for students and their families',

Let:'Lets Get Educated ! Enroll here',

Classroom:'Classroom Navigator',

Teachers:'Teachers play a crucial role in the holistic development of disabled individuals by fostering inclusive education, providing tailored support, and nurturing an environment that promotes their unique strengths. These professionals employ personalized strategies, create inclusive environments, and advocate for the unique needs of disabled learners. Through their guidance and encouragement, disabled individuals can overcome obstacles, gain confidence, and actively engage in society, promoting inclusivity and diversity',

Registers:'Register As a Teacher Now',

This:'This year, were on a mission to expand our horizons,and we need YOUR passion and skills to make it happen.Whether youre interested in recruiting staff to enhance our organization,lending a helping hand to support disabled kids in our community,establishing connections with other incredible organizations,or getting notified about the latest schemes and government requests we have a place for you!',

Enroll:'Enroll Your Edu-Center!',

        },
      },
      hi: {
        translation: {
          student: 'विद्यार्थी',
          register:'पंजीकरण करवाना',
          teacher:'संगठन',
          organization:'शिक्षकोंकी',
          Bridging : 'अंतरालों को पाटना, सपनों को बढ़ावा देना: समावेशी शिक्षा की यात्रा',
          platform : 'यह मंच छात्रों, संस्थानों, शिक्षकों और सरकारी मंत्रालयों को एकजुट करता है, एक शिक्षा-पारिस्थितिकी तंत्र जो जीवन को सशक्त बनाता है, सूचित करता है और बदलता है।',
          Login:"लॉग इन करें",
          Register:'नया? अभी पंजीकरण करें!',
          Features:'हमारी सुविधाओं का अन्वेषण करें!',
          Empowering:'छात्रों को सशक्त बनाना!! समावेशी शिक्षा यहाँ है। आनंदमय शिक्षा!!',
          unlock:'अपनी सीखने की यात्रा को अनलॉक करें',
          accessible:'सुलभ पाठ्यक्रम सामग्री',
          adapt:'अनुकूली शिक्षण उपकरण',
          service:'अनुकूली शिक्षण उपकरण',
          peer:'साथियों का समर्थन',
          huddle:'झंझट कम करें और उस पर काबू पाएं',
          Comprehensive:'व्यापक पाठ्यक्रम',
          professional:'व्यावसायिक विकास',
          Collaboration:'सहयोग और वकालत',
          data:'डेटा और रिपोर्टिंग',
          jump:'Jअंदर कूदना ! हमारे विशेष बच्चों को प्रशिक्षित करने और उनकी मदद करने के लिए',
          IEP:'व्यक्तिगत शिक्षा योजनाएँ (आईईपी)',
          assistive:'सहायक प्रौद्योगिकी संसाधन',
          tools:'सहयोग उपकरण',
          Ministry:'मंत्रालय',
          For :'लोगों के लिए!',
          Schemes:'योजनाएं एवं छात्रवृत्ति',
          Certificates:'प्रमाणपत्र और सेवाएँ',

Education:'शिक्षा और रोजगार संसाधन',

Awareness:'जागरूकता अभियान',

Toll:'टोल-फ्री हेल्प लाइन नंबर',

Loan :'ऋण एवं कौशल मार्गदर्शन',

Aids:'सहायता एवं सहायक उपकरण',

National:'राष्ट्रीय संस्थान हेल्पलाइन',

Mental :'मानसिक स्वास्थ्य, विशेष शिक्षा, व्यावसायिक चिकित्सा, परामर्श, भाषण और फिजियोथेरेपी',

Learn :'हमारे काम और गतिविधियों के बारे में यहां और जानें!',

Welcome: 'समावेशी शिक्षा के लिए समर्पित हमारे परिवर्तनकारी मंच में आपका स्वागत है। हमारे मिशन के केंद्र में विकलांग विशेष बच्चों का सशक्तिकरण, एक निर्बाध पंजीकरण प्रक्रिया और मुख्यधारा की शिक्षा तक पहुंच प्रदान करना है। हम छात्रों को स्थानीय शिक्षा केंद्रों से जोड़ते हैं और एक गेमिफाइड शैक्षिक मंच के माध्यम से उनके सीखने के अनुभव को समृद्ध करते हैं। शैक्षणिक संस्थानों को सक्रिय सूचनाओं से लाभ होता है, जिससे उन्हें संभावित नामांकित व्यक्तियों और सरकारी योजनाओं के बारे में जानकारी मिलती रहती है। शिक्षकों के लिए, हम न केवल नौकरी के अवसर प्रदान करते हैं बल्कि संसाधनों को साझा करने और उनके प्रभाव को बढ़ाने के लिए एक सहयोगी स्थान भी प्रदान करते हैं। सरकारी मंत्रालय अनुरोधों को प्रबंधित करने, योजनाएं अपलोड करने और समावेशी शिक्षा की सामूहिक प्रगति में योगदान करने के लिए एक सुरक्षित प्रवेश द्वार ढूंढते हैं। एक ऐसे भविष्य के निर्माण में हमारे साथ जुड़ें जहां हर बच्चा, क्षमता की परवाह किए बिना,गुणवत्तापूर्ण शिक्षा और असीमित संभावनाओं तक पहुंच है',

Read:'और पढ़ें',

Unlock:'सीखने को अनलॉक करें!!',

Makes:'छात्रों को व्यक्तिगत प्रोफ़ाइल, वास्तविक समय अपडेट और माता-पिता के लिए स्पष्ट संचार देकर सीखना आसान बनाता है। यह सुरक्षित है और सभी को साझा संसाधनों, ऑनलाइन मीटिंग और एक उपयोगी लाइब्रेरी के साथ मिलकर काम करने देता है। आप इसे बेहतर बनाने और छात्रों और उनके परिवारों के लिए संपूर्ण सीखने का अनुभव सुनिश्चित करने के लिए प्रतिक्रिया दे सकते हैं',

Let:'आइये शिक्षित बनें! यहां नामांकन करें',

Classroom:'कक्षा नेविगेटर',

Teachers :'शिक्षक समावेशी शिक्षा को बढ़ावा देने, अनुरूप सहायता प्रदान करने और उनकी अद्वितीय शक्तियों को बढ़ावा देने वाले वातावरण का पोषण करके विकलांग व्यक्तियों के समग्र विकास में महत्वपूर्ण भूमिका निभाते हैं। ये पेशेवर व्यक्तिगत रणनीतियाँ अपनाते हैं, समावेशी वातावरण बनाते हैं और विकलांग शिक्षार्थियों की विशिष्ट आवश्यकताओं की वकालत करते हैं। उनके मार्गदर्शन और प्रोत्साहन के माध्यम से, विकलांग व्यक्ति बाधाओं को दूर कर सकते हैं, आत्मविश्वास हासिल कर सकते हैं और समावेशिता और विविधता को बढ़ावा देते हुए समाज में सक्रिय रूप से शामिल हो सकते हैं।',

Registers:'अभी एक शिक्षक के रूप में पंजीकरण करें',

This:'इस वर्ष, हम अपने क्षितिज का विस्तार करने के मिशन पर हैं, और इसे पूरा करने के लिए हमें आपके जुनून और कौशल की आवश्यकता है। चाहे आप हमारे संगठन को बढ़ाने के लिए कर्मचारियों की भर्ती करने में रुचि रखते हों, हमारे समुदाय में विकलांग बच्चों की सहायता करने में मदद करने में रुचि रखते हों , अन्य अविश्वसनीय संगठनों के साथ संबंध स्थापित करना, या नवीनतम योजनाओं और सरकारी अनुरोधों के बारे में सूचित होना हमारे पास आपके लिए जगह है!',

Enroll:'अपने शिक्षा केंद्र में नामांकन करें!'

        },
      },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
