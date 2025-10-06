import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Saarth Shah
      </h1>
      <p className="mb-8 leading-relaxed">
        I’m the co-founder and CEO of  
        <a href="https://www.sixtyfour.ai" className="text-orange-400"> Sixtyfour (YC X25)</a>, where we’re developing AI agents designed to analyze, enrich, and act on people and company data.
      </p>
      <p className="mb-8 leading-relaxed">
        I graduated from UC Berkeley with a degree in Data Science after transferring from UCSD’s Halıcıoğlu Data Science Institute. I’ve been building things since I was 10, and one of my favorite early projects was a  
        <a href="https://youtu.be/e92QsK5Eidc" className="text-orange-400"> multiplayer Call of Duty clone</a> I built in high school.
      </p>
      <p className="mb-8 leading-relaxed">
        During college, I worked on a lot of cool stuff. At Stanford’s Snyder Lab, I helped researchers make sense of wearable health data. At the San Diego Supercomputer Center, I built models to analyze 911 call logs and social media, helping predict major school events like shootings.
      </p>
      <p className="mb-8 leading-relaxed">
        I also launched  
        <a href="https://youtu.be/_qfl7btaUGI" className="text-orange-400"> Socale</a>, a college social network at UCSD that took off—1,000 users, 30,000 sessions, and 13,000 messages in just two quarters. We ultimately shut it down because retention in consumer social is hard.
      </p>
      <p className="mb-8 leading-relaxed">
        In summer 2023, I joined Deepgram (YC W16), where I built full-stack tools around live event transcription and sentiment analysis around Youtube videos. After that, my friend Eric and I built a Shopify chatbot at Internalize that combined LLMs with recommendation engines—we sold the company in fall 2023.
      </p>
      <p className="mb-8 leading-relaxed">
        In 2024, I also started  
        <a href="https://youtu.be/HSOmKuLyPHs" className="text-orange-400"> Dart</a>, where we built one of the first fully conversational voice AI agents capable of automating customer support with near-human accuracy.
      </p>
      <p className="mb-8 leading-relaxed">
        In summer 2024, I worked at Whatnot (YC W20), where I built their search spelling correction system, improving how buyers and sellers find products. I also returned full-time in 2025 for about two months and then left after getting into YCombinator.
      </p>
      <p className="mb-8 leading-relaxed">
        Now at <strong>Sixtyfour</strong>, we’re all-in on an AI orchestration engine for teams to reach more prospects, close deals faster, hire and market better, and stand out from the competition.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}