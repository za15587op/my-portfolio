import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center font-sans">
      <Navbar />
      <section className="flex flex-col items-center justify-center flex-1">
        <img
          src="/my-portfolio.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4 tracking-tight">พงษ์ศักดิ์ พิริยะยรรยง</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
          ผมชื่อนิว จบจากคณะวิทยาศาสตร์และนวัตกรรมดิจิทัล สาขาวิทยาการคอมพิวเตอร์ ในปี3 ผมและเพื่อนได้มีการรับงานพัฒนาเว็บไซต์จากอาจารย์  และในปี4 ผมได้ไปฝึกงาน ในตำแหน่ง Software Developer Trainee ทำให้ผมมีความสนใจในการเขียนโปรแกรม และอยากเป็น Full- Stack Developer
        </p>
        <a href="#projects" className="px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-700 transition">View My Work</a>
      </section>
      <section id="about" className="w-full max-w-2xl py-24 px-4">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">ผมชื่อนิว จบจากคณะวิทยาศาสตร์และนวัตกรรมดิจิทัล สาขาวิทยาการคอมพิวเตอร์ ในปี3 ผมและเพื่อนได้มีการรับงานพัฒนาเว็บไซต์จากอาจารย์  และในปี4 ผมได้ไปฝึกงาน ในตำแหน่ง Software Developer Trainee ทำให้ผมมีความสนใจในการเขียนโปรแกรม และอยากเป็น Full- Stack Developer</p>
      </section>
      <section id="projects" className="w-full max-w-2xl py-24 px-4">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <p className="text-gray-700">[Showcase your projects here]</p>
      </section>
      <section id="contact" className="w-full max-w-2xl py-24 px-4">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">[Add your contact details or a contact form here]</p>
      </section>
      <Footer />
    </main>
  );
}
