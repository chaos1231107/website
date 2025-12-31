"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-20">

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold text-gray-100">
            Park Keonwoo · Avionics & Embedded Engineer
          </h1>

          <p className="mt-3 text-lg text-gray-300">
            Exploring what lies beyond what we have built so far.
          </p>

          <p className="text-xl text-gray-300">
            Rocket · Drone · Sensor Fusion · Filtering Algorithms
          </p>
          
          <div className="flex justify-center gap-6 mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                <Link
                  href="https://github.com/chaos1231107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
                asChild
              >
                <Link
                  href="https://velog.io/@chaos1231107/posts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Velog
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4 text-gray-800">
              <h2 className="text-2xl font-semibold text-gray-900">About Me</h2>
              <p className="leading-relaxed">
                I'm currently studying Electronics at Gachon University, and my
                research and development are focused on rocket avionics and rocket
                trajectory simulation systems. I am also working on adopting
                quaternion and Error-State Kalman Filter–based sensor fusion
                algorithms. I prioritize system design and experiments that
                handle actual or simulated flight data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-gray-800">
              <h2 className="text-2xl font-semibold text-gray-900">Core Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Python / C / C++ / Embedded Linux</li>
                <li>EKF, UKF, LPF, Sensor Fusion</li>
                <li>MPU6050, BMP280, Raspberry Pi, Arduino</li>
                <li>Avionics System Architecture</li>
              </ul>
            </CardContent>
          </Card>
        </section>
        
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-100">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4 text-gray-800">
                <h3 className="text-xl font-semibold text-gray-900">
                  GOAT-Ⅲ Rocket Avionics & Parachute Deployment
                </h3>
                <p>
                  Exponential Average Filter–based altitude estimation and parachute
                  deployment logic. Successful deployment but payload retrieval failed.
                </p>
                <Button size="sm" asChild>
                  <Link href="/projects/goat-3">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4 text-gray-800">
                <h3 className="text-xl font-semibold text-gray-900">
                  GOAT-V Rocket Avionics & Sensor Fusion
                </h3>
                <p>
                  LPF + Kalman Filter–based sensor fusion architecture for
                  altitude and state estimation. 
                  Launch qualification was deprived because of canard fin issue.
                </p>
                <Button size="sm" asChild>
                  <Link href="/projects/goat-v">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4 text-gray-800">
                <h3 className="text-xl font-semibold text-gray-900">
                  IMU-Based Attitude Estimation System
                </h3>
                <p>
                  MPU6050-based real-time roll, pitch, yaw estimation system with
                  bias estimation and drift suppression using ESKF.
                </p>
                <Button size="sm" asChild>
                  <Link href="/projects/imu">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-100">Contact</h2>
          <p className="text-gray-300">연구 · 프로젝트 · 협업 관련 연락 환영합니다.</p>
          <p className="text-lg text-gray-200">
            <a
              href="mailto:hiccupkw@naver.com"
              className="underline hover:text-white"
            >
              hiccupkw@naver.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
