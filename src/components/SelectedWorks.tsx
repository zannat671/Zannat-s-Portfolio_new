import React, { useState } from 'react';
import { LayoutGrid, List, ArrowUpRight, Sparkles, Filter, ExternalLink, ChevronRight } from 'lucide-react';
import { Project, AccentColor } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface SelectedWorksProps {
  activeAccent: AccentColor;
  onSelectProject: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ activeAccent, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const categories = ['All', 'Digital Products', 'Brand Systems', 'Art Direction', 'Motion & Spatial'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="works" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header & View Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-theme pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-widest text-muted-custom uppercase">
                [01] PORTFOLIO ARCHIVE
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
              <span className="text-xs tracking-widest text-muted-custom uppercase">
                {filteredProjects.length} WORKS FEATURED
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-main">
              SELECTED WORKS
            </h2>
          </div>

          {/* Controls: Category Filter + Grid/List Switcher */}
          <div className="flex flex-wrap items-center gap-4">
            {/* View Switcher */}
            <div className="flex items-center border border-theme bg-card-custom p-1 rounded-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid'
                    ? 'text-main bg-card-hover font-bold'
                    : 'text-muted-custom hover:text-main'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list'
                    ? 'text-main bg-card-hover font-bold'
                    : 'text-muted-custom hover:text-main'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'border-accent-custom text-main font-semibold bg-card-custom'
                  : 'border-theme text-muted-custom hover:text-main hover:border-theme'
              }`}
              style={{
                borderColor: selectedCategory === cat ? activeAccent.hex : undefined,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col border border-theme bg-card-custom hover:border-accent-custom transition-all duration-300 p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-neutral-900 border border-theme/40">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Year Tag & Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-xs font-mono uppercase text-white border border-white/20">
                      {project.year}
                    </span>
                    <span
                      className="px-3 py-1 text-xs font-mono uppercase text-black font-semibold"
                      style={{ backgroundColor: activeAccent.hex }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Metrics Overlay */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="bg-black/90 backdrop-blur-md border border-white/10 px-3 py-1.5 flex items-center gap-2 text-xs">
                        <span className="text-muted-custom uppercase">{project.metrics[0].label}:</span>
                        <span className="font-bold text-white" style={{ color: activeAccent.hex }}>
                          {project.metrics[0].value}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Editorial Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-widest text-muted-custom">
                        CLIENT: {project.client}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-muted-custom">
                        ROLE: {project.role}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-main mb-3 group-hover:text-accent-custom transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0"
                        style={{ color: activeAccent.hex }}
                      />
                    </h3>

                    <p className="text-sm text-muted-custom font-light leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags Bar */}
                  <div className="pt-4 border-t border-theme flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 border border-theme text-muted-custom"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className="text-xs uppercase font-bold tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      style={{ color: activeAccent.hex }}
                    >
                      Case Study <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View Mode */}
        {viewMode === 'list' && (
          <div className="border-t border-theme divide-y divide-theme">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group cursor-pointer py-8 px-4 sm:px-6 hover:bg-card-custom transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 relative"
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="font-mono text-sm text-muted-custom opacity-60 w-8">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-main group-hover:text-accent-custom transition-colors flex items-center gap-3">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: activeAccent.hex }}
                      />
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted-custom uppercase tracking-wider mt-1">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                  <div className="hidden lg:flex items-center gap-2">
                    {project.tags.slice(0, 2).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] uppercase tracking-wider px-2 py-0.5 border border-theme text-muted-custom"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider border border-theme group-hover:border-accent-custom transition-colors"
                    style={{
                      backgroundColor: hoveredProjectId === project.id ? `${activeAccent.hex}15` : undefined,
                      borderColor: hoveredProjectId === project.id ? activeAccent.hex : undefined,
                      color: hoveredProjectId === project.id ? activeAccent.hex : undefined,
                    }}
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
