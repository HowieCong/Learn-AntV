import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <nav
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: 16,
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      {/* 左侧：路由目录 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ marginRight: 16 }}>{t('home')}</Link>
        <Link to="/charts">{t('charts')}</Link>
      </div>
      {/* 右侧：GitHub + 语言切换 */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <a
          href="https://github.com/HowieCong"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 16, display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          title="HowieCong 的 GitHub"
        >
          <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: 4 }}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
              -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
              -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64
              -.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
              2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
              1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span style={{ color: '#181818', fontWeight: 500 }}>HowieCong</span>
        </a>
        <button
          onClick={() => i18n.changeLanguage('en')}
          style={{
            marginRight: 8,
            background: i18n.language === 'en' ? '#1890ff' : '#fff',
            color: i18n.language === 'en' ? '#fff' : '#1890ff',
            border: '1px solid #1890ff',
            borderRadius: 4,
            padding: '4px 12px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage('zh')}
          style={{
            background: i18n.language === 'zh' ? '#1890ff' : '#fff',
            color: i18n.language === 'zh' ? '#fff' : '#1890ff',
            border: '1px solid #1890ff',
            borderRadius: 4,
            padding: '4px 12px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          中文
        </button>
      </div>
    </nav>
  );
}