import { Typography, Button, Card, Row, Col } from 'antd';
import FooterBar from '../components/FooterBar';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function App() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Row justify="center" align="middle" style={{ flex: 1, minHeight: '80vh' }}>
        <Col xs={22} sm={18} md={14} lg={10}>
          <Card
            style={{
              borderRadius: 16,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              textAlign: 'center',
              padding: '4vh 2vw',
              background: 'rgba(255,255,255,0.97)',
            }}
            bordered={false}
          >
            <Title
              level={1}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                marginBottom: '2vh',
              }}
            >
              Learn AntV
            </Title>
            <Paragraph
              style={{
                color: '#555',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginBottom: '4vh',
              }}
            >
              {t('欢迎来到 AntV 可视化学习平台！')}
              <br />
              {t('这里你可以系统学习 AntV 的基础与进阶用法，快速掌握数据可视化开发。')}
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{
                borderRadius: 24,
                padding: '1.2vh 5vw',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                fontWeight: 600,
              }}
              href="/charts"
            >
              {t('立即开始学习')}
            </Button>
          </Card>
        </Col>
      </Row>
      <FooterBar />
    </div>
  );
}