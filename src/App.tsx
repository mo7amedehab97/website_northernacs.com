import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

/** Legacy WordPress-style URLs → canonical app routes */
const NorthernacsBlogSlugRedirect = () => {
  const { slug } = useParams();
  if (!slug) return <Navigate to="/blogs" replace />;
  return <Navigate to={`/blogs/${slug}`} replace />;
};

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:slug" element={<BlogDetailPage />} />
        <Route path="northernacs" element={<Navigate to="/" replace />} />
        <Route path="northernacs/about" element={<Navigate to="/about" replace />} />
        <Route path="northernacs/contact" element={<Navigate to="/contact" replace />} />
        <Route path="northernacs/projects" element={<Navigate to="/projects" replace />} />
        <Route path="northernacs/blogs" element={<Navigate to="/blogs" replace />} />
        <Route path="northernacs/blogs/:slug" element={<NorthernacsBlogSlugRedirect />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
