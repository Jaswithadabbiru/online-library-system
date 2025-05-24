import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/browse', name: 'Browse Books' },
    { path: '/add-book', name: 'Add Book' }
  ];

  return (
    <nav className="navbar" style={{ background: 'linear-gradient(90deg, #3730a3 0%, #6366f1 100%)', padding: '1.2rem 0', boxShadow: '0 2px 8px rgba(60,60,120,0.07)' }}>
      <div className="navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1100, margin: '0 auto', width: '90%' }}>
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', letterSpacing: '-1px' }}
        >
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>📚 LibroVerse</Link>
        </motion.div>
        
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
                style={{ color: location.pathname === item.path ? '#a5b4fc' : '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', position: 'relative', padding: '0.2rem 0.5rem' }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div className="underline" layoutId="underline" style={{ height: 3, borderRadius: 2, background: '#a5b4fc', position: 'absolute', left: 0, right: 0, bottom: -4 }} />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;