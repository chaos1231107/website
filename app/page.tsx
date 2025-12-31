"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold">
            Park Keonwoo · Avionics & Embedded Engineer
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            Exploring what lies beyond what we have built so far.
          </p>

          <p className="text-xl text-gray-300">
            Rocket · Drone · Sensor Fusion · Filtering Algorithms
          </p>
          <div className="flex justify-center gap-4">
            <Button>GitHub</Button>
            <Button variant="outline">CV 다운로드</Button>
          </div>
        </motion.section>

        {/* About */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="text-gray-800 leading-relaxed">
                I'm currently studying Electronics at Gachon University, and my research and development focus on rocket avionics and rocket trajectory simulation systems.
                I am also working on adopting quaternion and Error-State Kalman Filter–based sensor fusion algorithms.
                I prioritize system design and experiments that handle actual or simulated flight data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Core Skills</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Python / C / C++ / Embedded Linux</li>
                <li>EKF, UKF, LPF, Sensor Fusion</li>
                <li>MPU6050, BMP280, Raspberry Pi, MCU</li>
                <li>Avionics System Architecture</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">GOAT ‑ Ⅲ Rocket Avionics and parachute deployment algorithm</h3>
                <p className="text-gray-800">
                  Exponential Average Filter - Based altitude estimation system
                  Prachute Deployment succeed, Payload retrival failed
                </p>

                <h3 className="text-xl font-semibold">GOAT ‑ V Rocket Avionics and sensor fusion algorithm </h3>
                <p className="text-gray-800">
                  Low Pass Filter + Kalman Filter - Based sensor fusion & altitude estimation algorithm
                </p>

                <Button size="sm">자세히 보기</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">IMU Based Attitude Estimtion System</h3>
                <p className="text-gray-800">
                  Design of an MPU6050-based real-time roll, pitch, and yaw estimation system, 
                  including bias estimation and drift suppression algorithms.
                </p>

                <h3 className="text-xl font-semibold">Developing Rocket Simulator for research and verification of algorithms </h3>
                <p className="text-gray-800">
                  Developing quaternion and ESKF based attitude estimation algorithm
                </p>
                <Button size="sm">자세히 보기</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-gray-800">연구·프로젝트·협업 관련 연락 환영합니다.</p>
          <p className="text-lg">Email: hiccupkw@naver.com</p>
        </section>

      </div>
    </div>
  );
}
