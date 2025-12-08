import AgreementPage from "@/components/AgreementPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black">
      <Header />
      <AgreementPage />
      <Footer />
    </div>
  );
}
