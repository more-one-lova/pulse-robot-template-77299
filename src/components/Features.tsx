import React from "react";
import { Heart, Users, Palette, Video, Music, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "마음을 담은 콘텐츠",
      description: "전문가가 큐레이션한 마음챙김 영상으로 따뜻한 힐링을 경험하세요.",
    },
    {
      icon: Palette,
      title: "자유로운 커스터마이징",
      description: "나만의 스타일로 배경, 음악, 나레이션을 조합하여 특별한 콘텐츠를 만들어보세요.",
    },
    {
      icon: Video,
      title: "HD 고화질 영상",
      description: "눈을 편안하게 하는 아름다운 자연 풍경과 고요한 순간들을 고화질로 감상하세요.",
    },
    {
      icon: Music,
      title: "힐링 사운드",
      description: "전문 사운드 디자이너가 제작한 편안한 배경음악과 자연의 소리를 경험하세요.",
    },
    {
      icon: Users,
      title: "커뮤니티 공유",
      description: "같은 관심사를 가진 사람들과 콘텐츠를 공유하고 영감을 주고받으세요.",
    },
    {
      icon: Sparkles,
      title: "일상 속 루틴",
      description: "아침, 점심, 저녁 언제든지 나만의 명상 루틴을 만들고 실천하세요.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">특별한 기능들</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            마음이만의 특별함
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            당신의 마음을 위한 모든 것이 준비되어 있습니다.<br />
            나만의 힐링 콘텐츠로 일상에 평화를 더하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
