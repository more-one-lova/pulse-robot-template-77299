import React, { useState } from "react";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "환영합니다!",
      description: "소식을 받으실 이메일이 등록되었습니다.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white" id="newsletter">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
            <Mail className="w-12 h-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            마음이와 함께 시작하세요
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            새로운 콘텐츠와 명상 팁, 특별한 이벤트 소식을 가장 먼저 받아보세요.
            <br />지금 바로 마음이 커뮤니티에 참여하세요.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-primary font-medium rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              지금 시작하기
            </button>
          </form>
          <p className="text-sm text-white/70 mt-6">
            언제든지 구독을 취소하실 수 있습니다. 개인정보는 안전하게 보호됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
