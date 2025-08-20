import { Hono } from 'hono'
import { Page } from './Page.tsx'
import { Router } from 'wouter-preact'
import { render } from 'preact-render-to-string'
import { h } from 'preact'
import { App } from './App.tsx'

const app = new Hono()
app.get('/*', (req) => {
  const html = render(h(Router, { ssrPath: req.path }, h(App)))
  return new Response(`<!DOCTYPE html>${html}`, {
    headers: { 'content-type': 'text/html' },
  })
})

Deno.serve({ port: 8080 }, app.fetch)
