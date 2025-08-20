import { h, hydrate } from 'npm:preact'
import { Router } from 'npm:wouter-preact'
import { App } from './App.tsx'

console.log('🔥 Stack app loaded!')

hydrate(h(Router, {}, h(App)), document.getElementById('app'))
