import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: 'calc(100vh - 12vh)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12vh 4vw 4vh 4vw',
        boxSizing: 'border-box',
        background: '#f8f9fa',
      }}
    >
      {/* 主标题区域 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '6vh',
        padding: '4vh 6vw',
      }}>
        <h1 style={{ 
          fontSize: '3.5vw', 
          fontWeight: 700, 
          color: '#2c3e50', 
          marginBottom: '2vh',
          lineHeight: '1.2',
        }}>
          {t('title')}
        </h1>
        <p style={{ 
          color: '#5a6c7d', 
          fontSize: '1.4vw', 
          margin: 0, 
          textAlign: 'center', 
          maxWidth: '60vw',
          lineHeight: '1.6',
        }}>
          {t('homeWelcome') || 'Welcome to the AntV Chart Learning Platform!\nPlease use the navigation above to explore chart tutorials.'}
        </p>
      </div>

      {/* 特色卡片区域 */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3vw',
        justifyContent: 'center',
        maxWidth: '90vw',
      }}>
        {/* 功能卡片 */}
        {[
          { title: '📊 Interactive Charts', desc: 'Explore various chart types' },
          { title: '🌐 Multi-language', desc: 'Support Chinese & English' },
          { title: '📱 Responsive Design', desc: 'Works on all devices' },
        ].map((card, index) => (
          <div key={index} style={{
            background: '#fff',
            border: '1px solid #e9ecef',
            padding: '3vh 2.5vw',
            textAlign: 'center',
            minWidth: '25vw',
            maxWidth: '28vw',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-0.5vh)';
            e.currentTarget.style.boxShadow = '0 0.5vh 2vh rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <h3 style={{
              fontSize: '1.8vw',
              color: '#2c3e50',
              marginBottom: '1.5vh',
              fontWeight: 600,
            }}>
              {card.title}
            </h3>
            <p style={{
              fontSize: '1.2vw',
              color: '#5a6c7d',
              margin: 0,
              lineHeight: '1.4',
            }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;