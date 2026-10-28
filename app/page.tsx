'use client'

import { useMemo, useState } from 'react'
import {
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Compass,
  Flame,
  Globe2,
  Home,
  Menu,
  Moon,
  MoreHorizontal,
  Search,
  Settings2,
  Sparkles,
  Sun,
  UserRound,
  X,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const stories = [
  { id: 1, category: 'Artificial Intelligence', source: 'Signal / 08 min read', time: '12 min ago', title: 'The quiet race to make AI agents genuinely useful', description: 'A new generation of systems is moving beyond answers and into the messy, high-leverage work of getting things done.', reason: 'Matches your interest in Artificial Intelligence', color: 'from-indigo-500/70 via-violet-500/30 to-slate-950' },
  { id: 2, category: 'Software Development', source: 'The Stack / 06 min read', time: '34 min ago', title: 'The return of the small, opinionated developer tool', description: 'Why focused tools are winning back attention from all-in-one platforms.', reason: 'Popular with developers at your level', color: 'from-sky-500/60 via-cyan-500/20 to-slate-950' },
  { id: 3, category: 'Semiconductors', source: 'Silicon Field / 05 min read', time: '1h ago', title: 'Chip designers are treating memory like a first-class compute layer', description: 'The next leap in performance may come from moving data less, not calculating more.', reason: 'Trending in Semiconductors', color: 'from-amber-500/50 via-orange-500/20 to-slate-950' },
  { id: 4, category: 'Cybersecurity', source: 'Patch Notes / 04 min read', time: '2h ago', title: 'Security teams are quietly rewriting their incident playbooks', description: 'A more honest approach to resilience is replacing the fantasy of perfect prevention.', reason: 'Because you read Cybersecurity', color: 'from-emerald-500/50 via-teal-500/20 to-slate-950' },
  { id: 5, category: 'Robotics', source: 'Future Assembly / 07 min read', time: '3h ago', title: 'Inside the warehouse where robots learn from every awkward moment', description: 'Real-world feedback is becoming the most valuable training data in robotics.', reason: 'A discovery outside your usual topics', color: 'from-fuchsia-500/50 via-pink-500/20 to-slate-950' },
]

const topics = ['All stories', 'Artificial Intelligence', 'Software Development', 'Cybersecurity', 'Semiconductors', 'Hardware']

export default function Page() {
  const [saved, setSaved] = useState<number[]>([3])
  const [activeTopic, setActiveTopic] = useState('All stories')
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [light, setLight] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const visibleStories = useMemo(() => stories.filter((story) => {
    const matchesTopic = activeTopic === 'All stories' || story.category === activeTopic
    const matchesSearch = !query || `${story.title} ${story.description}`.toLowerCase().includes(query.toLowerCase())
    return matchesTopic && matchesSearch
  }), [activeTopic, query])

  const toggleSave = (id: number) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <div className={light ? 'app-shell light-mode' : 'app-shell'}>
      <aside className={mobileNav ? 'sidebar open' : 'sidebar'}>
        <div className="brand"><span className="brand-mark"><Zap /></span><span>the tech drop<span className="brand-dot">.</span></span></div>
        <div className="sidebar-label">YOUR SIGNAL IN THE NOISE</div>
        <nav className="primary-nav" aria-label="Main navigation">
          <a className="nav-item active" href="#feed"><Home /> For you <span className="nav-count">5</span></a>
          <a className="nav-item" href="#explore"><Compass /> Explore</a>
          <a className="nav-item" href="#trending"><Flame /> Trending <span className="live-dot" /></a>
          <a className="nav-item" href="#saved"><Bookmark /> Saved <span className="nav-count">{saved.length}</span></a>
        </nav>
        <div className="sidebar-label section-label">YOUR SPACE</div>
        <nav className="primary-nav">
          <a className="nav-item" href="#profile"><UserRound /> Profile</a>
          <a className="nav-item" href="#settings"><Settings2 /> Preferences</a>
        </nav>
        <div className="sidebar-footer">
          <div className="demo-note"><Sparkles /><div><strong>Demo mode</strong><span>Stories are fictional for this prototype.</span></div></div>
          <div className="user-row"><div className="avatar">GS</div><div><strong>Gabriel Silva</strong><span>Personalized reader</span></div><MoreHorizontal /></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand"><button className="icon-button" onClick={() => setMobileNav(!mobileNav)} aria-label="Open menu"><Menu /></button><span>the tech drop<span className="brand-dot">.</span></span></div>
          <div className="breadcrumb"><span>FOR YOU</span><ChevronRight /></div>
          <div className="top-actions">
            {searchOpen && <input autoFocus className="search-input" placeholder="Search stories..." value={query} onChange={(e) => setQuery(e.target.value)} />}
            <button className="icon-button" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"><Search /></button>
            <button className="icon-button" aria-label="Change language"><Globe2 /></button><button className="language-button">EN <ChevronDown /></button>
            <button className="icon-button" onClick={() => setLight(!light)} aria-label="Toggle theme">{light ? <Moon /> : <Sun />}</button>
            <div className="mini-avatar">GS</div>
          </div>
        </header>

        <div className="content-grid">
          <section className="feed" id="feed">
            <div className="page-intro"><div><p className="eyebrow"><span className="pulse" /> WEDNESDAY, OCTOBER 22, 2025</p><h1>Good morning, Gabriel.</h1><p className="subhead">Here&apos;s what matters in tech today.</p></div><button className="refresh-button"><Sparkles /> Refresh feed</button></div>

            <div className="featured-story">
              <div className="featured-image"><img src="/tech-drop-hero.png" alt="Abstract illuminated computer chip" /><div className="image-overlay" /></div>
              <div className="featured-copy"><div className="story-meta"><span className="category-dot indigo" /> ARTIFICIAL INTELLIGENCE <span className="meta-divider" /> 08 MIN READ</div><h2>The infrastructure shift quietly reshaping how AI gets built</h2><p>The most important AI story may not be the next model. It&apos;s the invisible layer underneath making intelligence cheaper, faster and more accessible.</p><div className="story-footer"><span>THE SIGNAL / 42 MIN AGO</span><button className={saved.includes(1) ? 'save-button saved' : 'save-button'} onClick={() => toggleSave(1)} aria-label="Save featured story">{saved.includes(1) ? <BookmarkCheck /> : <Bookmark />}</button></div></div>
            </div>

            <div className="section-heading"><div><span className="eyebrow">CURATED FOR YOU</span><h2>Stories worth your attention</h2></div><button className="text-button">View all <ChevronRight /></button></div>
            <div className="filter-row">{topics.map((topic) => <button key={topic} className={activeTopic === topic ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveTopic(topic)}>{topic}</button>)}</div>

            <div className="story-list">{visibleStories.slice(0, 4).map((story, index) => <article className="story-card" key={story.id}><div className={`story-art ${story.color}`}><span>{String(index + 1).padStart(2, '0')}</span></div><div className="story-card-copy"><div className="story-meta"><span className="category-dot" /> {story.category.toUpperCase()} <span className="meta-divider" /> {story.time.toUpperCase()}</div><h3>{story.title}</h3><p>{story.description}</p><div className="recommendation"><Sparkles /> {story.reason}</div></div><button className={saved.includes(story.id) ? 'save-button saved' : 'save-button'} onClick={() => toggleSave(story.id)} aria-label={`Save ${story.title}`}>{saved.includes(story.id) ? <BookmarkCheck /> : <Bookmark />}</button></article>)}</div>
            {visibleStories.length === 0 && <div className="empty-state"><Search /><h3>No stories found</h3><p>Try another topic or search term.</p><button className="text-button" onClick={() => {setQuery(''); setActiveTopic('All stories')}}>Clear filters</button></div>}
            <button className="load-more">Load more stories <ChevronDown /></button>
          </section>

          <aside className="context-sidebar">
            <div className="context-header"><div><span className="eyebrow">LIVE SIGNAL</span><h2>What&apos;s moving</h2></div><a href="#trending">See all</a></div>
            <div className="trend-card"><div className="trend-top"><span className="trend-rank">01</span><span className="trend-change">+42%</span></div><h3>AI agents</h3><p>17.8k stories this week</p><div className="sparkline"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            <div className="trend-card"><div className="trend-top"><span className="trend-rank">02</span><span className="trend-change">+28%</span></div><h3>Edge computing</h3><p>8.4k stories this week</p><div className="sparkline second"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            <div className="trend-card"><div className="trend-top"><span className="trend-rank">03</span><span className="trend-change">+19%</span></div><h3>Open source hardware</h3><p>5.1k stories this week</p><div className="sparkline third"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            <div className="signal-card"><CircleHelp /><div><strong>Why am I seeing this?</strong><p>Your feed balances your interests, recency and a little discovery.</p></div><ChevronRight /></div>
          </aside>
        </div>
      </main>
      <nav className="mobile-bottom-nav"><a className="active" href="#feed"><Home /><span>For you</span></a><a href="#explore"><Compass /><span>Explore</span></a><a href="#trending"><Flame /><span>Trending</span></a><a href="#saved"><Bookmark /><span>Saved</span></a></nav>
      {mobileNav && <button className="mobile-overlay" onClick={() => setMobileNav(false)} aria-label="Close menu"><X /></button>}
    </div>
  )
}
