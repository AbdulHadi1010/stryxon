"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap, Rocket, Code, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedAvatar = ({
  icon: Icon,
  gradient,
}: {
  icon: any;
  gradient: string;
}) => {
  return (
    <Avatar className="size-12 overflow-visible">
      <AvatarFallback className={`${gradient} relative`}>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </AvatarFallback>
    </Avatar>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400">
            Stryxon delivers engineering excellence through immutable cloud
            infrastructure and intelligent automation, trusted by agencies
            worldwide.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-gray-900/50 border-indigo-500/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-indigo-400" fill="currentColor" />
                <span className="text-xl font-bold text-white">Stryxon</span>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-gray-300">
                  I had the pleasure of working with Stryxon on a complex cloud
                  architecture project. Their expertise in AWS, Azure, and GCP,
                  along with their deep understanding of DevOps, Kubernetes, and
                  Linux, ensured the success of the project. They consistently
                  demonstrated professionalism, technical skill, and attention
                  to detail. Highly recommended!
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <AnimatedAvatar
                    icon={Rocket}
                    gradient="bg-gradient-to-br from-indigo-600 to-purple-600"
                  />

                  <div>
                    <cite className="text-sm font-medium text-white">
                      Rayan A.
                    </cite>
                    <span className="text-gray-400 block text-sm">
                      Co-Founder, Sportamize
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 bg-gray-900/50 border-indigo-500/20">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-gray-300">
                  Stryxon is an exceptional team with skills not only in both
                  web and app development, but their proficiency also extends to
                  cloud technologies and Kubernetes. Being a developer myself,
                  managing all these aspects is definitely not an easy task.
                  They are professionals who are ready to go the extra mile to
                  ensure the project's success.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <AnimatedAvatar
                    icon={Code}
                    gradient="bg-gradient-to-br from-purple-600 to-pink-600"
                  />
                  <div>
                    <cite className="text-sm font-medium text-white">
                      Muhammad Z.
                    </cite>
                    <span className="text-gray-400 block text-sm">
                      Software Architect
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-indigo-500/20">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-gray-300">
                  I'm here to share my experience with Stryxon who helped create
                  our event website. They really understood our requirements.
                  They made it look fantastic & easy to use for everyone.
                  Throughout the process, Stryxon was super helpful & always
                  listened to our feedback. Highly recommend!
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <AnimatedAvatar
                    icon={BookOpen}
                    gradient="bg-gradient-to-br from-pink-600 to-orange-600"
                  />
                  <div>
                    <cite className="text-sm font-medium text-white">
                      Maryam K.
                    </cite>
                    <span className="text-gray-400 block text-sm">
                      Lecturer, UCP
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-indigo-500/20">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-gray-300">
                  I had the privilege of working with Stryxon. One thing I
                  admired most is their resilience. They are always willing to
                  learn and go the extra mile to achieve the desired result.
                  This trait will help them stay successful in their
                  professional journey.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <AnimatedAvatar
                    icon={Target}
                    gradient="bg-gradient-to-br from-orange-600 to-red-600"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Wilson Uduma
                    </p>
                    <span className="text-gray-400 block text-sm">
                      Product Management
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
