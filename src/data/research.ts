import { asset } from '../lib/asset';
import type { Research } from '../types';

export const research: Research = {
  title: 'Potholes Detection using Advanced Object Detection Techniques',
  status: 'Completed',
  tech: ['YOLOv8m', 'MobileNetV2', 'Gamma Correction', 'CLAHE', 'Deep Learning'],
  stats: [
    { value: '90.90%', label: 'Model Accuracy' },
    { value: '2', label: 'Model Ensemble' },
    { value: 'Real‑time', label: 'Detection Speed' },
  ],
  abstract:
    'Developed a real-time pothole detection system using an ensemble of YOLOv8m and MobileNetV2 models, achieving 90.90% accuracy across challenging conditions including low-light, rain, and cluttered environments. ' +
    'Integrated advanced preprocessing techniques (Gamma Correction and CLAHE for contrast enhancement), model optimization, and edge deployment for scalable smart road monitoring.',
  video: {
    src: asset('assets/Media1.mp4'),
    caption:
      'The demo shows the YOLOv8m + MobileNetV2 ensemble detecting potholes in real-time under low-light and wet-road conditions.',
  },
};
