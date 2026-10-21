"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Filter,
  Maximize2,
  X,
} from "lucide-react";
import { deliveredProjects, ProjectItem } from "@/config/projects";
import { Button } from "@/components/ui/Button";

type CategoryFilter = "all" | "salvage" | "underwater" | "tugs-barges" | "ferry-speedboats" | "site-operations";

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All Delivered Projects" },
    { id: "underwater", label: "Underwater & Diving" },
    { id: "salvage", label: "Salvage & Wreck Removal" },
    { id: "tugs-barges", label: "Tugs & Cargo Barges" },
    { id: "ferry-speedboats", label: "Ferry & Speed Boats" },
    { id: "site-operations", label: "Jetty & Field Operations" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? deliveredProjects
      : deliveredProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xs text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#0B1F33] text-[#D9A441] shadow-md border border-[#D9A441]/40"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0B1F33] border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-lg overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#167D91]/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Box */}
            <div
              className="relative h-60 w-full overflow-hidden bg-slate-900 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-xs bg-[#0B1F33]/90 backdrop-blur-xs text-[#D9A441] text-[11px] font-bold uppercase tracking-wider border border-slate-700">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Enlarge Icon on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-xs text-white">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                <span className="truncate">{project.location}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-heading font-bold text-lg text-[#0B1F33] group-hover:text-[#167D91] transition-colors leading-snug cursor-pointer mb-2.5"
                >
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#596979] leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#167D91] shrink-0" />
                      <span className="truncate font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold uppercase tracking-wider text-[#167D91] hover:text-[#0B1F33] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href={`/request-a-quote?service=${encodeURIComponent(project.categoryLabel)}`}
                  className="text-xs text-slate-500 hover:text-[#D9A441] font-semibold"
                >
                  Quote Similar Job
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Detailed Inspection */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-950">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-3 left-4 px-3 py-1 bg-black/70 rounded-xs text-[#D9A441] text-xs font-bold uppercase tracking-wider">
                {selectedProject.categoryLabel}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#167D91] font-semibold">
                <MapPin className="w-4 h-4 text-[#D9A441]" />
                <span>{selectedProject.location}</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F33]">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#596979] leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-2">
                  Operational Execution Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Operated by <strong className="text-[#0B1F33]">Asanti Shores Limited</strong> • Lagos, Nigeria
                </div>
                <Button
                  href={`/request-a-quote?service=${encodeURIComponent(selectedProject.categoryLabel)}`}
                  variant="primary"
                  size="sm"
                >
                  Request a Quote for this Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
