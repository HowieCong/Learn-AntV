import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <nav
      style={{
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        zIndex: 1000,
        minHeight: '8vh',
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
      }}
    >
      <div style={{ 
        width: '100%', 
        maxWidth: '90vw', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 3vw', 
        minHeight: '7vh',
        borderBottom: '1px solid #e9ecef',
      }}>
        {/* 左侧：路由目录 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3vw' }}>
          <Link 
            to="/" 
            style={{ 
              fontSize: '1.6vw', 
              color: '#4F6EF7', 
              fontWeight: 700, 
              textDecoration: 'none', 
              letterSpacing: '0.1vw',
              transition: 'all 0.3s ease',
              padding: '1vh 1.5vw',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#2c3e50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#4F6EF7';
            }}
          >
            {t('home')}
          </Link>
          <Link 
            to="/charts" 
            style={{ 
              fontSize: '1.6vw', 
              color: '#4F6EF7', 
              fontWeight: 700, 
              textDecoration: 'none', 
              letterSpacing: '0.1vw',
              transition: 'all 0.3s ease',
              padding: '1vh 1.5vw',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#2c3e50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#4F6EF7';
            }}
          >
            {t('charts')}
          </Link>
        </div>
        
        {/* 右侧：GitHub + 语言切换 */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
          <a
            href="https://github.com/HowieCong"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              padding: '1vh 1.5vw',
              transition: 'all 0.3s ease',
            }}
            title="HowieCong 的 GitHub"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <svg height="1.8vw" width="1.8vw" viewBox="0 0 16 16" fill="#4F6EF7" style={{ marginRight: '0.5vw' }}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
                -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64
                -.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
                2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
                1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span style={{ color: '#181818', fontWeight: 500, fontSize: '1.4vw' }}>HowieCong</span>
          </a>
          
          <button
            onClick={() => i18n.changeLanguage('en')}
            style={{
              background: i18n.language === 'en' ? '#4F6EF7' : '#fff',
              color: i18n.language === 'en' ? '#fff' : '#4F6EF7',
              border: '1px solid #4F6EF7',
              padding: '1vh 2vw',
              fontWeight: 700,
              fontSize: '1.2vw',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (i18n.language !== 'en') {
                e.currentTarget.style.background = '#4F6EF7';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (i18n.language !== 'en') {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#4F6EF7';
              }
            }}
          >
            English
          </button>
          
          <button
            onClick={() => i18n.changeLanguage('zh')}
            style={{
              background: i18n.language === 'zh' ? '#4F6EF7' : '#fff',
              color: i18n.language === 'zh' ? '#fff' : '#4F6EF7',
              border: '1px solid #4F6EF7',
              padding: '1vh 2vw',
              fontWeight: 700,
              fontSize: '1.2vw',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (i18n.language !== 'zh') {
                e.currentTarget.style.background = '#4F6EF7';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (i18n.language !== 'zh') {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#4F6EF7';
              }
            }}
          >
            中文
          </button>
        </div>
      </div>
  </nav>
  );
}