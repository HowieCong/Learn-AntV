import { Bar, Line, Pie, Scatter, Area, Radar } from '@ant-design/charts';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import chartData from '../data/chartData.json';
import { Card, Segmented, Button, Space, Typography, Tooltip, Switch, Divider, Row, Col } from 'antd';
import { AppstoreOutlined, PlayCircleOutlined, PauseCircleOutlined, SwapOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function BasicChartsDemo() {
  const { t, i18n } = useTranslation();
  const [barData, setBarData] = useState(chartData.barData.zh);
  const [activeChart, setActiveChart] = useState('bar');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  // 图表类型选项
  const chartTypes = useMemo(() => [
    { key: 'bar', label: t('bar') },
    { key: 'line', label: t('line') },
    { key: 'pie', label: t('pie') },
    { key: 'scatter', label: t('scatter') },
    { key: 'area', label: t('area') },
    { key: 'radar', label: t('radar') },
  ], [t]);

  useEffect(() => {
    setBarData(i18n.language === 'zh' ? chartData.barData.zh : chartData.barData.en);
  }, [i18n.language]);

  // 自动轮播
  useEffect(() => {
    if (!isAutoPlay || viewMode !== 'single') return;
    const interval = setInterval(() => {
      setActiveChart(prev => {
        const currentIndex = chartTypes.findIndex(chart => chart.key === prev);
        const nextIndex = (currentIndex + 1) % chartTypes.length;
        return chartTypes[nextIndex].key;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay, chartTypes, viewMode]);

  // 键盘控制
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        if (viewMode === 'single') setIsAutoPlay(v => !v);
      } else if (event.code === 'KeyG') {
        event.preventDefault();
        setViewMode(v => v === 'single' ? 'grid' : 'single');
      } else if (event.code === 'ArrowLeft' && viewMode === 'single') {
        event.preventDefault();
        setActiveChart(prevChart => {
          const currentIndex = chartTypes.findIndex(chart => chart.key === prevChart);
          const prevIndex = (currentIndex - 1 + chartTypes.length) % chartTypes.length;
          return chartTypes[prevIndex].key;
        });
        setIsAutoPlay(false);
      } else if (event.code === 'ArrowRight' && viewMode === 'single') {
        event.preventDefault();
        setActiveChart(prevChart => {
          const currentIndex = chartTypes.findIndex(chart => chart.key === prevChart);
          const nextIndex = (currentIndex + 1) % chartTypes.length;
          return chartTypes[nextIndex].key;
        });
        setIsAutoPlay(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAutoPlay, chartTypes, viewMode]);

  // 图表配置
  const barConfig = { data: barData, xField: 'type', yField: 'value', autoFit: true };
  const lineConfig = { data: i18n.language === 'zh' ? chartData.lineData.zh : chartData.lineData.en, xField: 'month', yField: 'value', seriesField: 'name', smooth: true, autoFit: true };
  const pieConfig = { data: i18n.language === 'zh' ? chartData.pieData.zh : chartData.pieData.en, angleField: 'value', colorField: 'type', radius: 1, innerRadius: 0.64, legend: { position: 'bottom' }, autoFit: true };
  const scatterConfig = { data: i18n.language === 'zh' ? chartData.scatterData.zh : chartData.scatterData.en, xField: 'x', yField: 'y', sizeField: 'size', colorField: 'category', shape: 'circle', autoFit: true };
  const areaConfig = { data: i18n.language === 'zh' ? chartData.areaData.zh : chartData.areaData.en, xField: 'month', yField: 'value', seriesField: 'name', isStack: true, smooth: true, autoFit: true };
  const radarConfig = { data: i18n.language === 'zh' ? chartData.radarData.zh : chartData.radarData.en, xField: 'item', yField: 'score', seriesField: 'user', legend: { position: 'bottom' }, autoFit: true };

  // 渲染当前选中的图表
  const renderChart = () => {
    switch (activeChart) {
      case 'bar': return <Bar {...barConfig} />;
      case 'line': return <Line {...lineConfig} />;
      case 'pie': return <Pie {...pieConfig} />;
      case 'scatter': return <Scatter {...scatterConfig} />;
      case 'area': return <Area {...areaConfig} />;
      case 'radar': return <Radar {...radarConfig} />;
      default: return <Bar {...barConfig} />;
    }
  };

  // 渲染所有图表的网格布局
  const renderAllCharts = () => {
    const chartConfigs = [
      { key: 'bar', component: <Bar {...barConfig} />, title: t('bar') },
      { key: 'line', component: <Line {...lineConfig} />, title: t('line') },
      { key: 'pie', component: <Pie {...pieConfig} />, title: t('pie') },
      { key: 'scatter', component: <Scatter {...scatterConfig} />, title: t('scatter') },
      { key: 'area', component: <Area {...areaConfig} />, title: t('area') },
      { key: 'radar', component: <Radar {...radarConfig} />, title: t('radar') },
    ];
    return (
      <Row gutter={[24, 24]}>
        {chartConfigs.map(chart => (
          <Col xs={24} md={12} key={chart.key}>
            <Card
              title={chart.title}
              bordered={activeChart === chart.key}
              hoverable
              onClick={() => setActiveChart(chart.key)}
              style={{ minHeight: 380 }}
            >
              {chart.component}
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#f8f9fa', padding: '80px 0 0 0' }}>
      <Card
        style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 24 }}
        bordered={false}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>{t('title')}</Title>
        <Paragraph style={{ textAlign: 'center', color: '#888', marginBottom: 0 }}>
          {t('interactiveGallery')} - {isAutoPlay ? t('autoPlaying') : t('manualBrowsing')}
        </Paragraph>
        <Divider />
        <Space wrap align="center" style={{ justifyContent: 'center', width: '100%' }}>
          <Segmented
            options={chartTypes.map(c => ({ label: c.label, value: c.key }))}
            value={activeChart}
            onChange={val => { setActiveChart(val as string); setIsAutoPlay(false); }}
          />
          <Tooltip title={viewMode === 'single' ? t('gridView') : t('singleView')}>
            <Button
              icon={<AppstoreOutlined />}
              onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
            >
              {viewMode === 'single' ? t('gridView') : t('singleView')}
            </Button>
          </Tooltip>
          {viewMode === 'single' && (
            <Tooltip title={isAutoPlay ? t('pauseCarousel') : t('startCarousel')}>
              <Switch
                checkedChildren={<PlayCircleOutlined />}
                unCheckedChildren={<PauseCircleOutlined />}
                checked={isAutoPlay}
                onChange={setIsAutoPlay}
              />
            </Tooltip>
          )}
          <Tooltip title={viewMode === 'single' ? t('keyboardControlSingle') : t('keyboardControlGrid')}>
            <SwapOutlined style={{ fontSize: 18, color: '#888' }} />
          </Tooltip>
        </Space>
      </Card>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {viewMode === 'single' ? (
          <Card
            title={chartTypes.find(c => c.key === activeChart)?.label}
            style={{ minHeight: 420 }}
            bordered
          >
            {renderChart()}
          </Card>
        ) : (
          renderAllCharts()
        )}
      </div>
    </div>
  );
}