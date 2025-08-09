import { mountApp } from 'gemkit/hooks';
import App from './App.ts';
import './index.css';

mountApp(document.getElementById('root') as HTMLDivElement, App);