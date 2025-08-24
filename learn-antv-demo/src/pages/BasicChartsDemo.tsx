import { Bar, Line, Pie, Scatter, Area, Radar } from '@ant-design/charts';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import chartData from '../data/chartData.json';

export default function BasicChartsDemo() {
  const { t, i18n } = useTranslation();
  const [barData, setBarData] = useState(chartData.barData.zh);
  const [activeChart, setActiveChart] = useState('bar');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [viewMode, setViewMode] = useState('single'); // 'single' 或 'grid'

  // 响应式字体大小计算
  const responsiveFontSize = Math.max(12, window.innerWidth * 0.012);

  // 图表类型选项 - 使用 useMemo 避免重复创建
  const chartTypes = useMemo(() => [
    { key: 'bar', label: t('bar') },
    { key: 'line', label: t('line') },
    { key: 'pie', label: t('pie') },
    { key: 'scatter', label: t('scatter') },
    { key: 'area', label: t('area') },
    { key: 'radar', label: t('radar') },
  ], [t]);

  // 只根据语言变化切换数据
  useEffect(() => {
    setBarData(i18n.language === 'zh' ? chartData.barData.zh : chartData.barData.en);
  }, [i18n.language]);

  // 自动轮播功能 - 仅在单图模式下生效
  useEffect(() => {
    if (!isAutoPlay || viewMode !== 'single') return;
    
    const interval = setInterval(() => {
      setActiveChart(prev => {
        const currentIndex = chartTypes.findIndex(chart => chart.key === prev);
        const nextIndex = (currentIndex + 1) % chartTypes.length;
        return chartTypes[nextIndex].key;
      });
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval);
  }, [isAutoPlay, chartTypes, viewMode]);

  // 键盘控制
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        if (viewMode === 'single') {
          setIsAutoPlay(!isAutoPlay);
        }
      } else if (event.code === 'KeyG') {
        event.preventDefault();
        setViewMode(viewMode === 'single' ? 'grid' : 'single');
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

  // 1. 柱状图
  const barConfig = {
    data: barData,
    xField: 'type',
    yField: 'value',
    color: ({ value }: { value: number }) => {
      // 根据数值大小返回不同的渐变色
      if (value > 140) return 'l(270) 0:#ff6b35 0.5:#f7931e 1:#ffd23f';
      if (value > 100) return 'l(270) 0:#667eea 0.5:#764ba2 1:#f093fb';
      return 'l(270) 0:#4facfe 0.5:#00f2fe 1:#43e97b';
    },
    label: { 
      style: { 
        fill: '#fff', 
        textAlign: 'center',
        fontWeight: 'bold',
        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
      }
    },
    columnStyle: {
      radius: [4, 4, 0, 0],
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowBlur: 10,
      shadowOffsetY: 3,
    },
    interactions: [{ type: 'active-region' }],
    autoFit: true,
  };

  // 2. 折线图
  const lineConfig = {
    data: i18n.language === 'zh' ? chartData.lineData.zh : chartData.lineData.en,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',
    color: ['#ff6b35', '#667eea', '#4facfe'],
    point: { 
      size: 6, 
      shape: 'circle',
      style: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 5,
      }
    },
    lineStyle: { 
      lineWidth: 3,
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowBlur: 8,
      shadowOffsetY: 2,
    },
    smooth: true,
    autoFit: true,
  };

  // 3. 饼图
  const pieConfig = {
    data: i18n.language === 'zh' ? chartData.pieData.zh : chartData.pieData.en,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    color: [
      'l(270) 0:#ff6b35 1:#f7931e',
      'l(270) 0:#667eea 1:#764ba2', 
      'l(270) 0:#4facfe 1:#00f2fe',
      'l(270) 0:#43e97b 1:#38f9d7',
      'l(270) 0:#fa709a 1:#fee140',
      'l(270) 0:#a8edea 1:#fed6e3'
    ],
    label: {
      style: { 
        fontSize: responsiveFontSize, 
        textAlign: 'center',
        fontWeight: 'bold',
        fill: '#2c3e50',
        textShadow: '0 1px 2px rgba(255,255,255,0.8)'
      }
    },
    pieStyle: {
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowBlur: 10,
      shadowOffsetY: 3,
    },
    legend: { position: 'bottom' },
    autoFit: true,
  };

  // 4. 散点图
  const scatterConfig = {
    data: i18n.language === 'zh' ? chartData.scatterData.zh : chartData.scatterData.en,
    xField: 'x',
    yField: 'y',
    sizeField: 'size',
    colorField: 'category',
    color: ['#ff6b35', '#667eea', '#4facfe'],
    shape: 'circle',
    pointStyle: { 
      stroke: '#fff', 
      lineWidth: 2,
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowBlur: 8,
      shadowOffsetY: 2,
      fillOpacity: 0.85,
    },
    autoFit: true,
  };

  // 5. 面积图
  const areaConfig = {
    data: i18n.language === 'zh' ? chartData.areaData.zh : chartData.areaData.en,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',
    color: [
      'l(270) 0:#ff6b35 0.5:#f7931e 1:#ffd23f',
      'l(270) 0:#667eea 0.5:#764ba2 1:#f093fb', 
      'l(270) 0:#4facfe 0.5:#00f2fe 1:#43e97b'
    ],
    isStack: true,
    smooth: true,
    areaStyle: { 
      fillOpacity: 0.6,
      shadowColor: 'rgba(0,0,0,0.1)',
      shadowBlur: 10,
    },
    line: {
      style: {
        lineWidth: 2,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 5,
      }
    },
    autoFit: true,
  };

  // 6. 雷达图
  const radarConfig = {
    data: i18n.language === 'zh' ? chartData.radarData.zh : chartData.radarData.en,
    xField: 'skill',
    yField: 'value',
    seriesField: 'name',
    color: [
      'l(270) 0:#ff6b35 0.5:#f7931e 1:#ffd23f',
      'l(270) 0:#667eea 0.5:#764ba2 1:#f093fb',
      'l(270) 0:#4facfe 0.5:#00f2fe 1:#43e97b'
    ],
    area: {
      style: {
        fillOpacity: 0.3,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowBlur: 8,
      }
    },
    point: { 
      size: 6,
      style: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 5,
        fillOpacity: 1,
      }
    },
    line: {
      style: {
        lineWidth: 3,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowBlur: 5,
      }
    },
    legend: {
      position: 'bottom',
    },
    autoFit: true,
  };

  // 渲染当前选中的图表
  const renderChart = () => {
    switch (activeChart) {
      case 'bar':
        return <Bar {...barConfig} />;
      case 'line':
        return <Line {...lineConfig} />;
      case 'pie':
        return <Pie {...pieConfig} />;
      case 'scatter':
        return <Scatter {...scatterConfig} />;
      case 'area':
        return <Area {...areaConfig} />;
      case 'radar':
        return <Radar {...radarConfig} />;
      default:
        return <Bar {...barConfig} />;
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(40vw, 1fr))',
        gap: '1vw',
        width: '95vw',
        height: 'calc(100vh - 25vh)', // 增加一些空间
        overflow: 'auto', // 网格模式允许滚动
      }}>
        {chartConfigs.map((chart) => (
          <div
            key={chart.key}
            style={{
              background: '#fff',
              border: activeChart === chart.key ? '2px solid #4F6EF7' : '1px solid #e9ecef',
              padding: '1.5vh 1vw',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => setActiveChart(chart.key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 style={{
              textAlign: 'center',
              marginBottom: '1vh',
              color: activeChart === chart.key ? '#4F6EF7' : '#2c3e50',
              fontSize: '1.2vw',
              fontWeight: 600,
              flex: 'none',
            }}>
              {chart.title}
            </h3>
            <div style={{
              height: '28vh', // 固定高度，确保图表完整显示
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              padding: '1vh',
              boxSizing: 'border-box',
            }}>
              {chart.component}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f8f9fa',
        padding: '1vw',
        paddingTop: '6vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden', // 防止滚动
      }}
    >
      {/* 页面标题 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1vh',
        padding: '1vh 2vw',
      }}>
        <h1 style={{ 
          fontSize: '2.2vw', 
          marginBottom: '0.5vh',
          color: '#2c3e50',
          fontWeight: 700,
        }}>
          {t('title')}
        </h1>
        <p style={{
          fontSize: '1vw',
          color: '#5a6c7d',
          margin: 0,
          opacity: 0.8,
        }}>
          {t('interactiveGallery')} - {isAutoPlay ? t('autoPlaying') : t('manualBrowsing')}
        </p>
      </div>

      {/* 轮播控制按钮 */}
      <div style={{
        display: 'flex',
        gap: '1.5vw',
        marginBottom: '1vh',
        alignItems: 'center',
      }}>
        <button
          onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
          style={{
            background: viewMode === 'grid' ? '#17a2b8' : '#6c757d',
            color: '#fff',
            border: 'none',
            padding: '0.8vh 1.5vw',
            fontSize: '1vw',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginRight: '0.5vw',
          }}
        >
          {viewMode === 'single' ? t('gridView') : t('singleView')}
        </button>

        {viewMode === 'single' && (
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            style={{
              background: isAutoPlay ? '#28a745' : '#6c757d',
              color: '#fff',
              border: 'none',
              padding: '0.8vh 1.5vw',
              fontSize: '1vw',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {isAutoPlay ? t('pauseCarousel') : t('startCarousel')}
          </button>
        )}
        
        {viewMode === 'single' && (
          <div style={{
            display: 'flex',
            gap: '0.4vw',
            alignItems: 'center',
          }}>
            {chartTypes.map((chart) => (
              <div
                key={chart.key}
                style={{
                  width: '0.8vw',
                  height: '0.8vw',
                  borderRadius: '50%',
                  background: activeChart === chart.key ? '#4F6EF7' : '#e9ecef',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setActiveChart(chart.key);
                  setIsAutoPlay(false); // 手动选择时停止自动播放
                }}
              />
            ))}
          </div>
        )}
        
        <div style={{
          fontSize: '0.8vw',
          color: '#6c757d',
          marginLeft: '1vw',
        }}>
          {viewMode === 'single' 
            ? t('keyboardControlSingle')
            : t('keyboardControlGrid')
          }
        </div>
      </div>
      
      {/* 图表切换按钮组 - 仅在单图模式下显示 */}
      {viewMode === 'single' && (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1vw', 
          marginBottom: '1vh',
          justifyContent: 'center',
          width: '90vw',
          padding: '1vh 2vw',
        }}>
          {chartTypes.map((chart) => (
            <button
              key={chart.key}
              onClick={() => setActiveChart(chart.key)}
              style={{
                background: activeChart === chart.key ? '#4F6EF7' : '#fff',
                color: activeChart === chart.key ? '#fff' : '#4F6EF7',
                border: '1px solid #4F6EF7',
                padding: '1vh 2vw',
                fontWeight: 600,
                fontSize: '1vw',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '10vw',
              }}
              onMouseEnter={(e) => {
                if (activeChart !== chart.key) {
                  e.currentTarget.style.background = '#4F6EF7';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeChart !== chart.key) {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#4F6EF7';
                }
              }}
            >
              {chart.label}
            </button>
          ))}
        </div>
      )}

      {/* 图表显示区域 */}
      {viewMode === 'single' ? (
        /* 单图模式 - 当前选中的图表 */
        <section style={{ 
          width: '95vw', 
          height: 'calc(100vh - 22vh)', // 减少顶部占用，给图表更多空间
          background: '#fff',
          border: '1px solid #e9ecef',
          padding: '2vh 2vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '1vh', 
            color: '#2c3e50',
            fontSize: '1.8vw',
            fontWeight: 700,
            flex: 'none',
          }}>
            {chartTypes.find(chart => chart.key === activeChart)?.label}
          </h2>
          <div style={{ 
            width: '100%', 
            height: 'calc(100% - 4vh)', // 为标题留出空间
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f8f9fa',
            border: '1px solid #e9ecef',
            padding: '2vh',
            boxSizing: 'border-box',
          }}>
            {renderChart()}
          </div>
        </section>
      ) : (
        /* 网格模式 - 所有图表 */
        renderAllCharts()
      )}
    </div>
  );
}