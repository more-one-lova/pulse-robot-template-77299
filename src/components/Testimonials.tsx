import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "아침마다 마음이로 하루를 시작해요. 나만의 명상 루틴을 만들고 나니 하루가 정말 평온해졌어요.",
      author: "김지혜",
      role: "28세",
      company: "직장인",
    },
    {
      quote: "스트레스 받을 때마다 내가 만든 힐링 영상을 보면서 마음을 다스려요. 정말 특별한 경험이에요.",
      author: "박서연",
      role: "32세",
      company: "프리랜서 디자이너",
    },
    {
      quote: "명상이 처음이었는데 마음이 덕분에 쉽게 시작할 수 있었어요. 커뮤니티에서 다른 분들과 공유하는 것도 좋아요.",
      author: "이민지",
      role: "25세",
      company: "대학원생",
    },
  ];

  return (
    <section className="py-20 bg-soft-gradient" id="testimonials">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="inline-block px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">사용자 후기</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            마음이와 함께한 순간들
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            마음이를 통해 일상에 평화를 찾은 분들의 이야기를 들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary mb-6" />
              <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-primary/10 pt-6">
                <div className="font-bold text-foreground text-lg">{testimonial.author}</div>
                <div className="text-sm text-foreground/60">{testimonial.role} · {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
