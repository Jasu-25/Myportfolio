import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface SkillCardProps {
  skill: {
    name: string;
    icon: React.ElementType;
  };
  index: number;
}
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export function SkillCard({ skill, index }: SkillCardProps) {
  const { name, icon: Icon } = skill;
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="w-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-500/50">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-indigo-600" />
          </div>
          <p className="text-lg font-semibold text-foreground">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}