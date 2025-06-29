import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-700">1. ระบบดิจิทัลแพลตฟอร์มวิเคราะห์ข้อมูลผู้ได้รับผลกระทบจากเหตุการณ์ความไม่สงบ จังหวัดปัตตานี</p>
      </div>
      <Footer />
    </main>
  );
}
