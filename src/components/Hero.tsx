import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-white to-secondary/20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 text-center py-20">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">나만의 힐링 콘텐츠를 만들어보세요</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight text-foreground">
            마음챙김 영상을<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">나만의 콘텐츠로</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            20-30대 여성을 위한 따뜻한 명상 플랫폼<br />
            <span className="font-display text-2xl">마음이</span>와 함께 시작하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center">
              지금 시작하기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-foreground rounded-full font-medium text-lg border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              자세히 알아보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { label: "나만의 명상 루틴", icon: "🧘‍♀️" },
              { label: "따뜻한 가이드", icon: "💝" },
              { label: "일상 속 힐링", icon: "🌸" },
            ].map((stat, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-lg font-medium text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
