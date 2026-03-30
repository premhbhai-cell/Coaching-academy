import { useCountUp } from "@/hooks/useCountUp";
import { Users, Trophy, Clock, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Students Benefited" },
  { icon: Trophy, value: 1500, suffix: "+", label: "High Achievers" },
  { icon: Clock, value: 8, suffix: "+", label: "Years Experience" },
  { icon: BookOpen, value: 15, suffix: "+", label: "Expert Faculty" },
];

function StatItem({ icon: Icon, value, suffix, label }: typeof stats[0]) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="flex items-center gap-4 justify-center">
      <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <div>
        <div className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground">
          {count}{suffix}
        </div>
        <div className="text-primary-foreground/80 text-sm font-medium">{label}</div>
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="trust-bar-gradient py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
