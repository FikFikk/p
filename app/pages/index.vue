 <!-- ===== pages/index.vue ===== -->
<template>
  <Navigation />
  <div>
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <!-- <PortfolioSection /> -->
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import EducationSection from '../components/EducationSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PortfolioSection from '../components/PortofolioSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/FooterSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
useSeoMeta({
  title: 'Mochammad Fikri Dwi Fardian - Fullstack Developer',
  description: 'Passionate fullstack developer specializing in Laravel-based web applications, quality management systems, and bringing creative solutions to complex technical challenges.',
  keywords: 'fullstack developer, laravel, php, web development, cnc programming, quality management systems',
  author: 'Mochammad Fikri Dwi Fardian',
  ogTitle: 'Mochammad Fikri Dwi Fardian - Fullstack Developer',
  ogDescription: 'Passionate fullstack developer with expertise in Laravel, PHP, and web technologies.',
  ogImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=1200&q=80',
  ogUrl: 'https://fikfikk.github.io/p',
  twitterCard: 'summary_large_image'
})
</script>