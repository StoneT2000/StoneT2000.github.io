import type { Metric } from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

/**
 * Lazily loads web-vitals and reports core metrics to the given handler.
 *
 * @param onPerfEntry - Optional callback invoked for each performance metric.
 * @returns void
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
