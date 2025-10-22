import React from "react";
import { FileVideo, Sparkles, Heart, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileVideo,
      title: "영상 선택하기",
      description: "마음에 드는 마음챙김 영상을 선택하세요. 자연, 명상, 요가 등 다양한 테마를 제공합니다.",
      color: "from-primary to-primary/80"
    },
    {
      icon: Sparkles,
      title: "나만의 스타일로",
      description: "배경음악, 나레이션, 시각 효과를 자유롭게 조합하여 나만의 콘텐츠를 만들어보세요.",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: Heart,
      title: "일상에서 실천",
      description: "아침 루틴, 점심 휴식, 저녁 명상 등 언제든지 나만의 힐링 콘텐츠를 즐기세요.",
      color: "from-accent to-accent/80"
    },
    {
      icon: Share2,
      title: "공유하고 영감 얻기",
      description: "내가 만든 콘텐츠를 공유하고, 다른 사람들의 창작물에서 영감을 받아보세요.",
      color: "from-primary/70 to-secondary/70"
    }
  ];

  return (
    <section className="py-20 bg-warm-gradient" id="how-it-works">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">간단한 4단계</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">나만의 콘텐츠 만드는 법</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            누구나 쉽게 따라할 수 있는 간단한 과정으로<br />특별한 힐링 콘텐츠를 완성하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="group animate-on-scroll opacity-0 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-primary/30">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <button className="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">지금 바로 시작하기</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
